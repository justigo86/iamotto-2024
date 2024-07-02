"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import NavMenu from "./navmenu";
import { useState } from "react";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState<boolean>(false);

  const toggleNav = () => setExpandNav(!expandNav);

  return (
    <nav className="flex fixed top-0">
      {expandNav ? (
        <div className="outline-dashed bg-cyan-200 dark:bg-cyan-800 h-screen w-screen overflow-hidden">
          <Button variant="link" onClick={toggleNav}>
            Collapse
          </Button>
          <NavMenu />
        </div>
      ) : (
        <div className="flex justify-between w-screen h-16">
          <Button variant="link" onClick={toggleNav}>
            Menu
          </Button>
          <ModeToggle />
        </div>
      )}
      {/* {expandNav && <NavMenu {...{ expandNav, setExpandNav }} />} */}
    </nav>
  );
};

export default Navbar;
