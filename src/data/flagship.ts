export interface Fact {
  k: { pt: string; en: string };
  // optional headline number shown big above the text
  n?: { pt: string; en: string };
  v: { pt: string; en: string };
}

// The flagship case: MarIA, the AI sales agent built at Pedbot.
// Pinned at the top of the feed.
export const flagship = {
  name: "MarIA",
  at: "Pedbot",
  eyebrow: { pt: "projeto em destaque", en: "featured project" },
  status: { pt: "rodou em produção", en: "ran in production" },
  tagline: {
    pt: "Agente de vendas com IA que operou nos maiores players do varejo farmacêutico.",
    en: "AI sales agent that ran at the largest players in pharmaceutical retail.",
  },
  body: {
    pt: "Projeto desenvolvido durante a minha atuação na Pedbot. Participei de ponta a ponta: da modelagem dos fluxos com LangGraph, modelos GPT, tool calling e guardrails, à construção dos microsserviços em NestJS e RabbitMQ com controles de concorrência em Redis para processamento distribuído. Prompts e lógica de fluxo eram refinados continuamente a partir da análise de conversas reais. O case foi apresentado no Abrafarma Future Trends 2025.",
    en: "Built while I was at Pedbot. I worked on it end to end: from designing the flows with LangGraph, GPT models, tool calling and guardrails, to building the NestJS and RabbitMQ microservices with Redis concurrency controls for distributed processing. Prompts and flow logic were continuously refined based on the analysis of real conversations. The case was presented at Abrafarma Future Trends 2025.",
  },
  flow: {
    pt: ["mensagem", "LangGraph", "tools · ERP", "GPT", "guardrails", "resposta"],
    en: ["message", "LangGraph", "tools · ERP", "GPT", "guardrails", "reply"],
  },
  facts: [
    {
      k: { pt: "Volume", en: "Volume" },
      n: { pt: "1.000+", en: "1,000+" },
      v: {
        pt: "conversas por dia",
        en: "conversations per day",
      },
    },
    {
      k: { pt: "Conversão", en: "Conversion" },
      n: { pt: "10%", en: "10%" },
      v: {
        pt: "de conversão em pedidos pagos",
        en: "conversion into paid orders",
      },
    },
    {
      k: { pt: "Eficiência", en: "Efficiency" },
      n: { pt: "75%", en: "75%" },
      v: {
        pt: "de ganho de eficiência no atendimento",
        en: "gain in customer service efficiency",
      },
    },
  ] as Fact[],
  stack: ["LangGraph", "GPT", "NestJS", "RabbitMQ", "Redis", "TypeScript"],
} as const;

export type Flagship = typeof flagship;
