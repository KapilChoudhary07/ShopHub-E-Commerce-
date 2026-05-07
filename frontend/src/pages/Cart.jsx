


// // import { useContext } from "react";
// // import { CartContext } from "../context/CartContext";
// // import { useNavigate } from "react-router-dom";

// // const Cart = () => {
// //   const { cart, updateItem, removeItem } = useContext(CartContext);
// //   const navigate = useNavigate();

// //   const total = cart.reduce((acc, item) => {
// //     const price = item.productId?.price || 0;
// //     return acc + price * item.quantity;
// //   }, 0);

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-4">
// //       <div className="max-w-5xl mx-auto">

// //         {/* Heading */}
// //         <div className="mb-8">
// //           <h1 className="text-2xl font-black text-gray-950 tracking-tight">
// //             Your Cart
// //           </h1>
// //           {cart.length > 0 && (
// //             <p className="text-gray-400 text-sm mt-1">
// //               {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
// //             </p>
// //           )}
// //         </div>

// //         {/* Empty Cart */}
// //         {cart.length === 0 ? (
// //           <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-20 text-center shadow-sm">
// //             <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
// //               <span className="text-3xl">🛒</span>
// //             </div>
// //             <h2 className="text-gray-800 font-bold text-xl mb-1">
// //               Your cart is empty
// //             </h2>
// //             <p className="text-gray-400 text-sm mb-6">
// //               Looks like you haven't added anything yet
// //             </p>
// //             <button
// //               onClick={() => navigate("/")}
// //               className="bg-gray-950 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
// //             >
// //               Browse Products
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="flex flex-col xl:flex-row gap-6">

// //             {/* Cart Items */}
// //             <div className="flex-1 space-y-3">
// //               {cart.map((item) => {
// //                 const product = item.productId || {};
// //                 const productId = product._id || item.productId;

// //                 const image = product.image?.startsWith("http")
// //                   ? product.image
// //                   : `http://localhost:5000/${product.image}`;

// //                 return (
// //                   <div
// //                     key={item._id}
// //                     className="group flex items-center gap-5 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md p-4 rounded-2xl transition-shadow duration-150"
// //                   >
// //                     {/* Image */}
// //                     <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
// //                       <img
// //                         src={image || "https://via.placeholder.com/120"}
// //                         alt={product.name}
// //                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
// //                       />
// //                     </div>

// //                     {/* Info */}
// //                     <div className="flex-1 min-w-0">
// //                       <h2 className="font-bold text-gray-900 text-sm leading-snug line-clamp-1">
// //                         {product.name || "Product"}
// //                       </h2>
// //                       <p className="text-gray-400 text-xs mt-0.5">
// //                         {product.category?.name || "Category"}
// //                       </p>
// //                       <p className="text-gray-950 font-black text-base mt-1">
// //                         ₹{product.price?.toLocaleString("en-IN") || 0}
// //                       </p>
// //                     </div>

// //                     {/* Quantity */}
// //                     <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl shrink-0">
// //                       <button
// //                         onClick={() => updateItem(productId, item.quantity - 1)}
// //                         className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-150 text-sm font-bold"
// //                       >
// //                         −
// //                       </button>
// //                       <span className="font-bold text-sm text-gray-900 w-5 text-center">
// //                         {item.quantity}
// //                       </span>
// //                       <button
// //                         onClick={() => updateItem(productId, item.quantity + 1)}
// //                         className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-150 text-sm font-bold"
// //                       >
// //                         +
// //                       </button>
// //                     </div>

// //                     {/* Subtotal */}
// //                     <div className="text-right shrink-0 hidden sm:block">
// //                       <p className="text-xs text-gray-400 mb-0.5">Subtotal</p>
// //                       <p className="font-black text-gray-950 text-sm">
// //                         ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
// //                       </p>
// //                     </div>

// //                     {/* Remove */}
// //                     <button
// //                       onClick={() => removeItem(productId)}
// //                       className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-150 shrink-0"
// //                       title="Remove"
// //                     >
// //                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
// //                         stroke="currentColor" strokeWidth="2.5"
// //                         strokeLinecap="round" strokeLinejoin="round">
// //                         <polyline points="3 6 5 6 21 6" />
// //                         <path d="M19 6l-1 14H6L5 6" />
// //                         <path d="M10 11v6M14 11v6" />
// //                         <path d="M9 6V4h6v2" />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* Order Summary */}
// //             <div className="xl:w-80 shrink-0">
// //               <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24">
// //                 <h2 className="font-black text-gray-950 text-base mb-5">
// //                   Order Summary
// //                 </h2>

// //                 {/* Line items */}
// //                 <div className="space-y-3 mb-5">
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-gray-400">
// //                       Subtotal ({cart.length} items)
// //                     </span>
// //                     <span className="font-semibold text-gray-800">
// //                       ₹{total.toLocaleString("en-IN")}
// //                     </span>
// //                   </div>
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-gray-400">Delivery</span>
// //                     <span className="font-semibold text-green-600">Free</span>
// //                   </div>
// //                 </div>

