# Color

## Purpose

The Mullin palette should feel intelligent, tactile, restrained, and unexpectedly alive. It should not look like a generic developer portfolio, a luxury-brand imitation, or a rainbow design system.

The default experience is warm and editorial: dark ink on soft paper, with one decisive signal color.

## Core palette

| Token | Hex | Role |
|---|---:|---|
| `ink` | `#171714` | Primary text, dark surfaces, strong rules |
| `paper` | `#F4F0E8` | Default page background |
| `paperBright` | `#FFFDF8` | Raised surfaces and cards |
| `graphite` | `#5F5E58` | Secondary text |
| `line` | `#D4CEC2` | Borders, dividers, quiet structure |
| `signal` | `#E94F37` | Primary accent, active states, small moments of emphasis |
| `signalDark` | `#B93526` | Accent hover and pressed state |
| `field` | `#DCE6DF` | Quiet alternate field or project surface |
| `night` | `#101820` | Optional dark section background |
| `white` | `#FFFFFF` | Text on dark or signal surfaces |

## Usage ratios

A typical page should feel roughly:

- 70–80% `paper` or `paperBright`
- 15–25% `ink`, `graphite`, and `line`
- 5% or less `signal`

The accent should behave like punctuation, not wallpaper.

## Rules

1. Use `ink` rather than pure black for large dark areas.
2. Use `paper` rather than pure white for the main canvas.
3. Reserve `signal` for actions, links, selected states, and deliberate graphic interruptions.
4. Do not use the accent merely to make an otherwise weak layout interesting.
5. Decorative color combinations should remain rare and project-specific.
6. Never communicate state through color alone.

## Accessible pairings

Preferred combinations:

- `ink` on `paper`
- `ink` on `paperBright`
- `white` on `ink`
- `white` on `night`
- `white` on `signalDark`
- `ink` on `field`

Check final implementations with automated contrast testing. Small text placed directly on `signal` should use the darker `signalDark` surface when contrast is insufficient.

## Dark sections

Dark mode is not the default visual identity. Dark sections may be used as chapter breaks, project showcases, or footer areas.

On a dark surface:

- Background: `night` or `ink`
- Primary text: `paperBright`
- Secondary text: `line`
- Accent: `signal`

## Anti-patterns

Avoid:

- Blue-purple SaaS gradients
- Large areas of saturated accent color
- Multiple competing accent colors
- Gray-on-gray interfaces with no hierarchy
- Pure black and pure white as the only palette
- “Luxury” palettes that rely on black and gold clichés
