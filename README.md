# 🚀 KiranaSetu – AI-Powered Inventory & Sales Management System

<div align="center">

🌍 [**Live App**](https://kiranasetu-project.vercel.app/) &nbsp;|&nbsp; 💻 [**Personal Repo**](https://github.com/mann2007-ptl/kiranaSetu) &nbsp;|&nbsp; 📂 [**Forked Repo (Coding Gita)**](https://github.com/codinggita/kiranaSetu) &nbsp;|&nbsp; 📬 [**API Docs**](https://documenter.getpostman.com/view/50840766/2sBXqKnzRN) &nbsp;|&nbsp; 🎨 [**Figma**](https://www.figma.com/design/ptv2A9fooySZj6ptxVyJc4/Untitled) &nbsp;|&nbsp; 🎥 [**Demo Video**](https://youtu.be/5tiD33iZs70)

</div>

---

## 📌 Overview

**KiranaSetu** is a full-stack SaaS web application built to help small **kirana (local retail) store owners** digitize their daily operations.

It simplifies:
- 📦 Inventory tracking
- 💰 Sales management (POS-style)
- 📊 Business insights through dashboards

---

## ❗ Problem

Traditional kirana stores face several operational challenges:

| Challenge | Impact |
|-----------|--------|
| ❌ Manual inventory tracking | Time-consuming & error-prone |
| ❌ Frequent stockouts & overstocking | Revenue loss |
| ❌ No real-time sales insights | Poor visibility |
| ❌ No data-driven decision making | Missed opportunities |
| ❌ No collaboration between nearby stores | Isolated operations |

---

## 💡 Solution

KiranaSetu addresses these issues by:

- ✅ Digitizing inventory management
- ✅ Real-time dashboards
- ✅ Smooth product CRUD operations
- ✅ POS-style billing system
- ✅ Nearby Supply feature
- ✅ Foundation for AI-based forecasting

---

## ✨ Core Features

### 🔐 Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Signup / Login flow

### 📊 Dashboard
- Product & sales overview
- Low stock alerts
- Visual analytics (Recharts)

### 📦 Inventory Management
- Add / Update / Delete products
- Category filtering
- Real-time stock tracking

### 💰 Sales System (POS)
- Cart-based product selection
- Quantity management
- Automatic stock deduction
- Complete sales tracking

### 📍 Nearby Supply
- Connect with nearby stores
- Request urgent products
- Location-based collaboration

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React (Vite) | UI Framework |
| Tailwind CSS | Styling |
| Material UI | Component Library |
| Redux Toolkit | State Management |
| Formik + Yup | Form Handling & Validation |
| Recharts | Data Visualization |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | Web Framework |
| MongoDB (Mongoose) | Database |
| JWT | Authentication |
| bcryptjs | Password Hashing |

---

## 📁 Project Structure

```
kiranaSetu/
│
├── backend/
│   ├── src/
│   │   ├── config/         # Database & environment configuration
│   │   ├── controllers/    # Request handling logic
│   │   ├── middlewares/    # Auth & error middlewares
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic layer
│   │   ├── utils/          # Helper functions
│   │   ├── app.js          # Express app setup
│   │   └── index.js        # Server entry point
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Static files (images, icons)
│   │   ├── components/     # Reusable UI components
│   │   ├── config/         # API configs
│   │   ├── context/        # Global state (Context API)
│   │   ├── data/           # Static/mock data
│   │   ├── pages/          # Application pages
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 16.x
- MongoDB (local or Atlas)
- npm or yarn

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mann2007-ptl/kiranaSetu.git
cd kiranaSetu
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔍 SEO Features

- ✅ Dynamic meta tags
- ✅ Open Graph support
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML

---

## 🚀 Future Enhancements

- [ ] 🤖 AI-based demand forecasting
- [ ] 📱 Mobile application
- [ ] 🔔 Real-time notifications
- [ ] 🏪 Multi-store support
- [ ] 📈 Advanced analytics

---

---

## 🙌 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## ⭐ Support

If you like this project:

- ⭐ **Star** the repo
- 📢 **Share** your feedback
- 🤝 **Connect** for collaboration

---

<div align="center">
  Made with ❤️ for kirana store owners across India
</div>