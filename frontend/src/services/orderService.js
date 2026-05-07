import API from "./api";

// create order
export const createOrder = (data) =>
  API.post("/orders", data);

// get my orders
export const getMyOrders = () =>
  API.get("/orders/my");

// admin orders
export const getAllOrders = () =>
  API.get("/orders");