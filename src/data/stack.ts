import { skillGroups } from "./skills";
import { experience, education, certifications } from "./experience";
import { projects } from "./projects";
import { flagship } from "./flagship";
import { feed } from "./feed";
import type { Lang } from "./site";

// Builds the /stack page: every skill from skills.ts plus the feed posts that
// mention it. Usage is found by searching the real text of jobs, projects and
// certifications, so nothing here is claimed that the rest of the site doesn't say.

type L = { pt: string; en: string };

// what I use day to day (from the CV summary)
const core = new Set([
  "TypeScript",
  "Node.js",
  "NestJS",
  "React",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "LangGraph",
  "OpenAI API",
  "Tool Calling",
  "Engenharia de Prompts",
]);

// extra spellings that count as a mention (lowercase, matched as substrings)
const aliases: Record<string, string[]> = {
  REST: ["restful"],
  GCP: ["google cloud"],
  "OpenAI API": ["gpt"],
  "Agentes LLM": ["llm"],
  "Engenharia de Prompts": ["prompt"],
  Microsserviços: ["microsserviç", "microservice"],
  "Arquitetura Distribuída": ["distribuíd", "distributed"],
  "CI/CD": ["ci/cd", "deploy automatizado", "automated deploy"],
  Docker: ["docker", "containeriz"],
};

interface Source {
  id: string; // feed post id, used for the link back
  label: L;
  text: string; // lowercase haystack, both languages
}

const postId = (match: (p: (typeof feed)[number]) => boolean) => feed.find(match)?.id ?? "";

const sources: Source[] = [
  {
    id: "maria",
    label: { pt: flagship.name, en: flagship.name },
    text: [flagship.body.pt, flagship.body.en, ...flagship.stack, ...flagship.flow.en].join(" "),
  },
  ...experience.map((j) => ({
    id: postId((p) => p.type === "job" && p.job === j),
    label: { pt: `${j.company} · ${j.role.pt}`, en: `${j.company} · ${j.role.en}` },
    text: [...j.bullets.pt, ...j.bullets.en].join(" "),
  })),
  ...projects.map((pr) => ({
    id: pr.slug,
    label: pr.title,
    text: [pr.summary.pt, pr.summary.en, pr.contribution.en, ...pr.stack].join(" "),
  })),
  ...[...education, ...certifications].map((c) => ({
    id: postId((p) => p.type === "credential" && p.items.includes(c)),
    label: { pt: c.issuer, en: c.issuer },
    text: [typeof c.title === "string" ? c.title : `${c.title.pt} ${c.title.en}`, c.issuer].join(" "),
  })),
].map((s) => ({ ...s, text: s.text.toLowerCase() }));

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function mentions(name: string, text: string): boolean {
  // whole-word match for the name itself, so "Git" doesn't hit "GitHub" and "REST" doesn't hit "restaurant"
  const word = new RegExp(`(^|[^a-z0-9])${escape(name.toLowerCase())}($|[^a-z0-9])`);
  return word.test(text) || (aliases[name] ?? []).some((a) => text.includes(a));
}

export interface Tech {
  key: string;
  name: L;
  core: boolean;
  usedIn: { id: string; label: L }[];
}

export interface Area {
  label: L;
  items: Tech[];
}

export const areas: Area[] = skillGroups.map((g) => ({
  label: g.label,
  items: g.items.map((i) => {
    const name: L = typeof i === "string" ? { pt: i, en: i } : i;
    const key = name.pt;
    const usedIn = sources
      .filter((s) => s.id && (mentions(name.pt, s.text) || mentions(name.en, s.text)))
      // one chip per post, even when several certs share it
      .filter((s, idx, all) => all.findIndex((o) => o.id === s.id) === idx)
      .map(({ id, label }) => ({ id, label }));
    return { key, name, core: core.has(key), usedIn };
  }),
}));

export const allTech: Tech[] = areas.flatMap((a) => a.items);
export const coreTech: Tech[] = allTech.filter((t) => t.core);

export const loc = (v: L, lang: Lang) => v[lang];
