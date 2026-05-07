import API from "./api";

// get cart
export const getCart = () => API.get("/cart");

// add item
export const addToCart = (data) =>
  API.post("/cart", data);

// update quantity
export const updateCart = (id, quantity) =>
  API.put(`/cart/${id}`, { quantity });

// remove item
export const removeFromCart = (id) =>
  API.delete(`/cart/${id}`);