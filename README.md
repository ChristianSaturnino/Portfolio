# Portfólio — Christian Saturnino

Site pessoal bilíngue (PT/EN). Astro, sem framework de UI, conteúdo tipado em `src/data`.

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
| `site.ts` | Nome, cargo, tagline, intro, e-mail, redes, links do CV |
| `experience.ts` | Empregos, formação, certificações, idiomas |
| `projects.ts` | Projetos (título, resumo, papel, stack, links, status) |
| `skills.ts` | Grupos de skills |
| `src/i18n/ui.ts` | Textos de interface (labels de seção, botões, nav) |

Cada campo de texto tem `{ pt: "...", en: "..." }`. Adicionar um projeto = adicionar um objeto no array de `projects.ts`.

## Estrutura

```
src/
  data/            conteúdo (fonte da verdade)
  i18n/ui.ts       strings de interface + helper de tradução
  layouts/Base.astro   <head>, fontes, SEO/OG, tema
  components/      Header, Hero, Experience, Projects, Skills, Contact, Page
  pages/
    index.astro    rota PT  (/)
    en/index.astro rota EN  (/en)
  styles/global.css  design system (tokens em :root)
public/
  cv/              PDFs do currículo
  favicon.svg
```

## Design

Tema escuro único. Tokens no `:root` de `src/styles/global.css` — trocar `--accent` muda a cor de destaque do site inteiro.

## Deploy

Projeto estático. Vercel/Netlify/Cloudflare Pages detectam Astro automaticamente
(`build` → `dist/`). Ajustar `site` em `astro.config.mjs` para o domínio final
(usado em canonical e tags OG).

## Pendências

- `astro.config.mjs` → `site`: trocar pelo domínio final
- `src/data/site.ts` → confirmar e-mail público e handles
- `src/data/projects.ts` → adicionar links (deploy/vídeo/print) quando houver
- Foto no Hero (opcional)
