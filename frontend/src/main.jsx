import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Yeh component ke andar:

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          toastClassName="!rounded-xl !shadow-lg !text-sm !font-semibold"
          progressClassName="!bg-current !opacity-20"
        />
      </WishlistProvider>
    </CartProvider>
  </AuthProvider>,
);
