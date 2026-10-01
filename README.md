# Portfólio — Christian Saturnino

Site pessoal bilíngue (PT/EN). Astro, sem framework de UI, conteúdo tipado em `src/data`.
https://portfolio-lovat-nine-27.vercel.app/

## Rodar

```bash
npm install
npm run dev        # http://localhost:4321  (PT)  ·  /en  (EN)
npm run build      # gera dist/
npm run preview    # serve o build
```

## Onde editar o conteúdo

Tudo em `src/data/` — não precisa mexer em componente pra atualizar texto:

| Arquivo | O quê |
|---|---|
| `site.ts` | Nome, cargo, tagline, intro, e-mail, telefone, domínio, redes, links do CV |
| `experience.ts` | Empregos, formação, certificações, idiomas |
| `projects.ts` | Projetos (título, resumo, papel, stack, links, status, prints em `public/img/projects/`) |
| `skills.ts` | Grupos de skills |
| `feed.ts` | Ordem da timeline e em qual aba cada post aparece (monta os posts a partir dos outros arquivos) |
| `chat.ts` | Fio de perguntas e respostas |
| `stack.ts` | Página `/stack`: quais skills são "dia a dia" e apelidos usados para achar em quais posts cada tecnologia aparece |
| `src/i18n/ui.ts` | Textos de interface (abas, botões, nav) |

Cada campo de texto tem `{ pt: "...", en: "..." }`. Adicionar um projeto = adicionar um objeto no array de `projects.ts`.

## Estrutura

```
src/
  data/            conteúdo (fonte da verdade)
  i18n/ui.ts       strings de interface + helper de tradução
  layouts/Base.astro   <head>, fontes, SEO/OG, tema
  components/      Page, Shell, ProjectsPage, StackPage, ContactPage, Sidebar, Profile, Feed, Post, Rail, Icon
  pages/
    index.astro    rota PT  (/)
    en/index.astro rota EN  (/en)
    stack.astro    página de stack PT (/stack)
    en/stack.astro página de stack EN (/en/stack)
    projetos.astro página de projetos PT (/projetos)
    en/projects.astro página de projetos EN (/en/projects)
    contato.astro  página de contato PT (/contato)
    en/contact.astro página de contato EN (/en/contact)
    christian-saturnino.vcf.ts  cartão de visita gerado no build
  styles/global.css  design system (tokens em :root)
public/
  cv/              PDFs do currículo
  favicon.svg
```

## Design

Layout de feed (estilo timeline social): sidebar, perfil + timeline filtrável, coluna com stack e contato. Cada marco (cargo, projeto, certificação) é um post; a Maria fica fixada no topo. Claro por padrão, escuro via `prefers-color-scheme`. Tokens no `:root` de `src/styles/global.css`; trocar `--accent` muda a cor de destaque do site inteiro.

## Deploy

Projeto estático. Vercel/Netlify/Cloudflare Pages detectam Astro automaticamente
(`build` → `dist/`). Ajustar `site` em `astro.config.mjs` para o domínio final
(usado em canonical e tags OG).

## Pendências

- `astro.config.mjs` → `site`: trocar pelo domínio final
- `src/data/site.ts` → confirmar e-mail público e handles
- `src/data/projects.ts` → adicionar links (deploy/vídeo/print) quando houver
- Foto no Hero (opcional)
