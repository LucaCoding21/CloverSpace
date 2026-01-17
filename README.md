# PestRevenue.com Landing Page

A high-converting, production-ready landing page for a pest control marketing agency. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v3.4+** for styling
- **Framer Motion** for buttery smooth animations
- **shadcn/ui** components
- **React Hook Form + Zod** for form validation
- **Interactive Before/After Slider** - drag to reveal transformation
- **Animated Counters** - smooth number animations
- **Exit-Intent Popup** - captures leaving visitors
- **Schema.org JSON-LD** for SEO
- **Open Graph + Twitter Cards** for social sharing
- **Mobile-first responsive design**
- **Accessibility-focused** (keyboard navigation, screen readers)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
cd pestcontrol1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add your images:
   - Place `Before.png` in `/public/images/`
   - Place `After.png` in `/public/images/`
   - Recommended size: 1920x1080 or similar 16:9 ratio

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
pestcontrol1/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with SEO/Schema
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── select.tsx
│   ├── Header.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero with animated counters
│   ├── BeforeAfterSlider.tsx  # Interactive slider
│   ├── ProblemSolution.tsx    # Problem/solution section
│   ├── Services.tsx     # Services grid
│   ├── Process.tsx      # 4-step timeline
│   ├── Pricing.tsx      # Pricing tiers
│   ├── SocialProof.tsx  # Testimonials
│   ├── CTAForm.tsx      # Lead capture form
│   ├── Footer.tsx       # Footer with links
│   └── ExitIntentPopup.tsx    # Exit intent modal
├── lib/
│   └── utils.ts         # Utility functions
├── public/
│   └── images/          # Static images
│       ├── Before.png   # (Add your image)
│       └── After.png    # (Add your image)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#16a34a',  // Green
    // ... shades
  },
  accent: {
    DEFAULT: '#f97316',  // Orange (CTA buttons)
  },
}
```

### Content

- Edit component files directly to change text content
- Update `app/layout.tsx` for SEO metadata
- Modify pricing in `components/Pricing.tsx`
- Update testimonials in `components/SocialProof.tsx`

### Form Integration

The CTA form (`components/CTAForm.tsx`) currently logs submissions to console. To integrate with your backend:

1. Replace the `onSubmit` function with your API call
2. Add Calendly embed in the modal (replace placeholder)

```typescript
const onSubmit = async (data: FormData) => {
  const response = await fetch('/api/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  // Handle response
}
```

### Calendly Integration

Replace the placeholder in `CTAForm.tsx` with your Calendly embed:

```tsx
<InlineWidget url="https://calendly.com/your-link" />
```

## Performance Optimizations

- Images use Next.js Image component with lazy loading
- Fonts are preloaded with font-display: swap
- CSS is optimized with PostCSS/Autoprefixer
- Animations use GPU-accelerated transforms
- Components use React.memo where appropriate

## SEO Features

- Complete Open Graph meta tags
- Twitter Card meta tags
- Schema.org JSON-LD structured data
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for all images
- Canonical URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

Private - All rights reserved.

## Support

For questions or support, contact hello@pestrevenue.com
