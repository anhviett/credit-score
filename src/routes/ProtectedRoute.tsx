import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("fb_access_token"); // 👈 ví dụ token lưu ở localStorage
  console.log("🚀 ~ ProtectedRoute ~ isAuthenticated:", isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
