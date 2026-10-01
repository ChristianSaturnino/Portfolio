export type Lang = "pt" | "en";

export const site = {
  name: "Christian Saturnino",
  fullName: "Christian Saturnino Andrade Oliveira",
  role: {
    pt: "Engenheiro de Software · Backend & IA",
    en: "Software Engineer · Backend & AI",
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
    pt: "Engenheiro de software com experiência em back-end, sistemas distribuídos e agentes de IA em produção, com progressão de estagiário a desenvolvedor pleno. Trabalho com TypeScript, Node.js/NestJS, React, PostgreSQL, Redis e RabbitMQ, e construo agentes com LangGraph, modelos GPT, tool calling e engenharia de prompts.",
    en: "Software engineer with experience in back-end development, distributed systems and AI agents in production, progressing from intern to mid-level developer. I work with TypeScript, Node.js/NestJS, React, PostgreSQL, Redis and RabbitMQ, and build agents with LangGraph, GPT models, tool calling and prompt engineering.",
  },
} as const;
