# The Right to Disconnect

## Cloudflare Pages production

The [production snapshot](production/) matches [payorpray.pages.dev](https://payorpray.pages.dev/). Serve it locally with `python -m http.server 8000 --directory production`. The Next.js source at the repository root represents an earlier version.

**Professionalism is not obedience.** An independent, bilingual public-interest declaration on workplace dignity, lawful boundaries and after-hours contact.

This repository contains a static Next.js site in English and Simplified Chinese. It focuses on Australian workplace law and offers qualified comparative context for the European Union and United States. It is not legal advice and does not identify employers or individual workers.

> Inspired by the open-source labour-rights advocacy spirit of 996.ICU.

This project is independent and not affiliated with 996.ICU. The reference project is credited as project inspiration only, not as legal authority. No 996.ICU branding, logo, substantial text or Anti-996 License is reused.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Production checks:

```bash
npm run lint
npm run typecheck
npm run build
```

The project uses Next.js App Router, React, TypeScript, Tailwind CSS and lucide-react. `output: "export"` produces a static `out/` directory that can be deployed to Vercel without a database, server function, secret or API key.

## Deploy

The source repository is public at <https://github.com/DouglasMooooo/the-right-to-disconnect>. To deploy, import it in Vercel, use the Next.js preset and `npm run build`, then add your deployed domain to the metadata configuration in `app/layout.tsx`. Vercel authentication was not available in this environment, so the site has not been deployed.

## Editorial and legal review

The `data/legal-references.json` file is the structured source register. Source descriptions and page copy should be checked against official primary and government sources before release and whenever legislation changes. The site records the last source-check date only after a real source check. We have not claimed formal lawyer review.

Contributions are welcome for factual corrections, primary-source verification, Chinese translation, accessibility and editorial clarity. See [CONTRIBUTING.md](CONTRIBUTING.md). The declaration text is licensed separately from the software: see [CONTENT-LICENSE.md](CONTENT-LICENSE.md).

## Privacy

No account, form, tracking, analytics, comment system, employer blacklist or personal workplace material is collected. Google Fonts are loaded remotely; self-host or remove this import if a deployment requires all assets to be served locally.
