import React, { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuthContext = () => {
  const user = useContext(AuthContext);
  return user;
};
