# Dremz Destination — Travel Agency Website

A fully responsive, multi-page, premium travel agency website (frontend-only) for **Dremz Destination**. The site must feel like a high-end, established travel brand with trust signals, conversion elements, and rich visual storytelling.

---

## Proposed Architecture

### File Structure
```
travel website/
├── index.html          ← Home page
├── packages.html       ← Tour Packages page
├── destinations.html   ← Destinations page
├── about.html          ← About Us page
├── gallery.html        ← Photo Gallery page
├── blog.html           ← Blog / Travel Tips page
├── contact.html        ← Contact page
├── css/
│   └── styles.css      ← Custom styles (beyond Tailwind)
├── js/
│   ├── app.js          ← Shared logic (navbar, footer, WhatsApp, popups)
│   ├── home.js         ← Home page specific (hero, carousels, counters)
│   ├── packages.js     ← Tour packages filtering, modals
│   ├── destinations.js ← Destination grid interactions
│   ├── gallery.js      ← Masonry + lightbox init
│   ├── blog.js         ← Blog card grid + article view
│   └── contact.js      ← Web3Forms submission + toasts
└── favicon.svg         ← Icon-only SVG logo for browser tab
```

### Why Multi-File Instead of Single HTML
- Each page is 500–1000+ lines; a single file would be 5000+ lines and unmaintainable.
- Shared components (navbar, footer, WhatsApp button) are injected via `app.js`.
- Easier to iterate on individual pages.

---

## CDN Dependencies

| Library | Purpose | CDN |
|---------|---------|-----|
| **Tailwind CSS v3** | Utility-first CSS | `cdn.tailwindcss.com` |
| **Swiper.js 11** | Carousels & sliders | `cdnjs.cloudflare.com` |
| **AOS.js 2** | Scroll animations | `cdnjs.cloudflare.com` |
| **GLightbox 3** | Gallery lightbox | `cdnjs.cloudflare.com` |
| **Font Awesome 6** | Icons | `cdnjs.cloudflare.com` |
| **Google Fonts** | Playfair Display + Inter | `fonts.googleapis.com` |

---

## Brand Design System

| Token | Value |
|-------|-------|
| Navy (primary bg) | `#0A1628` |
| Teal (accent) | `#0E7490` |
| Gold (CTA/accent) | `#F59E0B` |
| Light teal | `#14B8A6` |
| Off-white | `#F8FAFC` |
| Heading font | Playfair Display (serif) |
| Body font | Inter (sans-serif) |

---

## SVG Logo System

Three variants built in pure SVG using `<symbol>` + `<use>`:

1. **Horizontal** (icon + wordmark side-by-side) → Navbar
2. **Stacked** (icon above wordmark) → Footer & loading screen
3. **Icon-only** → Favicon & mobile sticky bar

**Icon concept chosen:** Stylized mountain range with sunrise arc — clean, minimal, scales from 40px to large. Uses `<linearGradient>` (teal→navy) and a subtle gold glow `<filter>`.

The wordmark uses `<text>` elements referencing page-loaded Google Fonts (Playfair Display for brand name, Inter for tagline "Explore. Experience. Escape." in small-caps gold).

---

## Build Phases

### Phase 1: Foundation & Shared Components
**Files:** `css/styles.css`, `js/app.js`, `favicon.svg`

- Custom CSS: animations, gradients, glassmorphism cards, custom scrollbar, loading screen
- Tailwind config script (extend colors, fonts)
- SVG logo system (all 3 variants as inline `<svg>` injected by JS)
- Sticky navbar component (transparent → solid on scroll, mobile hamburger menu, "Get a Free Quote" gold CTA)
- Footer component (stacked logo, links grid, social icons with WhatsApp + Instagram prominent, newsletter signup with success toast, trust seals)
- Floating WhatsApp button (bottom-right, pulse animation, links to `wa.me/918178390282`)
- Mobile sticky "Book Now" bar (bottom, visible on mobile only)
- Discount popup (appears after 10 seconds: "Get ₹500 off — talk to us on WhatsApp!")
- Toast notification system (success/error)

---

### Phase 2: Home Page (`index.html` + `js/home.js`)

| Section | Details |
|---------|---------|
| **Hero** | Full-screen background (Unsplash travel image), animated headline with typewriter/fade effect, search bar (destination dropdown, dates, travelers), dual CTA buttons |
| **Featured Destinations Carousel** | Swiper.js carousel, 6-8 destination cards with overlay text, autoplay |
| **Why Choose Us** | 4 trust badges with icons: 10+ Years, 5000+ Travelers, 24/7 Support, 100% Customizable |
| **Popular Tour Packages** | 6 pricing cards grid: image, title, duration, price, rating stars, highlights, "Limited Slots" urgency tag, "Book Now" → WhatsApp |
| **Testimonials Slider** | Swiper.js slider, 5 testimonials with photos (Unsplash portraits), star ratings, traveler name/location |
| **Partner Logos** | Horizontal scrolling strip of travel/certification logos |
| **Final CTA Banner** | Full-width gradient banner with bold text + "Plan Your Dream Trip" button |

---

### Phase 3: Tour Packages Page (`packages.html` + `js/packages.js`)

