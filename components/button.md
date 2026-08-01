# Button

## Purpose

Buttons represent a clear action. They should feel crisp, direct, and slightly formal rather than playful or inflated.

Use a link when navigation is the action. Use a button when the interface performs an action.

## Anatomy

A button may contain:

- Label
- Optional leading or trailing icon
- Visible focus indicator

Buttons should not contain paragraphs, badges, or multiple competing labels.

## Variants

### Primary

Use for the single most important action in a section.

- Background: `ink`
- Text: `paperBright`
- Border: `ink`
- Hover: background `signal`
- Pressed: background `signalDark`

### Secondary

Use for supporting actions.

- Background: transparent
- Text: `ink`
- Border: `line`
- Hover: border `ink`, background `paperBright`

### Text

Use for low-emphasis actions or compact navigation.

- Background: transparent
- Text: `ink`
- No persistent border
- Underline or directional movement on hover

## Dimensions

- Minimum height: `2.75rem`
- Horizontal padding: `1rem` to `1.5rem`
- Gap between icon and label: `0.5rem`
- Radius: `0.25rem`
- Border: `1px`
- Label weight: `500`

Buttons should not look like pills by default.

## States

### Default

Stable and unambiguous.

### Hover

Use one clear change. Do not combine scale, shadow, color, and movement simultaneously.

### Focus

Use a visible two-part focus ring:

```css
outline: 2px solid var(--color-signal);
outline-offset: 3px;
```

Never remove focus styling without replacing it.

### Active

Use a subtle downward translation or darker surface:

```css
transform: translateY(1px);
```

### Disabled

- Reduced contrast
- No hover response
- `cursor: not-allowed`
- Preserve readable text

Do not use disabled buttons when explanatory text or validation would be clearer.

## Motion

- Duration: `120–200ms`
- Easing: standard
- Respect `prefers-reduced-motion`

## Content rules

Labels should begin with a verb when possible:

- View résumé
- Explore projects
- Read the case study
- Send a message

Avoid:

- Click here
- Submit
- Learn more, when a more specific label is possible

## Example

```html
<a class="button button--primary" href="/resume.pdf">
  View résumé
</a>
```

## Anti-patterns

Avoid:

- Multiple primary buttons beside one another
- Oversized pill buttons
- Icons without accessible labels
- Vague action text
- Gradient fills
- Heavy drop shadows
- Bouncy hover animation
