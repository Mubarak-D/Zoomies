# ZOOMIES — FULL WEBSITE PRODUCT, BRAND, UX, UI & MOTION BLUEPRINT
## Colombo Run Club — Ultra-Detailed Planning Document
### Version 1.0 — Strategic Foundation Before Development

> **Status:** Planning / Direction Lock  
> **Primary objective:** Build a website that makes Zoomies feel like a cultural movement in Colombo, not a generic fitness organisation with a calendar.  
> **Core principle:** The site should make someone think: **"I want to be part of this."**  
> **Secondary objective:** Make joining a run absurdly easy.

---

# TABLE OF CONTENTS

1. Executive Summary
2. The Uncomfortable Strategic Truth
3. What Zoomies Actually Is
4. The Brand Positioning
5. The Audience
6. User Psychology and Conversion
7. Product Goals
8. What We Are Not Building
9. Design Philosophy
10. Reference Systems and Working Principles
11. Color System
12. Typography System
13. Logo Integration Strategy
14. Visual Language
15. Photography Direction
16. Motion Philosophy
17. Animation System
18. Anime.js Strategy
19. Jitter Strategy
20. Animaker Strategy
21. Accessibility and Reduced Motion
22. Information Architecture
23. Full Sitemap
24. Homepage Narrative
25. Hero Section — Detailed Spec
26. Navigation
27. Marquee and Motion Language
28. The Next Run Section
29. Run Types
30. Why Zoomies / Manifesto
31. Community Proof
32. Gallery
33. Colombo Identity
34. Crew / Organisers
35. FAQ
36. Final CTA
37. Footer
38. Event System
39. Event Detail Page
40. RSVP Flow
41. Member Journey
42. Content Model
43. Database Strategy
44. MVP Technical Architecture
45. Recommended Stack
46. Component Architecture
47. Folder Structure
48. Responsive Design Strategy
49. Desktop Layout Rules
50. Mobile Layout Rules
51. Interaction Specifications
52. Microinteractions
53. Loading States
54. Empty States
55. Error States
56. Performance Budget
57. Image Strategy
58. SEO
59. Analytics
60. CMS / Content Operations
61. Admin Requirements
62. Launch Plan
63. Development Phases
64. Decision Log
65. Explicit Anti-Patterns
66. Quality Assurance Checklist
67. Acceptance Criteria
68. Future Roadmap
69. Build Order
70. Final Design Contract

---

# 1. EXECUTIVE SUMMARY

Zoomies should not launch with a website that looks like a typical:

- gym website
- marathon registration portal
- corporate wellness initiative
- Strava clone
- fitness influencer landing page
- generic "community" template
- startup SaaS site with gradients and floating cards

The visual and experiential category should instead sit somewhere between:

> **running culture + editorial fashion + Colombo nightlife energy + independent creative collective + event poster design**

The product should communicate three things almost immediately:

1. **Zoomies has a strong identity.**
2. **Real people are already doing this.**
3. **I can join without needing to be an elite runner.**

The homepage is therefore not a database dashboard.

It is a **digital trailer for belonging**.

The operational part of the product — upcoming runs, details, RSVP, directions, FAQ — should exist underneath the emotional layer and become increasingly functional as the user moves through the journey.

The website architecture should follow this sequence:

```text
ATTENTION
   ↓
IDENTITY
   ↓
EMOTION
   ↓
BELONGING
   ↓
TRUST
   ↓
EVENT
   ↓
ACTION
```

The mistake would be reversing this into:

```text
DATE → TIME → LOCATION → SIGN UP
```

That is efficient but culturally dead.

Zoomies needs to earn attention before asking for commitment.

---

# 2. THE UNCOMFORTABLE STRATEGIC TRUTH

The biggest risk is not technical failure.

The biggest risk is making something **competent but forgettable**.

There are thousands of websites capable of showing:

- a hero image
- an event card
- an about section
- an Instagram embed
- a contact form

None of that creates a brand.

The differentiator has to be **taste and consistency**.

Every decision should answer:

> "Could this belong to any random run club?"

If the answer is yes, redesign it.

Zoomies should have enough personality that a cropped screenshot of a section could still plausibly be identified as Zoomies.

That means consistency across:

- typography
- color
- motion
- photography
- copy
- spacing
- iconography
- button behavior
- event cards
- social content
- future merchandise

The website is not merely a communication channel.

It is the first formalisation of the Zoomies visual universe.

---

# 3. WHAT ZOOMIES ACTUALLY IS

Before UI, define the product.

## Functional definition

Zoomies is a Colombo-based running community that organises social runs and community experiences.

## Emotional definition

Zoomies is a reason to leave the house.

## Cultural definition

A gathering mechanism for people who happen to run.

This distinction matters.

The community should not be designed around the assumption that everyone is obsessed with running.

People may join because they want:

- friends
- routine
- accountability
- exploration
- fitness
- new experiences
- a weekend ritual
- a creative social scene
- motivation to get outside

Running is the mechanism.

**Belonging is the product.**

That should influence every design decision.

---

# 4. BRAND POSITIONING

## Proposed positioning statement

> **Zoomies is Colombo's social running club for people who want to move, meet, and experience the city differently.**

Alternative directions depending on team personality:

### Direction A — Community-first

> Run together. Stay for everything else.

### Direction B — High energy

> Colombo, but faster.

### Direction C — Playful

> For people with places to be and nowhere to run alone.

### Direction D — Minimal

> Move with us.

### Direction E — More rebellious

> No gatekeeping. No pressure. Just go.

Do not lock copy until the team defines the actual personality.

The website system should support a tone that is:

- confident
- playful
- slightly irreverent
- inclusive
- energetic
- culturally aware

Avoid:

- corporate wellness language
- motivational poster clichés
- excessive "push yourself" rhetoric
- military fitness language
- fake inspirational quotes

Words I would use frequently:

- move
- show up
- together
- outside
- pace
- city
- crew
- run
- again

Words I would use cautiously:

- hustle
- grind
- conquer
- warrior
- beast mode
- transformation
- excellence

Those belong to another brand category.

---

# 5. THE AUDIENCE

Do not design for "runners."

That is too broad.

Define actual behavioral groups.

## Persona 1 — The Curious Beginner

**Thought:**
> "I don't really run. Can I still come?"

Needs:

- reassurance
- pace information
- beginner friendliness
- social proof
- zero embarrassment

Website response:

- clearly show "all levels"
- explain run formats
- avoid intimidating race statistics
- show normal people, not only athletic bodies

---

## Persona 2 — The Social Runner

Already runs occasionally.

Primary motivation:

- community
- consistency
- meeting people

Needs:

