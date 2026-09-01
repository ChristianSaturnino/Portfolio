export interface SkillGroup {
  label: { pt: string; en: string };
  items: { pt: string; en: string }[] | string[];
}

// neutral tech terms are plain strings; the two that differ per language use {pt,en}
export const skillGroups: SkillGroup[] = [
  {
    label: { pt: "Back-end & APIs", en: "Back-end & APIs" },
    items: ["Node.js", "NestJS", "Express", "TypeScript", "PHP / Laravel", "Python", "REST", "GraphQL"],
  },
  {
    label: { pt: "IA & Agentes LLM", en: "AI & LLM Agents" },
    items: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      { pt: "Agentes LLM", en: "LLM Agents" },
      { pt: "Engenharia de Prompt", en: "Prompt Engineering" },
    ],
  },
  {
    label: { pt: "Dados & Mensageria", en: "Data & Messaging" },
    items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ"],
  },
  {
    label: { pt: "Infra & DevOps", en: "Infra & DevOps" },
    items: ["Docker", "Google Cloud", "CI/CD", "Git"],
  },
  {
    label: { pt: "Arquitetura", en: "Architecture" },
    items: [
      { pt: "Microsserviços", en: "Microservices" },
      { pt: "Arquitetura Distribuída", en: "Distributed Architecture" },
      "SOLID",
    ],
  },
];
