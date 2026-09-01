export type Lang = "pt" | "en";

export const site = {
  name: "Christian Saturnino",
  fullName: "Christian Saturnino Andrade Oliveira",
  role: {
    pt: "Engenheiro de Software",
    en: "Software Engineer",
  },
  location: {
    pt: "Marília, SP · Brasil",
    en: "Marília, Brazil",
  },
  // TODO(christian): confirmar e-mail publico (usando o do curriculo por enquanto)
  email: "christian.saturnino95@hotmail.com",
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
    pt: "Engenheiro de software focado em back-end de alta performance, arquitetura distribuída e integração de agentes de IA. Hoje trabalho no maior agente de vendas com IA do varejo farmacêutico do Brasil. Também construo produtos completos de ponta a ponta, do pipeline de dados ao app publicado.",
    en: "Software engineer focused on high-performance back-ends, distributed architecture and AI agent integration. I currently work on the largest AI sales agent in Brazilian pharma retail. I also build complete products end to end, from the data pipeline to the published app.",
  },
} as const;
