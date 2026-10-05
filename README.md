# Ashan Odithya | Software Engineer Portfolio

My personal portfolio website, built to showcase my projects, skills and experience as a software engineer.

**Live site:** https://yourname.dev *(coming soon)*

## Tech stack

- **React 18** for the UI
- **Vite** for fast development and builds
- **Pure CSS animations** for lightweight, smooth motion (no heavy animation libraries)
- **Vercel** for hosting *(planned)*

## Features

- Editorial single-page layout: hero, about, tech stack, projects, experience, education, now, notes and contact
- Featured project card plus an auto-scrolling strip of more projects, each with a case study dialog
- Layered parallax portrait and a grey app-logo marquee
- Light/dark mode that remembers your choice
- Animated bento grid section (tech stack orbit, CI/CD pipeline, terminal typing, API request flow)
- Fully responsive, from mobile to large screens
- Respects the "reduce motion" accessibility setting
- Fast loading with minimal dependencies

## Getting started

Requirements: [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone https://github.com/AshanOdi/ashan-odithya-portfolio.git
cd ashan-odithya-portfolio
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the local development server    |
| `npm run build`   | Build the production version in dist/ |
| `npm run preview` | Preview the production build locally  |

## Project structure

```
portfolio/
├── public/                  # Static files (images, favicon, resume PDF)
├── src/
│   ├── components/
│   │   └── sections/        # Page sections (Hero, About, Projects...)
│   ├── data/                # Editable content: projects, experience, links...
│   ├── hooks/               # Small reusable React hooks
│   ├── App.jsx              # Puts all sections together
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── index.html
└── package.json
```

## Roadmap

- [x] Animated bento section
- [x] Navbar with light/dark mode
- [x] Hero section
- [x] About section
- [x] Tech stack / skills section
- [x] Featured projects with case studies
- [x] Experience timeline
- [x] Education & certifications
- [x] "Now" section
- [x] Blog / notes
- [x] Contact section
- [x] Footer, favicon, social meta and scroll reveal
- [ ] Replace mock content with real data (projects, experience, links, resume)
- [ ] Deploy to Vercel with a custom domain

## License

The code is released under the [MIT License](LICENSE). Personal content (text, photos, resume) belongs to me and may not be reused.