- recurring events
- familiar faces
- post-run culture
- easy RSVP

---

## Persona 3 — The Serious Runner

Already has a running routine.

Primary question:

> "Is this actually worth my time?"

Needs:

- distance
- pace
- route
- quality organisation

Do not alienate this user, but do not let them dominate the brand.

---

## Persona 4 — The Lifestyle Explorer

May barely care about running.

Likes:

- photography
- events
- Colombo
- culture
- meeting people
- being part of something early

This persona is extremely valuable for brand growth.

The site should feel culturally attractive even before they understand the running logistics.

---

# 6. USER PSYCHOLOGY AND CONVERSION

The core emotional barriers are probably:

1. "I don't know anyone."
2. "I'm not fast enough."
3. "What if I can't keep up?"
4. "Where exactly do I go?"
5. "Is this weird?"
6. "Is this serious?"
7. "What happens after I sign up?"

The website should answer these **without creating a giant wall of reassurance text**.

Use design.

Examples:

### Instead of:
> Beginners are welcome.

Show:

> **NO ONE GETS LEFT BEHIND.**

Then explain the actual policy.

### Instead of:
> We are a friendly community.

Show candid photos where friendliness is visible.

### Instead of:
> The route is easy.

Show:

```text
5 KM
EASY
CONVERSATIONAL
FLAT-ish
```

Information design creates confidence.

---

# 7. PRODUCT GOALS

## Primary goals

### Goal 1 — Drive event participation

The most important conversion:

```text
VISITOR → EVENT PAGE → RSVP → ATTENDS
```

### Goal 2 — Build brand memory

Someone should remember Zoomies after leaving.

### Goal 3 — Lower newcomer anxiety

A first-time runner should know exactly:

- where
- when
- how far
- what pace
- what to bring
- what happens

### Goal 4 — Create a reusable content platform

The team should be able to update events without editing code.

---

## Secondary goals

- collect newsletter / waitlist interest
- support Instagram growth
- support future partnerships
- establish credibility for sponsors
- become the central source of truth

---

# 8. WHAT WE ARE NOT BUILDING

This is important.

Do not build these in version 1:

- full social network
- activity tracking
- custom GPS maps
- Strava replacement
- complicated member profiles
- leaderboard
- chat application
- custom payment platform
- achievement system
- AI coach
- merchandise ecommerce system
- mobile app

Why?

Because Zoomies currently needs to prove community behavior.

The first website should solve:

> "What is happening, and how do I join?"

Everything else is speculative.

Build infrastructure only when behavior proves the need.

---

# 9. DESIGN PHILOSOPHY

The visual direction should be described as:

## **Editorial Athleticism**

Not sports-tech.

Not luxury fashion.

Not brutalism for the sake of brutalism.

The visual system should combine:

### Editorial
- strong typography
- asymmetric compositions
- deliberate cropping
- large negative space
- image-led storytelling

### Athletic
- directional movement
- kinetic text
- pace indicators
- route lines
- numbers
- timestamps

### Colombo
- warmth
- density
- texture
- humidity
- sunrise / sunset
- concrete
- traffic
- coastal movement
- urban surfaces

### Zoomies
- red aggression
- playful unpredictability
- high velocity
- human energy

---

# 10. REFERENCE SYSTEMS AND WORKING PRINCIPLES

The repositories and tools referenced for this project point toward a useful combination of principles.

## UI/UX Pro Max principle

Use a deliberate design system rather than choosing individual components randomly.

For Zoomies this means defining before implementation:

- visual hierarchy
- style direction
- typography pairing
- colors
- component rules
- interaction rules
- anti-patterns
- responsive behavior
- accessibility requirements

No component should exist because "it looked nice."

Every component should have a role.

---

## Taste principle

Avoid generic AI-generated design patterns.

Translation for Zoomies:

Do not automatically use:

- glass cards everywhere
- purple gradients
- giant rounded rectangles
- generic blobs
- floating SaaS UI
- excessive pill components
- stock athlete photography
- random decorative shapes

A page should have a point of view.

---

## Impeccable principle

Design should be shaped before code and then subjected to iterative critique.

Workflow:

```text
DIRECTION
↓
DESIGN SYSTEM
↓
COMPOSITION
↓
IMPLEMENTATION
↓
CRITIQUE
↓
MOTION
↓
POLISH
↓
PERFORMANCE / ACCESSIBILITY
```

Not:

```text
CODE EVERYTHING
↓
TRY TO MAKE IT PRETTY
```

---

## Ponytail principle

Do not over-engineer functionality.

Use:

- native HTML where possible
- CSS before JavaScript for simple behavior
- existing platform features
- small dependencies
- minimal architecture

But do not use "minimal" as an excuse for weak design.

The code can be simple while the experience is sophisticated.

---

# 11. COLOR SYSTEM

The supplied palette gives Zoomies a much stronger starting point than generic "sports brand red + black."

## Core palette

| Name | HEX | Role |
|---|---|---|
| Chestnut | `#480903` | Deep foundation / dark surfaces |
| Olive | `#A87324` | Earthy contrast / utility |
| Desert Tan | `#E5D1A4` | Primary light surface |
| Caramel | `#CE793A` | Warm accent |
| Copper | `#B64812` | Secondary intensity |
| Zoomies Red | `#C90F10` approx. | Logo / signature activation color |

The palette should not be used democratically.

That would create visual chaos.

## Color hierarchy

### 1. Zoomies Red — The activation color

Use for:

- primary CTA
- logo moments
- hover states
- key markers
- selected states
- urgent visual punctuation

Do not use red as the entire background of every section.

Its scarcity gives it force.

---

### 2. Desert Tan — The breathing surface

This should become the dominant light background.

Why?

Pure white would weaken the character of the palette.

Desert Tan provides warmth without making the site feel antique.

Use for:

- major content sections
- readable editorial sections
- cards requiring calm

---

### 3. Chestnut — The cinematic dark

Use for:

- immersive sections
- footer
- dark navigation states
- high-contrast hero treatments

Avoid pure black.

Chestnut gives the site identity.

---

### 4. Copper and Caramel — Transitional energy

Use as:

- route indicators
- metadata highlights
- hover accents
- graphic details

These colors should support rather than compete with red.

---

### 5. Olive — The unexpected utility tone

Use sparingly.

Potential uses:

- tags
- route categories
- special run identity
- illustration details

The olive tone makes the palette less predictable.

---

## Suggested semantic token system

```css
--color-brand-red: #C90F10;

--color-chestnut-950: #480903;
--color-copper-700: #B64812;
--color-caramel-500: #CE793A;
--color-olive-600: #A87324;
--color-desert-100: #E5D1A4;

--color-ink: #1E120D;
--color-paper: #F1E5CA;

--color-success: #52734D;
--color-warning: #C9871A;
--color-danger: #B64812;
```

