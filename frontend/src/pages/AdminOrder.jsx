


import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await getAllOrders();
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 mb-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
              All Orders
            </h1>
            {!loading && (
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {orders.length} {orders.length === 1 ? "order" : "orders"} found
              </p>
            )}
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
            <p className="text-gray-400 text-sm font-medium">Loading orders...</p>
          </div>

        /* Empty */
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl py-16 text-center shadow-sm px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              🧾
            </div>
            <h2 className="text-gray-800 font-bold text-lg sm:text-xl mb-1">No orders yet</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Orders will appear here once customers checkout</p>
          </div>

        /* Orders list */
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div
                key={order._id}
                className="bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl overflow-hidden transition-shadow duration-150"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-gray-100 bg-gray-50/50">

                  {/* Order number */}
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-950 text-white text-xs font-black rounded-lg flex items-center justify-center">
                      #{index + 1}
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Order ID</p>
                      <p className="text-xs font-bold text-gray-600 font-mono break-all">
                        {order._id?.slice(-8).toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* User */}
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Customer</p>
                    <p className="text-sm font-bold text-gray-900">
                      {order.user?.name || "Guest"}
                    </p>
                    <p className="text-xs text-gray-400 break-all">{order.user?.email}</p>
                  </div>

                  {/* Date */}
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Date</p>
                    <p className="text-sm font-bold text-gray-900">
                      {new Date(order.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}
                    </p>
                  </div>

                  {/* Total */}
                  <div className="sm:text-right">
                    <p className="text-xs text-gray-400 font-medium">Total</p>
                    <p className="text-base font-black text-gray-950">
                      ₹{order.totalPrice?.toLocaleString("en-IN")}
                    </p>
                  </div>

                </div>

                {/* Order Items */}
                <div className="divide-y divide-gray-100">
                  {order.orderItems.map((item, i) => {
                    const product = item.product || {};
                    return (
                      <div key={i} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4">

                        {/* Image */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                          <img
                            src={product.image || "https://via.placeholder.com/80"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-1">
                            {product.name || "Product"}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-0.5">
                            <span className="text-xs text-gray-400 font-medium">
                              Qty: {item.quantity}
                            </span>
                            {product.category && (
                              <>
                                <span className="text-gray-200">•</span>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                                  {product.category}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Price */}
                        <p className="font-black text-gray-950 text-xs sm:text-sm shrink-0">
                          ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
                        </p>

                      </div>
                    );
                  })}
                </div>

                {/* Shipping Address */}
                {order.shippingAddress && (
                  <div className="px-4 sm:px-6 py-3 bg-gray-50/50 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium mb-1">Shipping Address</p>
                    <p className="text-xs text-gray-600 font-medium break-words">
                      {order.shippingAddress.name} · {order.shippingAddress.address}, {order.shippingAddress.city} - {order.shippingAddress.pincode} · {order.shippingAddress.phone}
                    </p>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminOrders;