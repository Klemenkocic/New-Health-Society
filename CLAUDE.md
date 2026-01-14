# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **New Health Society (NHS)** website - a premium health and wellness platform built with Next.js 16, React 19, and Tailwind CSS 4. The site is exported as a static site and deployed to GitHub Pages with the base path `/New-Health-Society`.

## Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build production static export
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Important Build Configuration
- **Static Export**: This project uses `output: 'export'` in next.config.ts
- **Base Path**: All URLs must use `basePath` from `lib/utils.ts` (`/New-Health-Society`)
- **Image Optimization**: Disabled (`unoptimized: true`) for static export compatibility
- **React Compiler**: Enabled for automatic optimization

## Architecture

### Route Structure
The application follows Next.js App Router structure:
- `/` - Landing page (main marketing page)
- `/about` - About page with team, values, and founding story
- `/concept` - Concept explanation page with app features and health models
- `/braverman` - Interactive quiz/assessment page
- `/consultation` - Booking form page

### Component Organization

```
components/
├── landing/       # Homepage sections (hero, pricing, faq, etc.)
├── about/         # About page components (team, values, principles)
├── concept/       # Concept page components (app mockups, features)
├── braverman/     # Quiz engine and interactive assessments
├── consultation/  # Booking form components
├── layout/        # Shared layout components (navbar, footer)
└── ui/           # Reusable UI primitives (button, marquee)
```

### Key Design Patterns

1. **Component Composition**: Each page imports section components from the `components` directory
2. **Shared Layout**: Navbar and Footer are imported per-page (not in root layout)
3. **Static Assets**: Use `basePath` utility for all image/asset paths to handle GitHub Pages deployment
4. **Font Stack**:
   - `--font-inter`: Body text (Inter from Google Fonts)
   - `--font-playfair`: Decorative text (Playfair Display from Google Fonts)
   - `--font-brand`: Display text (Kobuzan CY Grotesk Grand Dark - local font)

### Styling System

The project follows a strict design language (see "NHS Design Language_ Technical Specifications.md"):

**Color Palette** (defined in `app/globals.css`):
- `--background`: #F3F0E5 (Soft off-white beige)
- `--foreground`: #293133 (Deep charcoal for text)
- `--primary`: #26538D (Deep professional blue)
- `--primary-dark`: #1E4270 (Darker blue for hover)
- `--accent`: #F0FFFF (Azure detail)

**Design Tokens**:
- Border radius: 8px (sm), 12px (md), 16px (lg), 24px (xl)
- Shadows: subtle, small, medium, large (defined as CSS variables)
- Transitions: Standard 200ms ease-in-out

**Key CSS Features**:
- **Grainy Backgrounds**: Use `.bg-grainy-beige` or `.bg-grainy-dark` classes for textured backgrounds
- **Glassmorphism**: Components use backdrop-filter blur effects with 0.7-0.8 opacity
- **Animated Blobs**: Root layout includes animated background blobs for visual interest
- **Animation**: Heavy use of Framer Motion for scroll-triggered animations and micro-interactions

### Dependencies

**Core**:
- Next.js 16.1.1 (App Router, static export)
- React 19.2.3
- Tailwind CSS 4 (with @tailwindcss/postcss)
- TypeScript 5

**UI & Animation**:
- Framer Motion 12 - All page transitions and scroll animations
- Radix UI - Accessible component primitives
- Lucide React - Icon system
- Embla Carousel - Image/content carousels
- class-variance-authority + clsx + tailwind-merge - Component variant styling

**Maps**:
- @react-google-maps/api - Location section map integration

## Development Guidelines

### Adding New Pages
1. Create route folder in `app/` directory
2. Create page components in corresponding `components/` subfolder
3. Import and compose components in `page.tsx`
4. Include Navbar and Footer in the page layout
5. Test static export build (`npm run build`) before committing

### Working with Images
Always use the `basePath` helper for image paths:
```tsx
import { basePath } from "@/lib/utils"

<img src={`${basePath}/images/example.jpg`} alt="..." />
```

### Styling New Components
1. Use Tailwind utility classes as primary styling method
2. For complex animations, use Framer Motion
3. Follow border-radius tier system (8/12/16/24px)
4. Use CSS variables for colors (var(--primary), etc.)
5. Apply grainy background classes where appropriate
6. Ensure hover states have smooth transitions (200-250ms)
7. Test with `prefers-reduced-motion` for accessibility

### Animation Guidelines
- Scroll animations: 600-700ms with cubic-bezier easing
- Button hovers: 200ms with translateY(-2px) lift + shadow increase
- Color transitions: 200-250ms ease-in-out
- Card hovers: translateY(-8px) with shadow lift
- Use GPU-accelerated properties (transform, opacity) for performance

### Data Files
`data/braverman.ts` contains quiz/assessment question data. This file should be imported when needed rather than duplicated.

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured: `@/*` maps to root directory
- ES2017+ target with modern module resolution

## Design Philosophy

The design aims to combine:
- **Premium elegance** (inspired by Oura Ring)
- **Modern tech confidence** (inspired by Superhuman)
- **Healthcare trustworthiness** (inspired by Circle Health)

Key principles:
- Smooth, purposeful transitions (never instant state changes)
- Depth through shadows and layering
- Glassmorphism for modern sophistication
- Consistent timing and easing across all animations
- Performance-optimized (60fps target)
- Accessibility-first (respects prefers-reduced-motion)

## Static Export Considerations

Since this project uses static export for GitHub Pages:
- No server-side rendering or API routes
- No dynamic routes (use static params only)
- Image optimization disabled (use standard img tags)
- All paths must account for base path
- Test production build locally before deploying

## Important Files

- `next.config.ts` - Next.js configuration with export settings
- `lib/utils.ts` - Utility functions including critical `basePath` constant
- `app/globals.css` - CSS variables, grainy backgrounds, design tokens
- `NHS Design Language_ Technical Specifications.md` - Comprehensive design system documentation