These should later be adjusted for actual accessibility contrast.

---

# 12. TYPOGRAPHY SYSTEM

Typography should carry much of the identity.

I would avoid defaulting to Inter.

## Recommended strategy

Use a **display face + functional grotesk** pairing.

### Display font requirements

Should feel:

- distinctive
- editorial
- slightly condensed or high contrast
- capable of huge scale

Possible exploration directions:

- condensed grotesk
- neo-grotesk display
- sharp serif
- experimental editorial face

### Body font requirements

Must be:

- highly readable
- compact
- neutral enough to support the display type

Possible pairing pattern:

```text
DISPLAY:
Bold / Condensed / Expressive

BODY:
Clean grotesk / monospace accent
```

---

## Typographic hierarchy

### Hero
Massive.

Desktop:

```text
clamp(5rem, 12vw, 14rem)
```

The hero should be allowed to break conventional layout rules.

### Section headings

Large but not equally gigantic.

### Eyebrows

Small uppercase metadata:

```text
12px–14px
letter-spacing: 0.08em–0.16em
```

### Event data

Potential monospace or tabular numerals.

Example:

```text
06:00 AM
5.0 KM
04 OCT
```

Numbers should feel operational.

---

# 13. LOGO INTEGRATION STRATEGY

The supplied red mark is not the final logo.

Therefore:

**Do not design the entire website around the exact geometry of the placeholder mark.**

Instead establish a logo system capable of accepting the final identity.

Create slots for:

```text
FULL LOGO
WORDMARK
MONOGRAM
FAVICON
ANIMATED MARK
```

Once the final logo arrives, define:

- minimum size
- clear space
- light version
- dark version
- monochrome version
- motion version
- favicon adaptation

The logo should not be over-animated.

A strong mark can have one memorable entrance behavior.

Possible future animation:

```text
static
↓
slight compression
↓
horizontal velocity streak
↓
settle
```

No spinning.

No bouncing.

No generic logo reveal.

---

# 14. VISUAL LANGUAGE

## Shapes

Avoid default 24px rounded cards.

Preferred:

- sharp rectangles
- occasional subtle rounding
- oversized borders
- cropped image frames
- angled lines
- route-like curves

The site should alternate between:

```text
PRECISION
and
CHAOS
```

Precision:

- grids
- metadata
- time
- distance

Chaos:

- photography
- kinetic type
- image overlap
- motion

---

## Borders

Use thin tinted borders.

Do not use:

```text
border: 1px solid #ffffff20
```

everywhere.

Borders should establish structure, not create SaaS panels.

---

## Texture

Potential texture layers:

- film grain
- subtle paper
- asphalt
- scanned poster imperfections
- route line patterns

Keep texture opacity extremely low.

Texture must be felt, not noticed as an effect.

---

# 15. PHOTOGRAPHY DIRECTION

Photography is going to be one of the biggest determinants of whether this works.

## Rule

Do not use stock running photos unless absolutely necessary.

Real Zoomies photography should show:

- movement
- anticipation
- post-run exhaustion
- laughter
- Colombo
- shoes
- streets
- hands
- water bottles
- group formations
- sunrise
- sweat
- motion blur

Do not make every photo a face looking directly at camera.

The photography should feel observational.

---

## Shot list for every event

### Mandatory

1. Wide group shot
2. Starting line
3. Running motion
4. Environmental Colombo shot
5. Close-up detail
6. Candid interaction
7. Finish moment
8. Post-run social moment

### Experimental

- intentional blur
- flash photography
- low angle
- reflections
- partial framing
- grain
- silhouettes

The website should curate images like an editorial spread, not dump them into a gallery.

---

# 16. MOTION PHILOSOPHY

This is critical.

The user specifically wants the site to be very dynamic.

Dynamic does **not** mean:

> Everything moves all the time.

That produces fatigue.

The correct approach:

## Motion hierarchy

### Level 1 — Ambient

Slow and nearly subconscious.

Examples:

- grain movement
- background drift
- route line movement

### Level 2 — Scroll response

Triggered by user movement.

Examples:

- image reveals
- typography translation
- parallax
- section transformations

### Level 3 — Interaction

Direct response.

Examples:

- buttons
- cards
- hover
- menu

### Level 4 — Signature moments

Rare.

Examples:

- hero reveal
- logo sequence
- page transition
- RSVP success

The hierarchy should be:

```text
AMBIENT: 60%
INTERACTION: 30%
SIGNATURE: 10%
```

Not literally by number of animations, but by perceptual intensity.

---

# 17. ANIMATION SYSTEM

## Primary motion characteristics

Motion should feel:

- directional
- fast
- physical
- controlled
- intentional

Avoid:

- cartoon bounce
- jelly effects
- random spinning
- excessive floating
- elastic UI

A runner does not move like a balloon.

---

## Preferred easing families

Explore:

- easeOutExpo
- easeOutQuart
- easeInOutQuint
- custom cubic-bezier curves

Create a motion token system:

```css
--ease-enter: cubic-bezier(...);
--ease-exit: cubic-bezier(...);
--ease-emphasis: cubic-bezier(...);

--duration-fast: 160ms;
--duration-ui: 280ms;
--duration-section: 700ms;
--duration-hero: 1100ms;
```

Do not randomly use durations.

---

# 18. ANIME.JS STRATEGY

Anime.js should handle moments where CSS transitions become insufficient.

Use it selectively.

Potential applications:

## Hero typography

Characters or words can enter with:

- vertical translation
- opacity
- slight blur reduction
- stagger

Avoid per-character animation if it feels gimmicky.

Use word or line-level choreography first.

---

## Route lines

SVG paths can be drawn progressively.

Example concept:

```text
A route begins drawing
↓
travels across viewport
↓
connects to event information
```

This is much more on-brand than random particles.

---

## Number counters

For:

- kilometers
- runners
- events
- time

Use only when the number has narrative value.

Do not turn every statistic into a casino counter.

---

## Gallery choreography

Images can:

- reveal through masks
- shift on hover
- respond to cursor velocity

Again: subtle.

---

## RSVP success

Potential sequence:

```text
CLICK RSVP
↓
BUTTON COMPRESSES
↓
ROUTE LINE DRAWS
↓
CHECKPOINT MARKER LANDS
↓
"YOU'RE IN."
```

This could become a memorable brand interaction.

---

# 19. JITTER STRATEGY

Jitter should be treated as a **brand motion production tool**, not necessarily the runtime animation engine.

Use it to produce:

