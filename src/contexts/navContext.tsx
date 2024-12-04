"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavContextType {
  expandNav: boolean;
  setExpandNav: (value: boolean) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <NavContext.Provider value={{ expandNav, setExpandNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
}