# Vitali Yanusheuski — portfolio

Static site built with [Astro](https://astro.build), hosted on Cloudflare Pages.

- `src/content/cases/` — one MDX file per case: front matter (title, tags, metrics, cover) and the story.
- `src/components/`, `src/layouts/`, `src/pages/` — templates. Role versions `/product`, `/ux`, `/data` are built from case tags.
- `src/styles/global.css` — colors, type scale (after Apple HIG), layout.
- `media-src/` — original images. `python3 scripts/images.py` turns them into web versions in `public/media/`.

```
npm install
npm run dev      # local preview
npm run build    # output in dist/
```

Cloudflare Pages: framework preset Astro, build command `npm run build`, output directory `dist`.
