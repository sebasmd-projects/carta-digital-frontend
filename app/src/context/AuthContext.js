"use client";

import { usersMe } from "@api/UserAPI";
import { REFRESH, TOKEN, USER_ID } from "@utils/constants";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const access = localStorage.getItem(TOKEN);
      if (access) {
        const me = await usersMe(access);
        setAuth(me);
      } else {
        setAuth(undefined);
      }
    })();
  }, []);

  const login = async ({ access, refresh, user_id }) => {
    localStorage.setItem(TOKEN, access);
    localStorage.setItem(REFRESH, refresh);
    localStorage.setItem(USER_ID, user_id);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH);
    localStorage.removeItem(USER_ID);
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  if (auth === undefined) {
    return router.push("/admin");
  }

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