- social announcements
- animated event posters
- countdown assets
- logo motion explorations
- short looping hero assets
- Instagram stories
- sponsor visuals

The strongest workflow is:

```text
STATIC BRAND SYSTEM
        ↓
FIGMA / DESIGN TOOL
        ↓
JITTER MOTION EXPLORATION
        ↓
EXPORT MP4 / WEBM / LOTTIE where appropriate
        ↓
WEBSITE + SOCIAL DISTRIBUTION
```

Create reusable Jitter components:

- Zoomies logo lockup
- event date block
- route indicator
- location block
- RSVP CTA
- kinetic headline
- image mask reveal

This prevents every future event announcement from being redesigned from zero.

---

# 20. ANIMAKER STRATEGY

Animaker should not dictate the website's visual style.

Its value is primarily in:

- explainers
- launch content
- simple animated announcements
- informational motion assets

Possible use cases:

### "What is Zoomies?"

A 15–30 second social explainer.

### "How a run works"

```text
SHOW UP
↓
MEET PEOPLE
↓
WARM UP
↓
RUN
↓
COFFEE / HANG
↓
DO IT AGAIN
```

### Event reminder

Animated vertical social asset.

For the website itself, avoid embedding large unnecessary videos.

Video should justify its bandwidth.

---

# 21. ACCESSIBILITY AND REDUCED MOTION

A highly animated website must still work for people who prefer less motion.

Implement:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable or simplify non-essential motion */
}
```

Rules:

- no essential information only available through animation
- navigation must remain usable while animation runs
- no autoplay audio
- avoid rapid flashing
- pause decorative loops where necessary
- keyboard focus must remain visible
- hover interactions must have touch equivalents

Dynamic is not an excuse for inaccessible.

---

# 22. INFORMATION ARCHITECTURE

## MVP sitemap

```text
/
├── Home
│
├── Runs
│   ├── Upcoming
│   ├── Event Detail
│   └── Past Runs
│
├── About
│
├── Gallery
│
├── FAQ
│
└── Join / RSVP
```

Potential later:

```text
├── Journal
├── Partnerships
├── Crew
├── Shop
└── Member Portal
```

Do not launch all of these.

---

# 23. HOMEPAGE NARRATIVE

The homepage should tell a story.

Recommended order:

```text
01. INTERRUPTION
    Hero

02. ORIENTATION
    What is Zoomies?

03. ACTION
    Next Run

04. REASSURANCE
    Run your way

05. IDENTITY
    Manifesto

06. EVIDENCE
    Community photography

07. PLACE
    Colombo

08. PEOPLE
    Crew

09. QUESTIONS
    FAQ

10. COMMITMENT
    Join CTA
```

Each section should feel visually different.

Do not create a page that is:

```text
section
section
section
section
section
```

with identical containers.

The rhythm should change.

---

# 24. HERO SECTION — DETAILED SPEC

## Objective

Make the first viewport impossible to confuse with another run club.

## Layout direction

Full viewport or slightly larger.

Potential composition:

```text
┌─────────────────────────────────────┐
│ LOGO                  MENU          │
│                                     │
│         Z O O M I E S               │
│                                     │
│   RUN COLOMBO DIFFERENTLY           │
│                                     │
│  ───────── moving route line ─────  │
│                                     │
│ NEXT RUN → SUNDAY 06:00             │
└─────────────────────────────────────┘
```

Alternative:

Massive typography layered over kinetic photography.

---

## Hero content

Do not overcrowd.

Maximum:

- brand / logo
- one major statement
- one supporting operational fact
- primary CTA
- secondary CTA

Example:

```text
RUN
THE
CITY.

Colombo's social running club.

NEXT RUN
SUN / 06:00 / 5KM

[JOIN THE NEXT RUN]
```

---

## Hero animation sequence

### Initial state

0ms:
- background visible
- logo hidden
- headline masked

### 100ms

Logo enters.

### 250ms

Headline reveals in directional sequence.

### 700ms

Route line draws.

### 900ms

Event metadata appears.

### 1100ms

CTA becomes interactive.

Total should feel quick.

The user should not wait for the page to become usable.

---

## Desktop interaction

Potential subtle cursor response:

- image layer shifts slightly
- route marker responds
- headline remains stable

Avoid cursor-following everything.

---

# 25. NAVIGATION

Navigation should be minimal.

## Desktop

```text
ZOOMIES

RUNS
ABOUT
GALLERY

JOIN THE NEXT RUN →
```

The CTA is visually distinct.

---

## Mobile

Do not shrink desktop navigation into tiny links.

Use a full-screen menu.

Opening sequence:

```text
MENU CLICK
↓
background panel wipes across screen
↓
large nav links appear
↓
route line / marker decorates screen
```

Menu links should be huge and tactile.

Potential:

```text
RUNS
ABOUT
GALLERY
FAQ
```

Bottom:

```text
NEXT RUN
SUN / 06:00
JOIN →
```

---

# 26. MARQUEE AND MOTION LANGUAGE

A scrolling marquee can work extremely well for Zoomies.

Example:

```text
RUN • MOVE • SHOW UP • REPEAT • RUN • MOVE • SHOW UP • REPEAT
```

But do not add a marquee because every trendy website has one.

Give it a purpose.

Potential use:

- transition between chapters
- pace metaphor
- community statement

Motion speed should be constant and refined.

Hover can slow it.

Mobile should not become visually noisy.

---

# 27. THE NEXT RUN SECTION

This is the homepage's primary functional conversion section.

It should feel important.

## Layout

Potential huge date:

```text
06
SEP
```

Beside:

```text
SUNDAY SOCIAL
06:00 AM

5KM
SOCIAL PACE
COLOMBO