- **Filter bar:** Destination, Budget range, Duration, Type (Adventure / Honeymoon / Family / Group)
- **Package cards grid:** Responsive grid, each card: image, title, duration, price (₹), rating stars, highlights list, "Limited Slots" badge, "Book Now" + "View Details" buttons
- **Package detail modal:** Opens on "View Details" click:
  - Hero image + photo gallery thumbnails
  - Itinerary accordion (Day 1, Day 2, etc.)
  - Inclusions / Exclusions lists with checkmarks/crosses
  - Booking inquiry form (Name, Email, Phone, Travel Dates, Travelers, Message)
  - "Book via WhatsApp" button with pre-filled message

---

### Phase 4: Destinations Page (`destinations.html` + `js/destinations.js`)

- **Visual grid** of 8-10 destinations (India regions, Southeast Asia, Europe, etc.)
- **Hover overlays** with destination name + "Explore" button
- **Destination detail view** (shown on click, within same page via JS):
  - Hero banner with destination image
  - Best time to visit, highlights
  - Top tours for that destination (mini cards)
  - "Plan This Trip" CTA → WhatsApp

---

### Phase 5: About Us Page (`about.html`)

| Section | Details |
|---------|---------|
| **Hero banner** | "Our Story" with background image |
| **Company story** | 2-column layout: text + image |
| **Team cards** | 4 team member cards with photos, name, role |
| **Stats counter** | Animated on scroll (AOS): 500+ Trips, 25+ Countries, 5000+ Happy Travelers, 10+ Years |
| **Certifications** | Award/certification badges |
| **Values section** | 3-column icons + text: Safety, Customization, Sustainability |

---

### Phase 6: Gallery Page (`gallery.html` + `js/gallery.js`)

- **Masonry photo grid** using CSS columns
- **Filter tabs:** All, India, Southeast Asia, Europe, Adventure, Honeymoon
- **GLightbox integration** for full-screen lightbox on click
- 20+ curated Unsplash travel images with captions

---

### Phase 7: Blog Page (`blog.html` + `js/blog.js`)

- **Card grid** of 6 blog posts: featured image, title, excerpt, category tag, date, read time
- **Category filter tabs:** All, Travel Tips, Destination Guides, Packing, Budget Travel
- **Article detail view** (JS-driven, within same page): Full article with rich typography, inline images, related posts sidebar

---

### Phase 8: Contact Page (`contact.html` + `js/contact.js`)

- **Contact form** integrated with **Web3Forms** (`https://api.web3forms.com/submit`):
  - Fields: Name, Email, Phone, Destination of Interest, Travel Dates, Number of Travelers, Message
  - Access key field (hidden)
  - On success: branded toast "Our travel expert will reach out within 2 hours!"
  - On error: error toast with retry option
- **Contact info cards:** Phone (+91 81783 90282), Email, Office Address
- **WhatsApp button** (large, prominent): `https://wa.me/918178390282?text=Hi!%20I'm%20interested%20in%20booking%20a%20trip.%20Please%20share%20details.`
- **Instagram link** (prominent)
- **Google Maps embed** (iframe)

---

## Trust & Conversion Elements (Global)

| Element | Implementation |
|---------|---------------|
| "100% Customizable Trips" badge | Hero section + footer |
| SSL / Secure Booking seal | Footer trust badges row |
| Testimonials with stars + photos | Home page slider + scattered on other pages |
| Sticky mobile "Book Now" bar | Fixed bottom bar on mobile (all pages) |
| "Limited Slots" urgency tags | Tour package cards |
| ₹500 off popup | JS timer (10s), dismissible, WhatsApp link |
| "Get a Free Quote" CTA | Navbar button (all pages) |

---

## WhatsApp Integration

All "Book Now", "Enquire", and CTA buttons → open WhatsApp:
```
https://wa.me/918178390282?text=Hi!%20I'm%20interested%20in%20booking%20a%20trip%20to%20[DESTINATION].%20Please%20share%20details.
```
The `[DESTINATION]` part is dynamically filled based on the package/destination context.

---

## User Review Required

> [!IMPORTANT]
> **Web3Forms Access Key**: You need a free access key from [web3forms.com](https://web3forms.com). I'll use a placeholder key (`YOUR_ACCESS_KEY_HERE`) that you'll replace with your real key. It takes 30 seconds to get one — just enter your email on their site.

> [!IMPORTANT]
> **Instagram Profile URL**: Please provide your Instagram profile URL. I'll use a placeholder `https://instagram.com/dremzdestination` for now.

> [!IMPORTANT]
> **Office Address**: Please provide a real office address for the Google Maps embed and contact info. I'll use a placeholder for now.

---

## Open Questions

> [!NOTE]
> **Email Address**: What email should be displayed on the contact page? I'll use `vimalku8178@gmail.com` as placeholder.

> [!NOTE]
> **Google Maps Location**: What location should the Google Maps embed show? I'll use a generic New Delhi location as placeholder.

---

## Verification Plan

### Automated Tests
- Run the site on local IP (`npx serve -l 3000 --cors` or Python HTTP server bound to `0.0.0.0`) for mobile testing
- Browser test: navigate all pages, test all interactive elements (filters, modals, carousels, form submission)
- Responsive check: test at 375px, 768px, 1024px, 1440px viewports

### Manual Verification
- Visual check of all pages on desktop and mobile (via phone on same network)
- Test WhatsApp links open correctly with pre-filled messages
- Test Web3Forms submission (requires real access key)
- Verify all animations (AOS scroll, Swiper carousels, hover states)
- Lighthouse performance audit
