"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import NavMenu from "./navmenu";
import { useState } from "react";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState<boolean>(false);

  const openNav = () => setExpandNav(!expandNav);

  return (
    <nav className="fixed top-0 min-w-full flex justify-between">
      <Button variant="link" onClick={openNav}>
        Menu
      </Button>
      <ModeToggle />
      {expandNav && <NavMenu />}
    </nav>
  );
};

export default Navbar;
