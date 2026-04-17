# Design System Document: High-End Editorial

## 1. Overview & Creative North Star

### The Creative North Star: "The Analog Archive"
This design system is built to transform a personal blog into a curated collection of digital ephemera. Moving away from the rigid, boxed structures of standard templates, "The Analog Archive" treats the screen as a series of fine-paper sheets. It prioritizes emotional resonance over clinical utility, using intentional asymmetry, generous negative space, and high-contrast typography to evoke the feeling of a high-end literary journal.

The goal is to capture "pieces" of a university student's life not as a database, but as a narrative. We achieve this through "The Breathing Layout"—where content is allowed to sit off-center, encouraging the eye to wander and linger rather than rush to the next click.

---

## 2. Colors & Tonal Depth

The palette is rooted in warmth and organic transitions. It avoids the harshness of pure black or pure white, opting instead for an ivory base (`surface`) and earth-toned accents.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined solely through:
- **Background Color Shifts:** A `surface-container-low` section sitting on a `surface` background.
- **Tonal Transitions:** Using subtle shifts in the neutral scale to imply structure.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of paper. Use the surface-container tokens to create depth:
- **Base Layer:** `surface` (#fcf9f4) for the main page background.
- **Secondary Layer:** `surface-container-low` (#f6f3ee) for large content sections or sidebars.
- **Top Layer:** `surface-container-lowest` (#ffffff) for interactive cards or floating elements.

### Signature Textures & Soul
To move beyond "flat" design, apply these editorial touches:
- **The Glow CTA:** For primary buttons or critical highlights, use a subtle linear gradient transitioning from `primary` (#773c2b) to `primary_container` (#945341). This provides a "lit-from-within" quality.
- **Soft Glassmorphism:** Floating elements like the Navigation Bar must use a semi-transparent `surface` color with a `backdrop-blur` (e.g., 12px-20px) to allow the "Daily Pieces" of content to bleed through softly.

---

## 3. Typography: The Editorial Voice

Typography is the primary vessel for emotion in this system. We utilize a "High-Contrast Scale" to differentiate between the *feeling* of the title and the *clarity* of the thought.

- **The Serif (Newsreader):** Used for `display`, `headline`, and `title` roles. This font carries the "signature" of the author. It should feel large, authoritative, yet personal.
- **The Sans (Manrope):** Used for `body` and `label` roles. It provides a modern, clean counterpoint to the serif, ensuring that long-form reflections are legible and grounded.

### Typographic Hierarchy
- **Display-LG (3.5rem):** Reserved for the blog title "오늘의 조각" or major chapter headings. Use negative letter-spacing (-0.02em) for a tighter, premium look.
- **Body-LG (1rem):** The primary reading experience. Increase line-height to 1.6 or 1.8 to allow the university student’s words to "breathe" on the page.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows and structural lines are replaced by **Tonal Layering**. We communicate "upward" movement through color intensity rather than artificial light sources.

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f6f3ee) background. The change in "whiteness" creates a natural, soft lift.
- **Ambient Shadows:** Only use shadows for floating overlays (like tooltips or mobile menus). They must be:
    - **Color:** A tinted version of `on-surface` (#1c1c19).
    - **Opacity:** 4% - 6%.
    - **Blur:** Large (20px+) to mimic soft, ambient room light.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque outlines.

---

## 5. Components

### Navigation Bar
- **Style:** A floating, glassmorphic pill or a full-width header with no bottom border.
- **Logic:** Use `surface` at 80% opacity. Navigation links should use `label-md` in `on-surface-variant`.
- **Interaction:** The active state should be indicated by a soft `primary` dot below the text, not an underline.

### Blog Post Cards
- **Style:** No borders, no shadows. 
- **Structure:** Use an asymmetric layout. Place the image on a `rounded-lg` (0.5rem) container. The title (`title-lg`) should slightly overlap the image area or sit with wide margins to its side.
- **Background:** Set the card background to `surface-container-lowest` to make it pop against a `surface` or `surface-container-low` page.

### Buttons
- **Primary:** `primary` background with `on-primary` text. Use `rounded-full` for a soft, pebble-like feel. Apply the "Signature Texture" gradient.
- **Secondary:** No background. Use a `ghost-border` (15% `outline-variant`) and `primary` colored text.
- **Padding:** Editorial buttons require "Tall Padding" (e.g., 12px top/bottom, 24px left/right) to feel intentional.

### Chips (Tags)
- **Style:** Use `secondary-container` (#d7e4ca) with `on-secondary-container` (#5a6651) text.
- **Shape:** `rounded-md` (0.375rem). These act as "soft accents" that don't distract from the main typography.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace White Space:** If a section feels "empty," leave it. High-end design is defined by what you *don't* put on the page.
- **Use Asymmetry:** Shift text blocks 10-15% off the center axis to create a "scrapbook" editorial feel.
- **Focus on Kerning:** Pay close attention to the spacing in "오늘의 조각"—the serif characters need room to exist.

### Don't:
- **Don't use Divider Lines:** Use a 64px or 80px vertical gap (from your spacing scale) instead of a horizontal line to separate posts.
- **Don't use High-Contrast Shadows:** Avoid the "floating card" look common in SaaS dashboards. This is an archive, not a tool.
- **Don't use Pure Black:** Always use `on-surface` (#1c1c19) for text to maintain the warm, emotional tone of the system.