"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import UiOrientationContextProvider from "../contexts/uiOrientationContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={"system"}
      enableSystem
      disableTransitionOnChange
    >
      <UiOrientationContextProvider>{children}</UiOrientationContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
