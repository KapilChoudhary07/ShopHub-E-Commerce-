import API from "./api";

// create razorpay order
export const createPaymentOrder = (data) =>
  API.post("/payment/create-order", data);

// verify payment
export const verifyPayment = (data) =>
  API.post("/payment/verify", data);