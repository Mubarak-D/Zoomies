# Zoomies Design Constraints

## Core Direction

Zoomies must feel like a Colombo social movement, not a generic running club, gym site, fitness app, or event calendar.

The website should sell the feeling first:

> More than a run.

The user journey must be:

```text
What is this?
This looks different.
I can come even if I am not fast.
Something is happening soon.
I am in.
```

## Product Truth

- Zoomies is a Colombo-based run crew.
- Running is the mechanism.
- Belonging, play, movement, and showing up are the product.
- The site must make joining the next event obvious and low-friction.
- The launch site does not need accounts, dashboards, leaderboards, payments, maps, or a full CMS.

## Visual World

Use an editorial athletic poster system:

- Cropped logo moments
- Oversized kinetic typography
- Route lines
- Event ticket layouts
- Sharp rectangles
- Dense Colombo warmth
- Motion that feels directional, physical, and fast

Avoid:

- Generic SaaS gradients
- Purple/blue tech aesthetics
- Stock fitness imagery
- Soft rounded wellness cards
- Motivational gym language
- Over-polished corporate event design

## Color System

Use the supplied palette as the source of truth:

| Token | Hex | Use |
|---|---:|---|
| Logo Red | `#D90909` | Primary action, logo crop, route activation |
| Chestnut | `#480903` | Dark cinematic surfaces |
| Olive | `#937A24` | Utility contrast, secondary event tone |
| Desert Tan | `#E5D1A4` | Main warm light surface |
| Caramel | `#CE793A` | Warm transition, metadata accents |
| Copper | `#B64B12` | Event energy, route/poster depth |

Red should be scarce and forceful. Do not flood every section with red.

## Typography

- Display type should be heavy, condensed, poster-like, and loud without becoming unreadable.
- Body copy should be short, direct, and conversational.
- Monospace is only for operational details: time, distance, labels, event data, RSVP states.
- Avoid Inter as the main personality font.
- Hero headlines must stay readable on mobile and should not become six-line walls.

## Layout

- Mobile is the primary surface.
- Start from one-column mobile composition, then expand to desktop.
- Keep CTAs thumb-friendly with at least `44px` touch targets.
- No nested cards.
- No generic equal-card feature grids unless the content truly demands it.
- Use asymmetry on desktop, but collapse aggressively on mobile.
- The first viewport must communicate identity and action without needing scroll.

## Motion

Motion should make the site feel alive, not exhausting.

Use:

- Anime.js for route drawing, text reveals, kinetic words, poster motion, and RSVP feedback.
- CSS fallbacks when Anime.js fails.
- Reduced-motion support.
- Scroll-triggered reveal only when content remains accessible.
- CTA ripple or tactile feedback.
- Jitter-inspired stretch, blur, and poster movement.
- Animaker-inspired scene pacing: hero, movement band, event moment, action.

Avoid:

- Everything moving all the time.
- Cursor-heavy effects on mobile.
- Bouncy cartoon motion.
- Spinning logo reveals.
- Animation that hides essential content.

## Mobile Rules

- The mobile version is not a shrunken desktop site.
- Keep the header compact.
- Keep a persistent bottom RSVP action.
- Reduce texture and ambient effects on small screens.
- Avoid horizontal scroll pressure.
- Make the event details readable in one column.
- Forms must be simple: name, phone or Instagram, first-time status.
- Validation errors must be inline and specific.

## Copy Rules

Use Zoomies language:

- More than a run.
- Come anyway.
- Fast, slow, first timer. You are good.
- Show up. We will take it from there.
- Running got weird. In a good way.

Avoid:

- Fitness transformation clichés
- Corporate wellness language
- “All levels welcome” as the only reassurance
- Military grind language
- Fake inspirational quotes

## Launch Scope

Build only:

- Home
- What Zoomies is
- What happens at Zoomies
- Upcoming event
- First-timer reassurance
- Instagram CTA
- FAQ
- Lightweight RSVP

Cut first if time gets tight:

1. Advanced gallery
2. Crew section
3. Custom cursor
4. Page transitions
5. Complex CMS

Do not cut:

- Clear identity
- Upcoming event
- First-timer reassurance
- RSVP
- Mobile quality

## Quality Bar

Before sharing the site, verify:

- No pet-care or unrelated copy remains.
- The first viewport says what Zoomies is.
- The next event is visible within seconds.
- RSVP works without an account.
- Mobile layout has no horizontal overflow.
- Text does not overlap on small screens.
- Anime.js failing does not break visibility.
- Reduced motion users still get a usable page.
- Colors match the supplied palette.
- The draft logo is treated as provisional, not final.
