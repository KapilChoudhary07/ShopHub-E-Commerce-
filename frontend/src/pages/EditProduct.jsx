
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/productService";
import Loader from "../components/Loader";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setForm({
          name: res.data.name,
          price: res.data.price,
          image: res.data.image,
          description: res.data.description,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setFetching(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await updateProduct(id, form);
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <Loader message="Loading product..." fullScreen={true} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-3 sm:px-4">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <button
            onClick={() => navigate("/admin/products")}
            className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-xs sm:text-sm font-medium transition-colors duration-150 mb-3 sm:mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>
          <h1 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">Edit Product</h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 font-medium">Update the product details below</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">

          {/* Image Preview */}
          {form.image && (
            <div className="h-40 sm:h-56 overflow-hidden bg-gray-100 border-b border-gray-100">
              <img
                src={form.image}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => e.target.style.display = "none"}
              />
            </div>
          )}

          <div className="p-4 sm:p-8 flex flex-col gap-3 sm:gap-4">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Product Name
              </label>
              <input
                type="text"
                value={form.name}
                placeholder="e.g. Nike Air Max"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Price (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">₹</span>
                <input
                  type="number"
                  value={form.price}
                  placeholder="0"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300"
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Image URL
              </label>
              <input
                type="text"
                value={form.image}
                placeholder="https://..."
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300"
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
              {form.image && (
                <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium">↑ Preview shown above</p>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Description
              </label>
              <textarea
                value={form.description}
                placeholder="Write product description..."
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300 resize-none"
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate("/admin/products")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm py-3 rounded-2xl active:scale-95 transition-all duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-gray-950 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm py-3 rounded-2xl active:scale-95 transition-all duration-150 shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Update Product
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EditProduct;