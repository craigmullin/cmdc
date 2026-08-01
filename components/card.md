# Card

## Purpose

Cards group related content when the grouping is useful. They are not the default container for everything.

A Mullin card should feel like a composed editorial object: restrained border, strong internal hierarchy, and enough space to breathe.

## Appropriate uses

- Project preview
- Case-study summary
- Contact method
- Featured writing or experiment
- Compact status or metadata group

## Anatomy

A project card may contain:

1. Optional eyebrow label
2. Title
3. Short description
4. Metadata
5. Clear destination or action
6. Optional image

The whole card may be clickable only when it has one destination.

## Base style

- Background: `paperBright`
- Text: `ink`
- Border: `1px solid line`
- Radius: `0.625rem`
- Padding: `1.5rem`
- Shadow: none by default

Use shadow only when the card truly floats above another surface.

## Hover behavior

Clickable cards may:

- Change border from `line` to `ink`
- Translate upward by no more than `2px`
- Reveal a directional cue

Do not enlarge cards on hover.

## Featured card

A featured project may use:

- Dark `ink` or `night` background
- `paperBright` text
- Larger title
- Expanded image area
- Signal-colored metadata or rule

Featured treatment should indicate editorial importance, not merely visual variety.

## Content guidance

Descriptions should explain:

- What the project is
- Why it exists
- What Craig contributed

Prefer one or two concise sentences.

Good:

> A staged-conversation PWA for building realistic fictional chats, designed and developed with React, TypeScript, and Firebase.

Weak:

> This is a really cool app I made using several modern technologies.

## Layout

Cards may appear in a responsive grid, but avoid forcing equal heights when content differs substantially.

Suggested grid:

```css
grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
gap: var(--space-5);
```

## Accessibility

- Use semantic headings
- Maintain logical document order
- Give linked cards a visible focus state
- Do not place interactive controls inside a fully linked card
- Provide useful image alt text, or empty alt text for decorative images

## Example

```html
<article class="card">
  <p class="card__eyebrow">Product experiment · 2026</p>
  <h3 class="card__title">
    <a href="/projects/spikechat">Spikechat</a>
  </h3>
  <p class="card__description">
    A PWA for composing realistic fictional conversations with images and editable message states.
  </p>
  <p class="card__meta">React · TypeScript · Firebase</p>
</article>
```

## Anti-patterns

Avoid:

- A card around every section
- Nested cards
- Excessive shadows
- Decorative gradients
- More than one primary action
- Equal-height layouts that create large empty areas
- Hiding essential information until hover
