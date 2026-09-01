export interface Job {
  company: string;
  url?: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  start: string; // ISO-ish, for ordering
  bullets: { pt: string[]; en: string[] };
}

export const experience: Job[] = [
  {
    company: "Pedbot",
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Mid-Level Full Stack Developer" },
    period: { pt: "Dez 2025 → hoje", en: "Dec 2025 → now" },
    start: "2025-12",
    bullets: {
      pt: [
        "Arquitetura, back-end e evolução contínua do MarIA, nosso agente de vendas com IA.",
        "Desenvolvimento e manutenção de microsserviços em Node.js / NestJS usados diariamente por grandes redes do varejo farmacêutico.",
        "Otimização de APIs críticas em produção: análise de logs, profiling de queries e redução de latência.",
        "Code reviews, discussões de arquitetura e colaboração direta com o time de produto.",
      ],
      en: [
        "Architecture, back-end and continuous evolution of MarIA, our AI sales agent.",
        "Development and maintenance of Node.js / NestJS microservices used daily by major pharmaceutical retail chains.",
        "Optimization of critical production APIs: log analysis, query profiling and latency reduction.",
        "Code reviews, architecture discussions and direct collaboration with the product team.",
      ],
    },
  },
  {
    company: "Pedbot",
    role: { pt: "Desenvolvedor Full Stack Júnior", en: "Junior Full Stack Developer" },
    period: { pt: "Ago 2024 → Dez 2025", en: "Aug 2024 → Dec 2025" },
    start: "2024-08",
    bullets: {
      pt: [
        "APIs RESTful com NestJS e Laravel para sistemas internos de alto volume.",
        "Criação de módulos e integrações entre serviços em ambiente de produção ativo.",
      ],
      en: [
        "RESTful APIs with NestJS and Laravel for high-volume internal systems.",
        "Building modules and service-to-service integrations in an active production environment.",
      ],
    },
  },
  {
    company: "Pedbot",
    role: { pt: "Estagiário de Desenvolvimento", en: "Software Development Intern" },
    period: { pt: "Fev 2024 → Ago 2024", en: "Feb 2024 → Aug 2024" },
    start: "2024-02",
    bullets: {
      pt: [
        "Implementação de funcionalidades em Express.js e React.js.",
        "Correção de bugs, integração de APIs externas e participação em cerimônias ágeis.",
      ],
      en: [
        "Feature implementation with Express.js and React.js.",
        "Bug fixing, external API integrations and participation in agile ceremonies.",
      ],
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
      en: "Technologist in Systems Analysis and Development",
    },
    issuer: "Universidade de Marília (Unimar)",
    year: "2025",
  },
];

export const certifications: Credential[] = [
  { title: "Building Ambient Agents with LangGraph", issuer: "LangChain Academy", year: "2025" },
  { title: "Perform Foundational Data, ML and AI Tasks", issuer: "Google Cloud", year: "2023" },
  { title: "Create and Manage Cloud Resources", issuer: "Google Cloud", year: "2023" },
  { title: "Foundational Infrastructure Tasks", issuer: "Google Cloud", year: "2023" },
  { title: "Build and Secure Networks in Google Cloud", issuer: "Google Cloud", year: "2023" },
];

export const languages: { label: { pt: string; en: string }; level: { pt: string; en: string } }[] = [
  { label: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { label: { pt: "Inglês", en: "English" }, level: { pt: "Intermediário", en: "Intermediate" } },
  { label: { pt: "Espanhol", en: "Spanish" }, level: { pt: "Intermediário", en: "Intermediate" } },
];
