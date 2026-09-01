import type { Lang } from "../data/site";

export const languages: Lang[] = ["pt", "en"];
export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "nav.about": "Sobre",
    "nav.flagship": "Destaque",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Stack",
    "nav.contact": "Contato",
    "hero.resume": "Currículo",
    "section.about": "Sobre",
    "section.experience": "Experiência",
    "section.projects": "Projetos",
    "section.projectsNote": "Produtos que construí sozinho, de ponta a ponta. Código privado, descrições por tema.",
    "section.skills": "Stack & Ferramentas",
    "section.education": "Formação",
    "section.certifications": "Certificações",
    "section.languages": "Idiomas",
    "section.contact": "Contato",
    "contact.body": "Aberto a conversas sobre back-end, sistemas distribuídos e produtos com IA. Respondo rápido.",
    "contact.email": "Enviar e-mail",
    "projects.role": "Meu papel",
    "projects.inProgress": "Em desenvolvimento",
    "footer.built": "Feito com Astro. Código no GitHub.",
    "lang.switch": "EN",
    "lang.switchLabel": "Ver em inglês",
  },
  en: {
    "nav.about": "About",
    "nav.flagship": "Featured",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Stack",
    "nav.contact": "Contact",
    "hero.resume": "Résumé",
    "section.about": "About",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.projectsNote": "Products I built solo, end to end. Source is private, described by theme.",
    "section.skills": "Stack & Tools",
    "section.education": "Education",
    "section.certifications": "Certifications",
    "section.languages": "Languages",
    "section.contact": "Contact",
    "contact.body": "Open to conversations about back-end, distributed systems and AI products. I reply fast.",
    "contact.email": "Send an email",
    "projects.role": "My role",
    "projects.inProgress": "In progress",
    "footer.built": "Built with Astro. Source on GitHub.",
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
