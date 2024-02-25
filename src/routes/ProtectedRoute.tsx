import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  if (!token) {
    return <Navigate to="/not-allowed"></Navigate>;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
