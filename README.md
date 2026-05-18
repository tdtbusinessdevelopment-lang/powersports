# ⚡ PowerSport & PowerBeauty — Frontend

> **For the next OJT/Developer:** This README covers everything you need to understand, run, and continue building this frontend project. Read this fully before touching any code.

---

## 🗂️ What Is This Project?

This is the **company product showcase website** for **TDT Powersteel / PowerSport**. It's a marketing/catalog frontend that displays two product lines:

| Category | What it shows |
|---|---|
| **Chamber** | Hyperbaric oxygen pods & sauna tents (with specs like capacity, dimensions, weight) |
| **PowerBeauty** | Personal care & beauty devices (86+ products: hair care, skin care, shavers, nail tools, etc.) |

The site has **4 pages**: Home, Products (filterable by category), About, and Contact.

> ⚠️ **This is currently a static frontend only** — there is no backend API connected. All product data lives in `src/data/products.js`. If you need to connect it to a backend, see the **Backend Integration** section below.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| React Router DOM v7 | Client-side routing |
| Framer Motion | Animations & scroll effects |
| Tailwind CSS v3 | Utility-first styling |
| PostCSS + Autoprefixer | CSS processing |

---

## 📁 Project Structure

```
client/
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS config
├── package.json
└── src/
    ├── main.jsx                  # React root render
    ├── App.jsx                   # Router setup (all routes defined here)
    ├── index.css                 # Global base styles
    ├── App.css                   # App-level styles
    │
    ├── animations/
    │   └── variants.js           # Reusable Framer Motion animation variants
    │
    ├── assets/
    │   ├── chamber/              # Hyperbaric pod & sauna tent images
    │   ├── beauty/               # Beauty product images (b1.png → b86.png)
    │   ├── backgrounds/          # Hero/section background images
    │   └── ui/                   # UI decorative images (e.g. c1.png)
    │
    ├── data/
    │   └── products.js           # ⭐ All product data lives here
    │
    ├── pages/
    │   ├── Home.jsx              # Landing page
    │   ├── Products.jsx          # Product catalog with category filter
    │   ├── About.jsx             # About page
    │   └── Contact.jsx           # Contact page
    │
    └── components/
        ├── common/               # Shared across all pages
        │   ├── Navbar.jsx        # Top navigation bar
        │   ├── Footer.jsx        # Site footer
        │   ├── CTA.jsx           # Call-to-action section
        │   └── ScrollToTop.jsx   # Resets scroll position on route change
        ├── home/                 # Home page sections
        │   └── Categories.jsx    # Product category cards
        ├── products/             # Products page components
        │   ├── ProductHero.jsx   # Hero banner (changes per category)
        │   ├── ProductFilters.jsx# Category tab switcher
        │   ├── ProductGrid.jsx   # Paginated product grid
        │   └── ProductCard.jsx   # Individual product card
        ├── about/                # About page sections
        │   ├── AboutHero.jsx
        │   └── AboutContent.jsx
        └── contact/              # Contact page sections
            ├── ContactHero.jsx
            ├── ContactForm.jsx
            └── ContactInfo.jsx
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone <repo-url>
cd client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The site will be available at: `http://localhost:5173`

> The dev server also runs on your local network IP (because of `--host` flag), so you can open it on your phone/tablet too.

---

## 📋 npm Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build production bundle to `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🌐 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, categories, CTA |
| `/products` | Products | Product catalog, filterable by category |
| `/products?category=chamber` | Products | Pre-filtered to Chamber products |
| `/products?category=beauty` | Products | Pre-filtered to Beauty products |
| `/about` | About | Company info |
| `/contact` | Contact | Contact form + company details |

> The Products page uses **URL query params** (`?category=chamber`) to track which tab is active. This means users can share links to a specific category.

---

## 🛍️ How Products Work

All product data is stored in **`src/data/products.js`** as a plain JavaScript array called `PRODUCTS_DATA`.

### Product Object Structure

