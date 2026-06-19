# Sweet Pastry Bakery — Website Project

## Student Information
- Name: Christian Gowera
- Student Number: ST10538439
- Module: WEDE5020 — Web Development (Introduction)
- Year: 2026

## Project Overview
Website that works perfectly well, for Wede5020. Sjould be responsive!

## Website Goals and Objectives
- Increase online enquiries by 40% within just six months
- Show full product catalogue
- Provide contact and location accessibility

## Key Features
- 5 page HTML structure
- Working navigation
- Contact and enquiry forms (Part 3)

## Sitemap
- index. html — Homepage
- about.html — About Us
- products.html — Products
- enquiry.html — Enquiry Form
- contact.html — Contact & Map

## Timeline and Milestones
- Week 1–2: Part 1 (HTML + structure)
- Week 3–4: Part 2 (CSS + responsive)
- Week 5–6: Part 3 (JS + SEO + deployment)

## Changelog
### Part 1
- [2026-05-20] Initial project structure created
- [2026-05-20] All 5 HTML pages created with semantic markup
- [2026-05-20] Navigation links connected across all pages

### Part 1 Feedback Fixes
-  Fixed: added more better images 
-  Fixed: added missing comments to index.html

-  Fixed: deleted unnecessary images

## Part 2 Details

### CSS Stylesheet
- File: css/style.css
- Linked to all 5 HTML pages
- Fonts: Playfair Display (headings) + Lato (body) via Google Fonts

### Responsive Breakpoints
- Desktop: 1200px max-width container
- Tablet: max-width 768px — single column layout, stacked navigation
- Mobile: max-width 480px — reduced font sizes, compact spacing

### Responsive Techniques Used
- CSS custom properties (variables) for consistent theming
- CSS Flexbox for header and navigation layout
- CSS Grid for product cards and page sections
- Relative units (rem, %) throughout — no fixed px font sizes
- max-width: 100% on all images for responsive scaling
- Media queries at 768px and 480px breakpoints

### Screenshots 
- Desktop (1440px): [![alt text](<_C__Users_Christian_ST10538439-WEDE5020_index.html (2).png>)]
- Tablet (768px): [![alt text](<_C__Users_Christian_ST10538439-WEDE5020_index.html (1).png>)]
- Mobile (375px): [![alt text](_C__Users_Christian_ST10538439-WEDE5020_index.html.png)]

### Changelog — Part 2
- [2026-27-05] Created style.css
- [2026-27-05] Linked stylesheet and Google Fonts to HTML pages
- [2026-27-05] Added sticky header with flexbox navigation
- [2026-28-05] Added hero section with overlay and call-to-action button
- [2026-28-05] Added product card grid using CSS Grid
- [2026-28-05] Styled forms on enquiry.html and contact.html
- [2026-29-05] Add pseudo-classes (hover, focus, active) to nav and buttons
- [2026-29-05] Added tablet media query 768px
- [2026-29-05] Added mobile media query 480px
- [2026-29-05] Tested on Brave DevTools 
- [2026-27-05] Applied Part 1 feedback 

## Part 3 Details

### JavaScript Features
- Hamburger navigation menu (mobile toggle)
- Scroll fade-in animation using IntersectionObserver
- Active navigation link highlighting per page
- Product search bar and category filter on products.html
- Gallery lightbox with keyboard navigation (arrow keys + Escape)
- Enquiry form: full JS validation + dynamic pricing response
- Contact form: full JS validation + mailto email compilation

### SEO Implementation
- Unique title tags on all 5 pages
- Meta description on all 5 pages
- Meta keywords on all 5 pages
- robots.txt created at root
- sitemap.xml created at root
- All images have descriptive alt text

### Form Validation
- enquiry.html: name (letters only), email (format), phone (SA format 10 digits), product (required), date (future dates only), guests (positive number)
- contact.html: name, email (format), message type (required), message (minimum 20 characters)

### Deployment
- Platform: Netlify
- Live URL: https://shiny-donut-866d71.netlify.app/

### Changelog — Part 3
- [2026-06-19] Created js/main.js with hamburger nav and scroll animations
- [2026-06-19] Added product search and category filter on products.html
- [2026-06-19] Added gallery section and lightbox with keyboard support
- [2026-06-19] Added SEO meta tags to all 5 pages
- [2026-06-19] Added enquiry form JS validation with pricing response
- [2026-06-19] Added contact form JS validation with mailto functionality
- [2026-06-19] Created robots.txt and sitemap.xml
- [2026-06-19] Deployed live site to Netlify
- [2026-06-19] Updated README with Part 3 details and live URL

## References
- Unsplash. 2026. Available at: https://unsplash.com [Accessed: 20 May 2026].
- W3Schools. 2026. Available at: https://www.w3schools.com [Accessed: 20 May 2026].
- MDN Web Docs. 2026. JavaScript — HTML DOM. Available at: https://developer.mozilla.org [Accessed: 19 June 2026].
- Google Fonts. 2026. Playfair Display and Lato. Available at: https://fonts.google.com [Accessed: 20 May 2026].
- Netlify. 2026. Web deployment platform. Available at: https://www.netlify.com [Accessed: 19 June 2026].
- Font Awesome. 2026. Icon library. Available at: https://fontawesome.com [Accessed: 19 June 2026].