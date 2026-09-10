# Satellite Tech — HTML, CSS & JavaScript Technical Reference

A structured, scannable technical breakdown of the HTML5 architecture, CSS3 design systems, and JavaScript client modules power this project.

---

## Quick Navigation

| Section | Core Technology | Primary File | Description |
| :--- | :--- | :--- | :--- |
| [1. HTML Architecture](#1-html-architecture) | Semantic HTML5 & ARIA | `*.html` | 10 dedicated pages, layout landmarks, and SEO tags |
| [2. CSS Architecture](#2-css-architecture) | CSS3 & Custom Properties | `css/style.css` | Design tokens, responsive grid systems, and components |
| [3. JavaScript Architecture](#3-javascript-architecture) | Vanilla ES6+ | `js/script.js` | Zero-dependency event listeners, validation, and observers |

---

## 1. HTML Architecture

```
/
├── index.html                           # Primary landing page
├── about.html                           # Company profile & architecture stack
├── services.html                        # Services catalog index
├── contact.html                         # Consultation inquiry & office details
└── service-*.html                       # 6 specialized service detail pages
```

### 1.1 Page Map & Descriptions

| File Name | Page Role | Core Sections Included |
| :--- | :--- | :--- |
| `index.html` | Homepage | `#hero`, `.trust`, `#about`, `#services`, `#technology`, `#process`, `#contact` |
| `about.html` | About Us | Hero, Engineering Pillars, Enterprise Solution Stack Schematic |
| `services.html` | Services Directory | Hero, 6 Core Practice Cards, Architecture Comparison, CTA Banner |
| `contact.html` | Contact Page | Hero, Corporate Information Card, Contact Form, Embedded Google Maps |
| `service-cloud-solutions.html` | Service Detail | Hero with Visual, Capabilities, Architecture Pillars, Case Insights |
| `service-cloud-migration.html` | Service Detail | Workload Migration Lifecycle, Database Re-platforming, Cutover Protocol |
| `service-architecture-review.html`| Service Detail | 6-Pillar Well-Architected Framework, Gap Analysis, Roadmap Deliverables |
| `service-iot-solutions.html` | Service Detail | Hardware Edge Telemetry, MQTT Message Brokers, Industrial Fleet IoT |
| `service-serverless.html` | Service Detail | Event-driven microservices, Lambda/Cloud Functions, Cold-Start Optimization |
| `service-networking-development.html`| Service Detail | Transit Gateways, SD-WAN, Microservice APIs (REST, gRPC), System Integration |


---

## 2. CSS Architecture (`css/style.css`)

All styling is managed through a single modular stylesheet configured with **Design Tokens**, **CSS Grid**, and **Flexbox** without external UI libraries.

### 2.1 Design Tokens (CSS Variables)

| Token Category | Variable Name | Value | Applied To |
| :--- | :--- | :--- | :--- |
| **Brand Colors** | `--primary-navy` | `#0A2540` | Deep headings, navbar background, footer |
| | `--primary-blue` | `#1677FF` | Action buttons, active links, accents |
| | `--secondary-blue`| `#0E4FA8` | Hover states, gradient overlays |
| | `--light-bg` | `#F6F9FC` | Alternating section backgrounds |
| | `--white` | `#FFFFFF` | Card surfaces, modal surfaces, form inputs |
| **Typography** | `--text-primary` | `#2D3748` | Primary readable body text (WCAG AA) |
| | `--text-secondary`| `#4A5568` | Paragraph descriptions, lead text |
| | `--muted` | `#718096` | Meta tags, timestamps, breadcrumbs |
| **Borders & Radii**| `--border` | `#E2E8F0` | Subtle hairline borders on cards and inputs |
| | `--radius-sm` | `6px` | Form inputs, small badges |
| | `--radius-md` | `8px` | Feature cards, icon wrappers |
| | `--radius-lg` | `12px` | Large container cards, hero imagery |
| | `--radius-pill` | `9999px` | Buttons, category filter chips |
| **Shadows** | `--card-shadow` | `0 4px 20px rgba(0,0,0,0.06)` | Elevated cards and floating panels |


| Breakpoint | Target Devices | Key Layout Modifications |
| :--- | :--- | :--- |
| `max-width: 991px` | Tablets / Small Laptops | Navbar links hide into hamburger drawer; `.contact__grid` stacks vertically. |
| `max-width: 768px` | Tablets / Large Phones | Hero grid collapses to 1 column; form inputs switch from 2 columns to 1 column. |
| `max-width: 480px` | Mobile Handsets | Padding scales to `16px`; button widths expand to full-width container (`100%`). |

---

## 3. JavaScript Architecture (`js/script.js`)

Written in native **Vanilla ES6+**, ensuring high performance, zero runtime dependencies, and instant execution.


### 3.2 Detailed Module Specification

| Module | Target Element(s) | Trigger / Event | Implementation Details |
| :--- | :--- | :--- | :--- |
| **Mobile Drawer** | `#nav-toggle`, `#nav-menu` | `click`, outside `click` | Toggles `.is-active` class; sets `aria-expanded="true/false"`. Automatically closes on link selection. |
| **Sticky Navbar** | `#navbar` | `scroll` (passive: `true`) | Adds `.navbar--scrolled` with box-shadow when `window.scrollY > 20px`. |
| **Scroll Reveal** | `.reveal` | `IntersectionObserver` | Watches element entry into viewport (threshold: `0.15`); attaches `.is-visible` to trigger CSS animations. |
| **Tech Filter** | `.tech-tab`, `.tech-card` | `click` | Reads `data-category` attribute; toggles display state (`block` vs `none`) to filter by tech stack. |
| **Form Validation** | `#contact-form` | `submit`, `input` | Validates required fields; executes regex email check `^[^\s@]+@[^\s@]+\.[^\s@]+$`; prints inline status in `#form-status`. |
| **Query Prefill** | `#form-service` | `DOMContentLoaded` | Parses URL via `URLSearchParams(window.location.search)`; automatically selects matching option if `?service=` exists. |

---
