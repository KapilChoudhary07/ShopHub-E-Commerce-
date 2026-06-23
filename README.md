# ShopHub E-Commerce 🛒
A feature-rich, full-stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). ShopHub offers a premium shopping experience with support for secure user authentication (Email/Password & Google OAuth 2.0), comprehensive product browsing, cart & wishlist management, reviews, a fully-integrated Razorpay payment gateway, and a powerful Admin Dashboard for managing products and tracking customer orders.

---

## 🌟 Key Features
### 👤 Customer Experience
* **Authentication**: Secure registration and login using JWT. Support for **Google OAuth 2.0 Single Sign-On (SSO)**.
* **Product Catalog**: Browse products across various categories like Men, Women, Electronics, Kids, and Beauty with dynamic search, ratings, and stock status.
* **Shopping Cart & Wishlist**: Add products to cart (with quantity adjustment) or save them to wishlist. Synchronized directly with the database.
* **Razorpay Payment Gateway**: Seamless and secure checkout experience integrated with Razorpay.
* **Order History**: View past orders, payment status, and shipping information.
* **Product Reviews**: Submit star ratings and text reviews for purchased products.
* **Responsive UI**: Sleek, responsive layout built using React 19 and Tailwind CSS.

### 🛡️ Admin Dashboard
* **Sales Analytics**: High-level overview of store statistics.
* **Product Management**: Complete CRUD operations (Create, Read, Update, Delete) to add and edit products, upload images, and manage inventory levels.
* **Order Management**: Monitor and track all customer orders, shipping addresses, and payment details.

---

## 🛠️ Technology Stack
### Frontend
* **Framework**: React 19 (Vite)
* **Routing**: React Router DOM (v7)
* **Styling**: Tailwind CSS, PostCSS
* **State Management & Fetching**: Axios, React Context API
* **Icons & Notifications**: React Icons, React Toastify
### Backend
* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB (via Mongoose ODM)
* **Authentication**: JSON Web Tokens (JWT), bcryptjs, Passport.js (Google OAuth 2.0 strategy)
* **Payments**: Razorpay Node SDK
* **File Uploads**: Express Static Middleware

---
## 👨‍💻 Author
- **Developer:** Kapil Choudhary
- **Email:** [kapilchoudhary9171@gmail.com](mailto:kapilchoudhary9171@gmail.com)
- **GitHub:** [@KapilChoudhary07](https://github.com/KapilChoudhary07)

---

## 📂 Project Directory Structure
```text
ShopHub Ecommerce/
├── backend/                  # Node.js + Express API
│   ├── config/               # Database and configuration files
│   ├── controllers/          # Business logic handlers
│   ├── middleware/           # Authentication and authorization guards
│   ├── models/               # MongoDB Mongoose schemas
│   ├── routes/               # API endpoint definitions
│   ├── utils/                # Helper functions (token generation, etc.)
│   ├── .env                  # Backend environment configurations (git-ignored)
│   ├── seeder.js             # Script to populate mock database products
│   └── server.js             # Main server entrypoint
│
├── frontend/                 # Vite + React Client
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable layout and helper UI components
│   │   ├── context/          # React Auth, Cart, and Wishlist contexts
│   │   ├── layout/           # Shared page wrappers
│   │   ├── pages/            # Page-view components (Home, Cart, Checkout, Admin, etc.)
│   │   ├── routes/           # Protected and Admin route guards
│   │   ├── services/         # Axios API HTTP service layers
│   │   ├── utils/            # Shared front-end utility functions
│   │   ├── App.jsx           # Component routing router definitions
│   │   └── main.jsx          # App renderer hook
│   ├── tailwind.config.js    # Tailwind layout settings
│   ├── vercel.json           # Vercel deployment routing rewrites
│   └── package.json
