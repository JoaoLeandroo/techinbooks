"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState<string>("tecnologia");


  return (
    <AuthContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