[RESERVE YOUR SPOT →]
```

Use typography rather than a generic event card.

---

## Information hierarchy

Priority:

1. Date
2. Event name
3. Time
4. Location
5. Distance
6. Pace
7. RSVP

Do not hide essential information behind hover.

---

## Interactive route

Potential SVG line:

```text
START ●──────────────● FINISH
```

Could animate as the section enters viewport.

Clicking could open map directions.

---

# 28. RUN TYPES

The purpose is not to create arbitrary categories.

Only show types Zoomies actually runs.

Potential visual metaphor:

```text
01 / SOCIAL
02 / EASY
03 / LONG
04 / SPECIAL
```

Each gets:

- distance range
- pace expectation
- emotional description

Example:

### SOCIAL

> The one where talking is part of the pace.

### EASY

> No racing. No ego. Just movement.

### LONG

> More road. More conversation.

### SPECIAL

> Night runs, collaborations, weird ideas.

Copy must reflect the real culture.

---

# 29. MANIFESTO SECTION

This should be one of the strongest editorial sections.

Potential statement:

> **YOU DON'T HAVE TO BE A RUNNER TO START MOVING.**

or:

> **THE CITY FEELS DIFFERENT WHEN YOU'RE MOVING THROUGH IT TOGETHER.**

Large typography.

Minimal supporting text.

Possible scroll behavior:

Each sentence becomes active as the user scrolls.

But do not use complicated scroll-jacking.

Natural scroll only.

---

# 30. COMMUNITY PROOF

Avoid fake testimonial cards.

Do not create:

```text
★★★★★
"Zoomies changed my life!"
— Person
```

unless real testimonials emerge organically.

Better:

### Real numbers

```text
12 RUNS
300+ PEOPLE
1 CITY
0 ELITISM
```

Only publish accurate numbers.

### Real captions

Short community quotes over candid imagery.

### Social proof

Instagram handles, with permission.

---

# 31. GALLERY

The gallery should feel curated.

Not:

```text
[image][image][image]
[image][image][image]
[image][image][image]
```

Use editorial rhythm:

```text
┌───────────────┬──────┐
│               │ img  │
│   LARGE       ├──────┤
│   IMAGE       │ img  │
├───────┬───────┴──────┤
│ img   │     WIDE     │
└───────┴──────────────┘
```

Potential interaction:

- hover reveals event date
- click opens immersive viewer
- keyboard navigation supported

Do not automatically animate every image on scroll.

Choose selected reveals.

---

# 32. COLOMBO IDENTITY

This is an opportunity competitors may ignore.

Zoomies should not feel like a generic international run club whose location happens to be Colombo.

The city should be part of the product.

Potential section:

> **THIS IS OUR ROUTE.**

Show abstracted city fragments:

- coastline
- parks
- streets
- landmarks
- sunrise zones

Avoid a tourism-board aesthetic.

Do not turn Colombo into a stock drone video.

Show lived-in Colombo.

---

# 33. CREW / ORGANISERS

Avoid corporate profile cards.

Potential format:

```text
THE PEOPLE
WHO KEEP
US MOVING.
```

Then candid images.

On interaction:

```text
NAME
ROLE
FAVOURITE RUN
```

Keep it human.

Do not write 200-word biographies.

---

# 34. FAQ

FAQs should solve anxiety.

Recommended questions:

- Do I need to be an experienced runner?
- What if I'm slower than everyone else?
- Is there a cost?
- What should I bring?
- Where do we meet?
- What happens if it rains?
- Can I bring a friend?
- Do I need to RSVP?
- Is there somewhere to leave belongings?
- What happens after the run?

Design as large accordion rows.

Example:

```text
01  DO I NEED TO BE FAST?        +
02  WHAT IF I COME ALONE?        +
03  WHAT DO I BRING?             +
```

Accordion animation should be quick and height-aware.

---

# 35. FINAL CTA

The final section should not simply say:

> Join us today.

Too generic.

Potential:

> **SEE YOU OUTSIDE.**

Then:

```text
NEXT RUN
SUNDAY / 06:00
COLOMBO

[COUNT ME IN →]
```

Make the final CTA operational.

---

# 36. FOOTER

Footer can become a final brand moment.

Example:

```text
Z O O M I E S
```

Huge typography.

Then:

```text
INSTAGRAM
TIKTOK
EMAIL

COLOMBO, SRI LANKA
```

Add a small dynamic detail:

```text
LOCAL TIME IN COLOMBO
16:42
```

Only if it adds character.

---

# 37. EVENT DETAIL PAGE

This should be operationally excellent.

## Hero

```text
SUNDAY
SOCIAL
RUN

06 SEP 2026
```

## Event metadata

```text
TIME       06:00
DISTANCE   5 KM
PACE       SOCIAL
LOCATION   [PLACE]
```

## Route

Map or simplified route graphic.

## What to expect

Timeline:

```text
05:45  ARRIVE
06:00  BRIEFING
06:10  MOVE
07:00  FINISH
07:15  HANG
```

This is extremely useful for first-timers.

## What to bring

Keep concise.

## RSVP

Persistent CTA on mobile.

---

# 38. RSVP FLOW

The RSVP process must be short.

## Ideal MVP

```text
CLICK RSVP
↓
NAME
EMAIL / PHONE
FIRST TIME? YES / NO
EMERGENCY CONTACT (if needed)
↓
CONFIRM
↓
SUCCESS
```

Do not ask:

- date of birth unless operationally necessary
- running history
- 20 profile questions

The first interaction should not feel like onboarding for a bank.

---

## Success screen

Make it memorable.

```text
YOU'RE IN.

SEE YOU AT
06:00.
DON'T SNOOZE.
```

Then:

- add to calendar
- open directions
- share event

This is a perfect place for a signature animation.

---

# 39. MEMBER JOURNEY

Map the experience beyond the website.

## Journey

```text
SEES INSTAGRAM POST
↓
VISITS ZOOMIES
↓
UNDERSTANDS VIBE
↓
CHECKS NEXT RUN
↓
RSVPS
↓
GETS CONFIRMATION
↓
SHOWS UP
↓
MEETS PEOPLE
↓
PHOTO APPEARS
↓
FOLLOWS AGAIN
↓
RETURNS
```

The website should support this loop.

---

# 40. CONTENT MODEL

Even an MVP needs structured data.

## Event

```ts
type Event = {
  id: string
  slug: string
  title: string
  description: string

  date: Date
  startTime: string
  endTime?: string

  locationName: string
  locationAddress?: string
  mapsUrl?: string

  distanceKm?: number
  paceLabel?: string
  difficulty?: "easy" | "moderate" | "challenging"

  maxCapacity?: number

  heroImage?: string
  gallery: string[]

  status: "draft" | "published" | "cancelled" | "completed"

  requirements?: string[]
  schedule?: {
    time: string
    label: string
  }[]

  createdAt: Date
  updatedAt: Date
}
```

## RSVP

```ts
type RSVP = {
  id: string
  eventId: string

  name: string
  email?: string
  phone?: string

  firstTime?: boolean
  status: "confirmed" | "waitlisted" | "cancelled"

  createdAt: Date
}
```

Do not build more fields until needed.

---

# 41. DATABASE STRATEGY

For MVP, use Supabase.

Why:

- Postgres
- auth if needed later
- storage
- row-level security
- dashboard
- quick iteration

But authentication is optional for the first RSVP flow.

A public RSVP form can work with server-side validation and an admin dashboard.

Do not force users to create accounts just to attend a run.

---

# 42. RECOMMENDED TECH STACK

## Frontend

**Next.js**

Why:

- excellent routing
- server rendering
- image optimisation
- SEO
- easy deployment

## Language

**TypeScript**

## Styling

**Tailwind CSS**

Use design tokens and component primitives.

Do not let utility classes become random values everywhere.

## Animation

**Anime.js**

Use for:

- hero choreography
- SVG paths
- counters
- timelines
- signature interactions

## Simple interactions

CSS first.

Do not use Anime.js to animate a button hover that CSS can handle.

## Backend

Supabase.

## Hosting

Vercel.

## Forms

Custom form first.

Do not add a form SaaS unless the team specifically needs advanced automation.

## Email

Resend or existing email provider when operational confirmation becomes necessary.

---

# 43. COMPONENT ARCHITECTURE

Recommended components:

```text
components/
├── layout/
│   ├── Header
│   ├── MobileMenu
│   ├── Footer
│   └── PageTransition
│
├── hero/
│   ├── Hero
│   ├── HeroType
│   └── HeroRoute
│
├── events/
│   ├── EventCard
│   ├── EventMeta
│   ├── EventSchedule
│   ├── EventRoute
│   └── RSVPButton
│
├── motion/
│   ├── Reveal
│   ├── Marquee
│   ├── RouteLine
│   └── KineticText
│
├── gallery/
│   ├── GalleryGrid
│   └── Lightbox
│
└── ui/
    ├── Button
    ├── Link
    ├── Accordion
    └── SectionLabel
