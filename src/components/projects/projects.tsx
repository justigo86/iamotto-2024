import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {};

const navMenuVariants: Variants = {
  hidden: { height: 0, transition: { duration: 0.5 } },
  visible: {
    height: "100vh",
    transition: { duration: 0.8, ease: "circInOut" },
  },
};

const Projects = (props: Props) => {
  return (
    <motion.div
      className="bg-light-chestnutRose dark:bg-dark-thunderbird h-screen w-screen overflow-hidden"
      variants={navMenuVariants}
      initial="visible"
    >
      Projects
    </motion.div>
  );
};

export default Projects;
