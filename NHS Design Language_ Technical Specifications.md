# NHS Design Language: Technical Specifications
## Making Websites Feel Alive & Purpose-Built

**Version:** 1.0  
**Last Updated:** January 2026  
**Purpose:** Technical design driver for Antigravity development team

---

## 1. Color System & Transitions

### Primary Color Palette

| Color | Hex | Usage | Transition |
| :--- | :--- | :--- | :--- |
| **Background** | `#F3F0E5` | Base page background | N/A (static) |
| **Text/Headlines** | `#293133` | Primary text, headings | Smooth 200ms on state change |
| **Accent (CTA/Data)** | `#26538D` | Buttons, links, highlights | 250ms ease-in-out |
| **Highlight** | `#F0FFFF` | Hover states, accents | 150ms ease-out |

### Color Transition Rules

All color changes must use smooth CSS transitions rather than instant changes. This creates a sense of responsiveness and polish.

```css
/* Standard color transition */
transition: color 200ms ease-in-out, background-color 250ms ease-in-out;

/* Hover state on buttons */
button {
  background-color: #26538D;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  background-color: #1E4270;
}
```

### Gradient Backgrounds

Use soft, directional gradients to create depth and visual interest without overwhelming the content.

**Hero Section Gradient:**
```css
background: linear-gradient(135deg, #F3F0E5 0%, #E8E4DC 50%, #F0FFFF 100%);
```

**Accent Gradient (for premium sections):**
```css
background: linear-gradient(135deg, #26538D 0%, #1E4270 100%);
```

**Glassmorphism Gradient (for overlays):**
```css
background: linear-gradient(135deg, rgba(243, 240, 229, 0.7) 0%, rgba(248, 245, 240, 0.5) 100%);
```

---

## 2. Borders & Border Radius

### Border Radius System

Consistent border radius creates visual cohesion and a modern, premium feel. Use a tiered system based on component size.

| Component Type | Radius | Use Case |
| :--- | :--- | :--- |
| **Small UI** | `8px` | Small buttons, badges, inputs |
| **Medium UI** | `12px` | Standard buttons, cards, modals |
| **Large UI** | `16px` | Large cards, hero sections |
| **Extra Large** | `24px` | Feature cards, product showcases |

### Border Styling

Borders should be subtle and purposeful, not decorative. Use them to define sections and create visual hierarchy.

```css
/* Subtle border for cards */
border: 1px solid rgba(41, 49, 51, 0.08);

/* Accent border for active states */
border: 2px solid #26538D;

/* Glassmorphic border */
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Border Transitions

Borders should animate when states change, creating tactile feedback.

```css
button {
  border: 2px solid transparent;
  transition: border-color 200ms ease-in-out;
}

