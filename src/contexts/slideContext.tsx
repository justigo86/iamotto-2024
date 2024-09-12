"use client";

import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Children,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

interface SlideContextType {
  currentPage: number;
  navigateToPage: (pageIndex: number) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error("useSlide must be used within a SlideProvider");
  }
  return context;
};

interface SlideProviderProps {
  children: ReactNode;
  pages: { name: string }[];
}

const SlideProvider = ({ children, pages }: SlideProviderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentPage((prevPage) => {
      let nextPage = prevPage + newDirection;
      if (nextPage < 0) nextPage = pages.length - 1;
      if (nextPage >= pages.length) nextPage = 0;
      return nextPage;
    });
  };

  const navigateToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

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
    <SlideContext.Provider value={{ currentPage, navigateToPage }}>
      {/* <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="relative w-full max-w-2xl aspect-[9/16] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-around">
              {pages.map((page, index) => (
                <li key={page.name}>
                  <Button
                    variant="ghost"
                    onClick={() => navigateToPage(index)}
                    className={currentPage === index ? 'bg-gray-700' : ''}
                  >
                    {page.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-grow relative"> */}
      <div className="flex items-center justify-center min-h-screen bg-transparent">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className="absolute inset-0"
          >
            {Children.toArray(children)[currentPage]}
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
    </SlideContext.Provider>
  );
};

export default SlideProvider;
