import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import MainLayout from "../layout/MainLayout";

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
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-semibold transition-colors duration-150 mb-3 bg-white border border-gray-200 px-4 py-2 rounded-2xl shadow-sm hover:border-gray-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                All Orders
              </h1>
              {!loading && (
                <p className="text-gray-400 text-sm mt-1 font-medium">
                  {orders.length} {orders.length === 1 ? "order" : "orders"} placed
                </p>
              )}
            </div>
            <div className="text-right">
              <span className="bg-amber-50 border border-amber-100 text-amber-600 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Admin Panel
              </span>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <Loader message="Loading orders..." />
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-3xl py-20 px-6 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 text-3xl">
              🧾
            </div>
            <h2 className="text-gray-800 font-bold text-xl mb-1">No orders yet</h2>
            <p className="text-gray-400 text-sm">Orders will appear here once customers checkout</p>
          </div>
        ) : (
          /* Orders list */
          <div className="space-y-8">
            {orders.map((order, index) => (
              <div key={order._id}>
                <div
                  className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg rounded-3xl overflow-hidden transition-all duration-200"
                >
                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-4.5 border-b border-gray-100 bg-gray-50/60">
                    
                    {/* Left: Index + Order ID */}
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-gray-950 text-white text-xs font-black rounded-lg flex items-center justify-center shadow-md">
                        #{index + 1}
                      </span>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Order ID</p>
                        <p className="text-xs font-bold text-gray-700 font-mono">
                          {order._id?.slice(-8).toUpperCase()}
                        </p>
                      </div>
                    </div>

                    {/* Customer details */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                        {order.user?.name ? order.user.name.charAt(0).toUpperCase() : "G"}
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Customer</p>
                        <p className="text-xs font-bold text-gray-900 leading-none">
                          {order.user?.name || "Guest User"}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5 max-w-[150px] truncate">
                          {order.user?.email || "No email"}
                        </p>
                      </div>
                    </div>

                    {/* Date info */}
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Placed On</p>
                      <p className="text-xs font-bold text-gray-800">
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric", month: "short", year: "numeric"
                        })}
                      </p>
                    </div>

                    {/* Order Total Price */}
                    <div className="md:text-right shrink-0">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Amount</p>
                      <p className="text-base font-black text-gray-950">
                        ₹{order.totalPrice?.toLocaleString("en-IN")}
                      </p>
                    </div>

                  </div>

                  {/* Order Items */}
                  <div className="divide-y divide-gray-100">
                    {order.orderItems.map((item, i) => {
                      const product = item.product || {};
                      const image = product.image?.startsWith("http")
                        ? product.image
                        : `http://localhost:5000/${product.image}`;

                      return (
                        <div
                          key={i}
                          className="flex items-center gap-4 px-6 py-4"
                        >
                          {/* Image */}
                          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                            <img
                              src={image || "https://via.placeholder.com/80"}
                              alt={product.name || "Product"}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 text-sm truncate">
                              {product.name || "Product details unavailable"}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                Qty: {item.quantity}
                              </span>
                              {product.category && (
                                <span className="text-gray-300 text-[10px]">•</span>
                              )}
                              {product.category && (
                                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                                  {product.category?.name || product.category}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Price */}
                          <div className="text-right shrink-0">
                            <p className="font-black text-gray-950 text-sm">
                              ₹{((product.price || 0) * item.quantity).toLocaleString("en-IN")}
                            </p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                              ₹{product.price?.toLocaleString("en-IN")} each
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Shipping Info & Statuses */}
                  <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Address */}
                    {order.shippingAddress && (
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                          Delivery Address
                        </p>
                        <p className="text-xs text-gray-600 font-medium break-words leading-relaxed">
                          <span className="font-bold text-gray-900">{order.shippingAddress.name}</span> · {order.shippingAddress.address}, {order.shippingAddress.city} - {order.shippingAddress.pincode} · {order.shippingAddress.phone}
                        </p>
                      </div>
                    )}

                    {/* Status Badges */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${
                        order.isPaid
                          ? "bg-green-50 border border-green-100 text-green-700"
                          : "bg-red-50 border border-red-100 text-red-600"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${order.isPaid ? "bg-green-500" : "bg-red-500"}`} />
                        {order.isPaid ? "Paid" : "Unpaid"}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${
                        order.isDelivered
                          ? "bg-blue-50 border border-blue-100 text-blue-700"
                          : "bg-yellow-50 border border-yellow-100 text-yellow-700"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${order.isDelivered ? "bg-blue-500" : "bg-yellow-500"}`} />
                        {order.isDelivered ? "Delivered" : "Pending"}
                      </span>
                    </div>
                  </div>

                </div>
                {index < orders.length - 1 && (
                  <div className="w-full border-t border-gray-200/80 my-8 shadow-sm" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AdminOrders;
