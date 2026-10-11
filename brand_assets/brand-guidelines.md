# Brand Guidelines — Κλειδαράς Πρίντεζης

Status: **final for site build (2026-10-10)**. Visual reference: `brand-guidelines.png`.

**Who:** a family locksmith in central Athens (Θεμιστοκλέους 31). It's a father with 35 years in the trade and his two sons, with 4.8★ from 74 Google reviews.
**Audience:** people in Athens with a lock or key problem, often on their phone and often in a hurry. Many are older.
**The site's one job:** get them to call or walk into the shop, trusting they'll be treated honestly.

The identity comes from the shop itself: the burgundy wall, the brass cylinders, and the wall of nickel key blanks.

---

## 1. Logo
| Use | File |
|---|---|
| Header, on light backgrounds | `logo-mark.svg` (burgundy) + business name as live HTML text |
| Footer, dark sections | `logo-mark-white.svg` |
| Favicon | `logo-mark-square.svg` |
| Google profile / Viber / social avatar | `logo-avatar.png` |
| Print / vinyl only, never on the site | `logo-mark-ink.svg` |

- **Lockup:** the mark sits left of «Κλειδαράς Πρίντεζης», set in Piazzolla 600. The mark is about 1.4× the cap height of the name.
- **Clear space:** at least one key-head diameter on every side.
- **Minimum size:** 24px tall on screen.
- Don't recolor, outline, add a shadow to, or rotate the mark.

## 2. Colour

### Brand
| Token | Name | Hex | Role |
|---|---|---|---|
| `--burgundy` | Μπορντό | `#7A1F2B` | Primary: CTA buttons, links, logo, key headings |
| `--burgundy-deep` | Βαθύ μπορντό | `#4E1219` | Dark sections, footer, button hover |
| `--burgundy-tint` | Ροζ μπορντό | `#F2E4E3` | Quiet highlight backgrounds, selected states |
| `--brass` | Ορείχαλκος | `#B8893B` | Icons and details. **Never text on light** |
| `--brass-light` | Ανοιχτός ορείχαλκος | `#D4AE6A` | Text/accents/focus ring on dark backgrounds |
| `--brass-dark` | Σκούρος ορείχαλκος | `#8A6424` | Brass-coloured small text on light backgrounds |

### Neutrals (cool, from the nickel key wall)
| Token | Name | Hex | Role |
|---|---|---|---|
| `--ink` | Μελάνι | `#1A1614` | Body text, headings |
| `--graphite` | Γραφίτης | `#596064` | Secondary text, captions |
| `--nickel` | Νίκελ | `#EEF0EF` | **Base page background** |
| `--nickel-2` | Νίκελ 2 | `#E1E5E5` | Alternate sections |
| `--white` | Λευκό | `#FFFFFF` | Elevated surfaces (cards, header on scroll) |
| `--line` | Γραμμή | `#CDD3D4` | Borders, dividers |

**Third-party colour, one exception:** review stars use Google's star yellow `#FBBC04`, so they read as Google's rating. Nowhere else.

**Proportion:** about 70% nickel/white, 20% ink, 8% burgundy, 2% brass. Burgundy is for actions and moments, not for backgrounds everywhere. The one exception is the deep burgundy used for the dark sections.

### Contrast (WCAG 2.1, checked)
| Text on background | Ratio |
|---|---|
| ink on nickel | 15.70 |
| ink on nickel-2 | 14.15 |
| graphite on nickel | 5.59 |
| graphite on nickel-2 | 5.04 |
| burgundy on nickel | 8.91 |
| white on burgundy | 10.20 |
| nickel on burgundy-deep | 12.88 |
| burgundy-deep on brass-light | 7.06 |
| brass-dark on nickel | 4.67 |
| **brass on nickel** | **2.75: decorative only** |

## 3. Typography
Both families are from Google Fonts and have a full Greek subset. The whole alphabet was rendered and checked, including accented capitals.

> Brygada 1918 was rejected on 2026-10-10. Its Greek capital Θ renders as «Ō» (the bar sits above the O) in every weight. Always test the full Greek alphabet before adopting a font.

| Role | Family | Weights |
|---|---|---|
| Headings, lockup, big numbers | **Piazzolla** (serif, sturdy and sharp, engraved feel) | 600, 700 |
| Body, UI, buttons, forms | **Commissioner** (sans, by Greek designer Kostas Bartsokas) | 400, 500, 600 |

**Self-hosted, not Google Fonts** (since 2026-10-11). The files are in `assets/fonts/`: one variable woff2 per family per script (`*-greek`, `*-latin`), about 95 KB in total. All four are preloaded, and `@font-face` with `unicode-range` sits at the top of the page's `<style>`. Self-hosting is faster on phones, and it avoids sending every visitor's IP to Google (a GDPR risk in the EU). Both fonts are SIL OFL 1.1, and the licence travels inside the font files.

**Scale (base 18px, ratio 1.25):**
| Token | Size | Font / weight | Line-height | Tracking |
|---|---|---|---|---|
| `display` | clamp(44px, 7vw, 69px) | Piazzolla 700 | 1.05 | -0.03em |
| `h1` | clamp(36px, 5vw, 55px) | Piazzolla 700 | 1.1 | -0.03em |
| `h2` | clamp(28px, 3.6vw, 44px) | Piazzolla 600 | 1.15 | -0.02em |
| `h3` | 28px | Piazzolla 600 | 1.2 | -0.01em |
| `lead` | 22px | Commissioner 400 | 1.6 | 0 |
| `body` | 18px | Commissioner 400 | 1.7 | 0 |
| `small` | 15px | Commissioner 500 | 1.5 | 0 |

**Rules:**
- **Sentence case everywhere. No ALL-CAPS.** Greek caps drop the τόνος («ΚΛΕΙΔΙΑ»), and all-caps labels look templated.
- Don't put labels or eyebrows above headings unless they carry real information.
- Don't highlight a single word in a headline in another colour or in italics.
- Keep lines at or under 70 characters for body text.
- Phone numbers are grouped as `213 044 4629` and always wrapped in a `tel:` link.

## 4. Signature: the hanging key
Spend the visual boldness in **one** place. **The logo's key, lying down, hangs from the hero's bottom edge by its bow**, in the hero's colour, right-aligned to the container.

- **Shape:** it's the logo's key rotated 90°: a round bow with a hole, a blade with a brass keyway groove, three rectangular teeth of different lengths (20/28/22) and a pointed tip. It's built in the same 512-grid units as `docs/logo-drafts/build-logo.mjs`, with `viewBox="72 0 288 80"`.
- **Why the full key:** on 2026-10-11 the earlier version, which was only a cut bitting profile along the edge, read as mountains, not a key. The bow and the tip are what make it a key.
- **Size:** `clamp(240px, 32vw, 460px)` wide. The box has the key's height and cancels it with a negative margin, so it never pushes content down. It must not touch the services heading below.
- **Motion:** the first time it comes into view it slides in tip first with a small overshoot, like a key going into a lock. It's static under reduced motion or without JS.
- **Frequency:** once per page. Everything else stays quiet: straight edges, no other ornaments.

