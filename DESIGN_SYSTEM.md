# Amik Aviation Design System

## Colors

### Brand Colors
- **Accent**: #f4c430 (primary actions, highlights)
- **Accent Hover**: #e0b02c (darker for hover states)

### Backgrounds
- **Background**: #f8fafc (page background)
- **Surface**: #ffffff (cards, modals)
- **Sidebar**: #1a1a2e (navigation background)

### Text
- **Text Primary**: #0f172a (headings, body)
- **Text Secondary**: #475569 (descriptions)
- **Text Muted**: #94a3b8 (metadata, disabled)

### Borders
- **Border**: #e2e8f0 (dividers, card borders)
- **Border Light**: #f1f5f9 (subtle separators)

### Semantic Colors
- **Success**: #22c55e (available, confirmed)
- **Warning**: #f4c430 (low availability, attention)
- **Error**: #ef4444 (full, validation errors)

## Typography

- **Font Family**: Geist Sans (fallback: system-ui, sans-serif)

### Scale
| Name    | Size  | Weight | Line Height | Usage                    |
|---------|-------|--------|-------------|--------------------------|
| Display | 30px  | 600    | 1.2         | Page titles              |
| Heading | 20px  | 600    | 1.3         | Section titles           |
| Body    | 14px  | 400    | 1.5         | Default text             |
| Caption | 12px  | 400    | 1.4         | Metadata, timestamps     |
| Micro   | 11px  | 500    | 1.3         | Badges only              |

### CSS Classes
```css
.text-display   /* Page titles */
.text-heading   /* Section titles */
.text-body      /* Default text */
.text-caption   /* Metadata */
.text-micro     /* Badges */
```

## Spacing Scale (8px base)

| Name | Value | Tailwind |
|------|-------|----------|
| xs   | 8px   | gap-2, p-2 |
| sm   | 16px  | gap-4, p-4 |
| md   | 24px  | gap-6, p-6 |
| lg   | 32px  | gap-8, p-8 |
| xl   | 48px  | p-12 |
| 2xl  | 64px  | section spacing |

## Border Radius

| Element     | Value  | CSS Variable         |
|-------------|--------|----------------------|
| Container   | 12px   | --radius-container   |
| Interactive | 8px    | --radius-interactive |
| Full        | 9999px | --radius-full        |

### Usage
- **Cards, modals, sections**: `rounded-xl` (12px)
- **Buttons, inputs**: `rounded-lg` (8px)
- **Avatars, indicators**: `rounded-full`

## Shadows

| Name     | Value                                                   | Usage           |
|----------|---------------------------------------------------------|-----------------|
| Subtle   | 0 1px 2px rgba(0,0,0,0.05)                              | Minimal depth   |
| Card     | 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)   | Cards, panels   |
| Elevated | 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)   | Dropdowns       |
| Modal    | 0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04) | Modals, dialogs |

### Usage in CSS
```css
shadow-[var(--shadow-card)]
shadow-[var(--shadow-modal)]
```

## Transitions

| Name   | Duration | Easing        | Usage                    |
|--------|----------|---------------|--------------------------|
| Fast   | 150ms    | ease-out      | Hover states, toggles    |
| Normal | 200ms    | ease-in-out   | Reveals, expansions      |
| Slow   | 300ms    | ease-in-out   | Page transitions         |

### Usage
```css
transition-all duration-150 ease-out  /* Fast */
transition-all duration-200           /* Normal */
transition-all duration-300           /* Slow */
```

## Components

### Button Variants
- **Primary**: Amber background, dark text. Use for ONE primary action per screen.
- **Secondary**: Slate background, white text. Use for secondary actions.
- **Outline**: Border only, no fill. Use for tertiary actions like "Search" or "Cancel".

### Button Sizes
- **sm**: px-3 py-1.5 text-sm
- **md**: px-4 py-2 text-sm (default)
- **lg**: px-6 py-3 text-base

### Input/Select
- Consistent padding: px-3 py-2
- Border radius: rounded-lg (8px)
- Focus ring: amber-400

### Cards
- Background: white
- Border radius: rounded-xl (12px)
- Shadow: --shadow-card

### Modal
- Overlay: bg-slate-900/40
- Animation: scale + fade
- Shadow: --shadow-modal

## Status Indicators

### Seat Availability
- **Available (normal)**: bg-slate-100 text-slate-700
- **Low (1-3 seats)**: bg-amber-100 text-amber-700
- **Full (0 seats)**: bg-slate-200 text-slate-400

### Date Indicators
- **Today**: border-b-2 border-amber-400, text amber
- **Selected**: border-b-2 border-slate-900, bg-slate-100

## Responsive Breakpoints

| Name | Min Width | Usage              |
|------|-----------|-------------------|
| sm   | 640px     | Mobile landscape   |
| md   | 768px     | Tablet             |
| lg   | 1024px    | Desktop            |
| xl   | 1280px    | Large desktop      |

### Sidebar Behavior
- **< 1024px (lg)**: Collapsible overlay, hamburger trigger
- **>= 1024px**: Static sidebar, always visible

## Accessibility

### Contrast Requirements
- Text on backgrounds: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: visible focus states

### Focus States
- Use `:focus-visible` for keyboard navigation
- Ring width: 2px
- Ring offset: 2px
- Ring color: matches component accent

## Animation Classes

```css
.animate-fade-in    /* Fade in */
.animate-scale-in   /* Scale + fade in (modals) */
.animate-slide-in   /* Slide from left (sidebar) */
```
