# Personal Finance Dashboard

A modern, responsive personal finance tracker built with React, Tailwind CSS, and Zustand. This project focuses on clean UI, scalable state management, and meaningful financial insights.

---

## Live Demo

https://finance-dashboard-indol-chi.vercel.app/#dashboard

---

## Features

### Dashboard Overview

* Summary cards:

  * Total Balance
  * Income
  * Expenses
* Balance trend (time-based visualization)
* Spending breakdown (category-based visualization)

---

### Transactions Management

* View transactions in a structured table
* Search by category
* Filter by type (Income / Expense)
* Role-based UI:

  * **Viewer** → Read-only
  * **Admin** → Add, edit, delete

---

### Add / Edit / Delete

* Modal-based transaction form
* Edit existing entries
* Delete with confirmation
* Instant UI updates via global state (valid only until next refresh as I used mockdata)

---

### Insights Section

* Top spending category
* Income vs expenses summary
* Savings calculation with contextual feedback

---

### Dark Mode

* Light / Dark theme toggle
* Implemented using global theming via `.dark` class in index.css

---

### Responsive Design

* Hamburger sidebar for small screens
* Scrollable tables
* Adaptive grids

---

### UI Enhancements

* Smooth transitions across components
* Soft shadows for depth
* Consistent spacing across the dashboard

---

## Tech Stack

* **Frontend:** React — chosen for its component-based architecture and efficient UI rendering.
* **Styling:** Tailwind CSS (v4) — enables rapid, consistent styling with utility-first classes.
* **State Management:** Zustand — provides a simple global state solution.
* **Charts:** Recharts — Offered easy to use, out of the box charts without much code handling.

---

## Project Structure

```
src/
├── assets/
├── components/
│   ├── layout/          # Header, Sidebar, Layout
│   ├── dashboard/       # Summary cards
│   ├── charts/          # Charts
│   ├── transactions/    # Table, filters, modal
│   └── insights/        # Insights cards
│
├── store/               # Zustand store
├── data/                # Mock data
├── App.jsx
└── index.css            # Design system (CSS variables)
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd finance-dashboard
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Run the development server

```
npm run dev
```

---

### 4. Open in browser

```
http://localhost:5173
```

---

## Design Approach

### Design System

* Built using HSL-based CSS variables
* Centralized hue control (`--hue`)
* Enables easy theming and dark mode

---

### Layout Strategy

* **Flexbox** → overall layout (sidebar + header)
* **Grid** → content sections (cards, charts)

---

### State Management

Zustand manages:

* Transactions data
* Filters & search
* User role
* UI states (modal, sidebar, theme)

---

## Key Decisions

* **HSL-based color tokens**
- Allows dynamic theming and opacity control

* **Zustand over prop drilling**
- Cleaner and scalable state handling

* **Minimal UI approach**
- Focused on clarity and usability


