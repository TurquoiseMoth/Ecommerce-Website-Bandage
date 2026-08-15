# Bandage — E-Commerce Landing Page

A responsive storefront landing page for **Bandage**, rebuilt from the "Bandage" Figma design as a modern React single-page application. Built for the Learnable frontend program.

The final implementation is intentionally **landing-page only**. There is no cart, checkout, authentication, or product-detail page in the codebase; those were removed during a final cleanup pass (see the git history).

## Project Overview

- **What it is:** A single-page landing page for the Bandage storefront design, built with React + TypeScript and styled with vanilla CSS.
- **What the landing page contains:** A promotional top bar and navigation header, a category/hero showcase, a "Bestseller Products" grid fed live from the DummyJSON API, a services section, featured posts, a testimonial section with an image collage, a call-to-action banner, and a footer with a newsletter form.
- **Purpose:** To turn a given Figma design (Bandage) into a working, responsive React application and to practice real API integration with Redux Toolkit and RTK Query.
- **Data:** Product content (images, titles, categories, prices, discounts) comes from the public [DummyJSON](https://dummyjson.com/products) API. All other content is static and matches the design.

## Features

- Responsive header with desktop navigation and a mobile hamburger menu (sticky on mobile)
- Promotional top bar (desktop only) with contact info and social icons
- Category showcase built with CSS Grid (one large tile spanning two rows, a wide tile, and two small tiles)
- **Bestseller Products** grid rendered from DummyJSON via RTK Query
- Product cards showing thumbnail, title, category, and original vs. discounted price (the discount is computed from the API's `discountPercentage`)
- "Load More Products" progressive reveal (10 more per click on desktop, 5 more on mobile)
- Services section
- Featured Posts section
- Testimonial section with a star rating and a 3×3 image collage
- Call-to-action banner
- Footer with link columns and a newsletter form (client-side validation + alert on submit)
- Responsive layout that steps the product grid from 5 columns down to a single column on small phones

## Tech Stack

| Layer | Technology |
| --- | --- |
| Language | TypeScript |
| UI | React 19 |
| Build tool | Vite |
| Routing | React Router 7 (`react-router-dom`) |
| State management | Redux Toolkit + React Redux |
| Data fetching / caching | RTK Query |
| Styling | Vanilla CSS (BEM-style class names), one CSS file per component |
| Fonts | Montserrat (Google Fonts) |

## Project Structure

```
├── index.html                  Vite entry HTML (mounts #root)
├── vite.config.ts              Vite config (React plugin; default build output → dist/)
├── tsconfig*.json              TypeScript project configs
├── eslint.config.js            ESLint flat config
├── public/
│   ├── images/                 Static images (categories, posts, CTA, testimonial avatar + collage)
│   └── icons/                  SVG icons used across the UI
└── src/
    ├── main.tsx                Entry point: Redux <Provider> wraps <App/>
    ├── App.tsx                 Router: "/" → Home, "*" → Home (wildcard fallback)
    ├── index.css               Global reset + Montserrat + shared typography
    ├── app/store.ts            Redux store (productsApi reducer + middleware)
    ├── services/productsApi.ts RTK Query API definition (DummyJSON endpoints)
    ├── types/product.ts        Shared Product / ProductReview interfaces
    ├── pages/
    │   └── Home/Home.tsx       The landing page: fetches products and composes sections
    └── components/
        ├── Header/             Top bar, main nav, mobile hamburger menu
        ├── CategoryShowcase/   Hero / category tiles
        ├── ProductGrid/        Responsive grid that maps products → cards
        ├── ProductCard/        Single product card
        ├── Services/           Services section + CTA banner
        ├── FeaturedPosts/      Blog-style posts row
        ├── Testimonials/       Testimonial + 3×3 collage
        └── Footer/             Footer links + newsletter form
```

## Installation

```bash
npm install
```

Requires Node.js (recent LTS recommended) and npm.

## Running Locally

```bash
npm run dev
```

Vite starts the dev server at http://localhost:5173.

## Build

```bash
npm run build
```

Runs the TypeScript check (`tsc -b`) and then `vite build`, outputting a static site to `dist/`.

Additional scripts:

```bash
npm run preview   # serve the production build locally
npm run lint      # ESLint (flat config)
```

## Deployment

The project deploys to Netlify as a static site. There is no Netlify configuration file in the repository; the Vite build produces the site in `dist/` (the default output folder, since `vite.config.ts` only adds the React plugin).

Two options:

1. **From GitHub:** Connect the repository ([github.com/TurquoiseMoth/Ecommerce-Website-Bandage](https://github.com/TurquoiseMoth/Ecommerce-Website-Bandage)) to a new Netlify site, then set:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. **Manual:** Run `npm run build` locally and drag-and-drop the `dist/` folder into the Netlify Dashboard.

> Note: The app uses `BrowserRouter`, so direct visits to sub-paths (e.g. `/shop`) will 404 on Netlify unless an SPA redirect is added (a `public/_redirects` file containing `/* /index.html 200`, or the equivalent `netlify.toml` redirect rule). This file is not currently in the repository.

## Live Deployment

[https://ecommerce-website-bandage.netlify.app/]

## State Management & API

- The Redux store (`src/app/store.ts`) is configured with `configureStore`. Its only registered slice is the RTK Query API reducer (under `productsApi.reducerPath`), with the API middleware appended to the default middleware.
- The API (`src/services/productsApi.ts`) is created with `createApi` and a `fetchBaseQuery` pointing at `https://dummyjson.com`. It defines two endpoints:
  - `getProducts` → `GET /products` (used by the Home page)
  - `getProductById` → `GET /products/:id` (defined, but unused — there is no product-detail page)
- The Home page calls `useGetProductsQuery()` and reads `data.products`. The list is sliced to the current "Load More" count and passed to `ProductGrid`, which renders one `ProductCard` per product. Once fetched, the data is served from the Redux cache on re-renders without a new network request.
- No other Redux state exists (no cart, no authentication); the store holds only the API cache.

## Implementation Notes & Assumptions

- The header search, cart, and wishlist buttons are visual placeholders with no click handlers, as are the "Login / Register" link and the CTA banner button.
- Navigation links (Shop, About, Blog, Contact, Pages) point at routes that do not exist; the wildcard route in `App.tsx` renders the Home page for them, so every link effectively returns to the landing page.
- The product grid has no loading skeleton or error UI: only `data` is destructured from the query hook, so the grid is empty while the request is in flight and a failed request would render silently.
- `ProductCard` computes the discounted price from the API's `discountPercentage` and shows the category (title-cased) as the card's "department".
- The testimonial collage uses local `unsplash-*.png` images from `public/images/`.
- Responsive behavior relies on hand-tuned media queries, including exact-width breakpoints (320px, 375px) to match the target design and devices.
- Prices are displayed in USD (`$`), matching the DummyJSON data.
