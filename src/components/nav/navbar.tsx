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

  const buttonClass =
    "fixed top-2 left-2 text-2xl pl-4 font-raleway font-bold hover:underline";

  return (
    <nav className="flex fixed top-0 z-0">
      <AnimatePresence>
        {expandNav ? (
          <motion.div
            key="menu"
            // className="bg-light-fountainBlue dark:bg-dark-oracle h-screen w-screen overflow-hidden"
            className="bg-transparent h-screen overflow-hidden w-min"
            initial={{ height: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <button className={buttonClass} type="button" onClick={toggleNav}>
              Collapse
            </button>
            {/* <NavMenu setExpandNav={setExpandNav} /> */}
            <NavMenu searchParams={{}} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ height: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={buttonClass} type="button" onClick={toggleNav}>
              Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
