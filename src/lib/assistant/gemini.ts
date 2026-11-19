import type { ChatMessage } from "./guard";

// Minimal client for Gemini's REST API (generateContent). No SDK, no streaming:
// the whole reply is checked by guard.checkReply before it reaches the visitor.

export type GeminiResult =
  | { ok: true; text: string }
  | { ok: false; reason: "blocked" | "quota" | "error" };

export async function askGemini(opts: {
  apiKey: string;
  model: string;
  system: string;
  messages: ChatMessage[];
  timeoutMs?: number;
}): Promise<GeminiResult> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(opts.model)}:generateContent`;
  const body = {
    systemInstruction: { parts: [{ text: opts.system }] },
    contents: opts.messages.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })),
    // thinking tokens count against maxOutputTokens: keep thinking minimal and leave headroom
    generationConfig: { temperature: 0.3, maxOutputTokens: 1500, thinkingConfig: { thinkingLevel: "minimal" } },
    safetySettings: ["HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_SEXUALLY_EXPLICIT", "HARM_CATEGORY_DANGEROUS_CONTENT"].map(
      (category) => ({ category, threshold: "BLOCK_ONLY_HIGH" }),
    ),
  };

  // the free tier answers 500/503 now and then when it's overloaded: retry with a short backoff
  const deadline = Date.now() + (opts.timeoutMs ?? 25_000);
  let res: Response | null = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await new Promise((r) => setTimeout(r, 600 * attempt));
    const left = deadline - Date.now();
    if (left < 2_000) break;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": opts.apiKey },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(left),
      });
    } catch {
      res = null;
      continue;
    }
    if (res.status !== 500 && res.status !== 503) break;
    console.warn(`[assistant] gemini http ${res.status}, attempt ${attempt + 1}`);
  }
  if (!res) return { ok: false, reason: "error" };

  if (res.status === 429) return { ok: false, reason: "quota" };
  if (!res.ok) {
    // status only: the error body can echo the prompt, so it is never logged
    console.error(`[assistant] gemini http ${res.status}`);
    return { ok: false, reason: "error" };
  }

  const data = (await res.json().catch(() => null)) as {
    promptFeedback?: { blockReason?: string };
    candidates?: { finishReason?: string; content?: { parts?: { text?: string; thought?: boolean }[] } }[];
  } | null;
  if (!data) return { ok: false, reason: "error" };
  if (data.promptFeedback?.blockReason) {
    console.warn(`[assistant] prompt blocked: ${data.promptFeedback.blockReason}`);
    return { ok: false, reason: "blocked" };
  }

  const c = data.candidates?.[0];
  if (!c || c.finishReason === "SAFETY" || c.finishReason === "PROHIBITED_CONTENT" || c.finishReason === "BLOCKLIST") {
    console.warn(`[assistant] reply blocked: ${c?.finishReason ?? "no candidate"}`);
    return { ok: false, reason: "blocked" };
  }
  // metadata only, never the text
  if (c.finishReason !== "STOP") console.warn(`[assistant] finish=${c.finishReason} usage=${JSON.stringify((data as { usageMetadata?: unknown }).usageMetadata)}`);
  const text = (c.content?.parts ?? []).filter((p) => !p.thought).map((p) => p.text ?? "").join("").trim();
  return text ? { ok: true, text } : { ok: false, reason: "error" };
}
