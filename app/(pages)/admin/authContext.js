"use client";
import { verifyToken } from "@/api/UserAPI";
import { TOKEN } from "@/utils/constants";
import { useEffect, useState } from "react";
import LoginAdminPage from "./login/page";

export default function AuthContext({ children }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem(TOKEN);

      if (token) {
        setIsValid(await verifyToken(token));
      } else {
        setIsValid(false);
      }
    };

    checkTokenValidity();
  }, []);

  if (!isValid) return <LoginAdminPage />;

  return <>{children}</>;
}
