import type { Lang } from "./site";

export interface ChatTurn {
  q: string;
  a: string;
}

// Looping "ask me" demo shown under the portrait. Read-only, no input.
// The bot answers as Christian, a nod to the Maria agent work.
export const chatScript: Record<Lang, ChatTurn[]> = {
  pt: [
    {
      q: "quem é você?",
      a: "Sou o Christian, 22 anos, engenheiro de software em Marília, SP.",
    },
    {
      q: "no que você trabalha?",
      a: "Hoje sou dev full stack pleno na Funcional Health Tech, com NestJS e React. Antes, na Pedbot, ajudei a construir a Maria, agente de vendas com IA que operou nos maiores players do varejo farmacêutico.",
    },
    {
      q: "qual é a sua stack?",
      a: "TypeScript e NestJS no back-end, React no front, RabbitMQ e Redis para sistemas distribuídos, e LangGraph para agentes LLM.",
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
      a: "I'm a mid-level full stack developer at Funcional Health Tech, working with NestJS and React. Before that, at Pedbot, I helped build Maria, an AI sales agent that ran at the largest players in pharmaceutical retail.",
    },
    {
      q: "what's your stack?",
      a: "TypeScript and NestJS on the back-end, React on the front, RabbitMQ and Redis for distributed systems, and LangGraph for LLM agents.",
    },
    {
      q: "what do you enjoy most?",
      a: "Optimizing production systems and designing architecture that holds up at scale.",
    },
  ],
};
