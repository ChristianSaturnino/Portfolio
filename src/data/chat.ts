import type { Lang } from "./site";

export interface ChatTurn {
  q: string;
  a: string;
}

// Looping "ask me" demo shown under the portrait. Read-only, no input.
// The bot answers as Christian, a nod to the MarIA agent work.
export const chatScript: Record<Lang, ChatTurn[]> = {
  pt: [
    {
      q: "quem é você?",
      a: "Sou o Christian, 22 anos, engenheiro de software em Marília, SP.",
    },
    {
      q: "no que você trabalha?",
      a: "Na Pedbot eu construo o MarIA, o maior agente de vendas com IA do varejo farmacêutico do Brasil.",
    },
    {
      q: "qual é a sua stack?",
      a: "Back-end de alta performance, sistemas distribuídos e agentes LLM com NestJS e LangGraph.",
    },
    {
      q: "o que você mais curte fazer?",
      a: "Otimizar sistema em produção e desenhar arquitetura que aguenta escala.",
    },
  ],
  en: [
    {
      q: "who are you?",
      a: "I'm Christian, 22, a software engineer based in Marília, Brazil.",
    },
    {
      q: "what do you work on?",
      a: "At Pedbot I build MarIA, the largest AI sales agent in Brazilian pharma retail.",
    },
    {
      q: "what's your stack?",
      a: "High-performance back-ends, distributed systems and LLM agents with NestJS and LangGraph.",
    },
    {
      q: "what do you enjoy most?",
      a: "Optimizing production systems and designing architecture that holds up at scale.",
    },
  ],
};
