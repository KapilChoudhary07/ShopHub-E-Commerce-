
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar"; 

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  const cards = [
    {
      to: "/admin/products",
      icon: "📦",
      title: "Products",
      desc: "Add, edit or remove products",
      stat: "Manage Inventory",
    },
    {
      to: "/admin/orders",
      icon: "🧾",
      title: "Orders",
      desc: "View and manage all orders",
      stat: "Track Deliveries",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-7 sm:mb-10 flex items-start justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-wide">
                  Admin Panel
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
                Welcome back, {user?.name?.split(" ")[0] || "Admin"} 👋
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Manage your store from here
              </p>
            </div>

            {/* Back to store */}
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 bg-white px-3 py-2 rounded-xl transition-all duration-150 shrink-0"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="hidden sm:inline">Back to Store</span>
            </Link>
          </div>

          {/* Top 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {cards.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-5 sm:p-6 transition-all duration-150"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-gray-950 group-hover:border-gray-950 transition-all duration-200">
                    <span>{card.icon}</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-gray-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
                <h2 className="font-black text-gray-950 text-base mb-1">{card.title}</h2>
                <p className="text-gray-400 text-sm">{card.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-400">{card.stat}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Add Product — full width dark card */}
          <Link
            to="/admin/add-product"
            className="group flex items-center justify-between bg-gray-950 hover:bg-gray-800 border border-gray-900 rounded-2xl p-5 sm:p-6 transition-all duration-150"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                ➕
              </div>
              <div>
                <h2 className="font-black text-white text-base mb-0.5">
                  Add New Product
                </h2>
                <p className="text-gray-400 text-sm">
                  Create a new product listing
                </p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0"
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
            {[
              { label: "Products", fullLabel: "Total Products", icon: "📦" },
              { label: "Orders", fullLabel: "Total Orders", icon: "🧾" },
              { label: "Live", fullLabel: "Store Status", icon: "🟢" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-2"
              >
                <span className="text-base shrink-0">{s.icon}</span>
                <span className="text-xs font-semibold text-gray-400 hidden sm:block">{s.fullLabel}</span>
                <span className="text-xs font-semibold text-gray-400 sm:hidden">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="h-6 sm:h-0" />

        </div>
      </div>
    </>
  );
};

export default AdminDashboard;