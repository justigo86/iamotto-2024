"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

// const useThemeDetector = () => {
//   const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
//   const mqListener = (e => {
//       setIsDarkTheme(e.matches);
//   });

//   useEffect(() => {
//     const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
//     darkThemeMq.addListener(mqListener);
//     return () => darkThemeMq.removeListener(mqListener);
//   }, []);
//   return isDarkTheme;
// }

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  // setTheme(getCurrentTheme.matches ? "dark" : "light");
  console.log("theme1", theme);
  //update theme based on changes to system/browser theme
  // useEffect(() => {
  // const getCurrentTheme = window.matchMedia("(prefers-color-scheme: dark)");
  // setTheme(getCurrentTheme.matches ? "dark" : "light");
  // getCurrentTheme.addEventListener;
  // setTheme("system");
  //   console.log("theme2", theme);
  // }, []);

  const toggleClasses =
    "text-sm text-slate-200 flex items-center px-2 py-2 relative z-10";

  return (
    <div className="w-fit items-center mr-4 absolute right-0 z-10">
      <div className="relative flex w-fit items-center rounded-full bg-slate-800">
        <button
          className={`${toggleClasses}`}
          onClick={() => {
            setTheme("light");
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
        </button>
        <button
          className={`${toggleClasses}`}
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
        </button>
        <div className="absolute inset-0 flex justify-start dark:justify-end">
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className={`h-full w-1/2 rounded-full ${
              theme === "system" ? "bg-transparent" : "bg-red-500"
            }`}
          />
        </div>
      </div>
    </div>
  );

  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button variant="ghost" size="icon">
  //         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //         <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //         <span className="sr-only">Toggle theme</span>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="end">
  //       <DropdownMenuItem onClick={() => setTheme("light")}>
  //         Light
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("dark")}>
  //         Dark
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("system")}>
  //         System
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );
}
