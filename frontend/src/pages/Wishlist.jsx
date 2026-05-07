


// import { useContext } from "react";
// import { WishlistContext } from "../context/WishlistContext";
// import { useNavigate } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

// const Wishlist = () => {
//   const { wishlist, toggleItem } = useContext(WishlistContext);
//   const navigate = useNavigate();

//   return (

    
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-6xl mx-auto">

    
// <div className="mb-8 flex items-center justify-between">
//   <div>
//     {/* ✅ Back button add karo */}
//     <button
//       onClick={() => navigate("/")}
//       className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 mb-3"
//     >
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//       </svg>
//       Back to Store
//     </button>
//     <h1 className="text-2xl font-black text-gray-950 tracking-tight">
//       Wishlist
//     </h1>
//     {wishlist.length > 0 && (
//       <p className="text-gray-400 text-sm mt-1">
//         {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
//       </p>
//     )}
//   </div>
//   {/* baaki same */}

//           {/* Heart count badge */}
//           {wishlist.length > 0 && (
//             <div className="flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-xl">
//               <FaHeart className="text-red-500 text-sm" />
//               <span className="text-red-500 font-black text-sm">
//                 {wishlist.length}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Empty State */}
//         {wishlist.length === 0 ? (
//           <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-24 text-center shadow-sm">
//             <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-5">
//               <FaHeart className="text-red-400 text-2xl" />
//             </div>
//             <h2 className="text-gray-800 font-bold text-xl mb-1">
//               Your wishlist is empty
//             </h2>
//             <p className="text-gray-400 text-sm mb-6">
//               Save items you love and come back later
//             </p>
//             <button
//               onClick={() => navigate("/")}
//               className="bg-gray-950 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
//             >
//               Explore Products
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
//             {wishlist.map((product) => {
//               const image = product.image?.startsWith("http")
//                 ? product.image
//                 : `http://localhost:5000/${product.image}`;

//               return (
//                 <div
//                   key={product._id}
//                   className="group bg-white border border-gray-100 hover:border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-150"
//                 >
//                   {/* Image */}
//                   <div className="relative overflow-hidden bg-gray-50">
//                     <img
//                       src={image || "https://via.placeholder.com/200"}
//                       alt={product.name}
//                       className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
//                       onClick={() => navigate(`/product/${product._id}`)}
//                     />

//                     {/* Remove button — top right */}
//                     <button
//                       onClick={() => toggleItem(product._id)}
//                       className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-150 active:scale-95"
//                       title="Remove from wishlist"
//                     >
//                       <FaHeart className="text-xs" />
//                     </button>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     <h2
//                       className="font-bold text-gray-900 text-sm line-clamp-1 cursor-pointer hover:text-gray-600 transition-colors duration-150"
//                       onClick={() => navigate(`/product/${product._id}`)}
//                     >
//                       {product.name}
//                     </h2>

//                     {product.category && (
//                       <p className="text-gray-400 text-xs mt-0.5">
//                         {product.category}
//                       </p>
//                     )}

//                     <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
//                       <p className="font-black text-gray-950 text-base">
//                         ₹{product.price?.toLocaleString("en-IN")}
//                       </p>

//                       <button
//                         onClick={() => toggleItem(product._id)}
//                         className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all duration-150 active:scale-95"
//                       >
//                         <FaHeart className="text-[10px]" />
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;



import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Wishlist = () => {
  const { wishlist, toggleItem } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="mb-6 sm:mb-8 px-1">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 mb-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Store
            </button>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-black text-gray-950 tracking-tight">Wishlist</h1>
                {wishlist.length > 0 && (
                  <p className="text-gray-400 text-sm mt-1">
                    {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
                  </p>
                )}
              </div>

              {wishlist.length > 0 && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl">
                  <FaHeart className="text-red-500 text-xs sm:text-sm" />
                  <span className="text-red-500 font-black text-sm">{wishlist.length}</span>
                </div>
              )}
            </div>
          </div>

          {/* Empty State */}
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-20 px-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-5">
                <FaHeart className="text-red-400 text-2xl" />
              </div>
              <h2 className="text-gray-800 font-bold text-xl mb-1">Your wishlist is empty</h2>
              <p className="text-gray-400 text-sm mb-6">Save items you love and come back later</p>
              <button
                onClick={() => navigate("/")}
                className="bg-gray-950 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
              >
                Explore Products
              </button>
            </div>

          ) : (
            <div className="flex flex-col gap-3">
              {wishlist.map((product) => {
                const image = product.image?.startsWith("http")
                  ? product.image
                  : `http://localhost:5000/${product.image}`;

                return (
                  <div
                    key={product._id}
                    className="group bg-white border border-gray-100 hover:border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-150 flex items-center gap-4 px-4 py-3"
                  >
                    {/* Image */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0 cursor-pointer"
                      onClick={() => navigate(`/product/${product._id}`)}
                    >
                      <img
                        src={image || "https://via.placeholder.com/200"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div
                      className="flex-1 min-w-0 cursor-pointer"
                      onClick={() => navigate(`/product/${product._id}`)}
                    >
                      <h2 className="font-bold text-gray-900 text-sm truncate hover:text-gray-600 transition-colors duration-150">
                        {product.name}
                      </h2>
                      {product.category && (
                        <p className="text-gray-400 text-xs mt-0.5">{product.category}</p>
                      )}
                      <p className="font-black text-gray-950 text-base mt-1">
                        ₹{product.price?.toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => toggleItem(product._id)}
                      className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-150 active:scale-95"
                    >
                      <FaHeart className="text-[10px]" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Wishlist;