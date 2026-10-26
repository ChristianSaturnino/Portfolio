export type Lang = "pt" | "en";

export const site = {
  name: "Christian Saturnino",
  fullName: "Christian Saturnino Andrade Oliveira",
  role: {
    pt: "Engenheiro de Software · Backend & Agentes de IA",
    en: "Software Engineer · Backend & AI Agents",
  },
  location: {
    pt: "Marília, SP · Brasil",
    en: "Marília, Brazil",
  },
  email: "christian.saturnino95@hotmail.com",
  phone: {
    display: "+55 14 99110-2017",
    e164: "+5514991102017",
  },
  portfolio: "christiansaturnino.com.br",
  timeZone: "America/Sao_Paulo",
  socials: {
    github: "https://github.com/ChristianSaturnino",
    linkedin: "https://linkedin.com/in/christian-saturnino",
  },
  cv: {
    pt: "/cv/CV_Christian_Saturnino_PT.pdf",
    en: "/cv/CV_Christian_Saturnino_EN.pdf",
  },
  tagline: {
    pt: "Construo microsserviços e agentes LLM que rodam em produção.",
    en: "I build microservices and LLM agents that run in production.",
  },
  intro: {
    pt: "Engenheiro de software com quase 3 anos em back-end distribuído e agentes de IA em produção. Um dos principais desenvolvedores da MarIA, agente de vendas com LLM com 1.000+ conversas por dia e 10% de conversão em pedidos pagos. Trabalho com TypeScript, Node.js/NestJS, LangGraph, RabbitMQ, Redis e PostgreSQL.",
    en: "Software engineer with nearly 3 years building distributed back-end systems and AI agents in production. One of the lead developers of MarIA, an LLM-powered sales agent handling 1,000+ conversations a day with a 10% paid-order conversion rate. I work with TypeScript, Node.js/NestJS, LangGraph, RabbitMQ, Redis and PostgreSQL.",
  },
} as const;
