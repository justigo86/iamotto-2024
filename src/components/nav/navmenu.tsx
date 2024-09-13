import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useUiOrientationContext } from "@/contexts/uiOrientationContext";

interface LinkInterface {
  id: number;
  path: string;
  shown: boolean;
  uiOrientation: string;
  // underlined: boolean;
}

const links: LinkInterface[] = [
  {
    id: 1,
    path: "home",
    shown: true,
    uiOrientation: "vertical",
    // underlined: false,
  },
  {
    id: 2,
    path: "experience",
    shown: true,
    uiOrientation: "horizontal",
    // underlined: false,
  },
  {
    id: 3,
    path: "projects",
    shown: true,
    uiOrientation: "horizontal",
    // underlined: false,
  },
  {
    id: 4,
    path: "about",
    shown: true,
    uiOrientation: "horizontal",
    // underlined: false,
  },
  {
    id: 5,
    path: "connect",
    shown: true,
    uiOrientation: "horizontal",
    // underlined: false,
  },
];

const navMenuItemVariants: Variants = {
  navHidden: { opacity: 0 },
  navVisible: {
    opacity: 1,
  },
  navExit: {
    opacity: 0,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 20,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
  exit: { opacity: 0, y: -20 },
};

const NavMenu = () => {
  const { uiOrientation, setUiOrientation } = useUiOrientationContext();

  return (
    <motion.div
      key="menu"
      className={`flex mx-4 mt-10 w-screen h-[75vh] justify-around font-urbanist ${
        // updateUI === true ? "text-3xl gap-3" : "text-7xl flex-col"
        uiOrientation === "horizontal"
          ? "text-3xl ml-6 md:ml-0 md:gap-3 flex-col md:flex-row justify-center "
          : "text-3xl md:text-7xl ml-6 flex-col"
      }`}
      variants={navMenuItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        staggerChildren: 0.2,
        delayChildren: 0.2,
        staggerDirection: 1,
      }}
    >
      {links.map((link: LinkInterface) => {
        return (
          <motion.div
            key={link.id}
            variants={itemVariants}
            className={`uppercase font-bold w-fit ${
              link.shown ? "block" : "hidden"
            }`}
          >
            <Link href={`${link.path}?ui=${link.uiOrientation}`}>
              <motion.div
                className={`relative block overflow-hidden whitespace-nowrap cursor-pointer`}
                variants={itemVariants}
                initial="initial"
                whileHover="hovered"
                onClick={() => setUiOrientation(link.uiOrientation)}
              >
                {typeof link.path === "string" ? (
                  <motion.div>
                    <span className="text-sm md:text-lg">0{link.id}</span>
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
                ) : (
                  <motion.div>{link.path}</motion.div>
                )}
                {typeof link.path === "string" ? (
                  <motion.div className="absolute inset-0">
                    <span className="text-sm md:text-lg">0{link.id}</span>
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
                ) : (
                  ""
                )}
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NavMenu;
