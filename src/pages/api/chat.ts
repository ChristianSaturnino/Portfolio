import type { APIRoute } from "astro";
import { GEMINI_API_KEY, GEMINI_MODEL, ASSISTANT_DAILY_CAP, ASSISTANT_MOCK, ASSISTANT_PROFILE } from "astro:env/server";
import { askGemini } from "../../lib/assistant/gemini";
import { systemPrompt } from "../../lib/assistant/prompt";
import { FALLBACK, GuardError, checkOrigin, checkRate, checkReply, parseBody } from "../../lib/assistant/guard";
import type { Lang } from "../../data/site";

// The only server-rendered route of the site (a Vercel function).
export const prerender = false;

// private notes about Christian (see scripts/assistant-profile.mjs), decoded once
let profile: string | undefined;
function getProfile(): string {
  if (profile === undefined) {
    try {
      profile = ASSISTANT_PROFILE ? Buffer.from(ASSISTANT_PROFILE, "base64").toString("utf8").trim() : "";
    } catch {
      profile = "";
    }
  }
  return profile;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

function allowedHosts(requestHost: string): string[] {
  const hosts = ["christiansaturnino.com.br", "www.christiansaturnino.com.br"];
  // the deployment's own *.vercel.app address (previews included)
  if (process.env.VERCEL_URL) hosts.push(process.env.VERCEL_URL);
  if (process.env.VERCEL_BRANCH_URL) hosts.push(process.env.VERCEL_BRANCH_URL);
  if (import.meta.env.DEV) hosts.push(requestHost);
  return hosts;
}

export const POST: APIRoute = async ({ request, clientAddress, url }) => {
  let lang: Lang = "pt";
  try {
    checkOrigin(request.headers.get("origin"), allowedHosts(url.host));
    if (!request.headers.get("content-type")?.includes("application/json")) throw new GuardError(415, "bad_request");
    const raw = await request.text();
    if (raw.length > 40_000) throw new GuardError(413, "bad_request");

    const body = JSON.parse(raw);
    if (body?.lang === "en") lang = "en"; // so even rejections answer in the visitor's language
    const parsed = parseBody(body);
    lang = parsed.lang;
    checkRate(clientAddress || "unknown", ASSISTANT_DAILY_CAP);

    if (ASSISTANT_MOCK && import.meta.env.DEV) {
      const last = parsed.messages.at(-1)!.content;
      return json({ reply: `(${lang === "pt" ? "resposta simulada" : "mock reply"}) **ok**: "${last.slice(0, 80)}"` });
    }
    if (!GEMINI_API_KEY) return json({ error: "unavailable", reply: FALLBACK[lang].unavailable }, 503);

    const result = await askGemini({ apiKey: GEMINI_API_KEY, model: GEMINI_MODEL, system: systemPrompt(lang, getProfile()), messages: parsed.messages });
    if (!result.ok) {
      if (result.reason === "blocked") {
        console.warn("[assistant] blocked by gemini safety");
        return json({ reply: FALLBACK[lang].blocked });
      }
      if (result.reason === "quota") return json({ error: "daily_cap", reply: FALLBACK[lang].daily_cap }, 429);
      return json({ error: "unavailable", reply: FALLBACK[lang].unavailable }, 502);
    }
    const reply = checkReply(result.text);
    if (!reply) console.warn("[assistant] reply dropped by output check");
    return json({ reply: reply ?? FALLBACK[lang].blocked });
  } catch (e) {
    if (e instanceof GuardError) return json({ error: e.code, reply: FALLBACK[lang][e.code] }, e.status);
    if (e instanceof SyntaxError) return json({ error: "bad_request", reply: FALLBACK[lang].bad_request }, 400);
    console.error("[assistant] unexpected error");
    return json({ error: "unavailable", reply: FALLBACK[lang].unavailable }, 500);
  }
};

export const ALL: APIRoute = () => json({ error: "method_not_allowed" }, 405);
