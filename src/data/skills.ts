export interface SkillGroup {
  label: { pt: string; en: string };
  items: { pt: string; en: string }[] | string[];
}

// neutral tech terms are plain strings; the ones that differ per language use {pt,en}
export const skillGroups: SkillGroup[] = [
  {
    label: { pt: "Linguagens", en: "Languages" },
    items: ["TypeScript", "Python", "PHP", "C#"],
  },
  {
    label: { pt: "Back-end", en: "Back-end" },
    items: ["Node.js", "NestJS", "Express", "Laravel", "REST", "GraphQL"],
  },
  {
    label: { pt: "Front-end", en: "Front-end" },
    items: ["React", "Vue.js"],
  },
  {
    label: { pt: "IA", en: "AI" },
    items: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      { pt: "Agentes LLM", en: "LLM Agents" },
      { pt: "Engenharia de Prompts", en: "Prompt Engineering" },
      "Tool Calling",
    ],
  },
  {
    label: { pt: "Dados & Mensageria", en: "Data & Messaging" },
    items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ"],
  },
  {
    label: { pt: "Infra & Arquitetura", en: "Infra & Architecture" },
    items: [
      "Docker",
      "GCP",
      "CI/CD",
      "Git",
      "SOLID",
      { pt: "Microsserviços", en: "Microservices" },
      { pt: "Arquitetura Distribuída", en: "Distributed Architecture" },
    ],
  },
];
