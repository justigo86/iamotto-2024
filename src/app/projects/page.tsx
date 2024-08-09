import { Ticker } from "@/components/ticker/ticker3";
import { cards, Card } from "@/components/ticker/tickerCards";
import React from "react";
// import { motion, Variants } from "framer-motion";

type Props = {};

// const navMenuVariants: Variants = {
//   hidden: { height: 0, transition: { duration: 0.5 } },
//   visible: {
//     height: "100vh",
//     transition: { duration: 0.8, ease: "circInOut" },
//   },
// };

const Projects = (props: Props) => {
  // return (
  //   <motion.div
  //     className="bg-light-chestnutRose dark:bg-dark-thunderbird h-screen w-screen overflow-hidden"
  //     variants={navMenuVariants}
  //     initial="visible"
  //   >
  //     Projects
  //   </motion.div>
  // );
  return (
    <div className="bg-light-chestnutRose dark:bg-dark-thunderbird h-screen w-screen overflow-hidden flex justify-center">
      <Ticker>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </Ticker>
    </div>
  );
};

export default Projects;
