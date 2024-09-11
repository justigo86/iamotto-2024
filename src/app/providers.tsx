"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import UiOrientationContextProvider from "../contexts/uiOrientationContext";
import { Suspense } from "react";
// import { SlideProvider } from "@/contexts/slideContext";

// import Home from "@/app/page";
// import Experience from "@/app/experience/page";
// import About from "@/app/about/page";
// import Projects from "@/app/projects/page";
// import Connect from "@/app/connect/page";
// const pages = [
//   { component: Home, name: "Home" },
//   { component: Experience, name: "Experience" },
//   { component: About, name: "About" },
//   { component: Projects, name: "Projects" },
//   { component: Connect, name: "Connect" },
// ];

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
        {/* <SlideProvider pages={pages}>
          {pages.map(({ component: Component }, index) => (
            <UiOrientationContextProvider key={index}>
              {children}
              <Component />
            </UiOrientationContextProvider>
          ))}
        </SlideProvider> */}
        <UiOrientationContextProvider>{children}</UiOrientationContextProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default Providers;
