# Typography

## Intent

Typography should make Craig's work feel articulate, precise, cultured, and human. The system combines a practical sans serif, an expressive editorial serif, and a restrained monospaced face.

The typography should carry most of the personality. Decoration should not have to rescue it.

## Families

### Sans — Inter

Use for:

- Body copy
- Navigation
- Buttons
- Labels
- Interface text
- Metadata

Fallback:

```css
font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Serif — Cormorant Garamond

Use for:

- Hero statements
- Large editorial headings
- Pull quotes
- Occasional project titles

Fallback:

```css
font-family: "Cormorant Garamond", Georgia, serif;
```

The serif is a voice, not a costume. Do not use it for every heading.

### Mono — IBM Plex Mono

Use for:

- Dates
- Version labels
- Technical metadata
- Code-like annotations
- Small navigational eyebrow text

Fallback:

```css
font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
```

## Type scale

| Role | Token | Size | Notes |
|---|---|---|---|
| Display | `font.size.h1` | `clamp(3rem, 8vw, 7rem)` | Hero only |
| Section heading | `font.size.h2` | `clamp(2rem, 4vw, 3.5rem)` | Major sections |
| Subheading | `font.size.h3` | `1.5rem` | Card and subsection titles |
| Lead | `font.size.lead` | `1.25rem` | Introductory copy |
| Body | `font.size.body` | `1rem` | Default reading |
| Small | `font.size.sm` | `0.875rem` | Metadata and secondary copy |
| Micro | `font.size.xs` | `0.75rem` | Labels and version tags |

## Hierarchy

A page should usually contain:

- One true display statement
- A small number of section headings
- Clear body text
- Sparse mono labels

Do not create hierarchy by adding many weights, colors, and sizes at once.

## Line length and rhythm

- Default prose measure: `42rem`
- Body line-height: `1.6`
- Heading line-height: `1.08`
- Display line-height: `1.0`
- Body paragraphs should generally contain 45–75 characters per line
- Use generous vertical spacing between distinct ideas

## Weight

Use:

- `400` for most text
- `500` for emphasis and controls
- `600` for compact headings or strong labels

Avoid extra-bold typography. Scale and spacing should create authority before weight does.

## Tracking

- Large serif display: `-0.03em`
- Body copy: normal
- Mono eyebrow labels: `0.08em`, uppercase
- Never add wide tracking to paragraphs or long headings

## Responsive behavior

Display text should scale fluidly and wrap intentionally. Do not shrink a headline merely to keep it on one line.

On narrow screens:

- Keep body text at `1rem`
- Reduce horizontal padding before reducing type size
- Allow hero text to occupy multiple lines
- Preserve comfortable line-height

## Web-font implementation

For alpha 0.1, Google Fonts is acceptable. Load only the weights used.

Suggested families:

- Inter: 400, 500, 600
- Cormorant Garamond: 400, 500
- IBM Plex Mono: 400, 500

Use `font-display: swap`.

## Anti-patterns

Avoid:

- More than three font families
- Serif body paragraphs
- Excessive all-caps
- Tiny body copy
- Center-aligning long paragraphs
- Fake typewriter styling
- Using mono everywhere to signal “developer”
