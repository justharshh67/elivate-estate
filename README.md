# Elivate Estate — marketing site

Digital marketing website for **Elivate Estate** — a digital marketing agency serving
real estate agents, brokerages, developers and proptech companies.

> **Tagline:** Built on trust, rooted in value.

Stack: React 19 + TypeScript + Vite 7 + Tailwind CSS v4 (no UI library).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # TypeScript typecheck only
```

## Where to change things

| What | File |
| --- | --- |
| Brand, email, phone, social links, **all site copy** | `src/data/content.ts` |
| Colours, fonts, animations, spacing tokens | `src/index.css` (Tailwind v4 `@theme`) |
| Lead form delivery endpoint | `src/lib/form.ts` → `FORM_ENDPOINT` |
| Page title, meta description, OG tags | `index.html` |
| Favicon / social share image | `public/favicon.svg`, `public/og-image.svg` |
| Domain used in canonical + sitemap | `src/data/content.ts` → `brand.domain`, `public/sitemap.xml`, `public/robots.txt` |

## Sections

1. Hero — headline, tagline, live-lead visual, key stats
2. Audience marquee — who the agency serves
3. Services — six disciplines (paid search, SEO, content studio, social, CRM, web)
4. The growth model — modelled funnels per segment + the founding promise
5. Process — five steps from audit to proof
6. Team — the founding pod
7. Engagement — three service packages, no published rates
8. FAQ — including "what does it cost?" and "you are new, why trust you?"
9. Contact — lead capture form with validation
10. Footer — navigation, services, contact, social

## Connect the contact form

`src/lib/form.ts` currently simulates a successful submit. To receive real leads, point
`FORM_ENDPOINT` at any endpoint that accepts a JSON `POST` (Formspree, Basin, Getform, a
Zapier/Make webhook, or your own API route):

```ts
export const FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx'
```

The form validates name, email, company and website format before sending, and shows a
success state on a 2xx response.

## Before launch

- [ ] Confirm the Instagram URL (`elivateestate.co`) and replace the LinkedIn company URL with your real page
- [ ] Confirm the real phone number and office location
- [ ] Set `FORM_ENDPOINT`
- [ ] Update `brand.domain` and `public/sitemap.xml` / `public/robots.txt`
- [ ] Replace the modelled figures in `content.ts` → `playbooks` with real client results as they land
- [ ] Swap the placeholder team photos in `src/components/Team.tsx`