button:hover {
  border-color: #26538D;
}
```

---

## 3. Shadows & Depth

### Shadow System

Shadows create depth and hierarchy. Use a consistent shadow scale to indicate elevation levels.

| Level | Shadow | Use Case |
| :--- | :--- | :--- |
| **None** | `none` | Flat, minimal elements |
| **Subtle** | `0 2px 4px rgba(41, 49, 51, 0.04)` | Borders, dividers |
| **Small** | `0 4px 8px rgba(41, 49, 51, 0.08)` | Cards, buttons |
| **Medium** | `0 8px 16px rgba(41, 49, 51, 0.12)` | Modals, dropdowns |
| **Large** | `0 16px 32px rgba(41, 49, 51, 0.16)` | Hero overlays, floating elements |

### Shadow Transitions

Shadows should animate on hover to indicate interactivity.

```css
.card {
  box-shadow: 0 4px 8px rgba(41, 49, 51, 0.08);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 12px 24px rgba(41, 49, 51, 0.16);
}
```

---

## 4. Glassmorphism & See-Through Effects

### Backdrop Filter (Frosted Glass Effect)

Create depth and layering by using semi-transparent elements with blur effects. This is particularly effective for overlays, modals, and floating cards.

```css
/* Glassmorphic card */
.glass-card {
  background: rgba(243, 240, 229, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 24px;
}

/* Glassmorphic button */
.glass-button {
  background: rgba(38, 83, 141, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  transition: all 200ms ease-in-out;
}

.glass-button:hover {
  background: rgba(38, 83, 141, 0.95);
  backdrop-filter: blur(12px);
}
```

### Opacity & Transparency Layers

Use opacity to create visual hierarchy and guide user attention.

```css
/* Primary text */
color: rgba(41, 49, 51, 1);

/* Secondary text */
color: rgba(41, 49, 51, 0.7);

/* Tertiary text */
color: rgba(41, 49, 51, 0.5);

/* Disabled state */
color: rgba(41, 49, 51, 0.3);
```

---

## 5. Button & Interactive Element Effects

### Button States

Every button should have clearly defined states with smooth transitions between them.

```css
/* Default state */
.btn-primary {
  background-color: #26538D;
  color: white;
  border-radius: 12px;
  padding: 12px 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 8px rgba(41, 49, 51, 0.08);
}

/* Hover state - scale + shadow lift */
.btn-primary:hover {
  background-color: #1E4270;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(41, 49, 51, 0.12);
}

/* Active state - pressed effect */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(41, 49, 51, 0.08);
}

/* Disabled state */
.btn-primary:disabled {
  background-color: rgba(41, 49, 51, 0.2);
  color: rgba(41, 49, 51, 0.5);
  cursor: not-allowed;
  transform: none;
}
```

### Secondary Button (Outlined)

```css
.btn-secondary {
  background-color: transparent;
  color: #26538D;
  border: 2px solid #26538D;
  border-radius: 12px;
  padding: 10px 22px;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background-color: rgba(38, 83, 141, 0.05);
  border-color: #1E4270;
  color: #1E4270;
}
```

### Icon Buttons

```css
.icon-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-out;
}

.icon-button:hover {
  background-color: rgba(38, 83, 141, 0.1);
  transform: scale(1.1);
}

.icon-button:active {
  transform: scale(0.95);
}
```

---

## 6. Scroll Animations & Parallax Effects

### Scroll-Triggered Fade-In

Elements should fade in and slide up as they enter the viewport, creating a sense of progression and engagement.

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-fade-in {
  animation: fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

/* Triggered via JavaScript/Intersection Observer */
.scroll-fade-in.in-view {
  animation: fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

### Parallax Scrolling

Create depth by moving background elements at different speeds than foreground content.

```css
.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
}

/* JavaScript parallax for better performance */
/* Use transform: translateY() based on scroll position */
```

### Scroll Speed Specifications

Define consistent scroll animation speeds for predictable, professional feel:

| Animation Type | Duration | Easing Function |
| :--- | :--- | :--- |
| **Fade-in** | 600ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Slide-in** | 700ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| **Scale-up** | 500ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Parallax** | Variable | `linear` (based on scroll) |

---

## 7. Hover & Interaction Effects

### Text Link Hover

```css
a {
  color: #26538D;
  text-decoration: none;
  position: relative;
  transition: color 200ms ease-in-out;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #26538D;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover {
  color: #1E4270;
}

