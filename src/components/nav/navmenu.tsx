"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type Props = {
  setExpandNav: React.Dispatch<React.SetStateAction<boolean>>;
};

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
    path: "experience",
  },
  {
    id: 3,
    path: "projects",
  },
  {
    id: 4,
    path: "about",
  },
  {
    id: 5,
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 20 },
};

const NavMenu = ({ setExpandNav }: Props) => {
  const toggleNav = () => setExpandNav(!setExpandNav);

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
            variants={itemVariants}
            className="my-7 text-7xl uppercase font-bold w-fit"
          >
            <Link href={link.path} onClick={toggleNav}>
              <motion.div
                className="relative block overflow-hidden whitespace-nowrap"
                variants={itemVariants}
                initial="initial"
                whileHover="hovered"
              >
                <motion.div>
                  <span className="text-lg">0{link.id}</span>
                  {link.path.split("").map((letter, index) => {
                    return (
                      <motion.span
                        key={index}
                        className="inline-block"
                        variants={{
                          initial: { y: 0 },
                          hovered: { y: "-100%" },
                        }}
                        transition={{
                          duration: 0.2,
                          delay: 0.03 * index,
                          ease: "easeInOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </motion.div>
                <motion.div className="absolute inset-0">
                  <span className="text-lg">0{link.id}</span>
                  {link.path.split("").map((letter, index) => {
                    return (
                      <motion.span
                        key={index}
                        className="inline-block"
                        variants={{
                          initial: { y: "100%" },
                          hovered: { y: 0 },
                        }}
                        transition={{
                          duration: 0.2,
                          delay: 0.03 * index,
                          ease: "easeInOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NavMenu;
