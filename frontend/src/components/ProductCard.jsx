


import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { wishlist, toggleItem } = useContext(WishlistContext);

  const isWishlisted = wishlist.some((item) => item._id === product._id);

  const image =
    product.image?.startsWith("http")
      ? product.image
      : `http://localhost:5000/${product.image}`;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl shadow-sm transition-shadow duration-150">

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <Link to={`/product/${product._id}`}>
          <img
            src={image || "https://via.placeholder.com/200"}
            alt={product.name}
            className="h-44 sm:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/10 transition-colors duration-150" />
        </Link>

        {/* Wishlist button — always visible on mobile, hover pe desktop */}
        <button
          onClick={() => toggleItem(product._id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-150 ${
            isWishlisted
              ? "bg-red-500 text-white scale-110"
              : "bg-white text-gray-400 hover:text-red-500 hover:scale-110 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          <FaHeart className="text-xs" />
        </button>

        {/* Category badge */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-gray-950/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wide uppercase">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          <FaStar className="text-amber-400 text-xs" />
          <span className="text-xs font-semibold text-gray-700">
            {product.rating || 0}
          </span>
          <span className="text-xs text-gray-400">
            ({product.numReviews || 0})
          </span>
        </div>

        {/* Name */}
        <h2 className="font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-1 mb-1">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3 hidden sm:block">
          {product.description || "No description available"}
        </p>

        {/* Price + Cart */}
        <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">

          <p className="text-gray-950 font-black text-base sm:text-lg leading-none">
            ₹{product.price?.toLocaleString("en-IN")}
          </p>

          <button
            onClick={() => addItem(product._id)}
            className="flex items-center gap-1.5 bg-gray-950 text-white text-xs font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150"
          >
            <FaShoppingCart className="text-xs" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;