# ITZFIZZ — Scroll-Driven Hero Section

A premium scroll-driven hero animation built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **GSAP**.

## ✨ Features

- **Sticky scroll section** — 300vh scroll space, pinned track viewport
- **Car drives across the road** — position tied directly to scroll progress (no autoplay)
- **Letter-by-letter headline reveal** — "WELCOME ITZFIZZ" uncovers as the car passes each letter
- **Green trail** — car leaves a lime-green trail behind it
- **Staggered stat cards** — 4 metric cards animate in at scroll thresholds (18%, 34%, 52%, 68%)
- **Smooth scroll hint** — animated bar fades out after first scroll
- **After-section reveal** — IntersectionObserver triggers fade-in of summary stats
- **GSAP ScrollTrigger** — scrubbed, eased scroll binding for fluid motion
- **Fully responsive** — clamp() sizing, flexbox/grid layouts

## 🛠 Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| Framework    | Next.js 14 (App Router)     |
| UI Library   | React 18                    |
| Styling      | Tailwind CSS 3              |
| Animation    | GSAP 3 + ScrollTrigger      |
| Fonts        | Syne + DM Mono (Google)     |
| Deployment   | GitHub Pages (static export)|

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/-----/itzfizz-hero.git
cd itzfizz-hero

# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
```

## 📦 GitHub Pages Deployment

The project uses `output: 'export'` in `next.config.mjs`, so it generates a static `out/` folder.

```bash
npm run build
# Then push the `out/` folder to the `gh-pages` branch
# Or use GitHub Actions (see below)
```

### GitHub Actions (auto-deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 📁 Project Structure

```
itzfizz-hero/
├── app/
│   ├── globals.css        # Global styles, animations, curb, hint-bar
│   ├── layout.js          # Root layout + metadata
│   └── page.js            # Entry page (Navbar + HeroSection)
├── components/
│   ├── Navbar.js          # Fixed nav with mix-blend-mode: difference
│   ├── HeroSection.js     # All scroll animation logic (GSAP + ScrollTrigger)
│   └── CarSVG.js          # McLaren 720S top-view SVG illustration
├── next.config.mjs        # Static export config
├── tailwind.config.js     # Custom theme (colors, fonts)
└── package.json
```

## 🎨 Design Decisions

- **Color palette**: Charcoal track `#c8c8c0`, lime accent `#d1f542`, green road `#3a8a00`, brand orange `#fa7228`
- **Typography**: Syne (display, 800 weight) + DM Mono (labels/tags)
- **Motion**: GSAP `scrub: 1.1` for slightly lagged, silky-smooth car motion
- **Performance**: All animations use `transform` only — zero layout reflows on scroll

## 📄 License

MIT
