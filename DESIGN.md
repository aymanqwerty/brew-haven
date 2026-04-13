# Design Brief

## Direction

Brew Haven — A premium specialty café showcase with warm earthy sophistication and editorial elegance.

## Tone

Refined minimalism with warm, inviting character — cozy without saccharine, elegant without pretension.

## Differentiation

Serif-forward headings paired with warm earthy palette and soft-edged cards create a café experience that feels curated and personal rather than corporate or trendy.

## Color Palette

| Token      | OKLCH         | Role                                 |
| ---------- | ------------- | ------------------------------------ |
| background | 0.98 0.02 80  | Warm cream — inviting, not sterile   |
| foreground | 0.25 0.04 40  | Deep brown — warm, readable contrast |
| card       | 1.0 0.01 55   | Pure cream — lifted, tactile         |
| primary    | 0.54 0.16 42  | Coffee brown — warmth, identity      |
| accent     | 0.34 0.11 146 | Dark green — organic, natural        |
| muted      | 0.93 0.05 80  | Light beige — softer neutrals        |

## Typography

- Display: Lora — warm serif for headings, confident and elegant
- Body: Figtree — refined sans-serif for paragraphs and UI labels, clean readability
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, labels `text-sm font-semibold tracking-widest`, body `text-base`

## Elevation & Depth

Soft, minimal shadows create subtle depth — cards float just above the cream background with `shadow-soft` (0.08 opacity), interactive elements lift to `shadow-elevated` (0.12 opacity) on hover without drama.

## Structural Zones

| Zone    | Background                | Border           | Notes                                    |
| ------- | ------------------------- | ---------------- | ---------------------------------------- |
| Header  | card with cream accent    | border-bottom    | Sticky navigation with dark mode toggle |
| Content | alternating bg/muted      | —                | Cream background, beige section breaks  |
| Footer  | primary brown             | border-top       | Rich background, cream text              |

## Spacing & Rhythm

Generous whitespace with 4–6rem section gaps; micro-spacing of `gap-3` to `gap-6` within cards. Content breathes — no crowding. Mobile-first: stacked cards with full padding, grid layouts on `md:` and above.

## Component Patterns

- Buttons: primary brown bg, cream text, soft shadow on hover; secondary outline style with dark green accent on focus
- Cards: minimal `rounded-lg` (10px), cream background, `shadow-soft`, hover lifts to `shadow-elevated` with 300ms smooth transition
- Badges: uppercase, `text-xs font-semibold tracking-widest`, green accent text on muted background

## Motion

- Entrance: `fade-in` and `slide-up` on page load (400–500ms ease-out) for hero, menu items, testimonials
- Hover: 300ms smooth transition on cards/buttons — shadow lifts, text color warmth increases slightly
- Decorative: subtle CSS-driven floating animations on hero accent elements, no jank

## Constraints

- No bright colors outside earthy palette — every token must reinforce warmth
- No generic shadows — always use soft-edged, low-opacity brown-tinted shadows
- Typography hierarchy driven by size + weight, not color — avoid colored text except for accent links
- Dark mode inverts background to near-black (0.16 L) and lifts text to warm cream, maintains green accent

## Signature Detail

Warm earthy palette with serif headings creates an editorial, specialized aesthetic — "Brew Haven" feels less like a generic café chain and more like a curator-led specialty destination.