a:hover::after {
  width: 100%;
}
```

### Card Hover Effects

```css
.card {
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(41, 49, 51, 0.08);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(41, 49, 51, 0.16);
  background-color: #F3F0E5;
}
```

### Input Field Focus

```css
input, textarea {
  border: 2px solid rgba(41, 49, 51, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 200ms ease-in-out;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #26538D;
  box-shadow: 0 0 0 3px rgba(38, 83, 141, 0.1);
  background-color: rgba(38, 83, 141, 0.02);
}
```

---

## 8. Micro-Animations & Transitions

### Loading States

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(38, 83, 141, 0.2);
  border-top-color: #26538D;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Pulse Animation (for notifications)

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Bounce Animation (for CTAs)

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.bounce {
  animation: bounce 2s ease-in-out infinite;
}
```

### Slide-In Animation

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

---

## 9. Easing Functions & Timing

### Standard Easing Curves

Use these easing functions consistently across all animations for a cohesive feel.

| Function | Value | Use Case |
| :--- | :--- | :--- |
| **Ease-out** | `cubic-bezier(0.4, 0, 0.2, 1)` | Default transitions, state changes |
| **Ease-in-out** | `cubic-bezier(0.4, 0, 0.6, 1)` | Smooth, natural movements |
| **Spring** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful, energetic animations |
| **Linear** | `linear` | Continuous rotations, parallax |
| **Ease-in** | `cubic-bezier(0.42, 0, 1, 1)` | Exit animations, fades |

### Animation Duration Guidelines

| Duration | Purpose |
| :--- | :--- |
| **150ms** | Micro-interactions (hover, focus) |
| **200ms** | Quick state changes |
| **300ms** | Standard transitions |
| **500-600ms** | Page transitions, scroll animations |
| **700-1000ms** | Complex multi-step animations |

---

## 10. Typography Animations

### Text Reveal Animation

```css
@keyframes textReveal {
  from {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

.text-reveal {
  animation: textReveal 800ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

### Letter Spacing Animation (on hover)

```css
h1, h2, h3 {
  transition: letter-spacing 300ms ease-in-out;
}

h1:hover, h2:hover, h3:hover {
  letter-spacing: 2px;
}
```

---

## 11. Dropdown & Modal Animations

### Dropdown Menu

```css
.dropdown {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```

### Modal Entrance

```css
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal {
  animation: modalSlideIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.modal-backdrop {
  animation: fadeIn 200ms ease-out forwards;
}
```

---

## 12. Performance Considerations

### GPU Acceleration

Use `will-change` and `transform`/`opacity` for animations to ensure smooth 60fps performance.

```css
/* Good - uses GPU acceleration */
.animated {
  will-change: transform, opacity;
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}

/* Avoid - causes layout thrashing */
.animated {
  transition: width 300ms ease-out, height 300ms ease-out;
}
```

### Reduced Motion

Respect user preferences for reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Implementation Checklist

- [ ] All color transitions use 200-250ms duration with ease-in-out
- [ ] Border radius follows the tiered system (8px, 12px, 16px, 24px)
- [ ] Shadows use the defined shadow scale
- [ ] Buttons have hover, active, and disabled states
- [ ] Glassmorphic elements use backdrop-filter with 0.7-0.8 opacity
- [ ] Scroll animations use Intersection Observer API
- [ ] All animations respect prefers-reduced-motion
- [ ] Easing functions follow the standard curves
- [ ] Animation durations stay within 150-1000ms range
- [ ] Hover effects include both visual and tactile feedback
- [ ] Links have underline animations on hover
- [ ] Cards lift on hover with shadow increase
- [ ] Parallax effects use transform for performance
- [ ] Loading states use smooth, continuous animations
- [ ] Modals and dropdowns have entrance/exit animations

---

## 14. Apple Design Principles Applied

### Consistency
All animations follow the same timing, easing, and visual language across the entire site.

### Responsiveness
Micro-interactions provide immediate visual feedback to every user action.

### Delight
Subtle animations and transitions create moments of joy without being distracting.

### Performance
All animations use GPU-accelerated properties (transform, opacity) for smooth 60fps performance.

### Accessibility
Animations respect `prefers-reduced-motion` and don't interfere with content readability.

---

## 15. Design Language Summary

The NHS website design language combines **premium elegance** (Oura Ring influence) with **modern tech confidence** (Superhuman influence) and **healthcare trustworthiness** (Circle Health influence). Every animation, border, color, and effect serves a purpose: to make the website feel alive, responsive, and purpose-built for ambitious professionals who value both performance and science.

**Key Principles:**
- Smooth, purposeful transitions (never instant)
- Depth through shadows and layering
- Glassmorphism for modern sophistication
- Consistent timing and easing
- Accessibility-first approach
- Performance-optimized animations

