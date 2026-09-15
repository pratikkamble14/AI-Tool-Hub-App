# AI Tools Hub

A clean, modern, responsive directory of the best AI & productivity tools — built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and the **App Router**.

Browse 23 hand-picked tools (chatbots, coding assistants, image/video/audio generators, design, whiteboards and more) with live search, category filters, sorting, favorites and light/dark mode.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Run the production build |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
  app/
    page.tsx          # Homepage: search, filters, sort, tool grid
    layout.tsx        # Metadata, viewport, theme init
    error.tsx         # Error boundary
    icon.svg          # Favicon
    globals.css       # Tailwind + theme styles
  components/
    ToolCard.tsx      # Tool card (icon, name, description, link)
    ToolIcon.tsx      # Brand-colored tool badges
  data/
    tools.ts          # Tool catalog (edit this to add tools)
```

## Adding a Tool

Add an entry to the `TOOLS` array in `src/data/tools.ts`:

```ts
{
  id: "my-tool",
  name: "My Tool",
  description: "What it does, in one line.",
  url: "https://example.com",
  category: "Chatbot",
  brandColor: "#7C3AED",
  initials: "MT",
}
```

## Security Notes

- All external links use `target="_blank"` with `rel="noopener noreferrer"` and come from a fixed allowlist in `src/data/tools.ts`.
- Security headers (HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`) are set in `next.config.mjs`.
- No secrets or API keys are used — nothing sensitive is committed to this repo.

## Disclaimer

An independent directory. All trademarks belong to their respective owners; this project is not affiliated with or endorsed by any listed tool.