```js
// Chamber product (has specs)
{
  id: 1,
  category: 'chamber',       // 'chamber' or 'beauty'
  name: 'T1Series',
  image: p1,                 // imported image asset
  capacity: '1 person',
  dimensions: '2000x1170x1850mm',
  weight: '400kg',
  type: 'pod'                // 'pod', 'tent', or 'other'
}

// Beauty product
{
  id: 10,
  category: 'beauty',
  name: 'VITA Pro Multi-Function Hair Care Comb',
  image: b1,
  type: 'other'
}
```

### How to Add a New Product

1. **Add the image** to the correct folder in `src/assets/` (e.g., `src/assets/beauty/b87.png`)
2. **Import it** at the top of `src/data/products.js`:
   ```js
   import b87 from '../assets/beauty/b87.png';
   ```
3. **Add the object** to the `PRODUCTS_DATA` array:
   ```js
   {
     id: 96,              // next available ID
     category: 'beauty',
     name: 'Your Product Name',
     image: b87,
     type: 'other'
   }
   ```

That's it — the product will automatically appear in the grid.

---

## 🎨 Animations

All Framer Motion animation presets are stored in **`src/animations/variants.js`**. Import and reuse them in any component:

```jsx
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../../animations/variants';

// Usage example:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

### Available Variants

| Variant | Effect |
|---|---|
| `fadeUp` | Fades in while moving upward |
| `fadeLeft` | Fades in from the left |
| `fadeRight` | Fades in from the right |
| `scaleIn` | Fades in while scaling up |
| `staggerContainer` | Wraps children to animate them one by one |
| `navSlideDown` | Slides down from top (used by Navbar) |
| `pulse` | Infinite subtle pulse scale animation |

---

## 🔗 Backend Integration (Future Development)

Currently, all data is **hardcoded** in `src/data/products.js`. If the next developer needs to connect this to a live backend API (like the WIS Backend or a new product API), here's how to do it:

### Step 1 — Create a `.env` file
```env
# In the /client root directory
VITE_API_BASE_URL=http://localhost:3000/api
```
> ⚠️ In Vite, environment variables MUST start with `VITE_` to be accessible in the browser.

### Step 2 — Fetch products from the API
Replace the static import in `Products.jsx` with a `useEffect` fetch call:

```jsx
import { useState, useEffect } from 'react';

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_BASE_URL}/products?category=${activeCategory}`, {
    headers: {
      'Authorization': `Bearer ${yourSupabaseToken}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setLoading(false);
    });
}, [activeCategory]);
```

### Step 3 — Handle Auth (if backend requires it)
If using the WIS Backend (Supabase JWT), install Supabase in this project:
```bash
npm install @supabase/supabase-js
```
Then initialize it and use `supabase.auth.signInWithPassword(...)` to get the token — pass it in the `Authorization: Bearer <token>` header with every API request.

### Step 4 — Update CORS on the backend
In the WIS Backend `.env`, add this frontend's origin:
```env
ALLOWED_ORIGINS=http://localhost:5173
```

---

## 🗄️ Assets Folder Guide

```
src/assets/
├── chamber/         # Hyperbaric pod images (prods (1).png → PROD9.png, prodz.png)
├── beauty/          # Beauty device images (b1.png → b86.png)
├── backgrounds/     # Hero background images (bgchamber, beautybg, etc.)
└── ui/              # Misc UI images (c1.png for category cards)
```

> When adding new images, keep them organized in the correct subfolder and follow the existing naming pattern.

---

## ➕ How to Add a New Page

1. **Create the page** in `src/pages/YourPage.jsx`
2. **Add the route** in `src/App.jsx`:
   ```jsx
   import YourPage from './pages/YourPage';

   // Inside <Routes>:
   <Route path="/your-page" element={<YourPage />} />
   ```
3. **Add a nav link** in `src/components/common/Navbar.jsx`

---

## 🧩 Component Conventions

- Every page imports `<Navbar />` and `<Footer />` from `components/common/`
- Animations use `whileInView` with `viewport={{ once: true }}` so they only trigger once per scroll
- Category switching on the Products page updates the URL with `setSearchParams` so it's shareable

---

## 👤 Original Developer

Developed by **Kaiz Bautista** — OJT Intern at TDT Powersteel  
Turnover Date: May 2026

---

*Every component file has inline comments explaining what it does. Read those first if you're confused about specific behavior.*
