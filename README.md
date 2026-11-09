# Crestwood International School website

Next.js (App Router) · TypeScript · Tailwind CSS · Lucide · React Hook Form · PostgreSQL

## Run
```bash
npm install
npm run dev
```
Create `.env.local` with `DATABASE_URL=postgres://user:pass@host:5432/dbname`, then run `db/schema.sql`.
Without `DATABASE_URL`, enquiries are logged to the server console.

## Customise
- School name, contact details, news, events, FAQs and fees: `lib/data.ts`
- Replace `<Placeholder />` blocks with `next/image` and real photos in `public/`
- WhatsApp number: `school.whatsapp` (country code, no `+`)

## Structure
- `app/(site)` public website (navbar, footer, WhatsApp button)
- `app/portal` separate portal area with its own layout (login shell only for now)
- `app/api/enquiries` form handler

## Images
All images live in `public/images/` and are shown with `next/image` through the `<Photo />` component (`components/ui.tsx`):
- `hero/` home hero · `about/team-1..4.jpg` principal and leadership · `facilities/` · `gallery/` (30) · `news/` · `og.jpg` (social share image) · `app/icon.svg` (favicon)
- They are illustrations, not photographs. To use real photos, replace a file keeping the same name (or edit the paths in `lib/data.ts`). Use ~1200×900 JPG/WebP; `<Photo />` crops with `object-cover`.
- Leadership portraits are generic illustrations; replace `about/team-*.jpg` with real staff photos (square crops work best).
