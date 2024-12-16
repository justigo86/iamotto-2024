"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
// import { useUiOrientationContext } from "@/contexts/uiOrientationContext";
import { components } from "@/data/componentData";
// import { useSlideContext } from "@/contexts/slideContext";
import { ComponentInterface } from "@/types/ComponentInterface";

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

const NavMenu = ({ expand }: { expand: boolean }) => {
  //NOTE: this is an issue - cannot call outside of slideProvider
  // const { navigateToPage } = useSlideContext();
  // const { uiOrientation, setUiOrientation } = useUiOrientationContext();
  // const [shouldAnimate, setShouldAnimate] = useState(false);

  // Only trigger animation when expandNav changes
  // useEffect(() => {
  //   if (expand) {
  //     setShouldAnimate(true);
  //   }
  // }, [expand]);

  // const onLinkClick = (id: number) => {
  //   // setShouldAnimate(false);
  //   // setUiOrientation(orientation);
  //   navigateToPage(id - 1);
  // };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        key="menu"
        className="flex w-full h-[75vh] md:h-content justify-around font-urbanist text-3xl md:ml-0 md:gap-6 flex-col md:flex-row"
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
              <a href={`/${component.path}`}>
                <motion.div
                  className={`relative block overflow-hidden whitespace-nowrap cursor-pointer`}
                  variants={itemVariants}
                  initial="initial"
                  whileHover="hovered"
                  // onClick={() => onLinkClick(component.id)}
                >
                  {typeof component.name === "string" ? (
                    <motion.div>
                      <span className="text-sm md:text-lg">
                        0{component.id}
                      </span>
                      {component.name.split("").map((letter, index) => {
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
                    <motion.div>{component.name}</motion.div>
                  )}
                  {typeof component.name === "string" ? (
                    <motion.div className="absolute inset-0">
                      <span className="text-sm md:text-lg">
                        0{component.id}
                      </span>
                      {component.name.split("").map((letter, index) => {
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
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NavMenu;
