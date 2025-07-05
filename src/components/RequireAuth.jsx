import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;
