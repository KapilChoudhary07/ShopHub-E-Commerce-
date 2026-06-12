


import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";

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


  return <Loader message="Signing you in..." fullScreen={true} />;
};

export default GoogleSuccess;