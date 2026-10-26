export interface Job {
  company: string;
  // file in public/img/companies; falls back to the first letter when missing
  logo?: { src: string; width: number; height: number };
  url?: string;
  role: { pt: string; en: string };
  // first line of this job's post in the feed
  headline: { pt: string; en: string };
  period: { pt: string; en: string };
  start: string; // ISO-ish, for ordering
  bullets: { pt: string[]; en: string[] };
}

const logos = {
  funcional: { src: "/img/companies/funcional.webp", width: 160, height: 160 },
  pedbot: { src: "/img/companies/pedbot.webp", width: 354, height: 188 },
  brunnschweiler: { src: "/img/companies/brunnschweiler.webp", width: 436, height: 136 },
};

export const experience: Job[] = [
  {
    company: "Funcional Health Tech",
    logo: logos.funcional,
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Mid-Level Full Stack Developer" },
    headline: {
      pt: "Novo capítulo: Desenvolvedor Full Stack Pleno na Funcional Health Tech.",
      en: "New chapter: Mid-Level Full Stack Developer at Funcional Health Tech.",
    },
    period: { pt: "Out 2026 → hoje", en: "Oct 2026 → now" },
    start: "2026-10",
    bullets: {
      pt: [
        "Desenvolvo funcionalidades de ponta a ponta em uma aplicação web de saúde, com NestJS/TypeScript e React.",
      ],
      en: [
        "Build end-to-end features for a healthcare web application with NestJS/TypeScript and React.",
      ],
    },
  },
  {
    company: "Pedbot",
    logo: logos.pedbot,
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Mid-Level Full Stack Developer" },
    headline: {
      pt: "Promovido a Desenvolvedor Full Stack Pleno na Pedbot.",
      en: "Promoted to Mid-Level Full Stack Developer at Pedbot.",
    },
    period: { pt: "Dez 2025 → Set 2026", en: "Dec 2025 → Sep 2026" },
    start: "2025-12",
    bullets: {
      pt: [
        "Um dos principais desenvolvedores da MarIA, agente de vendas com IA nos maiores players do varejo farmacêutico: 1.000+ conversas por dia, 10% de conversão em pedidos pagos e 75% de ganho de eficiência no atendimento.",
        "Case apresentado no Abrafarma Future Trends 2025.",
        "Modelei os fluxos com LangGraph e GPT, com tool calling integrado aos ERPs dos clientes e guardrails alinhados às regras de negócio; contribuí com RAG e observabilidade.",
        "Refinei prompts a partir de conversas reais, participei de decisões de arquitetura, conduzi code reviews e otimizei APIs críticas com profiling de queries.",
      ],
      en: [
        "One of the lead developers of MarIA, an AI sales agent deployed at Brazil's largest pharmacy chains: 1,000+ conversations a day, 10% paid-order conversion and a 75% gain in customer service efficiency.",
        "Case presented at Abrafarma Future Trends 2025, the national pharmacy chain association's annual conference.",
        "Designed conversational flows with LangGraph and GPT models, with tool calling integrated into clients' ERPs and guardrails aligned with business rules; contributed to RAG and observability.",
        "Refined prompts based on real production conversations, contributed to architecture decisions, ran code reviews and optimized critical APIs through query profiling.",
      ],
    },
  },
  {
    company: "Pedbot",
    logo: logos.pedbot,
    role: { pt: "Desenvolvedor Full Stack Júnior", en: "Junior Full Stack Developer" },
    headline: {
      pt: "Virei Desenvolvedor Full Stack Júnior na Pedbot.",
      en: "Became a Junior Full Stack Developer at Pedbot.",
    },
    period: { pt: "Ago 2024 → Dez 2025", en: "Aug 2024 → Dec 2025" },
    start: "2024-08",
    bullets: {
      pt: [
        "Construí a infraestrutura da MarIA com microsserviços em NestJS, mensageria com RabbitMQ e controles de concorrência com Redis para processamento distribuído em alto volume.",
        "Desenvolvi APIs RESTful (NestJS e Laravel) e integrações com sistemas de clientes.",
      ],
      en: [
        "Built MarIA's infrastructure with NestJS microservices, RabbitMQ messaging and Redis-based concurrency controls for high-volume distributed processing.",
        "Developed RESTful APIs (NestJS and Laravel) and integrations with client systems.",
      ],
    },
  },
  {
    company: "Pedbot",
    logo: logos.pedbot,
    role: { pt: "Estagiário de Desenvolvimento", en: "Software Development Intern" },
    headline: {
      pt: "Primeiro dia como estagiário de desenvolvimento na Pedbot.",
      en: "First day as a software development intern at Pedbot.",
    },
    period: { pt: "Fev 2024 → Ago 2024", en: "Feb 2024 → Aug 2024" },
    start: "2024-02",
    bullets: {
      pt: [
        "Funcionalidades com Express.js e React.js.",
        "Correção de bugs e integrações com APIs externas.",
      ],
      en: [
        "Features built with Express.js and React.js.",
        "Bug fixes and integrations with external APIs.",
      ],
    },
  },
  {
    company: "Brunnschweiler Latina",
    logo: logos.brunnschweiler,
    role: { pt: "Aprendiz em Monitoramento", en: "Monitoring Apprentice" },
    headline: {
      pt: "Comecei como Jovem Aprendiz de Monitoramento na Brunnschweiler Latina.",
      en: "Started as a Monitoring Apprentice at Brunnschweiler Latina.",
    },
    period: { pt: "Fev 2022 → Dez 2023", en: "Feb 2022 → Dec 2023" },
    start: "2022-02",
    bullets: {
      pt: ["Apoio à gestão de projetos e acompanhamento de indicadores operacionais."],
      en: ["Supported project management and tracked operational KPIs."],
    },
  },
];

export interface Credential {
  title: string | { pt: string; en: string };
  issuer: string;
  year: string;
}

export const education: Credential[] = [
  {
    title: {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Systems Analysis and Development",
    },
    issuer: "Unimar · Universidade de Marília",
    year: "2025",
  },
];

export const certifications: Credential[] = [
  { title: "Building Ambient Agents with LangGraph", issuer: "LangChain Academy", year: "2025" },
  { title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud", issuer: "Google Cloud Skills Boost", year: "2023" },
  { title: "Create and Manage Cloud Resources", issuer: "Google Cloud Skills Boost", year: "2023" },
  { title: "Perform Foundational Infrastructure Tasks", issuer: "Google Cloud Skills Boost", year: "2023" },
  { title: "Build and Secure Networks in Google Cloud", issuer: "Google Cloud Skills Boost", year: "2023" },
];

export const languages: { label: { pt: string; en: string }; level: { pt: string; en: string } }[] = [
  { label: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { label: { pt: "Inglês", en: "English" }, level: { pt: "Intermediário", en: "Intermediate" } },
];
