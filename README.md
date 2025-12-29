# AXLY.pro — Marketing Website

Marketing website for the AXLY.pro mobile app. Built with React and hosted on GitHub Pages.

**Live site:** https://axly.pro

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 + TypeScript |
| Routing | React Router v7 |
| Styling | CSS with CSS Variables |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Project Structure

```
src/
├── assets/          # Logo and screenshots
├── components/      # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── AppPreview.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   └── Privacy.tsx
├── styles/          # Global styles
│   └── global.css
└── App.tsx          # Main app with routing
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Open http://localhost:3000

---

## Deployment

Deployments are automatic via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages

### Manual Build

```bash
npm run build
```

Output is in the `build/` folder.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, and app preview |
| `/privacy` | Privacy policy |

---

## Color Scheme

The site uses the same dark theme as the mobile app:

- **Primary:** `#E10600` (Red)
- **Secondary:** `#FDB813` (Yellow)
- **Background:** `#0F0F0F`
- **Surface:** `#121212`
- **Text:** `#E0E0E0`

---

## License

Copyright 2025 AXLY.pro. All rights reserved.
