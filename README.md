# PoliData Landing Page

Smoke test landing page for PoliData - federal legislative tracking for small advocacy teams.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Brand Assets

- **Logo:** `/public/logo.svg` (animated radar)
- **Colors:** Amber gradient (#f59e0b → #d97706) + Slate (#0f172a)
- **Font:** Inter

## Form Integration

Replace the placeholder waitlist form in `components/WaitlistForm.tsx` with actual Tally embed after creating form at https://tally.so
