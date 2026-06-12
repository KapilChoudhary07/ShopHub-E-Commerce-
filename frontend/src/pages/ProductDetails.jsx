import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/productService";
import { CartContext } from "../context/CartContext";
import MainLayout from "../layout/MainLayout";
import Loader from "../components/Loader";
import { AuthContext } from "../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <Loader message="Loading product..." fullScreen={true} />;
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-6 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium mb-5 tracking-wide uppercase">
            Home &nbsp;/&nbsp; {product.category} &nbsp;/&nbsp;
            <span className="text-gray-700 break-words">{product.name}</span>
          </p>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100 min-h-[250px] sm:min-h-[300px] md:min-h-[480px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-gray-900 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
                <span
                  className={`absolute top-3 right-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    product.countInStock > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {product.brand}
                  </p>

                  <h1 className="text-xl sm:text-3xl font-black text-gray-950 leading-tight tracking-tight mb-4 break-words">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      {product.rating}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      ({product.numReviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm font-bold text-gray-500">₹</span>
                    <span className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
                      {product.price?.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <div className="border-t border-gray-100 mb-5" />

                  <div className="flex flex-col gap-2 mb-6 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Brand</span>
                      <span className="text-gray-800 font-semibold">
                        {product.brand}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category</span>
                      <span className="text-gray-800 font-semibold">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability</span>
                      <span
                        className={`font-semibold ${product.countInStock > 0 ? "text-green-600" : "text-red-500"}`}
                      >
                        {product.countInStock > 0
                          ? "✓ Available"
                          : "✗ Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!token) {
                      navigate("/login");
                    } else {
                      addItem(product._id);
                    }
                  }}
                  disabled={product.countInStock === 0}
                  className="w-full flex items-center justify-center gap-2.5 bg-gray-950 hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm py-3 sm:py-4 rounded-2xl active:scale-95 transition-all duration-150 shadow-lg shadow-gray-900/20"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h11"
                    />
                  </svg>
                 
                    Add to Cart
                 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
