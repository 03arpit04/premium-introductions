
# Orlint — Premium Business Introductions Website

A boutique, executive-level marketing site. Black / white / off-white with sparing gold accents, generous whitespace, elegant serif + clean sans typography, subtle motion.

## Pages (TanStack route files)

Each page has its own `head()` with unique title, description, og tags.

- `/` — Home (full hero + all marketing sections from the brief)
- `/about` — Philosophy, approach, the "One Introduction Can Change Everything" narrative
- `/how-it-works` — Expanded 4-step timeline
- `/industries` — Who we work with, expanded
- `/contact` — Contact form + details

Top nav: Home, About, How It Works, Industries, Contact + gold-outlined "Request Introduction" CTA. Sticky on scroll. Shared footer with "WE BRING. YOU CLOSE." statement.

## Home page sections (in order)

1. **Hero** — Full-screen, off-white background, subtle grain/gradient. Large serif headline "Connecting Opportunity With Capability." Subheadline. Oversized display treatment of "WE BRING. YOU CLOSE." with gold underline accent. Two CTAs: filled black "Request Introduction", ghost "Talk To Us".
2. **Business Is Built On Relationships** — 3 elegant cards (Opportunity / Connection / Growth), thin borders, lots of padding, no heavy icons (small gold numeric markers only).
3. **What We Do** — 2×2 grid: Business Matchmaking, Strategic Introductions, Supplier Discovery, Partnership Facilitation.
4. **How It Works** — Vertical premium timeline, 4 steps with gold step indicators. Highlighted full-width banner at bottom: "WE BRING. YOU CLOSE."
5. **Who We Work With** — Card grid of 8 audiences, minimal styling.
6. **Why Orlint** — 4 premium cards (Quality Over Quantity, Relationship Driven, Curated Opportunities, Long-Term Thinking).
7. **Our Philosophy** — Centered editorial moment. Large serif "One Introduction Can Change Everything." with supporting stacked lines.
8. **Ready For The Right Connection?** — CTA section with two buttons + large "WE BRING. YOU CLOSE." statement.
9. **Contact** — Anchor section with form (Name, Company, Email, Phone, What are you looking for?). Submit logs to console + toast confirmation (no backend in this build).

## Design system (src/styles.css)

Replace existing tokens with:
- `--background` off-white `#F8F8F8`
- `--foreground` near-black `#0B0B0B`
- `--primary` black, `--primary-foreground` white
- `--accent` gold `#C8A96B` (used sparingly: underlines, step numbers, hairline dividers, hover states)
- `--muted` warm gray
- Custom tokens: `--gradient-premium` (subtle off-white→white), `--shadow-elegant`, `--hairline` (1px gold border utility)

Typography (loaded via `<link>` in `__root.tsx`):
- Display/Headlines: **Cormorant Garamond** (serif, executive weight)
- Body/UI: **Inter** (clean sans)
- Mapped through `@theme inline` as `--font-display` and `--font-sans`.

## Motion
- Fade + small translate-up on section enter (CSS + IntersectionObserver, no heavy lib).
- Subtle hover lift on cards.
- Sticky nav shrinks/gains hairline border on scroll.

## Components to create
- `components/site/Navbar.tsx`
- `components/site/Footer.tsx`
- `components/site/SiteLayout.tsx` (used via a pathless layout route `_site.tsx`)
- `components/site/BrandStatement.tsx` (reusable "WE BRING. YOU CLOSE." block)
- `components/site/SectionHeading.tsx`
- `components/site/Reveal.tsx` (scroll-in animation wrapper)
- Home composed of section components: `Hero`, `Relationships`, `WhatWeDo`, `HowItWorks`, `WhoWeWorkWith`, `WhyOrlint`, `Philosophy`, `FinalCTA`, `ContactForm`.

## Technical notes
- TanStack Start file-based routing under `src/routes/`. Use pathless layout `_site.tsx` rendering `<Navbar/><Outlet/><Footer/>` so all marketing pages share chrome.
- Each route file sets unique SEO `head()`.
- Contact form is client-only for now; submission shows a toast. No Lovable Cloud unless you ask.
- No images required for v1 (typographic-led design); can add later.

## Out of scope (ask before adding)
- Actual email delivery / backend
- CMS / blog
- Real client logos or testimonials
