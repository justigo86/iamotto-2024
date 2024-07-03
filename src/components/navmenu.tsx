"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface LinkInterface {
  id: number;
  path: string;
}

const links: LinkInterface[] = [
  {
    id: 1,
    path: "home",
  },
  {
    id: 2,
    path: "projects",
  },
  {
    id: 3,
    path: "about",
  },
  {
    id: 4,
    path: "connect",
  },
];

const navMenuItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 20 },
};

const NavMenu = () => {
  return (
    <motion.div
      className="flex flex-col mx-4 mt-10"
      variants={navMenuItemVariants}
      initial="hidden"
      animate="visible"
    >
      {links.map((link: LinkInterface) => {
        return (
          <motion.div
            key={link.id}
            variants={item}
            className="my-5 hover:cursor-pointer hover:underline text-2xl w-fit"
          >
            <Link href={link.path}>
              <span>0{link.id}</span>
              {link.path}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NavMenu;
