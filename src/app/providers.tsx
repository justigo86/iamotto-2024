"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import UiOrientationContextProvider from "../contexts/uiOrientationContext";
import { Suspense } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  // with build - was erroring with "export encountered errors on following path" - listed all paths
  // corrected by surrounding component that uses useSearchParams - UiOrientationContextProvider - with <Suspense>
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={"system"}
      enableSystem
      disableTransitionOnChange
    >
      <Suspense fallback={<div>Loading...</div>}>
        <UiOrientationContextProvider>{children}</UiOrientationContextProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default Providers;