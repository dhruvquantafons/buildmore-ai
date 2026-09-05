# BuildMore AI — Platform, Modules & Architecture

A modern, high-performance, light-themed web application for **BuildMore AI**, built with **Next.js (App Router)** and vanilla CSS with custom properties, glassmorphism, dynamic canvas particle animations, and responsive micro-interactions.

BuildMore AI is an enterprise AI infrastructure and module ecosystem designed for scale, resilience, and digital transformation.

---

## 🚀 Features & Highlights

- **Modern Light UI & Glassmorphism Design**: Clean light theme with deep cyan (`#0891b2`) and amber (`#d97706`) accents, soft glassmorphism surfaces, subtle shadows, and smooth scroll animations.
- **Interactive Canvas Particle Grid**: Custom HTML5 Canvas particle system for dynamic hero section visual effects.
- **Comprehensive 34-Module Ecosystem**: Filterable module directory grouped across 8 domain stacks (Core AI Foundation, Document & Data, Agentic Automation, Multimodal Vision, Real-Time Voice, Enterprise Data & Analytics, Domain AI, Governance & Security).
- **Deep Architecture Overview**: Visual tier breakdowns (4 Tiers), interconnection flows, 6-phase strategic roadmap, market analysis, full technology stack, and leadership team overview.
- **Interactive Contact & Demo Form**: Glassmorphism inquiry form with client-side validation and feedback states.
- **Fully Responsive & Accessible**: Mobile-first navigation with drawer menu, keyboard accessibility, and optimized contrast.

---

## 📂 Project Structure

```text
buildmoreai/
├── public/
│   ├── icon.svg             # Favicon asset
│   └── ...
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout with Google Fonts & metadata
│   │   ├── globals.css      # Design system variables, keyframes & reset
│   │   ├── page.js          # Platform (Homepage)
│   │   ├── page.module.css  # Homepage styles
│   │   ├── modules/         # 34 Modules page route
│   │   │   ├── page.js
│   │   │   ├── ModulesClient.js
│   │   │   └── page.module.css
│   │   └── architecture/    # Architecture page route
│   │       ├── page.js
│   │       ├── ArchitectureClient.js
│   │       └── page.module.css
│   ├── components/
│   │   ├── Header.js & Header.module.css       # Sticky navbar
│   │   ├── Footer.js & Footer.module.css       # Platform footer
│   │   ├── ParticleGrid.js & ParticleGrid.module.css # Hero canvas particles
│   │   ├── ContactForm.js & ContactForm.module.css   # Interactive inquiry form
│   │   ├── RevealOnScroll.js                   # Scroll reveal animation wrapper
│   │   └── AnimatedCounter.js                  # Animated numeric counter
│   └── data/
│       ├── modules.js       # Module catalog & pricing dataset
│       └── architecture.js  # Tiers, flows, roadmap, stack & team dataset
├── package.json
└── README.md
```

---

## 🌐 Pages Overview

1. **Platform (`/`)**
   - Hero banner with animated canvas particle system
   - Core statistics counter bar
   - National AI Disaster band & problem statement
   - 8 Module Stacks spotlight grid
   - 4-Tier Architecture summary
   - 5 Core Product Principles & Key Differentiators
   - Enterprise CTA banner

2. **34 Modules (`/modules`)**
   - Quick jump navigation by stack category
   - Complete directory of 34 enterprise AI modules across 8 stacks
   - Detailed module cards featuring badges, metrics, tech tags, and capabilities
   - Flexible pricing tiers (Starter, Professional, Enterprise, Sovereign)

3. **Architecture (`/architecture`)**
   - 4-Tier Enterprise System Architecture breakdown
   - Module Interconnection Flows & Data Pipelines
   - 6-Phase Strategic Product Roadmap
   - Market Opportunity & Revenue Stream analysis
   - Full Core Technology Stack breakdown
   - Executive Leadership Team profiles
   - Enterprise Inquiry Contact Form

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `yarn` / `pnpm` / `bun`)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd buildmoreai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the assigned port, e.g. `http://localhost:3001`) in your browser.

### Production Build

Build and start the application for production:

```bash
npm run build
npm run start
```

---

## 🎨 Design Tokens & Customization

The design system uses CSS custom properties defined in `src/app/globals.css`:

- `--bg-primary`: `#f7f8fb` (Primary canvas background)
- `--bg-secondary`: `#eef1f6` (Secondary surface / tinted sections)
- `--accent-cyan`: `#0891b2` (Primary accent)
- `--accent-amber`: `#d97706` (Secondary contrast accent)
- `--text-primary`: `#0f172a` (Primary text)
- `--text-secondary`: `#475569` (Secondary text)
- `--bg-glass`: `rgba(255, 255, 255, 0.65)` (Glassmorphism backdrop surface)
- `--border-glass`: `rgba(15, 23, 42, 0.08)` (Subtle border)
- `--border-glow`: `rgba(8, 145, 178, 0.35)` (Accent border on hover/focus)
- `--gradient-cyan`: `linear-gradient(135deg, #0891b2 0%, #0e7490 100%)` (Primary CTA)
- `--shadow-card`: `0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)`
- `--shadow-glow-cyan`: `0 8px 30px rgba(8, 145, 178, 0.15)`

---

## 📄 License

This project is licensed under the MIT License.