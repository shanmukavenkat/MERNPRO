import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) return <Navigate to="/login" />;

  if (role && user?.role !== role) {
    return <Navigate to={`/${user.role.toLowerCase()}-dashboard`} />;
  }

  return children;
};

export default ProtectedRoute;
