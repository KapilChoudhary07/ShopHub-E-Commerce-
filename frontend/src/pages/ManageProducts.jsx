
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout"; // ✅ add

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    setDeletingId(id);
    await deleteProduct(id);
    await fetchProducts();
    setDeletingId(null);
  };

  return (
    <MainLayout> {/* ✅ wrap kiya */}
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 mb-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </button>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Manage Products
            </h1>
            {!loading && (
              <p className="text-gray-400 text-sm mt-1 font-medium">
                {products.length} products listed
              </p>
            )}
          </div>
          <button
            onClick={() => navigate("/admin/add-product")}
            className="flex items-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-bold text-sm px-5 py-3 rounded-2xl active:scale-95 transition-all duration-150 w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </button>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-3">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
            <p className="text-gray-400 text-sm font-medium">Loading products...</p>
          </div>

        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-24 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 text-3xl">
              📦
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No products yet</h2>
            <p className="text-gray-400 text-sm mb-8">Add your first product to get started</p>
            <button
              onClick={() => navigate("/admin/add-product")}
              className="bg-gray-950 hover:bg-gray-800 text-white text-sm font-bold px-8 py-3.5 rounded-2xl active:scale-95 transition-all duration-150"
            >
              Add Product
            </button>
          </div>

        ) : (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60">
                    <th className="text-left text-[11px] font-bold uppercase tracking-widest text-gray-400 px-6 py-4">
                      Product
                    </th>
                    <th className="text-left text-[11px] font-bold uppercase tracking-widest text-gray-400 px-4 py-4">
                      Price
                    </th>
                    <th className="text-right text-[11px] font-bold uppercase tracking-widest text-gray-400 px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((p) => (
                    <tr key={p._id} className="hover:bg-gray-50/60 transition-colors duration-150 group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                            <p className="text-gray-400 text-xs font-medium mt-0.5 uppercase tracking-wider">
                              {p.category?.name || p.category || "—"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-black text-gray-950 text-sm">
                          ₹{p.price?.toLocaleString("en-IN")}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => navigate(`/admin/edit/${p._id}`)}
                            className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs px-4 py-2 rounded-xl active:scale-95 transition-all duration-150"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 019 16H7v-2a2 2 0 01.586-1.414z" />
                            </svg>
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(p._id)}
                            disabled={deletingId === p._id}
                            className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 disabled:opacity-50 text-red-600 font-bold text-xs px-4 py-2 rounded-xl active:scale-95 transition-all duration-150"
                          >
                            {deletingId === p._id ? (
                              <div className="w-3.5 h-3.5 border-2 border-red-300 border-t-red-600 rounded-full animate-spin" />
                            ) : (
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            )}
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden divide-y divide-gray-100">
              {products.map((p) => (
                <div key={p._id} className="flex items-center gap-4 p-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">{p.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5 uppercase tracking-wider">
                      {p.category?.name || p.category || "—"}
                    </p>
                    <p className="font-black text-gray-950 text-sm mt-0.5">
                      ₹{p.price?.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => navigate(`/admin/edit/${p._id}`)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs px-3 py-1.5 rounded-xl active:scale-95 transition-all duration-150"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      disabled={deletingId === p._id}
                      className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs px-3 py-1.5 rounded-xl active:scale-95 transition-all duration-150 disabled:opacity-50"
                    >
                      {deletingId === p._id ? "..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ManageProducts;