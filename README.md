# 🛒 KiranaSetu — AI-Powered Inventory Management

> Stop guessing inventory. Start predicting with AI.

KiranaSetu is a smart inventory management system built for small kirana (retail) stores. It replaces manual stock tracking with AI-driven demand predictions, automated reorder suggestions, and a clean point-of-sale interface — all wrapped in a premium, distraction-free UI designed specifically for small retail shopkeepers.

---

## 🎨 Figma Design

👉 [View the Full UI Design on Figma](https://www.figma.com/design/ptv2A9fooySZj6ptxVyJc4/Untitled?node-id=697-2&t=H9mT4avZdDQOy2So-1)

---

## 🧠 Why KiranaSetu?

Most kirana store owners still manage inventory with pen and paper — or at best, basic spreadsheets. This leads to:

- Running out of fast-moving products without warning
- Overstocking slow-moving items and blocking capital
- No visibility into sales trends or demand patterns
- Wasted time doing manual calculations at billing

KiranaSetu solves all of this in one place. Add your products, record daily sales, and let the AI handle the analysis and restocking recommendations.

---

## ✨ Core Features

- 📦 **Smart Inventory Tracking** — Real-time stock levels with color-coded status indicators (healthy / warning / low)
- 💰 **POS / Sales Entry** — Fast cart-based billing with quantity controls and auto-calculated totals
- 🤖 **AI Demand Forecasting** — Predicts future product demand based on historical sales data
- 🔄 **Automated Reorder Suggestions** — AI tells you what to restock, how much, and how urgently
- 🔔 **Low Stock Alerts** — Instant alerts before you run out of any product
- 📊 **Sales Analytics** — Daily and weekly charts to track your business performance
- 🔐 **Simple Authentication** — Email/password login and Google OAuth for quick access

---

## 🖥️ Pages & Screens

### 📄 1. Landing Page

The landing page introduces the product, communicates value instantly, and guides users toward onboarding.

**Sections:**
- **Hero** — Headline: *"Stop Guessing Inventory. Start Predicting with AI."* with Get Started and Login CTAs
- **Features** — Clean card layout showing all core capabilities with minimal icons and one-line descriptions
- **How It Works** — 4-step visual explanation: Add products → Record sales → AI analyzes → Get recommendations
- **Dashboard Preview** — Visual mockup that builds trust and shows what to expect
- **Navbar** — Logo + Login button, clean and distraction-free

---

### 🔐 2. Login / Signup Page

Enables quick and simple user authentication with minimal friction.

**Layout:** Split screen — branding/illustration on the left, login form on the right

**Features:**
- Email and password fields with show/hide toggle
- Google login for one-click access
- Minimal inputs, centered alignment, fast to complete

---

### 📊 3. Dashboard Page

Gives a bird's-eye view of the entire business at a glance.

**Layout:** Sidebar navigation + top navbar (search, profile) + main content area

**Key Components:**
- **Summary Cards** — Total Products, Today's Sales, Low Stock Items, Predicted Demand — each with a value, label, and subtle icon
- **Sales Trend Chart** — Tracks daily and weekly sales over time
- **Demand Forecast Chart** — AI-based visualization of future demand
- **AI Insights Panel** — Contextual smart messages like *"Milk demand increasing this week"* or *"Snacks slowing down"* to help you act without analyzing data manually

---

### 📦 4. Inventory / Products Page

Central hub for managing and monitoring all products.

**Features:**
- Search products by name, filter by category or stock status
- Add new products via a clean modal form
- Product table with: Name, Category, Stock Level, Status Indicator
- Row hover highlight for easy scanning

**Stock Status Indicators:**
- 🟢 Green — Healthy stock
- 🟡 Yellow — Running low, restock soon
- 🔴 Red — Critical, restock immediately

---

### 💰 5. Sales Entry Page (POS System)

Designed to work like a real shop counter — fast, minimal, and efficient.

**Features:**
- Quick product search optimized for speed
- Cart system — add/remove items, view selected products list
- Quantity selector — increase or decrease with one tap
- Real-time total price calculation as items are added
- Complete Sale button with success confirmation

**UX Focus:** Minimal clicks, no unnecessary steps, built for daily high-speed use

---

### 🤖 6. AI Forecast & Reorder Page

Helps shopkeepers make data-driven restocking decisions without needing to be data analysts.

**Features:**
- **Demand Prediction Graph** — Visual forecast of each product's future demand based on past sales
- **Insight Cards** — Top predicted product, expected demand increase percentage
- **Reorder Suggestions Table** — Product name, current stock, AI-suggested reorder quantity, urgency level

**Urgency Levels:**
- 🔴 High — Restock immediately
- 🟡 Medium — Restock within a few days
- 🟢 Low — You have time

**Intelligence:** AI calculates the optimal reorder quantity to prevent both overstocking and stockouts

---

## ✨ Micro-Interactions

Small details that make the experience feel polished and responsive:

- Button hover: slight scale + shadow lift
- Card elevation on hover
- Smooth page transitions (300ms)
- Animated charts on load
- Skeleton loaders while data is fetching

---

## 📱 Responsiveness

- Mobile-first layout throughout
- Sidebar collapses into a hamburger menu on small screens
- Clean tablet experience
- Touch-friendly buttons and controls

---

## 🗂️ Project Structure

```
kiranasetu/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/     # Reusable UI pieces (Navbar, Cards, Modals, etc.)
│       ├── pages/          # One file per screen
│       ├── services/       # API call functions
│       └── App.jsx
│
└── backend/
    ├── config/             # DB connection
    ├── controllers/        # Route logic
    ├── models/             # Database schemas
    ├── routes/             # API endpoints
    └── server.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or free Atlas cloud)
- [Git](https://git-scm.com/)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/kiranasetu.git
cd kiranasetu
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
npm start
```

`.env` values needed:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_random_secret
```

### 3. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

`.env` values needed:
```
REACT_APP_API_URL=http://localhost:5000/api
```

> Frontend → `http://localhost:3000` · Backend → `http://localhost:5000`

---

## 🛠️ Tech Stack

**Frontend** — React, Tailwind CSS, Recharts, Axios

**Backend** — Node.js, Express, MongoDB, Mongoose, JWT

---

## 🎨 Design System

The UI follows the **KiranaSetu Editorial Precision v1.0** design language — a high-end, editorial approach that transforms chaotic inventory data into a calm, gallery-like experience.

- **Primary color:** `#3525CD`
- **Fonts:** Manrope (headings) + Inter (body)
- **Corner radius:** 8px / 12px / 24px
- **Design philosophy:** Legibility and breathability across all data-heavy modules

Full spec available in the [Figma file](https://www.figma.com/design/ptv2A9fooySZj6ptxVyJc4/Untitled?node-id=697-2&t=H9mT4avZdDQOy2So-1).

---

## 🚫 Design Constraints

These are strictly followed throughout the project:

- No pricing or subscription UI
- No clutter or unnecessary visuals
- No template-based layouts
- Focus on usability and clarity at all times

---

## 🎯 What This Project Delivers

| Goal | How |
|------|-----|
| 📊 Clear business insights | Dashboard with charts, cards, and AI insights |
| ⚡ Fast daily operations | POS system built for speed |
| 🤖 Smart AI recommendations | Demand forecasting and reorder suggestions |
| 📦 Efficient inventory control | Real-time stock tracking with status alerts |

---