```

Do not build a giant component library before the actual page exists.

Extract only repetition.

---

# 44. FOLDER STRUCTURE

```text
zoomies/
├── app/
│   ├── page.tsx
│   ├── runs/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/
│   ├── gallery/
│   └── api/
│
├── components/
├── lib/
│   ├── events.ts
│   ├── motion.ts
│   └── utils.ts
│
├── public/
│   ├── images/
│   ├── video/
│   └── fonts/
│
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── motion.css
│
├── types/
└── docs/
    └── DESIGN.md
```

---

# 45. RESPONSIVE STRATEGY

Do not treat mobile as desktop squeezed smaller.

The composition should intentionally change.

## Desktop

Strengths:

- large typography
- overlapping layouts
- horizontal relationships
- cinematic whitespace

## Mobile

Strengths:

- vertical momentum
- thumb-friendly CTAs
- large readable type
- simplified animation
- fast event access

---

# 46. BREAKPOINT STRATEGY

Test at minimum:

```text
375px
390px
768px
1024px
1280px
1440px
```

Also test:

- browser zoom
- landscape mobile
- large text
- slow network

Never rely on one screenshot width.

---

# 47. INTERACTION SPECIFICATIONS

## Buttons

Primary CTA:

Rest:
- Zoomies red
- high contrast text

Hover:
- directional shift
- arrow moves

Active:
- slight compression

Focus:
- visible ring

Do not use dramatic button morphing.

---

## Links

Hover behavior should feel connected to direction.

Potential:

```text
JOIN →
```

On hover:

```text
JOIN ——→
```

Arrow extends.

---

## Event cards

If cards exist:

Hover:

- image scale 1.02–1.04
- metadata line moves
- border changes

No card should jump vertically and cause layout shift.

---

# 48. MICROINTERACTIONS

Possible branded microinteractions:

## Cursor

Desktop only.

Do not replace the system cursor across the entire site.

Potential special cursor only over gallery.

## RSVP

Route marker fills.

## Menu

Directional wipe.

## Image hover

Metadata slides from edge.

## Accordion

Plus rotates.

## Share

Small route nodes spread.

The point is a coherent vocabulary.

---

# 49. LOADING STATES

Do not use generic spinning circles everywhere.

Potential Zoomies loader:

```text
• → • → • → •
```

Like moving checkpoints.

Or a small route line that continuously draws.

Keep it subtle.

---

# 50. EMPTY STATES

If no upcoming run exists:

Do not show:

> No events found.

Show:

> **WE'RE LACING UP THE NEXT ONE.**

Then:

```text
FOLLOW US
GET NOTIFIED
```

Empty states are brand opportunities.

---

# 51. ERROR STATES

Be human but not jokey in serious contexts.

Bad:

> Oopsie! Something went wrong 🤪

Better:

> **THAT DIDN'T GO TO PLAN.**
> Try again, or contact us if it keeps happening.

For RSVP errors:

Clearly preserve entered form data.

Never make the user fill everything again.

---

# 52. PERFORMANCE BUDGET

The temptation will be to destroy performance with motion.

Do not.

Target:

- optimised hero media
- lazy-loaded below-fold images
- responsive image sizes
- compressed WebP/AVIF
- avoid huge autoplay video unless necessary
- animation code only where required

Motion should degrade gracefully.

A beautiful website that takes 12 seconds to load is not beautiful.

---

# 53. IMAGE STRATEGY

Use:

```text
AVIF
↓ fallback
WebP
↓ fallback
JPEG
```

Generate multiple sizes.

Use `next/image`.

Do not upload 12MB camera files directly.

For hero:

Create a specific crop for:

- desktop
- tablet
- mobile

Do not let automatic object cropping cut people's faces.

---

# 54. SEO

Initial SEO is straightforward.

Each event should have:

- unique title
- description
- OpenGraph image
- canonical URL

Example:

```text
Zoomies — Colombo Run Club
```

Event:

```text
Sunday Social Run in Colombo | Zoomies
```

Add structured event data later if events become public and indexed.

---

# 55. ANALYTICS

Track behavior, not vanity.

Important events:

```text
hero_cta_clicked
next_run_viewed
event_opened
rsvp_started
rsvp_completed
instagram_clicked
directions_clicked
calendar_added
```

Questions analytics should answer:

- Which section drives RSVPs?
- Mobile vs desktop conversion?
- Where do users drop out?
- Which events generate interest?

Do not add tracking for everything imaginable.

---

# 56. CMS / CONTENT OPERATIONS

Eventually, non-developers need to update:

- events
- gallery
- copy
- FAQ

For MVP:

Supabase dashboard or a simple internal admin can work.

Do not immediately add a headless CMS unless content editing becomes painful.

Decision rule:

```text
If developers update content occasionally → no CMS.
If team updates content weekly → CMS/admin.
```

---

# 57. ADMIN REQUIREMENTS

Eventually:

```text
ADMIN
├── Create event
├── Edit event
├── Publish event
├── Cancel event
├── View RSVP count
├── Export attendees
├── Upload gallery
└── Manage capacity
```

But version 1 can be much simpler.

---

# 58. DEVELOPMENT PHASES

## PHASE 0 — DISCOVERY

Before writing code, answer:

1. What exactly is Zoomies?
2. Who is the first audience?
3. What is the frequency of runs?
4. Is RSVP mandatory?
5. Are runs free?
6. Are there pace groups?
7. Is there a safety policy?
8. Is the brand playful, premium, rebellious, minimal?
9. What assets already exist?
10. When does the logo arrive?

Deliverable:

```text
PRODUCT.md
```

---

## PHASE 1 — DESIGN DIRECTION

Create:

- moodboard
- typography exploration
- color application
- motion references
- photography direction

Do not create final UI yet.

Choose a direction.

Deliverable:

```text
DESIGN-DIRECTION.md
```

---

## PHASE 2 — DESIGN SYSTEM

Define:

- tokens
- spacing
- typography
- buttons
- links
- borders
- motion
- responsive rules

Deliverable:

```text
DESIGN.md
```

---

## PHASE 3 — HOMEPAGE COMPOSITION

Design the homepage as static structure first.

No animations.

Review:

- hierarchy
- pacing
- composition
- conversion path

Only after the static design is strong:

Add motion.

---

## PHASE 4 — MOTION

Prototype:

1. Hero
2. Navigation
3. Marquee
4. Event section
5. Gallery
6. RSVP success

Do not animate everything simultaneously.

Evaluate each animation:

```text
Does it explain?
Does it guide?
Does it create identity?
Does it feel like movement?
```

If no:

Delete.

---

## PHASE 5 — EVENT SYSTEM

Build:

- event listing
- event detail
- RSVP
- confirmation

---

## PHASE 6 — RESPONSIVE

Test each section intentionally.

Do not postpone mobile to the end.

---

## PHASE 7 — CONTENT

Replace:

- placeholder images
- lorem ipsum
- fake event data

with real content.

Real content often breaks designs.

That is why it must be tested before launch.

---

## PHASE 8 — POLISH

Run:

- visual critique
- accessibility review
- motion review
- performance review
- responsive review

---

# 59. DESIGN REVIEW QUESTIONS

For every major section ask:

## Identity

Could another run club use this unchanged?

If yes, not distinctive enough.

## Hierarchy

Can I understand the primary message in 3 seconds?

## Conversion

Do I know what to do next?

## Motion

Would removing the animation make the experience worse?

If not, delete it.

## Mobile

Does it feel intentionally designed?

## Performance

Does the visual effect justify its cost?

---

# 60. EXPLICIT ANTI-PATTERNS

## Do not:

### 1. Make everything a rounded card

This is probably the biggest modern web design trap.

### 2. Use a gradient because empty space feels uncomfortable

Use composition instead.

### 3. Use generic running icons everywhere

No random shoe / dumbbell / heartbeat icon collection.

### 4. Animate every element

Motion loses meaning.

### 5. Make copy sound like a fitness advertisement

Zoomies is a community.

### 6. Use fake testimonials

Real proof or none.

### 7. Hide important event information

People need operational clarity.

### 8. Force account creation

Massive conversion friction.

### 9. Build features before behavior exists

No speculative platform.

### 10. Treat accessibility as final QA

Build it in.

---

# 61. HOMEPAGE WIREFRAME

```text
┌─────────────────────────────────────────────┐
│ NAV                                         │
├─────────────────────────────────────────────┤
│                                             │
│                  HERO                       │
│              RUN THE CITY                   │
│                                             │
│          NEXT RUN → DATE / TIME             │
│                                             │
├─────────────────────────────────────────────┤
│ MOVING MARQUEE                              │
├─────────────────────────────────────────────┤
│                                             │
│             WHAT IS ZOOMIES?                │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│               NEXT RUN                      │
│        DATE / TIME / DISTANCE / CTA         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│               RUN TYPES                     │
│                                             │
├─────────────────────────────────────────────┤
│              MANIFESTO                      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│               GALLERY                       │
│                                             │
├─────────────────────────────────────────────┤
│              COLOMBO                        │
│                                             │
├─────────────────────────────────────────────┤
│               CREW                          │
├─────────────────────────────────────────────┤
│                FAQ                          │
├─────────────────────────────────────────────┤
│                                             │
│              SEE YOU OUTSIDE.               │
│                                             │
│                [JOIN]                       │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

