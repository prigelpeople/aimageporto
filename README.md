# Prigel People - AI Image Showcase

A minimalist, high-contrast creative studio portfolio website built with Vite + React + TypeScript.

## Live Demo

[https://prigelpeople.github.io/aimageshowcase/](https://prigelpeople.github.io/aimageshowcase/)

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling (via CDN)
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/prigelpeople/aimageshowcase.git
cd aimageshowcase

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean` | Clean build artifacts |

## Deployment

This project auto-deploys to GitHub Pages on every push to `main` branch via GitHub Actions.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
```

## Project Structure

```
├── .github/workflows/    # GitHub Actions
├── public/
│   ├── images/          # Local images
│   └── logos/           # Brand logos
├── src/
│   ├── components/
│   │   ├── gallery/     # Gallery components
│   │   ├── hero/        # Hero section
│   │   ├── info/        # About/Contact
│   │   ├── layout/      # Header/Footer
│   │   ├── ui/          # Reusable UI
│   │   └── workflow/    # Process section
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── tsconfig.json
```

## License

All rights reserved. © 2024 Prigel People
