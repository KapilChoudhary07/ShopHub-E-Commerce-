


import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const user = params.get("user");

  if (token) {
    login(token, user ? JSON.parse(decodeURIComponent(user)) : null);
    navigate("/");
  } else {
    navigate("/login");
  }
}, []);


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 bg-gray-950 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-black">S</span>
          </span>
          <span className="text-gray-950 font-black text-lg tracking-tight">ShopHub</span>
        </div>

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />

        {/* Text */}
        <div className="text-center">
          <p className="text-gray-900 font-bold text-base">Signing you in...</p>
          <p className="text-gray-400 text-sm mt-1">Please wait a moment</p>
        </div>

      </div>
    </div>
  );
};

export default GoogleSuccess;