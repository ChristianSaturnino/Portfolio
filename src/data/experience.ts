export interface Job {
  company: string;
  url?: string;
  role: { pt: string; en: string };
  // first line of this job's post in the feed
  headline: { pt: string; en: string };
  period: { pt: string; en: string };
  start: string; // ISO-ish, for ordering
  bullets: { pt: string[]; en: string[] };
}

export const experience: Job[] = [
  {
    company: "Funcional Health Tech",
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Mid-Level Full Stack Developer" },
    headline: {
      pt: "Novo capítulo: Desenvolvedor Full Stack Pleno na Funcional Health Tech.",
      en: "New chapter: Mid-Level Full Stack Developer at Funcional Health Tech.",
    },
    period: { pt: "Out 2026 → hoje", en: "Oct 2026 → now" },
    start: "2026-10",
    bullets: {
      pt: [
        "Desenvolvimento full stack de uma aplicação web, com back-end em NestJS/TypeScript e front-end em React.",
        "Novas funcionalidades de ponta a ponta, integrando as diferentes camadas do sistema.",
      ],
      en: [
        "Full stack development of a web application, with a NestJS/TypeScript back-end and a React front-end.",
        "New features delivered end to end, integrating the different layers of the system.",
      ],
    },
  },
  {
    company: "Pedbot",
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Mid-Level Full Stack Developer" },
    headline: {
      pt: "Promovido a Desenvolvedor Full Stack Pleno na Pedbot.",
      en: "Promoted to Mid-Level Full Stack Developer at Pedbot.",
    },
    period: { pt: "Dez 2025 → Set 2026", en: "Dec 2025 → Sep 2026" },
    start: "2025-12",
    bullets: {
      pt: [
        "Um dos principais desenvolvedores da Maria, agente de vendas com IA que operou nos maiores players do varejo farmacêutico, trabalhando diariamente com LLMs em produção.",
        "Modelei e evoluí os fluxos conversacionais com LangGraph e modelos GPT, com tool calling para integrar com os ERPs dos clientes e guardrails para manter as respostas seguras e alinhadas ao negócio.",
        "Refinei prompts e lógica de fluxo continuamente a partir da análise de conversas reais.",
        "Decisões de arquitetura, code reviews e otimização de APIs críticas.",
      ],
      en: [
        "One of the lead developers of Maria, an AI sales agent deployed at the largest players in pharmaceutical retail, working daily with LLMs in production.",
        "Designed and evolved conversational flows with LangGraph and GPT models, with tool calling to integrate with clients' ERPs and guardrails to keep responses safe and aligned with business rules.",
        "Continuously refined prompts and flow logic based on the analysis of real conversations.",
        "Architecture decisions, code reviews and optimization of critical APIs.",
      ],
    },
  },
  {
    company: "Pedbot",
    role: { pt: "Desenvolvedor Full Stack Júnior", en: "Junior Full Stack Developer" },
    headline: {
      pt: "Virei Desenvolvedor Full Stack Júnior na Pedbot.",
      en: "Became a Junior Full Stack Developer at Pedbot.",
    },
    period: { pt: "Ago 2024 → Dez 2025", en: "Aug 2024 → Dec 2025" },
    start: "2024-08",
    bullets: {
      pt: [
        "Construí a infraestrutura da Maria com microsserviços em NestJS, RabbitMQ e controles de concorrência com Redis para processamento distribuído em alto volume.",
        "APIs RESTful e integrações com sistemas de clientes.",
      ],
      en: [
        "Built Maria's infrastructure with NestJS microservices, RabbitMQ and Redis-based concurrency controls for high-volume distributed processing.",
        "RESTful APIs and integrations with client systems.",
      ],
    },
  },
  {
    company: "Pedbot",
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
    role: { pt: "Jovem Aprendiz · Monitoramento", en: "Apprentice · Monitoring" },
    headline: {
      pt: "Comecei como Jovem Aprendiz de Monitoramento na Brunnschweiler Latina.",
      en: "Started as a Monitoring Apprentice at Brunnschweiler Latina.",
    },
    period: { pt: "Fev 2022 → Dez 2023", en: "Feb 2022 → Dec 2023" },
    start: "2022-02",
    bullets: {
      pt: ["Apoio à gestão de projetos e acompanhamento de indicadores operacionais."],
      en: ["Supported project management and the tracking of operational KPIs."],
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
