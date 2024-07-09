"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleClasses = "text-sm flex items-center px-2 py-2 relative z-10";

  return (
    <div className={`w-fit items-center pr-4`}>
      <div className="relative flex w-fit items-center rounded-full">
        <button
          className={`${toggleClasses} ${
            theme === "light" ? "text-white" : "text-slate-300"
          }`}
          onClick={() => {
            setTheme("light");
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
        </button>
        <button
          className={`${toggleClasses} ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${
            theme === "dark" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-red-500"
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
