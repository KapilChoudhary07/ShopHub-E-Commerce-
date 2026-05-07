


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import OrderHistory from "./pages/OrderHistory";
// import Home from "./pages/Home";
// import ManageProducts from "./pages/ManageProducts";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminRoute from "./components/AdminRoute";
// import Cart from "./pages/Cart";
// import Wishlist from "./pages/Wishlist";
// import GoogleSuccess from "./pages/GoogleSuccess";
// import ProductDetails from "./pages/ProductDetails";
// import EditProduct from "./pages/EditProduct";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import Checkout from "./pages/Checkout";
// import AdminDashboard from "./pages/AdminDashboard";
// import AddProduct from "./pages/AddProduct"; 
// import AdminOrders from "./pages/AdminOrder";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ✅ PUBLIC */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/google-success" element={<GoogleSuccess />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/orders" element={<OrderHistory />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/admin/products" element={<ManageProducts />} />
//         <Route path="/admin/add-product" element={<AddProduct />} /> 
//         <Route path="/admin/edit/:id" element={<EditProduct />} />
//         <Route path="/admin/product/edit/:id" element={<EditProduct />} />
        
        
//         {/* 🔒 PROTECTED */}
//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <Cart />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/wishlist"
//           element={
//             <ProtectedRoute>
//               <Wishlist />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//   path="/admin"
//   element={
//     <AdminRoute>
//       <AdminDashboard />
//     </AdminRoute>
//   }
// />
// <Route
//   path="/admin/orders"
//   element={
//     <AdminRoute>
//       <AdminOrders />
//     </AdminRoute>
//   }
// />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderHistory from "./pages/OrderHistory";
import Home from "./pages/Home";
import ManageProducts from "./pages/ManageProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminRoute from "./components/AdminRoute";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import GoogleSuccess from "./pages/GoogleSuccess";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";
import ProtectedRoute from "./routes/ProtectedRoute";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import AdminOrders from "./pages/AdminOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/google-success" element={<GoogleSuccess />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* 🔒 PROTECTED - Login required */}
        <Route path="/cart" element={
          <ProtectedRoute><Cart /></ProtectedRoute>
        } />
        <Route path="/wishlist" element={
          <ProtectedRoute><Wishlist /></ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <ProtectedRoute><Checkout /></ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute><OrderHistory /></ProtectedRoute>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-use" element={<TermsOfUse />} />
<Route path="/support" element={<Support />} />

        {/* 🔒 ADMIN - Admin only */}
        <Route path="/admin" element={
          <AdminRoute><AdminDashboard /></AdminRoute>
        } />
        <Route path="/admin/products" element={
          <AdminRoute><ManageProducts /></AdminRoute>
        } />
        <Route path="/admin/add-product" element={
          <AdminRoute><AddProduct /></AdminRoute>
        } />
        <Route path="/admin/edit/:id" element={
          <AdminRoute><EditProduct /></AdminRoute>
        } />
        <Route path="/admin/orders" element={
          <AdminRoute><AdminOrders /></AdminRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;