"use client";
import { useAuth } from "@hooks/useAuth";
import LoginAdminPage from "../login/page";

export const AdminAuth = ({ children }) => {
  const { auth } = useAuth();
  if (!auth) {
    return <LoginAdminPage />;
  }

  return <>{children}</>;
};
