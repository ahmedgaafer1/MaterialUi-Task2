# 🛒 MUI Storefront – Product Listing Page

This is a responsive product listing interface built using **React** and **Material UI (MUI)**.  
The project demonstrates a modular component structure including a header, category filter, product cards, and footer – styled and structured using MUI components.

---

## 🚀 Tech Stack

- **React.js** (with functional components)
- **Material UI (MUI)** – Components & Theming
- **CSS Modules** – Basic layout overrides
- **Vite / React DOM** – Project scaffolding and rendering

---

## 📦 Features

### ✅ StoreHeader
- Responsive top navigation using `AppBar`, `Toolbar`, and `Typography`.
- Includes a dark mode toggle icon and cart icon (`IconButton`).

### ✅ CategoryFilter
- Horizontal filter buttons rendered with `Stack` and `Button`.
- Each button represents a product category (e.g., smartphones, laptops, etc.).

### ✅ ProductList
- A `Grid` layout that displays multiple `ProductCard` components.
- Each card includes:
  - Image (`CardMedia`)
  - Title & description (`Typography`)
  - Price
  - Add to cart button with icon
  - Read-only rating (`Rating`)

### ✅ StoreFooter
- Fixed bottom bar using `Box`, with centered copyright.

---

## 📁 Project Structure

src/
├── components/
│ ├── StoreHeader.jsx
│ ├── CategoryFilter.jsx
│ ├── ProductList.jsx
│ ├── ProductCard.jsx
│ └── StoreFooter.jsx
├── assets/
│ ├── 1.png
│ └── 2.png
├── App.jsx
├── main.jsx
├── index.css
└── App.css

---

## 💡 Styling & Responsiveness

- All layout elements (filter, products, footer) are built using responsive MUI components like `Grid`, `Box`, and `Stack`.
- Custom styling is applied through `sx` props and minimal external CSS.
- Product data is currently hardcoded for demonstration purposes.
