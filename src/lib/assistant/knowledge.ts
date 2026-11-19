import { site, type Lang } from "../../data/site";
import { about } from "../../data/about";
import { experience, education, certifications, languages } from "../../data/experience";
import { flagship } from "../../data/flagship";
import { projects } from "../../data/projects";
import { skillGroups } from "../../data/skills";

// The assistant's only source of truth: the same data that renders the site,
// flattened to plain text. Change a project in src/data and the bot knows it.

type L = { pt: string; en: string };
const pick = (v: string | L, lang: Lang) => (typeof v === "string" ? v : v[lang]);

function build(lang: Lang): string {
  const pt = lang === "pt";
  const out: string[] = [];
  const h = (title: string) => out.push("", `## ${title}`);

  h(pt ? "Perfil" : "Profile");
  out.push(
    `${pt ? "Nome" : "Name"}: ${site.name} (${site.fullName})`,
    `${pt ? "Cargo" : "Role"}: ${site.role[lang]}`,
    `${pt ? "Mora em" : "Based in"}: ${site.location[lang]}`,
    `${pt ? "Frase do site" : "Site headline"}: ${site.tagline[lang]}`,
    site.intro[lang],
  );

  h(pt ? "Sobre ele" : "About him");
  out.push(about.lead[lang], ...about.body[lang]);
  out.push(
    `${pt ? "Interesses" : "Interests"}: ` +
      about.interests.map((i) => `${i.title[lang]} (${i.caption[lang]})`).join("; "),
  );

  h(pt ? "Experiência profissional" : "Work experience");
  for (const j of experience) {
    out.push(`- ${j.role[lang]} · ${j.company} · ${j.period[lang]}`);
    for (const b of j.bullets[lang]) out.push(`  - ${b}`);
  }

  h(pt ? "Formação, certificações e idiomas" : "Education, certifications and languages");
  for (const e of education) out.push(`- ${pick(e.title, lang)} · ${e.issuer} · ${e.year}`);
  for (const c of certifications) out.push(`- ${pt ? "Certificação" : "Certification"}: ${pick(c.title, lang)} · ${c.issuer} · ${c.year}`);
  out.push(`- ${pt ? "Idiomas" : "Languages"}: ` + languages.map((l) => `${l.label[lang]} (${l.level[lang]})`).join(", "));

  h(pt ? "Habilidades técnicas" : "Technical skills");
  for (const g of skillGroups) out.push(`- ${g.label[lang]}: ${g.items.map((i) => pick(i, lang)).join(", ")}`);

  h(`${pt ? "Projeto em destaque" : "Featured project"}: ${flagship.name} (${flagship.at})`);
  out.push(flagship.tagline[lang], flagship.body[lang]);
  for (const d of flagship.did[lang]) out.push(`- ${d}`);
  for (const f of flagship.facts) out.push(`- ${f.k[lang]}: ${f.n?.[lang] ?? ""} ${f.v[lang]}`.trim());
  out.push(`- Stack: ${flagship.stack.join(", ")}`);

  h(pt ? "Produtos que ele construiu sozinho, de ponta a ponta (código privado)" : "Products he built solo, end to end (private source)");
  for (const p of projects) {
    out.push(
      "",
      `### ${p.title[lang]} (${p.kicker[lang]}${p.status ? ` · ${p.status[lang]}` : ""})`,
      p.summary[lang],
      `${pt ? "Papel dele" : "His role"}: ${p.contribution[lang]}`,
      `Stack: ${p.stack.join(", ")}`,
    );
  }

  h(pt ? "Contato e links" : "Contact and links");
  const base = `https://${site.portfolio}`;
  out.push(
    `- E-mail: ${site.email}`,
    `- WhatsApp: https://wa.me/${site.phone.e164.replace("+", "")}`,
    `- LinkedIn: ${site.socials.linkedin}`,
    `- GitHub: ${site.socials.github}`,
    `- ${pt ? "Página de contato" : "Contact page"}: ${base}${pt ? "/contato" : "/en/contact"}`,
    `- ${pt ? "Página de projetos" : "Projects page"}: ${base}${pt ? "/projetos" : "/en/projects"}`,
    `- ${pt ? "Currículo (PDF)" : "Résumé (PDF)"}: ${base}${site.cv[lang]}`,
  );

  return out.join("\n").trim();
}

const cache: Partial<Record<Lang, string>> = {};
export function knowledge(lang: Lang): string {
  return (cache[lang] ??= build(lang));
}
