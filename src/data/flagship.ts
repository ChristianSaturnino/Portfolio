export interface Fact {
  k: { pt: string; en: string };
  v: { pt: string; en: string };
}

// The flagship case: MarIA, the AI sales agent built at Pedbot.
// Gets its own section right after the hero.
export const flagship = {
  name: "MarIA",
  // trailing slice rendered in the accent color ("Mar" + "IA")
  nameAccent: "IA",
  at: "Pedbot",
  eyebrow: { pt: "case principal", en: "flagship case" },
  status: { pt: "em produção", en: "in production" },
  tagline: {
    pt: "O maior agente de vendas com IA do varejo farmacêutico do Brasil.",
    en: "The largest AI sales agent in Brazil's pharmaceutical retail.",
  },
  body: {
    pt: "Agente de automação de vendas usado ativamente por algumas das maiores redes de farmácia do país. Participei da jornada inteira: arquitetura do agente, orquestração de fluxos com LangGraph, definição das tools internas e integração com modelos GPT. O back-end em NestJS sustenta o agente em larga escala, com mensageria via RabbitMQ. A evolução é contínua: analiso conversas reais, encontro pontos de fricção, ajusto prompts e refino o fluxo conversacional.",
    en: "A sales-automation agent actively used by some of the largest pharmacy chains in the country. I took part in the entire journey: agent architecture, flow orchestration with LangGraph, internal tool definitions and GPT model integration. The NestJS back-end runs the agent at scale, with RabbitMQ messaging. Evolution is continuous: I analyze real conversations, find friction points, tune prompts and refine the conversational flow.",
  },
  flow: {
    pt: ["mensagem", "LangGraph", "tools", "GPT", "resposta"],
    en: ["message", "LangGraph", "tools", "GPT", "reply"],
  },
  facts: [
    {
      k: { pt: "Escala", en: "Scale" },
      v: {
        pt: "Grandes redes de farmácia, rodando em produção",
        en: "Major pharmacy chains, running in production",
      },
    },
    {
      k: { pt: "Meu papel", en: "My role" },
      v: {
        pt: "Arquitetura do agente, back-end e evolução contínua",
        en: "Agent architecture, back-end and continuous evolution",
      },
    },
    {
      k: { pt: "Resultado", en: "Outcome" },
      v: {
        pt: "Menos atendimento humano, mais conversão em vendas",
        en: "Less human support, higher sales conversion",
      },
    },
  ] as Fact[],
  stack: ["LangGraph", "NestJS", "GPT", "RabbitMQ", "TypeScript"],
} as const;

export type Flagship = typeof flagship;
