import type { Lang } from "../data/site";

export const languages: Lang[] = ["pt", "en"];
export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "nav.feed": "Feed",
    "nav.stack": "Stack",
    "nav.contact": "Contato",
    "nav.resume": "Currículo",
    "cta.message": "Mandar mensagem",
    "profile.posts": "posts",
    "profile.since": "Na timeline desde",
    "profile.roles": "cargos",
    "profile.products": "produtos construídos",
    "profile.certs": "formação e certificações",
    "tabs.label": "Filtrar o feed",
    "tabs.all": "Tudo",
    "tabs.career": "Carreira",
    "tabs.projects": "Projetos",
    "tabs.study": "Estudos",
    "post.pinned": "Fixado",
    "post.thread": "fio",
    "post.copy": "Copiar link",
    "post.copied": "Link copiado",
    "post.role": "Meu papel",
    "post.private": "Código privado, descrito por tema",
    "post.inProgress": "Em desenvolvimento",
    "post.project": "Novo produto",
    "post.projectWip": "Construindo agora",
    "post.degree": "Formado",
    "post.cert": "Certificação concluída",
    "post.certs": "certificações concluídas",
    "thread.intro": "As perguntas que mais me fazem, respondidas de uma vez.",
    "thread.visitor": "visitante",
    "feed.end": "Você chegou ao começo da timeline.",
    "rail.stack": "Minha stack",
    "rail.languages": "Idiomas",
    "rail.contact": "Fale comigo",
    "rail.contactBody": "Aberto a conversas sobre back-end, sistemas distribuídos e produtos com IA. Respondo rápido.",
    "stack.title": "Stack",
    "stack.lead": "As ferramentas com que eu construo, organizadas por área. Cada uma aponta para os posts do feed em que ela aparece.",
    "stack.tech": "tecnologias",
    "stack.areas": "áreas",
    "stack.core": "No dia a dia",
    "stack.coreNote": "O que eu mais uso no trabalho hoje.",
    "stack.byArea": "Por área",
    "stack.usedIn": "Aparece em",
    "stack.posts": "posts",
    "stack.back": "Voltar ao feed",
    "stack.seeAll": "Ver a stack completa",
    "contact.title": "Contato",
    "contact.hello": "Bora conversar?",
    "contact.lead": "Aberto a conversas sobre back-end, sistemas distribuídos e produtos com IA. Escolha o canal que preferir, eu respondo rápido.",
    "contact.localTime": "Agora em Marília",
    "contact.tz": "Horário de Brasília",
    "contact.channels": "Canais",
    "contact.email": "E-mail",
    "contact.emailNote": "O jeito mais rápido de falar comigo",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Telefone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfólio",
    "contact.copy": "Copiar",
    "contact.copied": "Copiado",
    "contact.open": "Abrir",
    "contact.saveContact": "Salvar contato",
    "contact.saveNote": "Baixa um cartão de visita (.vcf) com tudo isso direto pra sua agenda.",
    "contact.resumes": "Currículos",
    "contact.compose": "Escreva sua mensagem",
    "contact.composeNote": "Preencha aqui e o seu app de e-mail abre com tudo pronto. Nada é enviado por este site.",
    "contact.name": "Seu nome",
    "contact.namePh": "Ana Souza",
    "contact.message": "Mensagem",
    "contact.messagePh": "Oi Christian, vi seu portfólio e queria conversar sobre uma vaga de back-end...",
    "contact.send": "Abrir no e-mail",
    "contact.empty": "Escreva uma mensagem primeiro.",
    "contact.subject": "Contato pelo portfólio",
    "contact.seeAll": "Todas as formas de contato",
    "projects.title": "Projetos",
    "projects.lead": "Produtos que construí sozinho, de ponta a ponta: do banco de dados ao app publicado. O código é privado, então aqui vão as telas rodando de verdade.",
    "projects.count": "projetos",
    "projects.solo": "solo, ponta a ponta",
    "projects.private": "Código privado",
    "projects.role": "Meu papel",
    "projects.stack": "Stack",
    "projects.seePost": "Ver no feed",
    "projects.open": "Abrir imagem",
    "projects.seeAll": "Ver todos os projetos",
    "nav.projects": "Projetos",
    "footer.built": "Feito com Astro. Código no GitHub.",
    "skip": "Pular para o feed",
    "lang.switch": "EN",
    "lang.switchLabel": "Ver em inglês",
  },
  en: {
    "nav.feed": "Feed",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.resume": "Résumé",
    "cta.message": "Send a message",
    "profile.posts": "posts",
    "profile.since": "On the timeline since",
    "profile.roles": "roles",
    "profile.products": "products built",
    "profile.certs": "degree and certifications",
    "tabs.label": "Filter the feed",
    "tabs.all": "All",
    "tabs.career": "Career",
    "tabs.projects": "Projects",
    "tabs.study": "Learning",
    "post.pinned": "Pinned",
    "post.thread": "thread",
    "post.copy": "Copy link",
    "post.copied": "Link copied",
    "post.role": "My role",
    "post.private": "Private source, described by theme",
    "post.inProgress": "In progress",
    "post.project": "New product",
    "post.projectWip": "Building right now",
    "post.degree": "Graduated",
    "post.cert": "Certification earned",
    "post.certs": "certifications earned",
    "thread.intro": "The questions I get the most, answered in one place.",
    "thread.visitor": "visitor",
    "feed.end": "You reached the start of the timeline.",
    "rail.stack": "My stack",
    "rail.languages": "Languages",
    "rail.contact": "Get in touch",
    "rail.contactBody": "Open to conversations about back-end, distributed systems and AI products. I reply fast.",
    "stack.title": "Stack",
    "stack.lead": "The tools I build with, grouped by area. Each one points to the feed posts where it shows up.",
    "stack.tech": "technologies",
    "stack.areas": "areas",
    "stack.core": "Day to day",
    "stack.coreNote": "What I use the most at work today.",
    "stack.byArea": "By area",
    "stack.usedIn": "Shows up in",
    "stack.posts": "posts",
    "stack.back": "Back to the feed",
    "stack.seeAll": "See the full stack",
    "contact.title": "Contact",
    "contact.hello": "Let's talk.",
    "contact.lead": "Open to conversations about back-end, distributed systems and AI products. Pick whichever channel you like, I reply fast.",
    "contact.localTime": "Right now in Marília",
    "contact.tz": "Brasília time",
    "contact.channels": "Channels",
    "contact.email": "Email",
    "contact.emailNote": "The fastest way to reach me",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Phone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.open": "Open",
    "contact.saveContact": "Save contact",
    "contact.saveNote": "Downloads a business card (.vcf) with all of this, straight into your contacts.",
    "contact.resumes": "Résumés",
    "contact.compose": "Write your message",
    "contact.composeNote": "Fill this in and your email app opens with everything ready. Nothing is sent by this site.",
    "contact.name": "Your name",
    "contact.namePh": "Jane Doe",
    "contact.message": "Message",
    "contact.messagePh": "Hi Christian, I saw your portfolio and would like to talk about a back-end role...",
    "contact.send": "Open in email",
    "contact.empty": "Write a message first.",
    "contact.subject": "Contact from your portfolio",
    "contact.seeAll": "All the ways to reach me",
    "projects.title": "Projects",
    "projects.lead": "Products I built solo, end to end: from the database to the shipped app. The source is private, so here are the real screens running.",
    "projects.count": "projects",
    "projects.solo": "solo, end to end",
    "projects.private": "Private source",
    "projects.role": "My role",
    "projects.stack": "Stack",
    "projects.seePost": "See in the feed",
    "projects.open": "Open image",
    "projects.seeAll": "See all projects",
    "nav.projects": "Projects",
    "footer.built": "Built with Astro. Source on GitHub.",
    "skip": "Skip to the feed",
    "lang.switch": "PT",
    "lang.switchLabel": "View in Portuguese",
  },
} as const;

export type UIKey = keyof (typeof ui)["pt"];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Home path for a given language ("/" for pt, "/en" for en). */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}`;
}

/** Stack page path for a given language ("/stack" or "/en/stack"). */
export function stackPath(lang: Lang): string {
  return lang === defaultLang ? "/stack" : `/${lang}/stack`;
}

/** Contact page path ("/contato" in PT, "/en/contact" in EN). */
export function contactPath(lang: Lang): string {
  return lang === defaultLang ? "/contato" : `/${lang}/contact`;
}

/** Projects page path ("/projetos" in PT, "/en/projects" in EN). */
export function projectsPath(lang: Lang): string {
  return lang === defaultLang ? "/projetos" : `/${lang}/projects`;
}

export type Page = "home" | "stack" | "contact" | "projects";

/** Same page in a given language, used by the PT/EN toggle. */
export function pagePath(lang: Lang, page: Page): string {
  if (page === "stack") return stackPath(lang);
  if (page === "contact") return contactPath(lang);
  if (page === "projects") return projectsPath(lang);
  return homePath(lang);
}
