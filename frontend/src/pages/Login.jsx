
import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { successToast, errorToast } from "../utils/toast";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Loader from "../components/Loader";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loader message="Signing you in..." fullScreen={true} />;
  }

  const submit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await loginUser(form);
      login(res.data.token, res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      successToast("Login successful");
      navigate(from);
    } catch (err) {
      errorToast("Login failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") submit();
  };

  const EyeOpen = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeOff = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.5 26.9 36 24 36c-5.2 0-9.7-2.9-11.3-7.1l-6.5 5C9.5 39.6 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.5l6.2 5.2C41 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-4z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* LEFT PANEL — hidden on mobile */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-gray-950 p-12">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-gray-950 text-sm font-black">S</span>
          </span>
          <span className="text-white font-black text-lg tracking-tight">ShopHub</span>
        </div>

        <div>
          <h1 className="text-4xl font-black text-white leading-tight mb-4">
            Welcome<br />back. 👋
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sign in to access your orders, wishlist and exclusive deals waiting just for you.
          </p>
          <div className="flex flex-col gap-3 mt-10">
            {[
              { icon: "🛍️", text: "Track your orders in real time" },
              { icon: "❤️", text: "Access your saved wishlist" },
              { icon: "⚡", text: "Faster checkout every time" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-sm">
                  {item.icon}
                </span>
                <span className="text-gray-400 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} ShopHub. All rights reserved.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center px-5 py-10 sm:px-8 sm:py-12">
        <div className="w-full max-w-sm">

          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <span className="w-7 h-7 bg-gray-950 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">S</span>
            </span>
            <span className="text-gray-950 font-black text-base tracking-tight">ShopHub</span>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-black text-gray-950 tracking-tight">Sign in</h2>
            <p className="text-gray-400 text-sm mt-1">Enter your credentials to continue</p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm px-4 py-3 rounded-xl outline-none placeholder-gray-300 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-150"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm px-4 py-3 pr-11 rounded-xl outline-none placeholder-gray-300 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-150"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-150"
              >
                {showPassword ? <EyeOff /> : <EyeOpen />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            onClick={submit}
            disabled={loading}
            className="w-full mt-6 bg-gray-950 text-white font-bold text-sm py-3 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-gray-300 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Google Button */}
          <a
            href="https://shophub-e-commerce-owuz.onrender.com/api/auth/google"
            className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm py-3 rounded-xl transition-all duration-150 active:scale-95"
          >
            <GoogleIcon />
            Continue with Google
          </a>

          {/* Register Link */}
          <p className="text-center mt-6 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-gray-950 font-bold hover:underline transition-all duration-150"
            >
              Create one
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;