import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useUiOrientationContext } from "@/contexts/uiOrientationContext";
import { components } from "@/contexts/slideContext";
import { useSlideContext } from "@/contexts/slideContext";
import { ComponentInterface } from "@/types/ComponentInterface";

// interface LinkInterface {
//   id: number;
//   path: string;
//   shown: boolean;
//   uiOrientation: string;
//   // underlined: boolean;
// }

// const links: LinkInterface[] = [
//   {
//     id: 1,
//     path: "home",
//     shown: true,
//     uiOrientation: "vertical",
//     // underlined: false,
//   },
//   {
//     id: 2,
//     path: "experience",
//     shown: true,
//     uiOrientation: "horizontal",
//     // underlined: false,
//   },
//   {
//     id: 3,
//     path: "projects",
//     shown: true,
//     uiOrientation: "horizontal",
//     // underlined: false,
//   },
//   {
//     id: 4,
//     path: "about",
//     shown: true,
//     uiOrientation: "horizontal",
//     // underlined: false,
//   },
//   {
//     id: 5,
//     path: "connect",
//     shown: true,
//     uiOrientation: "horizontal",
//     // underlined: false,
//   },
// ];

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
  //NOTE: this is an issue - cannot call outside of slideProvider
  const { navigateToPage } = useSlideContext();
  const { uiOrientation, setUiOrientation } = useUiOrientationContext();

  const onLinkClick = (orientation: string, id: number) => {
    setUiOrientation(orientation);
    navigateToPage(id - 1);
  };

  return (
    <motion.div
      key="menu"
      // className={`flex mx-4 mt-10 w-screen h-[75vh] justify-around font-urbanist ${
      //   // updateUI === true ? "text-3xl gap-3" : "text-7xl flex-col"
      //   uiOrientation === "horizontal"
      //     ? "text-3xl ml-6 md:ml-0 md:gap-3 flex-col md:flex-row justify-center "
      //     : "text-3xl md:text-7xl ml-6 flex-col"
      // }`}
      className="flex mx-4 mt-10 w-screen h-[75vh] justify-around font-urbanist text-3xl ml-6 md:ml-0 md:gap-3 flex-col md:flex-row"
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
      {components.map((component: ComponentInterface) => {
        return (
          <motion.div
            key={component.id}
            variants={itemVariants}
            className={`uppercase font-bold w-fit ${
              component.shown ? "block" : "hidden"
            }`}
          >
            {/* <Link href={`${component.path}?ui=${component.uiOrientation}`}> */}
            <Link href={`${component.path}`}>
              <motion.div
                className={`relative block overflow-hidden whitespace-nowrap cursor-pointer`}
                variants={itemVariants}
                initial="initial"
                whileHover="hovered"
                onClick={() =>
                  onLinkClick(component.uiOrientation, component.id)
                }
              >
                {typeof component.path === "string" ? (
                  <motion.div>
                    <span className="text-sm md:text-lg">0{component.id}</span>
                    {component.path.split("").map((letter, index) => {
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
                  <motion.div>{component.path}</motion.div>
                )}
                {typeof component.path === "string" ? (
                  <motion.div className="absolute inset-0">
                    <span className="text-sm md:text-lg">0{component.id}</span>
                    {component.path.split("").map((letter, index) => {
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
