"use client";

import { useSearchParams } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

type UiOrientationContextType = {
  uiOrientation: string | null;
  setUiOrientation: React.Dispatch<React.SetStateAction<string | null>>;
};

//creating context for uiOrientation
export const UiOrientationContext =
  createContext<UiOrientationContextType | null>(null);

//creating provider to wrap app and use context
const UiOrientationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const uiSearchParams = useSearchParams();
  const orientation = uiSearchParams.get("ui");
  const [uiOrientation, setUiOrientation] = useState(orientation);
  return (
    <UiOrientationContext.Provider value={{ uiOrientation, setUiOrientation }}>
      {children}
    </UiOrientationContext.Provider>
  );
};

export default UiOrientationContextProvider;

//standard useContext custom hook for using context in components
//without needing to use useContext in component and without checking context
export const useUiOrientationContext = () => {
  const context = useContext(UiOrientationContext);

  if (!context) {
    throw new Error(
      "useUiOrientationContext must be used within a UiOrientationContextProvider"
    );
  }

  return context;
};
