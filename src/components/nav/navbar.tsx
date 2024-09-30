"use client";

import NavMenu from "./navmenu";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModeToggle } from "../theme/mode-toggle";

// const navMenuVariants: Variants = {
//   hidden: { height: 0, transition: { duration: 0.5 } },
//   visible: {
//     height: "100vh",
//     transition: { duration: 0.8, ease: "circInOut" },
//   },
//   exit: { height: "0vh", transition: { duration: 0.5, ease: "circInOut" } },
// };

const Navbar = () => {
  const [expandNav, setExpandNav] = useState<boolean>(false);
  const [animateHeight, setAnimateHeight] = useState(() => "");

  const toggleNav = () => setExpandNav(!expandNav);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setAnimateHeight("20vh");
      } else {
        setAnimateHeight("100vh");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonClass =
    "items-start text-2xl pl-4 font-urbanist font-bold hover:underline";

  return (
    <nav className="flex fixed w-screen top-0 z-10 justify-center items-center">
      <div className="container flex justify-between mx-auto p-4">
        <AnimatePresence>
          {expandNav ? (
            <motion.div
              key="menu"
              // className="bg-light-fountainBlue dark:bg-dark-oracle h-screen w-screen overflow-hidden"
              className="bg-slate-300 dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent bg-opacity-90 dark:bg-opacity-90 h-content overflow-hidden w-min"
              initial={{ height: 0 }}
              animate={{
                height: animateHeight,
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              // transition={{ duration: 0.5 }}
            >
              <button className={buttonClass} type="button" onClick={toggleNav}>
                Collapse
              </button>
              {/* <NavMenu setExpandNav={setExpandNav} /> */}
              <NavMenu />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ height: 0 }}
              animate={{
                height: animateHeight,
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
            >
              <button className={buttonClass} type="button" onClick={toggleNav}>
                Menu
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
