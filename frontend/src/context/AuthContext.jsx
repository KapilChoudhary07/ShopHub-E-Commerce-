import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // ✅ Fix — null/undefined safely handle karo
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
const login = (token, user) => {
  setToken(token);
  setUser(user);                                        
  if (token) localStorage.setItem("token", token);     
  if (user) localStorage.setItem("user", JSON.stringify(user));
};

// logout mein user bhi clear karo
const logout = () => {
  setToken(null);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;