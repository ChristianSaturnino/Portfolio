import { site, type Lang } from "../data/site";

export const languages: Lang[] = ["pt", "en"];
export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.stack": "Stack",
    "nav.contact": "Contato",
    "nav.resume": "Currículo",
    "cta.message": "Mandar mensagem",
    "rail.contactBody": "Aberto a conversas sobre back-end, sistemas distribuídos e produtos com IA. Respondo rápido.",
    "stack.title": "Stack",
    "stack.lead": "As ferramentas com que eu construo, organizadas por área. Cada uma aponta para onde ela aparece: projetos, cargos e certificações.",
    "stack.tech": "tecnologias",
    "stack.areas": "áreas",
    "stack.core": "No dia a dia",
    "stack.coreNote": "O que eu mais uso no trabalho hoje.",
    "stack.byArea": "Por área",
    "stack.usedIn": "Aparece em",
    "stack.posts": "lugares",
    "stack.back": "Voltar ao início",
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
    "projects.title": "Projetos",
    "projects.lead": "Produtos que construí sozinho, de ponta a ponta: do banco de dados ao app publicado. O código é privado, então aqui vão as telas rodando de verdade.",
    "projects.count": "projetos",
    "projects.solo": "solo, ponta a ponta",
    "projects.private": "Código privado",
    "projects.role": "Meu papel",
    "projects.stack": "Stack",
    "projects.open": "Abrir imagem",
    "nav.projects": "Projetos",
    "wa.label": "Chamar no WhatsApp",
    "wa.message": "Oi Christian! Vi seu portfólio e queria conversar com você.",
    "footer.built": "Feito com Astro.",
    "footer.browse": "Navegar",
    "footer.top": "Voltar ao topo",
    "skip": "Pular para o conteúdo",
    "home.sub": "Hoje full stack pleno na Funcional Health Tech. Antes, ajudei a construir a MarIA na Pedbot.",
    "home.talk": "Bora conversar",
    "home.seeProjects": "Ver projetos",
    "home.case": "Case em destaque",
    "home.selected": "Projetos selecionados",
    "home.all": "Todos os",
    "home.did": "O que eu fiz",
    "home.how": "Como funciona",
    "home.more": "Tem mais",
    "home.moreProjects": "projetos",
    "home.seeAll": "Ver todos os projetos",
    "home.about": "Sobre mim",
    "home.likes": "O que eu curto",
    "home.career": "Carreira",
    "home.education": "Formação",
    "home.certs": "certificações",
    "home.fullCv": "Currículo completo",
    "lang.switch": "EN",
    "lang.switchLabel": "Ver em inglês",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.resume": "Résumé",
    "cta.message": "Send a message",
    "rail.contactBody": "Open to conversations about back-end, distributed systems and AI products. I reply fast.",
    "stack.title": "Stack",
    "stack.lead": "The tools I build with, grouped by area. Each one points to where it shows up: projects, roles and certifications.",
    "stack.tech": "technologies",
    "stack.areas": "areas",
    "stack.core": "Day to day",
    "stack.coreNote": "What I use the most at work today.",
    "stack.byArea": "By area",
    "stack.usedIn": "Shows up in",
    "stack.posts": "places",
    "stack.back": "Back to home",
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
    "projects.title": "Projects",
    "projects.lead": "Products I built solo, end to end: from the database to the shipped app. The source is private, so here are the real screens running.",
    "projects.count": "projects",
    "projects.solo": "solo, end to end",
    "projects.private": "Private source",
    "projects.role": "My role",
    "projects.stack": "Stack",
    "projects.open": "Open image",
    "nav.projects": "Projects",
    "wa.label": "Message me on WhatsApp",
    "wa.message": "Hi Christian! I saw your portfolio and would like to talk.",
    "footer.built": "Built with Astro.",
    "footer.browse": "Browse",
    "footer.top": "Back to top",
    "skip": "Skip to content",
    "home.sub": "Now a mid-level full stack developer at Funcional Health Tech. Before that, I helped build MarIA at Pedbot.",
    "home.talk": "Let's talk",
    "home.seeProjects": "See projects",
    "home.case": "Featured case",
    "home.selected": "Selected projects",
    "home.all": "All",
    "home.did": "What I did",
    "home.how": "How it works",
    "home.more": "There are",
    "home.moreProjects": "more projects",
    "home.seeAll": "See all projects",
    "home.about": "About me",
    "home.likes": "What I'm into",
    "home.career": "Career",
    "home.education": "Education",
    "home.certs": "certifications",
    "home.fullCv": "Full résumé",
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

/** WhatsApp chat with the greeting already typed in. */
export function whatsappLink(lang: Lang): string {
  return `https://wa.me/${site.phone.e164.replace("+", "")}?text=${encodeURIComponent(ui[lang]["wa.message"])}`;
}
