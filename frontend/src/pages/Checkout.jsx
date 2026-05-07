


import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import MainLayout from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + (item.productId?.price || 0) * item.quantity,
    0
  );

  const handlePayment = async () => {
    try {
      setLoading(true);

      if (!total || total <= 0) {
        alert("Invalid amount ❌");
        return;
      }

      const { data } = await api.post("/payment/create", { amount: total });

      const options = {
        key: "rzp_test_SkqVGZl5HDD6DG",
        amount: data.amount,
        currency: "INR",
        order_id: data.id,

        handler: async function (response) {
          try {
            const verifyRes = await api.post("/payment/verify", response);

            if (!verifyRes.data.success) throw new Error("Verification failed");

            await api.post("/orders", {
              cart,
              shippingAddress: address,
              totalPrice: total,
            });

            alert("Payment Successful 🎉");
            navigate("/orders");
          } catch (err) {
            alert("Payment verification failed ❌");
          }
        },

        modal: {
          ondismiss: function () {
            alert("Payment popup closed ❌");
          },
        },
      };

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded ❌");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Payment failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const fieldLabels = {
    name: "Full Name",
    phone: "Phone Number",
    address: "Street Address",
    city: "City",
    pincode: "Pincode",
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
              Checkout
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Complete your order below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            {/* LEFT */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm">

              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gray-950 flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="white" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <h2 className="font-black text-gray-950 text-sm sm:text-base">
                  Shipping Address
                </h2>
              </div>

              <div className="space-y-3">
                {Object.keys(address).map((key) => (
                  <div key={key}>
                    <label className="block text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      {fieldLabels[key] || key}
                    </label>
                    <input
                      placeholder={`Enter ${fieldLabels[key] || key}`}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm px-3 sm:px-4 py-2.5 rounded-xl outline-none"
                      onChange={(e) =>
                        setAddress({ ...address, [key]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4">

              <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm">

                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gray-950 flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </div>
                  <h2 className="font-black text-gray-950 text-sm sm:text-base">
                    Order Summary
                  </h2>
                </div>

                <div className="space-y-3 mb-5">
                  {cart.map((item) => (
                    <div key={item._id} className="flex justify-between items-center text-xs sm:text-sm">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-bold flex items-center justify-center">
                          {item.quantity}x
                        </span>
                        <span className="text-gray-700 font-medium line-clamp-1">
                          {item.productId?.name}
                        </span>
                      </div>
                      <span className="font-bold text-gray-950 ml-2">
                        ₹{((item.productId?.price || 0) * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2 mb-5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold text-gray-800">
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Delivery</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax</span>
                    <span className="font-semibold text-gray-800">Included</span>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex justify-between items-center mb-5">
                  <span className="font-black text-gray-950 text-xs sm:text-sm">
                    Total Payable
                  </span>
                  <span className="font-black text-gray-950 text-lg sm:text-xl">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl
                    ${loading
                      ? "bg-gray-200 text-gray-400"
                      : "bg-gray-950 text-white"
                    }`}
                >
                  {loading ? "Processing..." : `Pay ₹${total.toLocaleString("en-IN")}`}
                </button>

                <p className="text-center text-gray-400 text-[10px] sm:text-xs mt-3">
                  Secured by Razorpay
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;