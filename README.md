# Ace Biz Website

A modern, high-performance website for Ace Biz - a leading accounting firm in Sydney.

## Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for modern, responsive design
- **Static Site Generation** for lightning-fast page loads
- **SEO Optimized** with proper metadata and structure
- **Mobile-First Design** that works on all devices
- **Fully Responsive** navigation and layout

## Pages Included

### Main Pages
- **Home** - Hero section, services overview, testimonials, and CTA
- **About** - Company story, values, mission, and vision
- **Contact** - Contact form and company information

### Service Pages
- Advisory - Business setup and strategic guidance
- Analytics & Automations - Data-driven insights and automation
- Accounting - Comprehensive accounting services
- Taxation - Tax planning and compliance
- Bookkeeping & Payroll - Financial management
- SMSF - Self-Managed Super Fund services

### Resources
- Due Dates - Important tax and compliance deadlines
- Links & Forms - Government portals and useful resources
- Thresholds - Current tax rates and thresholds
- Blog - Insights and articles (template with sample content)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd /workspace/.claude/ACEBIZ/acebiz-website
```

2. Install dependencies (already completed):
```bash
npm install
```

3. Start the development server (already running):
```bash
npm run dev
```

The website will be available at http://localhost:3000

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

### Start Production Server

After building, you can test the production build locally:

```bash
npm start
```

## Project Structure

```
acebiz-website/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── resources/           # Resources section
│   │   ├── blog/           # Blog page
│   │   ├── due-dates/      # Due dates page
│   │   ├── forms/          # Forms & links page
│   │   └── thresholds/     # Tax thresholds page
│   ├── services/            # Service pages
│   │   ├── accounting/
│   │   ├── advisory/
│   │   ├── analytics/
│   │   ├── bookkeeping/
│   │   ├── smsf/
│   │   └── taxation/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Navigation.tsx       # Main navigation
│   └── Footer.tsx          # Footer component
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Performance Improvements Over WordPress

This new website offers significant improvements:

1. **Faster Load Times**
   - Static generation instead of server-side rendering
   - Optimized JavaScript bundles
   - Minimal runtime overhead

2. **Better SEO**
   - Proper meta tags and structured data
   - Faster page loads (Google ranking factor)
   - Clean, semantic HTML

3. **Modern Design**
   - Contemporary UI/UX patterns
   - Smooth animations and transitions
   - Professional color scheme

4. **Mobile Optimization**
   - Mobile-first responsive design
   - Touch-friendly navigation
   - Optimized for all screen sizes

5. **Developer Experience**
   - Type-safe TypeScript
   - Modern React patterns
   - Easy to maintain and extend

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content
All page content is in the respective page files within the `app/` directory.

### Contact Form
The contact form currently logs to console. To make it functional:
1. Add a backend API endpoint or use a service like Formspree
2. Update the `handleSubmit` function in `app/contact/page.tsx`

## Deployment Options

This static site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## Support

For questions or issues, contact the development team.

## License

All rights reserved - Ace Biz 2025
