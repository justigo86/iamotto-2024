"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme/mode-toggle";
import NavMenu from "./navmenu";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const navMenuVariants: Variants = {
  hidden: { height: 0, transition: { duration: 0.5 } },
  visible: {
    height: "100vh",
    transition: { duration: 0.8, ease: "circInOut" },
  },
};

const Navbar = () => {
  const [expandNav, setExpandNav] = useState<boolean>(false);

  const toggleNav = () => setExpandNav(!expandNav);

  return (
    <nav className="flex fixed top-0">
      {expandNav ? (
        <motion.div
          className="bg-light-fountainBlue dark:bg-dark-oracle h-screen w-screen overflow-hidden"
          variants={navMenuVariants}
          initial="hidden"
          animate="visible"
        >
          <Button variant="link" onClick={toggleNav}>
            Collapse
          </Button>
          <NavMenu setExpandNav={setExpandNav} />
        </motion.div>
      ) : (
        <div className="flex justify-between w-screen h-16">
          <Button variant="link" onClick={toggleNav}>
            Menu
          </Button>
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
