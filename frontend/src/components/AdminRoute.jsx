


import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const rawUser = localStorage.getItem("user");
  const user = rawUser && rawUser !== "undefined" ? JSON.parse(rawUser) : null;

  return user?.isAdmin === true ? children : <Navigate to="/" />;
};

export default AdminRoute;