// import api from "./api";

// // 🔥 GET all products (search + filter)
// export const getProducts = (keyword = "", category = "") => {
//   let url = "/products?";

//   if (keyword) url += `keyword=${keyword}&`;
//   if (category) url += `category=${category}`;

//   return api.get(url);
// };

// // 🔥 GET single product
// export const getProductById = (id) => {
//   return api.get(`/products/${id}`);
// };


import api from "./api";


// 🔥 GET all products (search + filter)
export const getProducts = (keyword = "", category = "") => {
  let url = "/products?";

  if (keyword) url += `keyword=${keyword}&`;
  if (category) url += `category=${category}`;

  return api.get(url);
};


// 🔥 GET single product
export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};


// 🔥 CREATE product (ADMIN)
export const createProduct = (data) => {
  return api.post("/products", data);
};


// 🔥 UPDATE product (ADMIN)
export const updateProduct = (id, data) => {
  return api.put(`/products/${id}`, data);
};


// 🔥 DELETE product (ADMIN)
export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};