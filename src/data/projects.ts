export interface Project {
  slug: string;
  title: { pt: string; en: string };
  kicker: { pt: string; en: string };
  summary: { pt: string; en: string };
  contribution: { pt: string; en: string };
  stack: string[];
  status?: { pt: string; en: string };
  year: string;
  links?: { label: string; url: string }[];
  private?: boolean;
}

// Produtos proprios, construidos ponta a ponta. Repositorios privados, descritos
// por tema, sem nome de repo, conforme pedido. Links ficam vazios ate o Christian
// confirmar deploys/videos.
export const projects: Project[] = [
  {
    slug: "auction-triage",
    title: {
      pt: "Triagem de leilões com visão computacional",
      en: "Auction triage with computer vision",
    },
    kicker: { pt: "App mobile · ML · scraping", en: "Mobile app · ML · scraping" },
    summary: {
      pt: "App mobile (Android/iOS) que agrega leilões automotivos de várias casas leiloeiras e prioriza oportunidades. Um scraper coleta os lotes, um pipeline de OCR + NLP extrai riscos dos editais em PDF e um microsserviço de visão computacional (CLIP, zero-shot, sem GPU) classifica danos nas fotos dos veículos. O motor de score cruza preço FIPE, risco e margem potencial. Projetado para custo operacional baixo, sem APIs pagas de IA.",
      en: "Mobile app (Android/iOS) that aggregates vehicle auctions from several auction houses and ranks opportunities. A scraper collects the lots, an OCR + NLP pipeline extracts risks from the PDF notices, and a computer-vision microservice (CLIP, zero-shot, no GPU) classifies damage in the vehicle photos. The scoring engine combines market (FIPE) price, risk and potential margin. Built for low operating cost, with no paid AI APIs.",
    },
    contribution: {
      pt: "Solo, ponta a ponta: API em Laravel, scraper com Playwright, pipelines de OCR e de visão computacional, motor de score, app em React Native e CI/CD com deploy automatizado.",
      en: "Solo, end to end: Laravel API, Playwright scraper, OCR and computer-vision pipelines, scoring engine, React Native app and CI/CD with automated deploy.",
    },
    stack: ["React Native", "Expo", "Laravel", "PostgreSQL", "Redis", "Playwright", "Tesseract OCR", "CLIP / PyTorch", "Docker", "GitHub Actions"],
    year: "2026",
  },
  {
    slug: "agent-skill-marketplace",
    title: {
      pt: "Marketplace de skills para agentes de IA",
      en: "Skill marketplace for AI agents",
    },
    kicker: { pt: "Marketplace SaaS · pagamentos", en: "SaaS marketplace · payments" },
    summary: {
      pt: "Plataforma onde desenvolvedores publicam e monetizam “skills” reutilizáveis para agentes de IA. Back-end de alta performance com Laravel + Octane, pagamentos e repasses a vendedores via Stripe Connect, e front-end em Next.js. Monorepo containerizado com deploy automatizado.",
      en: "Platform where developers publish and monetize reusable “skills” for AI agents. High-performance back-end with Laravel + Octane, payments and seller payouts via Stripe Connect, and a Next.js front-end. Containerized monorepo with automated deploy.",
    },
    contribution: {
      pt: "Full-stack + infra, solo: modelagem do marketplace, API, integração de pagamentos com split, front-end e ambiente Docker.",
      en: "Full-stack + infra, solo: marketplace modeling, API, split-payment integration, front-end and Docker environment.",
    },
    stack: ["Laravel 12", "PHP 8.4", "Octane / Swoole", "PostgreSQL", "Redis", "Stripe Connect", "Next.js 15", "React 19", "Docker"],
    year: "2026",
  },
  {
    slug: "sus-revenue-map",
    title: {
      pt: "Pipeline de dados de saúde pública",
      en: "Public-health data pipeline",
    },
    kicker: { pt: "Engenharia de dados · geoespacial", en: "Data engineering · geospatial" },
    summary: {
      pt: "Pipeline em Python que cruza dados 100% públicos do DATASUS (produção hospitalar, estrutura, habilitações e teto financeiro) para localizar e priorizar hospitais filantrópicos candidatos a recuperação de faturamento no SUS. Inclui um modelo de score composto, geolocalização dos estabelecimentos e um mapa interativo.",
      en: "Python pipeline that cross-references 100% public DATASUS data (hospital production, structure, accreditations and funding ceilings) to locate and prioritize philanthropic hospitals that are candidates for SUS revenue recovery. It includes a composite scoring model, facility geolocation and an interactive map.",
    },
    contribution: {
      pt: "Concepção e desenvolvimento solo: arquitetura do pipeline, ingestão dos dados abertos, modelo de priorização e visualização.",
      en: "Concept and solo development: pipeline architecture, open-data ingestion, prioritization model and visualization.",
    },
    stack: ["Python", "ETL", "DATASUS / SIGTAP", "Pandas", "Leaflet"],
    status: { pt: "Em desenvolvimento", en: "In progress" },
    year: "2026",
  },
  {
    slug: "ecommerce-ops",
    title: {
      pt: "Painel de operação para e-commerce",
      en: "E-commerce operations dashboard",
    },
    kicker: { pt: "Full-stack · integração Shopify", en: "Full-stack · Shopify integration" },
    summary: {
      pt: "Painel interno para gestão de um e-commerce: produtos, kits, estoque e validades, vendas, despesas, portal de parceiros e importação de planilhas. Sincronização automática com a Shopify via API e webhooks.",
      en: "Internal dashboard to run an e-commerce operation: products, kits, stock and expiry control, sales, expenses, a partner portal and spreadsheet imports. Automatic sync with Shopify via API and webhooks.",
    },
    contribution: {
      pt: "Full-stack, solo: modelagem do banco, aplicação, integração com a Shopify e portal de parceiros com autenticação.",
      en: "Full-stack, solo: database modeling, application, Shopify integration and an authenticated partner portal.",
    },
    stack: ["Next.js", "React", "TypeScript", "Supabase / PostgreSQL", "Shopify API", "Tailwind CSS"],
    year: "2026",
  },
  {
    slug: "fba-research-extension",
    title: {
      pt: "Extensão de navegador para pesquisa de produtos",
      en: "Browser extension for product research",
    },
    kicker: { pt: "Chrome MV3 · micro-SaaS", en: "Chrome MV3 · micro-SaaS" },
    summary: {
      pt: "Extensão de Chrome (Manifest V3) que injeta uma camada de análise nas páginas de produto da Amazon: coleta de dados, cálculo de rentabilidade para vendedores FBA, estimativa de vendas a partir do ranking e verificação de restrições de categoria. Modelo freemium com controle de uso e pagamento.",
      en: "Chrome extension (Manifest V3) that injects an analysis layer onto Amazon product pages: data scraping, FBA profitability calculation, sales estimates from the sales rank and category-restriction checks. Freemium model with usage limits and payments.",
    },
    contribution: {
      pt: "Solo: arquitetura da extensão, scraper, calculadora de rentabilidade e gating freemium com pagamento.",
      en: "Solo: extension architecture, scraper, profitability calculator and freemium payment gating.",
    },
    stack: ["JavaScript", "Chrome Extension MV3", "Web scraping", "ExtensionPay"],
    year: "2026",
  },
];
