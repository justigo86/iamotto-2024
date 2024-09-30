"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your page components here
import Home from "@/app/page";
import Experience from "@/app/experience/page";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Connect from "@/app/connect/page";

const pages = [
  { component: Home, name: "Home" },
  { component: Experience, name: "Experience" },
  { component: About, name: "About" },
  { component: Projects, name: "Projects" },
  { component: Connect, name: "Connect" },
];

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Paginates to the next page when given a new direction.
  // If the new page number is negative, set the new page number to the last page.
  // If the new page number is greater than the page count, set the new page number to the first page.
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentPage((prevPage) => {
      let nextPage = prevPage + newDirection;
      if (nextPage < 0) nextPage = pages.length - 1;
      if (nextPage >= pages.length) nextPage = 0;
      return nextPage;
    });
  };

  // const navigateToPage = (pageIndex: number) => {
  //   setDirection(pageIndex > currentPage ? 1 : -1)
  //   setCurrentPage(pageIndex)
  // }
  // onClick={() => navigateToPage(index)}

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className=" relative w-full flex-grow overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className="absolute inset-0 max-w-6xl mx-auto"
          >
            {/* {pages[currentPage].component({})} */}
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
