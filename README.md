# 🚗 Edyelu Andrew - React + Tailwind Portfolio

A modern, fully-featured personal portfolio website celebrating the passion for luxury automotive design and performance. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router**.

---

## ✨ Features

- **Modern React Architecture** - Component-based design with hooks and state management
- **Dynamic Hero Slider** - Auto-rotating luxury car image carousel with manual navigation
- **Responsive Design** - Mobile-first approach, fully responsive across all devices
- **Smooth Page Routing** - React Router for seamless navigation between pages
- **Scroll Animations** - Intersection Observer-based reveal animations
- **Contact Form** - Functional form with real-time validation
- **Tailwind Styling** - Utility-first CSS with custom theme configuration
- **High Performance** - Vite for fast development and optimized builds
- **Professional Aesthetic** - Premium gold/navy color scheme with custom typography

---

## 🏗️ Project Structure

```
edyelu/
├── public/
│   └── images/                 # All car and hero images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu
│   │   ├── HeroSlider.jsx      # Hero section with image carousel
│   │   ├── Stats.jsx           # Statistics cards
│   │   └── Card.jsx            # Reusable card component
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── About.jsx           # About page
│   │   └── Contact.jsx         # Contact page with form
│   ├── App.jsx                 # Main app with routing
│   ├── index.css               # Tailwind imports + custom styles
│   └── main.jsx                # React entry point
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── index.html                  # HTML entry point
```

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **State Management**: React Hooks (useState, useEffect)
- **Fonts**: Google Fonts (Oxanium, Inter)

**Color Palette:**
```js
--primary: #f4b400 (Gold)
--secondary: #0f172a (Navy)
--light: #f8f6ef (Off-white)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (with npm or yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/edyeluandrew/3d-cars-site.git edyelu
   cd edyelu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit** `http://localhost:5173` (Vite default)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📄 Page Components

### Home (`src/pages/Home.jsx`)
- **HeroSlider**: Full-screen image carousel with auto-rotation
- **Stats**: Four stat cards showcasing interests
- **Intro Cards**: Three-column grid about personality & passions

### About (`src/pages/About.jsx`)
- **Hero Section**: Featured image + intro text
- **Who I Am**: Three-column personality cards
- **Why Cars**: Performance & design philosophy
- **Favorite Brands**: BMW, Mercedes, Audi cards

### Contact (`src/pages/Contact.jsx`)
- **Contact Info**: Email, phone, location cards
- **Contact Form**: Full validation with success/error messages
- **Responsive Layout**: Two-column on desktop, stacked on mobile

---

## 🧩 Component Details

### Navbar (`src/components/Navbar.jsx`)
```jsx
- Mobile hamburger menu toggle
- Active link highlighting with animated underline
- Sticky positioning
- Responsive collapse on small screens
```

### HeroSlider (`src/components/HeroSlider.jsx`)
```jsx
- Auto-rotates every 4 seconds
- Manual prev/next navigation
- Smooth opacity transitions
- Overlay for text readability
```

### Stats (`src/components/Stats.jsx`)
```jsx
- Intersection Observer for lazy animation
- Four stat cards in responsive grid
- Hover effects
```

### Card (`src/components/Card.jsx`)
```jsx
- Reusable wrapper component
- Shadow and hover effects
- Automatic reveal animation
```

---

## 🎨 Styling with Tailwind

### Custom Configuration (`tailwind.config.js`)

Custom colors and fonts are extended in the theme:

```js
extend: {
  colors: {
    primary: '#f4b400',
    'primary-hover': '#ffd54f',
    secondary: '#0f172a',
    light: '#f8f6ef',
    muted: '#64748b',
  },
  fontFamily: {
    display: ['Oxanium', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
  },
}
```

### Global Styles (`src/index.css`)

Custom animations and utility classes:
- `.reveal` - Scroll reveal animation
- `.reveal.active` - Active state for animations
- `@keyframes slideIn` - Smooth slide animation

---

## 📱 Responsive Design

**Breakpoints:**
- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px (lg breakpoint)
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Netlify
```bash
# Connect repo to Netlify
# Build command: npm run build
# Publish directory: dist
```

### Vercel
```bash
# Connect repo to Vercel
# Auto-detects Vite and builds automatically
```

---

## 📦 Dependencies

### Production
- **react** (^19.2.5) - UI framework
- **react-dom** (^19.2.5) - React DOM rendering
- **react-router-dom** (^6.4.3) - Client-side routing

### Development
- **vite** (^8.0.10) - Build tool
- **tailwindcss** (^4.2.4) - Utility-first CSS
- **autoprefixer** & **postcss** - CSS processing

---

## 🔄 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📧 Contact

**Email:** ayebareshivan@abcd.com  
**Phone:** +256 7xx xxx xxx  
**Location:** Uganda  

---

## 📄 License

MIT License - Open source

---

**Built with ❤️ using React + Tailwind CSS**
