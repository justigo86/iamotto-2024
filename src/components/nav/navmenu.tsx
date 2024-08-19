import React from "react";
// import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useUiOrientationContext } from "@/contexts/uiOrientationContext";
// import { Ticker } from "../ticker/ticker3";
// import { cards, Card } from "../ticker/tickerCards";

// type Props = {
//   setExpandNav: React.Dispatch<React.SetStateAction<boolean>>;
// };

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
  // {
  //   id: 31,
  //   path: (
  //     <Ticker>
  //       {cards.map((card) => {
  //         return <Card key={card.id} card={card} />;
  //       })}
  //     </Ticker>
  //   ),
  //   shown: false,
  // },
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

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 20,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.2,
//       staggerDirection: 1,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.2,
//       staggerDirection: -1,
//     },
//   },
// };

// const NavMenu = ({ setExpandNav }: Props) => {
const NavMenu = () => {
  // const toggleNav = () => setExpandNav(!setExpandNav);
  // const [linkState, setLinkState] = React.useState<LinkInterface[]>(links);
  // const [updateUI, setUpdateUI] = React.useState(false);
  // const uiOrientation = searchParams?.ui;
  // const [uiOrientation, setUiOrientation] = React.useState(
  //   searchParams?.ui || ""
  // );
  const { uiOrientation, setUiOrientation } = useUiOrientationContext();
  console.log("navmenu params", uiOrientation);

  // const toggleShown = (id: number) => {
  //   setUpdateUI((prev) => {
  //     return !prev;
  //   });
  // setLinkState((prev) => {
  //   return prev.map((link) => {
  //     if (link.id === id) {
  // return { ...link, underlined: !link.underlined };
  // }
  // if (link.id.toString() === id.toString() + "1") {
  //   return {
  //     ...link,
  //     shown: !link.shown,
  // underlined: !link.underlined
  //       };
  //     } else {
  //       return link;
  //     }
  //   });
  // });
  // console.log(linkState);
  // };

  // const expandSection = (id: number) => {
  //   const link = links.find(
  //     (link) => link.id.toString() === id.toString() + "1"
  //   );
  //   if (link) {
  //     link.shown = !link.shown;
  //   }
  // };

  return (
    <motion.div
      key="menu"
      className={`flex mx-4 mt-10 ${
        // updateUI === true ? "text-3xl gap-3" : "text-7xl flex-col"
        uiOrientation === "horizontal" ? "text-3xl gap-3" : "text-7xl flex-col"
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
            className={`my-7 uppercase font-bold w-fit ${
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
                ) : (
                  <motion.div>{link.path}</motion.div>
                )}
                {typeof link.path === "string" ? (
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
