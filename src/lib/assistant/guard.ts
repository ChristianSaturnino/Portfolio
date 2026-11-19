import type { Lang } from "../../data/site";
import { CANARY } from "./prompt";

// Guardrails around the model: what goes in, how often, and what comes out.

export const LIMITS = {
  messageChars: 500, // latest visitor message
  historyChars: 1500, // each earlier message kept as context
  historyTurns: 10, // earlier messages kept
  replyChars: 1500,
  perMinute: 6, // per visitor IP
  perDay: 40, // per visitor IP
};

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export class GuardError extends Error {
  constructor(
    public status: number,
    public code: "bad_request" | "too_long" | "rate_limited" | "daily_cap" | "forbidden",
  ) {
    super(code);
  }
}

/** Validates the request body and returns a trimmed, bounded conversation. */
export function parseBody(body: unknown): { lang: Lang; messages: ChatMessage[] } {
  if (!body || typeof body !== "object") throw new GuardError(400, "bad_request");
  const { lang, messages } = body as { lang?: unknown; messages?: unknown };
  if (lang !== "pt" && lang !== "en") throw new GuardError(400, "bad_request");
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 60) throw new GuardError(400, "bad_request");

  const clean: ChatMessage[] = [];
  for (const m of messages) {
    if (!m || typeof m !== "object") throw new GuardError(400, "bad_request");
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") throw new GuardError(400, "bad_request");
    const text = content.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
    if (text) clean.push({ role, content: text });
  }

  const last = clean.at(-1);
  if (!last || last.role !== "user") throw new GuardError(400, "bad_request");
  if (last.content.length > LIMITS.messageChars) throw new GuardError(413, "too_long");

  // keep a short, alternating history that starts with the visitor
  const history = clean.slice(0, -1).slice(-LIMITS.historyTurns).map((m) => ({ ...m, content: m.content.slice(0, LIMITS.historyChars) }));
  while (history[0]?.role === "assistant") history.shift();
  return { lang, messages: [...history, last].map((m) => (m.role === "user" ? { ...m, content: maskPersonalData(m.content) } : m)) };
}

/** Replaces e-mails, phone numbers and CPFs before the text leaves the server. */
export function maskPersonalData(text: string): string {
  return text
    .replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g, "[e-mail]")
    .replace(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, "[cpf]")
    .replace(/(\+?\d{1,3}[\s.-]?)?\(?\d{2}\)?[\s.-]?9?\d{4}[\s.-]?\d{4}\b/g, "[telefone]");
}

// Best-effort, per server instance. Vercel may run several instances, so this
// slows abuse down; Gemini's own free quota is the hard ceiling behind it.
const hits = new Map<string, number[]>();
let day = "";
let repliesToday = 0;

export function checkRate(ip: string, dailyCap: number, now = Date.now()): void {
  const today = new Date(now).toISOString().slice(0, 10);
  if (today !== day) {
    day = today;
    repliesToday = 0;
    hits.clear();
  }
  if (repliesToday >= dailyCap) throw new GuardError(429, "daily_cap");

  const list = (hits.get(ip) ?? []).filter((t) => now - t < 86_400_000);
  if (list.length >= LIMITS.perDay || list.filter((t) => now - t < 60_000).length >= LIMITS.perMinute) {
    throw new GuardError(429, "rate_limited");
  }
  list.push(now);
  hits.set(ip, list);
  repliesToday++;
  if (hits.size > 5000) hits.delete(hits.keys().next().value!);
}

/** Only accept calls made by this site's own pages. */
export function checkOrigin(origin: string | null, allowedHosts: string[]): void {
  if (!origin) throw new GuardError(403, "forbidden");
  let host: string;
  try {
    host = new URL(origin).host;
  } catch {
    throw new GuardError(403, "forbidden");
  }
  if (!allowedHosts.includes(host)) throw new GuardError(403, "forbidden");
}

const LEAK = [CANARY, "BASE DE CONHECIMENTO", "FIM DA BASE", "REGRAS (valem"];

/** Final check on the model's reply. Returns null when it must not be shown. */
export function checkReply(text: string): string | null {
  const reply = text.trim();
  if (!reply) return null;
  if (LEAK.some((m) => reply.includes(m))) return null;
  return reply.length > LIMITS.replyChars ? reply.slice(0, LIMITS.replyChars).replace(/\s+\S*$/, "") + "…" : reply;
}

export const FALLBACK: Record<Lang, Record<GuardError["code"] | "unavailable" | "blocked", string>> = {
  pt: {
    bad_request: "Não consegui entender essa mensagem. Pode tentar de novo?",
    too_long: `Sua mensagem passou de ${LIMITS.messageChars} caracteres. Pode resumir?`,
    rate_limited: "Muitas mensagens em pouco tempo. Espera um minutinho e tenta de novo.",
    daily_cap: "O assistente atingiu o limite de conversas de hoje. Você pode falar direto com o Christian pelo e-mail ou WhatsApp.",
    forbidden: "Essa chamada não é permitida.",
    unavailable: "O assistente está fora do ar agora. Você pode falar direto com o Christian pelo e-mail ou WhatsApp.",
    blocked: "Não posso ajudar com isso. Posso responder perguntas sobre a carreira, os projetos e as habilidades do Christian.",
  },
  en: {
    bad_request: "I couldn't read that message. Could you try again?",
    too_long: `Your message is over ${LIMITS.messageChars} characters. Could you shorten it?`,
    rate_limited: "Too many messages in a short time. Wait a minute and try again.",
    daily_cap: "The assistant hit today's conversation limit. You can reach Christian directly by email or WhatsApp.",
    forbidden: "This call is not allowed.",
    unavailable: "The assistant is offline right now. You can reach Christian directly by email or WhatsApp.",
    blocked: "I can't help with that. I can answer questions about Christian's career, projects and skills.",
  },
};
