
import { useEffect, useState } from "react";
import { getMyOrders } from "../services/orderService";
import MainLayout from "../layout/MainLayout";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getMyOrders();
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-6 px-3 sm:py-10 sm:px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-6 sm:mb-8 px-1">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              My Orders
            </h1>
            {!loading && orders.length > 0 && (
              <p className="text-gray-400 text-sm mt-1 font-medium">
                {orders.length} {orders.length === 1 ? "order" : "orders"} placed
              </p>
            )}
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-3">
              <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
              <p className="text-gray-400 text-sm font-medium">Fetching your orders...</p>
            </div>

          /* Empty */
          ) : orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-3xl py-20 px-6 text-center shadow-sm mx-1">
              <div className="w-18 h-18 sm:w-20 sm:h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 text-4xl">
                📦
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">No orders yet</h2>
              <p className="text-gray-400 text-sm mb-8">Looks like you haven't placed any orders</p>
              <button
                onClick={() => window.location.href = "/"}
                className="bg-gray-950 hover:bg-gray-800 text-white text-sm font-bold px-8 py-3.5 rounded-2xl active:scale-95 transition-all duration-150 shadow-lg shadow-gray-900/20"
              >
                Shop Now
              </button>
            </div>

          /* Orders List */
          ) : (
            <div className="flex flex-col gap-3 sm:gap-4">
              {orders.map((order, idx) => (
                <div
                  key={order._id}
                  className="bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-200"
                >
                  {/* Order Header */}
                  <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-gray-100 bg-gray-50/60">
                    <div className="flex items-center justify-between gap-2">
                      {/* Left: order number + meta */}
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit">
                          Order #{idx + 1}
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-gray-400 text-[11px] font-medium">
                            🗓 {new Date(order.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric", month: "short", year: "numeric"
                            })}
                          </span>
                          <span className="text-gray-300 text-[11px]">·</span>
                          <span className="text-gray-400 text-[11px] font-medium">
                            {order.orderItems.length} {order.orderItems.length === 1 ? "item" : "items"}
                          </span>
                        </div>
                      </div>

                      {/* Right: total */}
                      <div className="flex items-baseline gap-0.5 shrink-0">
                        <span className="text-sm font-bold text-gray-400">₹</span>
                        <span className="text-xl font-black text-gray-950 tracking-tight">
                          {order.totalPrice?.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="divide-y divide-gray-100">
                    {order.orderItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-4"
                      >
                        {/* Image */}
                        <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0">
                          <img
                            src={item.product?.image || "https://via.placeholder.com/80"}
                            alt={item.product?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 sm:truncate">
                            {item.product?.name || "Product"}
                          </p>
                          <p className="text-gray-400 text-xs mt-0.5 font-medium">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        {/* Item price */}
                        <div className="text-right shrink-0">
                          <p className="font-black text-gray-950 text-sm">
                            ₹{((item.product?.price || 0) * item.quantity).toLocaleString("en-IN")}
                          </p>
                          <p className="text-gray-400 text-[11px] mt-0.5">
                            ₹{item.product?.price?.toLocaleString("en-IN")} each
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-gray-50/60 border-t border-gray-100">
                    {/* Address row */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-2.5">
                      <span>📍</span>
                      <span className="truncate">
                        {order.shippingAddress
                          ? `${order.shippingAddress.street || ""}, ${order.shippingAddress.city || ""}`
                          : "Address not available"}
                      </span>
                    </div>
                    {/* Status badges */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full ${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}>
                        {order.isPaid ? "✓ Paid" : "✗ Unpaid"}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full ${
                        order.isDelivered
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.isDelivered ? "✓ Delivered" : "⏳ Pending"}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
};

export default OrderHistory;