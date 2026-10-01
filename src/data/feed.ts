import { experience, education, certifications, type Job, type Credential } from "./experience";
import { projects, type Project } from "./projects";
import type { Lang } from "./site";

// The whole page is one timeline. Every milestone in the data files becomes a
// post; this file only decides order and which filter tab each post lives under.

export type Tab = "all" | "career" | "projects" | "study";

interface Base {
  id: string;
  tabs: Tab[];
  // "YYYY" or "YYYY-MM"; newest first. Omitted for posts that stay on top.
  date?: string;
}

export type Post =
  | (Base & { type: "flagship" })
  | (Base & { type: "thread" })
  | (Base & { type: "job"; job: Job })
  | (Base & { type: "project"; project: Project })
  | (Base & { type: "credential"; items: Credential[]; issuer: string; degree: boolean });

function credentialPosts(): Post[] {
  const degrees: Post[] = education.map((c, i) => ({
    type: "credential",
    id: `edu-${i}`,
    tabs: ["study"],
    date: c.year,
    items: [c],
    issuer: c.issuer,
    degree: true,
  }));

  // certs from the same issuer in the same year collapse into one post
  const groups = new Map<string, Credential[]>();
  for (const c of certifications) {
    const key = `${c.issuer}|${c.year}`;
    groups.set(key, [...(groups.get(key) ?? []), c]);
  }
  const certs: Post[] = [...groups.values()].map((items) => ({
    type: "credential",
    id: `cert-${items[0].issuer}-${items[0].year}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    tabs: ["study"],
    date: items[0].year,
    items,
    issuer: items[0].issuer,
    degree: false,
  }));

  return [...degrees, ...certs];
}

const pinned: Post[] = [
  { type: "flagship", id: "maria", tabs: ["career", "projects"] },
  { type: "thread", id: "perguntas", tabs: [] },
];

const dated: Post[] = [
  ...projects.map((p): Post => ({ type: "project", id: p.slug, tabs: ["projects"], date: p.year, project: p })),
  ...experience.map((j): Post => ({ type: "job", id: `${j.company}-${j.start}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), tabs: ["career"], date: j.start, job: j })),
  ...credentialPosts(),
].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

export const feed: Post[] = [...pinned, ...dated];

export const stats = {
  roles: experience.length,
  products: projects.length,
  certs: certifications.length + education.length,
  // earliest job start, shown as "on the timeline since"
  since: [...experience].sort((a, b) => a.start.localeCompare(b.start))[0].start,
};

const months = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

/** "2025-12" → "dez 2025" / "Dec 2025"; "2026" stays "2026". */
export function formatDate(date: string, lang: Lang): string {
  const [y, m] = date.split("-");
  return m ? `${months[lang][Number(m) - 1]} ${y}` : y;
}
