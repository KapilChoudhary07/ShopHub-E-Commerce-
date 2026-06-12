


import { useState } from "react";
import { registerUser } from "../services/authService";
import { successToast, errorToast } from "../utils/toast";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/Loader";

const Register = () => {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return <Loader message="Creating your account..." fullScreen={true} />;
  }

  const submit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await registerUser(form);
      successToast("Registered successfully");
      navigate("/login");
    } catch (err) {
      errorToast("Registration failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* LEFT PANEL — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-gray-950 p-12">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-gray-950 text-sm font-black">S</span>
          </span>
          <span className="text-white font-black text-lg tracking-tight">ShopHub</span>
        </div>

        {/* Center text */}
        <div>
          <h1 className="text-4xl font-black text-white leading-tight mb-4">
            Your favourite<br />
            store, reimagined.
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Join thousands of shoppers who discover the best deals every day on ShopHub.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <p className="text-white font-black text-2xl">42+</p>
              <p className="text-gray-500 text-xs mt-0.5">Products</p>
            </div>
            <div>
              <p className="text-white font-black text-2xl">5★</p>
              <p className="text-gray-500 text-xs mt-0.5">Avg Rating</p>
            </div>
            <div>
              <p className="text-white font-black text-2xl">Free</p>
              <p className="text-gray-500 text-xs mt-0.5">Delivery</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} ShopHub. All rights reserved.
        </p>
      </div>

      {/* RIGHT PANEL — form */}
      <div className="flex-1 flex items-center justify-center px-5 py-10 sm:px-8 sm:py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <span className="w-7 h-7 bg-gray-950 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">S</span>
            </span>
            <span className="text-gray-950 font-black text-base tracking-tight">ShopHub</span>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-black text-gray-950 tracking-tight">
              Create account
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Fill in your details to get started
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                Full Name
              </label>
              <input
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm px-4 py-3 rounded-xl outline-none placeholder-gray-300 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-150"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                Email Address
              </label>
              <input
                placeholder="john@example.com"
                type="email"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm px-4 py-3 rounded-xl outline-none placeholder-gray-300 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-150"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm px-4 py-3 pr-11 rounded-xl outline-none placeholder-gray-300 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-150"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-150"
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Register Button */}
          <button
            onClick={submit}
            disabled={loading}
            className="w-full mt-6 bg-gray-950 text-white font-bold text-sm py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-gray-300 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-950 font-bold hover:underline transition-all duration-150"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Register;