---

# 62. BUILD ORDER — EXACTLY HOW I WOULD EXECUTE THIS

## STEP 1

Do not open VS Code.

Collect answers.

Lock:

- mission
- audience
- tone
- actual run format

---

## STEP 2

Collect all existing assets.

Create:

```text
/assets
  /logo
  /photos
  /video
  /references
  /social
```

---

## STEP 3

Create a visual reference board.

Not "things that look cool."

Categorise:

```text
TYPOGRAPHY
LAYOUT
MOTION
PHOTOGRAPHY
COLOR
EVENT DESIGN
NAVIGATION
```

---

## STEP 4

Write the brand's visual rules.

Example:

```text
Zoomies never uses:
- pure black
- generic fitness photography
- rounded SaaS cards

Zoomies prefers:
- oversized editorial typography
- directional movement
- warm earth surfaces
- red punctuation
```

---

## STEP 5

Design static homepage.

Desktop first for composition.

---

## STEP 6

Design mobile independently.

Do not merely scale.

---

## STEP 7

Build semantic HTML structure.

Before animation.

---

## STEP 8

Apply design system.

---

## STEP 9

Implement responsive behavior.

---

## STEP 10

Implement basic interaction.

---

## STEP 11

Implement signature motion.

Hero first.

---

## STEP 12

Build event detail and RSVP.

---

## STEP 13

Replace every placeholder with real content.

---

## STEP 14

Run a design critique.

Questions:

- Too generic?
- Too busy?
- Too many cards?
- Does red still feel special?
- Is the CTA obvious?

---

## STEP 15

Performance pass.

---

## STEP 16

Accessibility pass.

---

## STEP 17

Deploy preview.

---

## STEP 18

Show real users.

Do not only ask the internal team.

Observe:

- Can they find the next run?
- Do beginners understand pace?
- Can they RSVP?
- Are they confused by navigation?

---

# 63. MVP FEATURE MATRIX

| Feature | MVP | Later |
|---|---|---|
| Brand homepage | Yes | Improve |
| Upcoming runs | Yes | Yes |
| Event pages | Yes | Yes |
| RSVP | Yes | Yes |
| Gallery | Yes | Yes |
| FAQ | Yes | Yes |
| Map directions | Yes | Yes |
| Accounts | No | Maybe |
| Profiles | No | Maybe |
| Leaderboard | No | No evidence yet |
| Strava | No | Potential |
| Merchandise | No | Potential |
| Payments | No | When needed |
| Mobile app | No | Far later |

---

# 64. QUALITY ASSURANCE CHECKLIST

## Visual

