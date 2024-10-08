"use client";

import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ComponentInterface } from "@/types/ComponentInterface";

import Home from "@/app/page";
import Experience from "@/app/experience/page";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Connect from "@/app/connect/page";
// import { useUiOrientationContext } from "./uiOrientationContext";

export const components: ComponentInterface[] = [
  {
    id: 1,
    path: "home",
    shown: true,
    uiOrientation: "vertical",
    component: Home,
  },
  {
    id: 2,
    path: "experience",
    shown: true,
    uiOrientation: "horizontal",
    component: Experience,
  },
  {
    id: 3,
    path: "projects",
    shown: true,
    uiOrientation: "horizontal",
    component: Projects,
  },
  {
    id: 4,
    path: "about",
    shown: true,
    uiOrientation: "horizontal",
    component: About,
  },
  {
    id: 5,
    path: "connect",
    shown: true,
    uiOrientation: "horizontal",
    component: Connect,
  },
];
// const components = [Home, Experience, Projects About, Connect];

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

// interface SlideProviderProps {
//   children: ReactNode;
// }

const SlideProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  // const { uiOrientation, setUiOrientation } = useUiOrientationContext();

  // const childrenArray = Children.toArray(children);

  const paginate = (newDirection: number) => {
    // const previousPageIndex =
    //   currentPage - newDirection === -1
    //     ? components.length - 1
    //     : currentPage - newDirection;
    // const previousPageUiOrientation =
    //   components[previousPageIndex].uiOrientation;
    // setUiOrientation(previousPageUiOrientation);
    setDirection(newDirection);
    setCurrentPage((prevPage) => {
      let nextPage = prevPage + newDirection;
      if (nextPage < 0) nextPage = components.length - 1;
      if (nextPage >= components.length) nextPage = 0;
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
            {children}
            {components[currentPage].component()}
            {/* {components[currentPage]()} */}
          </motion.div>
        </AnimatePresence>
        {/* <button
          className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="text-gray-800 text-" />
        </button>
        <button
          className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={() => {
            paginate(1);
          }}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button> */}
        <button
          className="fixed top-1/2 left-2 transform -translate-y-1/2 bg-transparent"
          onClick={() => paginate(-1)}
        >
          <ArrowBigLeft className="text-gray-800 dark:text-gray-200 h-20 w-20" />
        </button>
        <button
          className="fixed top-1/2 right-2 transform -translate-y-1/2 bg-transparent"
          onClick={() => {
            paginate(1);
          }}
        >
          <ArrowBigRight className="text-gray-800 dark:text-gray-200 h-20 w-20" />
        </button>
      </div>
    </SlideContext.Provider>
  );
};

export default SlideProvider;
