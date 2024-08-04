"use client";

import NavMenu from "./navmenu";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

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

  const toggleNav = () => setExpandNav(!expandNav);

  const buttonClass = "text-2xl pl-4 font-raleway font-bold hover:underline";

  return (
    <nav className="flex fixed top-0 z-0">
      <AnimatePresence>
        {expandNav ? (
          <motion.div
            key="menu"
            // className="bg-light-fountainBlue dark:bg-dark-oracle h-screen w-screen overflow-hidden"
            className="bg-transparent h-screen overflow-hidden w-min"
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            // exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className={buttonClass} type="button" onClick={toggleNav}>
              Collapse
            </button>
            {/* <NavMenu setExpandNav={setExpandNav} /> */}
            <NavMenu />
          </motion.div>
        ) : (
          <div className="flex justify-between w-screen">
            <button className={buttonClass} type="button" onClick={toggleNav}>
              Menu
            </button>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