- [ ] No section feels copied from a template
- [ ] Color hierarchy is intentional
- [ ] Red is not overused
- [ ] Typography has personality
- [ ] Images are real
- [ ] No generic gradient clutter

## UX

- [ ] Next run easy to find
- [ ] RSVP obvious
- [ ] Beginner anxiety addressed
- [ ] Event details complete
- [ ] Navigation understandable

## Motion

- [ ] Motion has purpose
- [ ] No excessive bounce
- [ ] Reduced motion supported
- [ ] Animations do not block interaction

## Mobile

- [ ] CTA reachable
- [ ] Menu usable
- [ ] Text readable
- [ ] Images crop correctly
- [ ] No horizontal overflow

## Performance

- [ ] Images compressed
- [ ] Video justified
- [ ] Below-fold assets lazy loaded
- [ ] Animation code selective

## Accessibility

- [ ] Keyboard navigation
- [ ] Focus visible
- [ ] Contrast tested
- [ ] Semantic headings
- [ ] Buttons have labels
- [ ] Forms have real labels

---

# 65. ACCEPTANCE CRITERIA FOR V1

The first version is ready when:

### Brand

A user can describe the personality of Zoomies after browsing.

### Conversion

A new user can RSVP without asking someone for help.

### Information

The next run's:

- date
- time
- place
- distance
- pace

are all clear.

### Motion

At least 2–4 signature moments create identity.

Not 40 random animations.

### Mobile

The mobile version feels like a first-class experience.

### Performance

The site remains fast on average mobile connections.

### Operations

A team member can update event information without risky code edits.

---

# 66. FUTURE ROADMAP

## Version 1.1

- event archive
- better gallery
- calendar integration
- email reminders

## Version 1.5

- partnerships page
- sponsor opportunities
- journal

## Version 2

- member identity
- attendance history
- personalised events

Only build these if Zoomies demonstrates real traction.

---

# 67. MOTION SIGNATURE CONCEPTS

These are concepts worth prototyping.

## Concept A — The Moving Route

A line appears across sections.

Sometimes:

- connecting content
- becoming an underline
- becoming a map route
- becoming a CTA arrow

This creates a coherent visual motif.

---

## Concept B — Pace Typography

Text behaves like different paces.

### Easy

Slow, smooth.

### Social

Staggered.

### Fast

Directional, compressed.

Could be used subtly in Run Types.

---

## Concept C — Checkpoint System

Circular markers represent:

- start
- next run
- finish
- RSVP success

A single visual primitive used everywhere creates identity.

---

## Concept D — Red Velocity

The red brand color appears as directional flashes:

- wipe
- underline
- marker
- transition

Not permanent red backgrounds.

---

# 68. COPY SYSTEM

Copy should be short.

Prefer:

> RUN WITH US.

over:

> Join our welcoming community of runners in Colombo today.

Prefer:

> COME AS YOU ARE.

over:

> Participants of all experience levels are encouraged to participate.

Operational details can be direct.

Brand statements can be expressive.

---

# 69. THE DESIGN CONTRACT

Before development starts, I would lock these rules:

## Zoomies is:

- warm, not soft
- energetic, not chaotic
- premium, not luxury
- playful, not childish
- inclusive, not generic
- athletic, not fitness-corporate
- cinematic, not overproduced
- dynamic, not distracting

## Zoomies should feel like:

> A group of interesting people decided to start moving through Colombo together and accidentally created something bigger.

That sentence is more useful than a generic moodboard.

Every design decision can be tested against it.

---

# 70. FINAL RECOMMENDATION

## The product architecture I would personally build

```text
NEXT.JS
├── Editorial homepage
│
├── Dynamic event system
│
├── Minimal RSVP flow
│
├── Supabase data layer
│
├── Anime.js signature interactions
│
├── CSS for ordinary transitions
│
├── Jitter for reusable brand/social motion assets
│
└── Real photography as the primary visual asset
```

## The strategic hierarchy

```text
BRAND
  ↓
COMMUNITY
  ↓
EVENT
  ↓
CONVERSION
  ↓
TECHNOLOGY
```

Not the reverse.

---

# 71. THE ONE DECISION I WOULD MAKE RIGHT NOW

Before writing a single production component:

## Create these three artifacts

### `PRODUCT.md`

What Zoomies is.

### `DESIGN.md`

The visual and interaction system.

### `MOTION.md`

Every signature animation, why it exists, and how it behaves.

Then build.

This prevents the project from becoming:

> "Let's add something cool here."

Instead it becomes:

> "Does this implementation satisfy the Zoomies design contract?"

That is the difference between a website with nice sections and an actual digital brand experience.

---

# APPENDIX A — INITIAL DESIGN TOKENS

```css
:root {
  /* Brand */
  --zoomies-red: #C90F10;

  /* Palette */
  --chestnut: #480903;
  --olive: #A87324;
  --desert-tan: #E5D1A4;
  --caramel: #CE793A;
  --copper: #B64812;

  /* Neutral interpretation */
  --ink: #1D100C;
  --paper: #F0E2C3;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Motion */
  --duration-fast: 160ms;
  --duration-normal: 280ms;
  --duration-slow: 600ms;
  --duration-hero: 1000ms;
}
```

---

# APPENDIX B — FIRST SPRINT

## Day 1

- Product questions
- asset collection
- brand direction

## Day 2

- moodboard
- typography exploration
- color testing

## Day 3

- homepage wireframe

## Day 4

- high-fidelity static homepage

## Day 5

- mobile composition

## Day 6

- motion prototype

## Day 7

- design review and revision

## Sprint 2

- Next.js setup
- design tokens
- homepage implementation

## Sprint 3

- events
- RSVP
- Supabase

## Sprint 4

- polish
- performance
- QA
- launch

---

# APPENDIX C — QUESTIONS THAT MUST BE ANSWERED BY THE TEAM

Before the final build, collect answers to:

1. What is the exact Zoomies mission?
2. Who started it and why?
3. How often will runs happen?
4. What locations are likely?
5. What distances?
6. Are there pace groups?
7. Is someone responsible for slower runners?
8. Are events free?
9. Is RSVP mandatory?
10. Is there a participant limit?
11. How are weather cancellations communicated?
12. What social platforms are active?
13. What photography assets exist?
14. Is there a launch date?
15. What is the final logo delivery date?
16. Does the team want a playful or more serious voice?
17. Are partnerships planned?
18. Will merchandise exist?
19. Does Zoomies have a safety policy?
20. Who owns website content after launch?

Do not guess these in code.

They are product decisions.

---

# END STATE

The finished website should feel less like:

> "Here is information about a running club."

And more like:

> **"Something is happening in Colombo. I want to show up."**

That is the bar.