// //                 {/* Divider */}
// //                 <div className="border-t border-gray-100 pt-4 mb-5">
// //                   <div className="flex justify-between items-baseline">
// //                     <span className="font-bold text-gray-950 text-sm">Total</span>
// //                     <span className="font-black text-gray-950 text-2xl">
// //                       ₹{total.toLocaleString("en-IN")}
// //                     </span>
// //                   </div>
// //                   <p className="text-gray-400 text-xs mt-1">
// //                     Inclusive of all taxes
// //                   </p>
// //                 </div>

// //                 {/* Checkout Button */}
// //                 <button
// //                   onClick={() => navigate("/checkout")}
// //                   className="w-full bg-gray-950 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
// //                 >
// //                   Proceed to Checkout
// //                 </button>

// //                 {/* Continue shopping */}
// //                 <button
// //                   onClick={() => navigate("/")}
// //                   className="w-full mt-3 text-gray-400 hover:text-gray-700 text-sm font-medium py-2 transition-colors duration-150"
// //                 >
// //                   ← Continue Shopping
// //                 </button>
// //               </div>
// //             </div>

// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;


// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, updateItem, removeItem } = useContext(CartContext);
//   const navigate = useNavigate();

//   const total = cart.reduce((acc, item) => {
//     const price = item.productId?.price || 0;
//     return acc + price * item.quantity;
//   }, 0);

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-3 sm:px-4 sm:py-12">
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
//             Your Cart
//           </h1>
//           {cart.length > 0 && (
//             <p className="text-gray-400 text-sm mt-1">
//               {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
//             </p>
//           )}
//         </div>

//         {/* Empty Cart */}
//         {cart.length === 0 ? (
//           <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-16 sm:py-20 text-center shadow-sm">
//             <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
//               <span className="text-3xl">🛒</span>
//             </div>
//             <h2 className="text-gray-800 font-bold text-xl mb-1">
//               Your cart is empty
//             </h2>
//             <p className="text-gray-400 text-sm mb-6">
//               Looks like you haven't added anything yet
//             </p>
//             <button
//               onClick={() => navigate("/")}
//               className="bg-gray-950 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
//             >
//               Browse Products
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">

//             {/* Cart Items */}
//             <div className="flex-1 space-y-3">
//               {cart.map((item) => {
//                 const product = item.productId || {};
//                 const productId = product._id || item.productId;

//                 const image = product.image?.startsWith("http")
//                   ? product.image
//                   : `http://localhost:5000/${product.image}`;

//                 return (
//                   <div
//                     key={item._id}
//                     className="group flex items-center gap-3 sm:gap-5 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md p-3 sm:p-4 rounded-2xl transition-shadow duration-150"
//                   >
//                     {/* Image */}
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
//                       <img
//                         src={image || "https://via.placeholder.com/120"}
//                         alt={product.name}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </div>

//                     {/* Info */}
//                     <div className="flex-1 min-w-0">
//                       <h2 className="font-bold text-gray-900 text-sm leading-snug line-clamp-1">
//                         {product.name || "Product"}
//                       </h2>
//                       <p className="text-gray-400 text-xs mt-0.5">
//                         {product.category?.name || "Category"}
//                       </p>
//                       <p className="text-gray-950 font-black text-sm sm:text-base mt-1">
//                         ₹{product.price?.toLocaleString("en-IN") || 0}
//                       </p>

//                       {/* Subtotal - mobile only */}
//                       <p className="text-xs text-gray-400 mt-0.5 sm:hidden">
//                         Subtotal:{" "}
//                         <span className="font-bold text-gray-800">
//                           ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
//                         </span>
//                       </p>
//                     </div>

//                     {/* Quantity + Remove stacked on mobile */}
//                     <div className="flex flex-col items-end gap-2 shrink-0">
//                       {/* Quantity */}
//                       <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-50 border border-gray-100 px-2 sm:px-3 py-1.5 rounded-xl">
//                         <button
//                           onClick={() => updateItem(productId, item.quantity - 1)}
//                           className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-150 text-sm font-bold"
//                         >
//                           −
//                         </button>
//                         <span className="font-bold text-sm text-gray-900 w-5 text-center">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => updateItem(productId, item.quantity + 1)}
//                           className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-150 text-sm font-bold"
//                         >
//                           +
//                         </button>
//                       </div>

//                       {/* Remove */}
//                       <button
//                         onClick={() => removeItem(productId)}
//                         className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-150"
//                         title="Remove"
//                       >
//                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//                           stroke="currentColor" strokeWidth="2.5"
//                           strokeLinecap="round" strokeLinejoin="round">
//                           <polyline points="3 6 5 6 21 6" />
//                           <path d="M19 6l-1 14H6L5 6" />
//                           <path d="M10 11v6M14 11v6" />
//                           <path d="M9 6V4h6v2" />
//                         </svg>
//                       </button>
//                     </div>