## 5. Iconography
- **Set:** [Lucide](https://lucide.dev) (MIT), outline style. Pin a version, e.g. `lucide-static@0.460.0`.
- **Stroke:** 2px at 24px. This matches the single stroke weight of the logo.
- **Colour:** burgundy on light backgrounds, brass-light on dark ones. The icon goes next to its text, not inside a coloured box.
- **Suggested icons:** `phone`, `map-pin`, `clock`, `key-round`, `lock-keyhole`, `shield-check`, `door-closed`, `car`, `siren` (alarms).
- No emoji and no mixed icon sets.

## 6. Buttons & interactive
| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary | `--burgundy` | white | none | Call. Only one primary per view |
| Secondary | transparent | `--burgundy` | 1.5px `--burgundy` | Directions, see services |
| On dark | `--brass-light` | `--burgundy-deep` | none | CTA inside dark sections |

- Size: min-height 52px (thumb-sized), padding 14px 24px. Text is Commissioner 600 17px, with the icon on the left.
- Radius: 10px.
- **Hover:** Primary becomes `--burgundy-deep`. Secondary gets a `--burgundy-tint` background.
- **Active:** `transform: translateY(1px) scale(0.98)`.
- **Focus-visible:** 2px outline with a 3px offset. Use burgundy on light backgrounds and brass-light on dark ones.
- **Button text says what happens:** «Καλέστε 213 044 4629» and «Οδηγίες στον χάρτη». Don't use «Υποβολή», «Μάθετε περισσότερα», or arrows (→).
- **Mobile:** a floating call bar (Καλέστε / Οδηγίες) sits at the bottom, on the floating layer.
- **Sticky call buttons appear only after the hero:** the call bar (below 1024px) and the header phone button (1024px and up) stay hidden while the hero is on screen, because the hero already has the same two buttons. They slide in once the hero has been scrolled past, and the phone icon on the call bar rings once the first time. When the menu is open, the call bar is always shown. Without JS they stay visible.
- **Menu button + panel (below 1280px, where the 6 nav links stop fitting):** the «Μενού» button in the header opens a panel that slides in from the right. It fills the space *between* the sticky header and the call bar, so Call / Directions stay visible and tappable, and they are never repeated inside the panel.
  - **Contents:** the 6 section links, which slide in with a 40ms stagger, then a facts block: a live «Ανοιχτά τώρα / Κλειστά τώρα» status, a link to the full hours, and the address.
  - **Only the links scroll.** The facts block is pinned right above the call bar, so the address is never hidden, even on a 640px-tall phone. The links get tighter below 760px of height.
  - **On phones narrower than 400px**, the open menu button shows only the ✕ (its «Κλείσιμο» label stays for screen readers), so the wider label never covers the business name.
  - **Closes on:** ✕, Esc, a tap on the dimmed page, any link in the panel, or the logo.
  - While it's open, the page behind it is `inert`.
  - Above 1280px there is no panel; the header carries the nav and the phone button. The call bar exists only below 1024px, and between 1024 and 1279 the header shows the phone button plus «Μενού». Never show the phone button in the header and in the call bar at the same time.
- **Logo:** both logos (header and footer) link to `#top`, and **no element may have `id="top"`**, so the browser scrolls to the very top. An id on the sticky header made the logo scroll only 88px.
- **Hero numbers:** 35 χρόνια στο επάγγελμα · 2 γενιές κλειδαράδων · 4,8★ βαθμολογία στο Google · 74 κριτικές στο Google, under the hero buttons (4 across from 640px, 2×2 on phones).
  - **Motion:** they count up from 0 as their first row comes on screen, so a «0» is never left showing. The final values are in the HTML, so they show as-is without JS and under reduced motion.
- **Live status in the hero:** «Ανοιχτά τώρα, κλείνει στις 20:00» or «Κλειστά τώρα, ανοίγει αύριο στις 9:00», under the hero buttons, computed from the hours table and refreshed every minute. When open, the brass dot pulses three times (under 5 seconds) and then stays still. It's hidden without JS rather than showing a guess.
  - **Content:** only verifiable facts, no «1000+ πελάτες». 74 also appears in the reviews section and the JSON-LD, so update them together.
- **Gallery** (`#douleies`, a port of the 21st.dev «Focus Cards» component, in plain HTML/CSS with real photos instead of Unsplash):
  - **From 1024px with a mouse:** hovering a photo shrinks the others to 0.98 and swaps them to a blurred copy by opacity. The original animated `filter: blur` with `transition-all`, which our rules forbid.
  - **Below 1024px:** a swipeable strip, one photo in the middle (76vw on phones, 44vw on tablets). The neighbours blur and shrink in step with the finger (`--d` set from the scroll position). Tapping a blurred photo brings it to the middle, and dots under the strip show the position and jump to a photo.
  - **Blurred copies:** tiny pre-blurred 180×240 JPEGs in `assets/images/blur/` (2–3 KB each). There's no CSS filter at runtime.
  - **Captions:** always visible. Keep them to 2–3 words; the full description goes in `alt`.
- **Process** (`#diadikasia`, a port of the 21st.dev «Index List Carousel»): one real job, a wooden door, in 8 steps. The top step is the start and the bottom step is the finished door.
  - **Layout:** the numbered steps (a vertical `tablist`) sit beside one photo (`tabpanel`). On phones the photo comes first and the steps below it. On tablets it's the same stack in a 600px column.
  - **Picking a step:** mouse hover, click, or arrow keys/Home/End. On touch, tap the right two thirds of the photo for the next step and the left third for the previous, or swipe sideways. Vertical swipes still scroll the page.
  - **Motion:** the new photo wipes in from the right going down the list and from the left going back up. It's a mask of two opposite `translate`s, so only transform and opacity animate.
  - **Autoplay:** it plays through once, 3.5s per step, the first time it is half on screen, and stops on the finished door. The story bars on top are the clock (a CSS animation). It holds while the mouse or keyboard is on the list, a deliberate pick stops it, and the button pauses or restarts it (WCAG 2.2.2). It never starts by itself under reduced motion.
  - **Privacy:** the client's door sign is blurred in steps 6 and 8. Blur any client name, sign or address before adding a photo.
- **Reviews** (`#kritikes`): laid out like Google Maps: a rating summary (4,8 ★★★★★ · 74 κριτικές), then white review cards with an initial avatar, name, «Κριτική στο Google», 5 stars and the text.
  - **Stars:** only show 5 stars on a review that is 5/5 on Google. Both current ones were checked on 2026-10-10. The summary shows 5 full stars for 4,8, as Google does.
  - **Text:** quote the reviews faithfully. A cut-off review ends with «…».
- **Header nav:** 6 links fit only from 1280px; below that the header shows «Μενού».
- **FAQ** (`#erotiseis`):
  - **Markup:** native `<details name="faq">`, so it works without JS. The answer fades in, and the + rotates into ×.
  - **One open at a time:** opening a question closes the previous one. It's native via `name`, with a JS fallback for older browsers. The opened question then glides into view, because the answer closing above it could push it off screen.
  - **Copy:** only answers backed by known facts. Anything about prices, after-hours, areas or payment waits for the client.
  - **Call button:** the FAQ's call button shows only on desktop, because mobile has the call bar.
- **Hours:** they appear in four places: the hours table, the footer, the JSON-LD, and Google Business Profile. The «Ανοιχτά τώρα» status is computed from the table, so change all four together. Public holidays aren't modelled.

## 7. Layout, depth & spacing
- **Spacing tokens:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Use only these.
- **Container:** max 1200px, with a side gutter of 20px on mobile and 32px on desktop.
- **Alignment:** left-aligned text. Centre alignment is for single short lines only.
- **Radius hierarchy:** buttons 10px, cards and photos 16px, large panels 24px.
- **Depth:**
  - **Base:** `--nickel`, with `--nickel-2` for alternate sections.
  - **Elevated:** `--white` with `0 1px 2px rgba(26,22,20,.06), 0 10px 28px -10px rgba(78,18,25,.18)`.
  - **Floating** (call bar, sticky header): `0 2px 4px rgba(26,22,20,.08), 0 18px 44px -12px rgba(78,18,25,.35)`.

## 8. Photography
- **Real photos only**, from `~/Desktop/Locksmith Project/photos/`. No stock and no AI-generated people.
- **Prefer:** the family at work, hands on locks, the key wall, the shop interior.
- **Balance (decided 2026-10-11):** about 15 photos plus 1 video on desktop. On phones the services photo and the shop interior are hidden. The gallery and the process show one photo at a time on phones. Each photo appears in one place only.
- **Exclude:**
  - the Duolingo screenshot
  - duplicates
  - blurry shots
  - intercom work (not a service)
  - anything with readable customer addresses, residents' names or faces of customers or passers-by
- **Products:** no photos of the retail displays. They're cluttered with third-party brand logos, and people at work sell trust better than merchandise. Say it in one line of text instead.
- **Chosen media (audit of 2026-10-10, all 51 photos and 14 videos reviewed):**

  | Slot | File | Source |
  |---|---|---|
  | Hero | `kopi-kleidion.jpg` | father at the key-cutting machine |
  | Card: armored doors | `thorakismeni-porta.jpg` | son at an armored door |
  | Card: locks & cylinders | `assets/video/exypni-kleidaria.mp4` | smart lock turning by itself (video V10) |
  | Card: cars & motorbikes | `kleidi-michanis.jpg` | motorbike ignition |
  | Services list (desktop only) | `sygkollisi-eisodos.jpg` | father welding an iron building entrance; hidden below 1024px, where the gallery follows right after |
  | Family | `oikogeneia-toixos-kleidia.jpg` + `topothetisi-kleidarias.jpg` | together they show all three people |
  | Shop | `magazi-prosopsi.jpg` + `magazi-toixos-kleidion.jpg` | entrance + key wall; the key wall is hidden below 640px (it is already in the family photo) |
  | Gallery «Από τη δουλειά μας» (6) | `douleia-*.jpg` (900×1200) | gate, electronic lock, new cylinder, remote repair, gate electric lock, wooden-door lock: 3 with people, 3 objects |
  | Process «Μια πόρτα, βήμα βήμα» (8) | `diadikasia-1…8-*.jpg` (900×1200) | photos #17, #37, #10, #26, #45, #51, #42, #21 of one wooden-door job |

### Video
- At most **one** looping video per page. It's muted with **no audio track** in the file, has a poster frame and `playsinline`, and is H.264 MP4 with faststart, kept under about 600 KB.
- It plays only while on screen (IntersectionObserver). It never autoplays under `prefers-reduced-motion`. It always has a visible pause/play button (WCAG 2.2.2).
- Loops must be seamless. Use a ping-pong (forward then reverse) when the start and end frames don't match.
- The current file is a ping-pong of V10 from 0 to 3.8s, cropped 4:3 to 320×240. The source videos arrived Viber-compressed at 320×568. Swap in the original when the client sends it.
- **Treatment, per CLAUDE.md:** a gradient overlay `linear-gradient(to top, rgba(26,22,20,.6), transparent)` where text sits on the photo, plus a colour layer of `--burgundy` with `mix-blend-mode: multiply` at about 12–18% opacity, so the mixed photos read as one set.
- The source photos are 1200×1600 and compressed, so they're fine for cards. Full-width hero use needs the originals from the client.

## 9. Motion
- Animate only `transform` and `opacity`. Never use `transition-all`.
- **One** orchestrated moment: the hero load sequence. No fade-up on every section.
- **Every other motion answers the visitor or carries information, and works on phones:**
  - the hero numbers count up
  - the live status dot pulses
  - the call bar slides in after the hero and its phone icon rings once
  - the key slides into place
  - the gallery focus follows the finger
  - the process wipes from step to step
  - an opened FAQ glides into view
  - the menu links slide in
- **What we don't use on phones:** sticky section titles like the desktop FAQ column. On a phone they cost reading space between the header and the call bar.
- Easing:
  - press/hover: `cubic-bezier(0.34, 1.56, 0.64, 1)` (spring), 180–240ms
  - reveals: `cubic-bezier(0.22, 1, 0.36, 1)`, 500–700ms
- Respect `prefers-reduced-motion: reduce`, which turns off everything except instant state changes.

## 10. Voice (Greek copy)
- **Address the customer as «εσείς».** Use simple verbs, short sentences, and no marketing filler.
- **Only verifiable facts:** 35 years, three people in one family, the shop at Θεμιστοκλέους 31, 4.8★ from 74 reviews (update this number as it changes).
- **Never:**
  - «24/7», «ερχόμαστε σε 15'», «Νο1», «οι καλύτεροι»
  - «εξουσιοδοτημένος αντιπρόσωπος» (unless confirmed)
- **Openings (ανοίγματα):** mention that ID or proof of residence is required. It builds trust.
- **Hours** go exactly as on GBP:
  - Mon & Wed 9:00–16:00
  - Tue, Thu, Fri 9:00–20:00
  - Sat 10:00–14:30
  - Sun closed

## 11. Sharing & search
- **Link preview:** `assets/images/og-image.jpg` (1200×630) shows the hero photo, the white mark, the name, the phone and the address. It's referenced with an **absolute** URL on `https://www.kleidarasprintezis.gr/`; a relative path shows no image in Viber, Facebook or WhatsApp. It's rendered from HTML with the site's fonts, so re-render it if the name, phone or address change.
- **Canonical:** `https://www.kleidarasprintezis.gr/`, so the `*.vercel.app` copy isn't indexed as a second site. Until the domain points at Vercel, previews of the vercel.app link show no image.

## CSS tokens
```css
:root {
  --burgundy: #7A1F2B;
  --burgundy-deep: #4E1219;
  --burgundy-tint: #F2E4E3;
  --brass: #B8893B;
  --brass-light: #D4AE6A;
  --brass-dark: #8A6424;
  --ink: #1A1614;
  --graphite: #596064;
  --nickel: #EEF0EF;
  --nickel-2: #E1E5E5;
  --white: #FFFFFF;
  --line: #CDD3D4;

  --font-display: Piazzolla, Georgia, serif;
  --font-body: "Commissioner", system-ui, sans-serif;

  --radius-btn: 10px;
  --radius-card: 16px;
  --radius-panel: 24px;

  --shadow-elevated: 0 1px 2px rgba(26,22,20,.06), 0 10px 28px -10px rgba(78,18,25,.18);
  --shadow-floating: 0 2px 4px rgba(26,22,20,.08), 0 18px 44px -12px rgba(78,18,25,.35);

  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```
