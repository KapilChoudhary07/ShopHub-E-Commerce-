
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBoxOpen, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { token, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <nav className="bg-gray-950 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3.5">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black tracking-tight text-white hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="inline-flex w-7 h-7 bg-white rounded-md items-center justify-center">
            <span className="text-gray-950 text-xs font-black">S</span>
          </span>
          ShopHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="text-gray-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            Home
          </Link>

          <div className="w-px h-5 bg-gray-800 mx-2" />

          {/* Wishlist */}
          <Link to="/wishlist" className="relative p-2.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-200 group">
            <FaHeart className="text-base transition-transform duration-200 group-hover:scale-110" />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 group">
            <FaShoppingCart className="text-base transition-transform duration-200 group-hover:scale-110" />
            {cart.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-white text-gray-950 text-[10px] font-black px-1 rounded-full flex items-center justify-center leading-none">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Orders */}
          {token && (
            <Link to="/orders" className="relative p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 group" title="My Orders">
              <FaBoxOpen className="text-base transition-transform duration-200 group-hover:scale-110" />
            </Link>
          )}

          {/* Admin */}
          {token && user?.isAdmin && (
            <Link to="/admin" className="relative p-2.5 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-gray-800 transition-all duration-200 group" title="Admin Panel">
              <svg className="w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          )}

          <div className="w-px h-5 bg-gray-800 mx-2" />

          {/* Auth */}
          {!token ? (
            <div className="flex items-center gap-2">
              <Link to="/login" className="text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200">
                Login
              </Link>
              <Link to="/register" className="text-sm font-semibold bg-white text-gray-950 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 active:scale-95">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 bg-gray-800 px-3 py-1.5 rounded-xl border border-gray-700">
                <span className="w-6 h-6 rounded-md bg-white text-gray-950 text-xs font-black flex items-center justify-center">
                  {initial}
                </span>
                {user?.name && (
                  <span className="text-gray-300 text-sm font-medium hidden sm:block">
                    {user.name.split(" ")[0]}
                  </span>
                )}
              </div>
              <button onClick={handleLogout} className="text-sm font-semibold text-gray-400 hover:text-red-400 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 active:scale-95">
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Right — Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-2">

          {/* Cart (always visible on mobile) */}
          <Link to="/cart" className="relative p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200">
            <FaShoppingCart className="text-base" />
            {cart.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-white text-gray-950 text-[10px] font-black px-1 rounded-full flex items-center justify-center leading-none">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
          >
            {menuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-3 flex flex-col gap-1">

          <Link to="/" onClick={() => setMenuOpen(false)}
            className="text-gray-400 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
            Home
          </Link>

          <Link to="/wishlist" onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-gray-400 hover:text-red-400 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
            <FaHeart className="text-sm" /> Wishlist
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-gray-400 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
            <FaShoppingCart className="text-sm" />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="min-w-[18px] h-[18px] bg-white text-gray-950 text-[10px] font-black px-1 rounded-full flex items-center justify-center leading-none">
                {cart.length}
              </span>
            )}
          </Link>

          {token && (
            <Link to="/orders" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-gray-400 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
              <FaBoxOpen className="text-sm" /> My Orders
            </Link>
          )}

          {token && user?.isAdmin && (
            <Link to="/admin" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-amber-400 hover:text-amber-300 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin Panel
            </Link>
          )}

          <div className="border-t border-gray-800 my-1" />

          {!token ? (
            <div className="flex flex-col gap-2 pt-1">
              <Link to="/login" onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-semibold text-gray-300 hover:text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
                Login
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-semibold bg-white text-gray-950 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-200">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2.5 bg-gray-800 px-3 py-1.5 rounded-xl border border-gray-700">
                <span className="w-6 h-6 rounded-md bg-white text-gray-950 text-xs font-black flex items-center justify-center">
                  {initial}
                </span>
                {user?.name && (
                  <span className="text-gray-300 text-sm font-medium">
                    {user.name.split(" ")[0]}
                  </span>
                )}
              </div>
              <button onClick={handleLogout}
                className="text-sm font-semibold text-gray-400 hover:text-red-400 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;