//                     {/* Subtotal - desktop only */}
//                     <div className="text-right shrink-0 hidden sm:block">
//                       <p className="text-xs text-gray-400 mb-0.5">Subtotal</p>
//                       <p className="font-black text-gray-950 text-sm">
//                         ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Order Summary */}
//             <div className="xl:w-80 shrink-0">
//               <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm xl:sticky xl:top-24">
//                 <h2 className="font-black text-gray-950 text-base mb-5">
//                   Order Summary
//                 </h2>

//                 {/* Line items */}
//                 <div className="space-y-3 mb-5">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-400">
//                       Subtotal ({cart.length} items)
//                     </span>
//                     <span className="font-semibold text-gray-800">
//                       ₹{total.toLocaleString("en-IN")}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-400">Delivery</span>
//                     <span className="font-semibold text-green-600">Free</span>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-gray-100 pt-4 mb-5">
//                   <div className="flex justify-between items-baseline">
//                     <span className="font-bold text-gray-950 text-sm">Total</span>
//                     <span className="font-black text-gray-950 text-2xl">
//                       ₹{total.toLocaleString("en-IN")}
//                     </span>
//                   </div>
//                   <p className="text-gray-400 text-xs mt-1">
//                     Inclusive of all taxes
//                   </p>
//                 </div>

//                 {/* Checkout Button */}
//                 <button
//                   onClick={() => navigate("/checkout")}
//                   className="w-full bg-gray-950 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 {/* Continue shopping */}
//                 <button
//                   onClick={() => navigate("/")}
//                   className="w-full mt-3 text-gray-400 hover:text-gray-700 text-sm font-medium py-2 transition-colors duration-150"
//                 >
//                   ← Continue Shopping
//                 </button>
//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cart, updateItem, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => {
    const price = item.productId?.price || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-8 px-3 sm:px-4 sm:py-12">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
              Your Cart
            </h1>
            {cart.length > 0 && (
              <p className="text-gray-400 text-sm mt-1">
                {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
              </p>
            )}
          </div>

          {/* Empty Cart */}
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-16 sm:py-20 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-3xl">🛒</span>
              </div>
              <h2 className="text-gray-800 font-bold text-xl mb-1">
                Your cart is empty
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Looks like you haven't added anything yet
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-gray-950 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">

              {/* Cart Items */}
              <div className="flex-1 space-y-3">
                {cart.map((item) => {
                  const product = item.productId || {};
                  const productId = product._id || item.productId;

                  const image = product.image?.startsWith("http")
                    ? product.image
                    : `http://localhost:5000/${product.image}`;

                  return (
                    <div
                      key={item._id}
                      className="group flex items-center gap-3 sm:gap-5 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md p-3 sm:p-4 rounded-2xl transition-shadow duration-150"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                        <img
                          src={image || "https://via.placeholder.com/120"}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h2 className="font-bold text-gray-900 text-sm leading-snug line-clamp-1">
                          {product.name || "Product"}
                        </h2>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {product.category?.name || "Category"}
                        </p>
                        <p className="text-gray-950 font-black text-sm sm:text-base mt-1">
                          ₹{product.price?.toLocaleString("en-IN") || 0}
                        </p>

                        {/* Subtotal - mobile only */}
                        <p className="text-xs text-gray-400 mt-0.5 sm:hidden">
                          Subtotal:{" "}
                          <span className="font-bold text-gray-800">
                            ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </p>
                      </div>

                      {/* Quantity + Remove stacked on mobile */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        {/* Quantity */}
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-50 border border-gray-100 px-2 sm:px-3 py-1.5 rounded-xl">
                          <button
                            onClick={() => updateItem(productId, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-150 text-sm font-bold"
                          >
                            −
                          </button>
                          <span className="font-bold text-sm text-gray-900 w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateItem(productId, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-150 text-sm font-bold"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(productId)}
                          className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-150"
                          title="Remove"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                      </div>

                      {/* Subtotal - desktop only */}
                      <div className="text-right shrink-0 hidden sm:block">
                        <p className="text-xs text-gray-400 mb-0.5">Subtotal</p>
                        <p className="font-black text-gray-950 text-sm">
                          ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary */}
              <div className="xl:w-80 shrink-0">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm xl:sticky xl:top-24">
                  <h2 className="font-black text-gray-950 text-base mb-5">
                    Order Summary
                  </h2>

                  {/* Line items */}
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        Subtotal ({cart.length} items)
                      </span>
                      <span className="font-semibold text-gray-800">
                        ₹{total.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Delivery</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-4 mb-5">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-gray-950 text-sm">Total</span>
                      <span className="font-black text-gray-950 text-2xl">
                        ₹{total.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      Inclusive of all taxes
                    </p>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-gray-950 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
                  >
                    Proceed to Checkout
                  </button>

                  {/* Continue shopping */}
                  <button
                    onClick={() => navigate("/")}
                    className="w-full mt-3 text-gray-400 hover:text-gray-700 text-sm font-medium py-2 transition-colors duration-150"
                  >
                    ← Continue Shopping
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;