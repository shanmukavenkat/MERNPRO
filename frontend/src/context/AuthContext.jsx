// src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  // Fake login for now (later connect with backend API)
  const login = (email, password) => {
    // pretend we got this from backend
    const loggedInUser = {
      name: "Komal",
      email: email,
      role: "Student",
    };
    setUser(loggedInUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
