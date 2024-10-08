import { Ticker } from "@/components/ticker/ticker3";
import { cards, Card } from "@/components/ticker/tickerCards";
import React from "react";
// import { motion, Variants } from "framer-motion";

// const navMenuVariants: Variants = {
//   hidden: { height: 0, transition: { duration: 0.5 } },
//   visible: {
//     height: "100vh",
//     transition: { duration: 0.8, ease: "circInOut" },
//   },
// };

const Projects = () => {
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
    <div className="border border-neutral-100 bg-light-chestnutRose dark:bg-dark-thunderbird h-screen w-screen overflow-hidden flex items-center justify-center">
      <Ticker>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </Ticker>
    </div>
  );
};

export default Projects;
