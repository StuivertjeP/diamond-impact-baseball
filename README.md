# Diamond Weekend — Astro + Tailwind Project

A cinematic one-page event website for a Christian baseball weekend in the Netherlands.
Built with the StoryBrand + Tibor one-page communication model.

---

## Quick Start

```bash
npm create astro@latest diamond-weekend -- --template minimal
cd diamond-weekend
npx astro add tailwind
npm install
```

Then copy the files from this repo into your `src/` directory.

---

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Nav.astro         # Fixed navigation + mobile menu
│   │   └── Footer.astro      # Footer with links
│   ├── sections/
│   │   ├── Hero.astro        # 1. Attention — video/field bg, headline
│   │   ├── Ticker.astro      # Moving info banner
│   │   ├── Problem.astro     # 2. Problem / Recognition
│   │   ├── Desire.astro      # 3. Desire / Transformation — 3 pillars
│   │   ├── Coaches.astro     # 4. Proof — coach cards + FCA block
│   │   ├── Program.astro     # 5. Offer — price card + schedule tabs
│   │   ├── Signup.astro      # 6. Action — testimonial + form embed
│   │   ├── Faq.astro         # 7. FAQ accordion
│   │   └── FinalCta.astro    # Final push CTA
│   └── ui/
│       ├── CoachCard.astro   # Reusable coach card component
│       ├── ScheduleItem.astro # Single schedule row
│       ├── PillarsGrid.astro  # 3-pillar transformation grid
│       └── FcaBanner.astro   # FCA partnership block
├── styles/
│   └── global.css            # CSS custom properties + base styles
├── data/
│   ├── coaches.ts            # Coach data (name, role, bio, flag, photo)
│   ├── schedule.ts           # Day 1 + Day 2 schedule data
│   └── faq.ts                # FAQ questions and answers
└── assets/
    ├── hero-poster.jpg       # Video poster frame
    └── coaches/              # Coach photos (3:4 ratio, min 600px wide)
```

---

## Content Customization

### Event Details — edit in `index.astro` or a `config.ts`

```ts
// src/data/event.ts
export const event = {
  name: "Diamond Weekend",
  tagline: "Baseball. Character. Purpose.",
  dates: "August 23–24, 2025",
  location: "Sportpark De Krom, Amersfoort",
  price: 140,
  ageRange: "14–22",
  contactEmail: "info@diamondweekend.nl",
  spotsRemaining: 24, // update to show urgency
};
```

### Coaches — edit `src/data/coaches.ts`

```ts
export const coaches = [
  {
    name: "John Smith",
    role: "Head Coach · Former NCAA D1",
    bio: "2–3 sentences about background and what they bring.",
    flag: "🇺🇸",
    photo: "/coaches/john-smith.jpg", // 3:4 ratio
  },
  // ...
];
```

### Schedule — edit `src/data/schedule.ts`

```ts
export const schedule = {
  day1: [
    { time: "08:30", title: "Registration & Welcome", badge: null },
    { time: "09:30", title: "Station Training — Hitting", badge: "skills" },
    // badge options: "skills" | "game" | "faith" | null
  ],
  day2: [ /* ... */ ],
};
```

### FAQ — edit `src/data/faq.ts`

```ts
export const faqs = [
  {
    q: "Do I have to be religious to attend?",
    a: "Not at all. Diamond Weekend is a baseball training event first...",
  },
  // ...
];
```

---

## Replacing the Hero Video

In `Hero.astro`, replace the placeholder div with:

```astro
<video
  autoplay
  muted
  loop
  playsinline
  poster="/hero-poster.jpg"
  class="absolute inset-0 w-full h-full object-cover"
>
  <source src="/hero-reel.mp4" type="video/mp4" />
</video>
<!-- Dark overlay -->
<div class="absolute inset-0 bg-gradient-to-b from-night/30 via-night/60 to-night/95"></div>
```

**Video specs:** 1920×1080, H.264, under 15MB, golden hour / field atmosphere

---

## Replacing the Signup Form

In `Signup.astro`, replace the placeholder div with your form embed:

```astro
<!-- Typeform -->
<div data-tf-live="YOUR_FORM_ID"></div>
<script src="//embed.typeform.com/next/embed.js"></script>

<!-- OR Google Form iframe -->
<iframe
  src="https://docs.google.com/forms/d/e/YOUR_ID/viewform?embedded=true"
  width="100%"
  height="520"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
>Loading…</iframe>
```

---

## Tailwind Config

```js
// tailwind.config.mjs
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9913A",
          light: "#E8B95A",
          dim: "#9A6B22",
        },
        night: {
          DEFAULT: "#0A0C0E",
          2: "#111418",
          3: "#181D22",
          4: "#1F262D",
          5: "#262E38",
        },
        cream: {
          DEFAULT: "#F5EDD8",
          dark: "#D4C5A0",
        },
        steel: "#2E3A46",
        mist: "#A0AABB",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
};
```

---

## Scroll Animations

The site uses a lightweight IntersectionObserver pattern with `.reveal` classes.
In Astro, you can extract this into a `<ScrollReveal />` component or an `animations.ts` utility.

---

## Deployment

Works with any Astro adapter:
- **Vercel**: `npx astro add vercel`
- **Netlify**: `npx astro add netlify`
- **Static**: runs as `dist/` folder on any host

```bash
npm run build
```

---

## Brand Notes

- **Baseball first** — faith and character are presented as a meaningful foundation, not the lead
- **Not churchy** — faith language is warm, honest and optional
- **Strong + inviting** — the tone is confident but never aggressive
- **Core hook**: "You don't have to prove yourself."

---

*Diamond Weekend × FCA Netherlands*
