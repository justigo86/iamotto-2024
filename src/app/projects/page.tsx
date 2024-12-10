"use client";

import { ProjectCard } from "../../components/cards/projectCard";
// import { Arrow } from '@/components/projects/Arrow'
import { PROJECTS } from "../../components/cards/projectData";

const Projects = () => {
  const rows = [
    PROJECTS.slice(0, 3),
    PROJECTS.slice(3, 6),
    PROJECTS.slice(6, 9),
  ];

  return (
    <div className="flex flex-col container mx-auto px-4 py-12">
      <h1 className="self-center text-5xl font-urbanist font-bold mb-[4rem]">
        Projects
      </h1>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="relative flex mb-24">
          <div
            className={`flex flex-col md:flex-row gap-8 w-4/5 mx-auto ${
              rowIndex % 2 === 0 ? "ml-4" : "mr-4 justify-end"
            }`}
          >
            {row.map((project, index) => (
              <div
                key={project.id}
                className={`flex  ${rowIndex % 2 === 0 ? "" : "justify-end"}`}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          {/* {rowIndex < rows.length - 1 && (
            <div className="hidden md:block">
              <Arrow direction={rowIndex % 2 === 0 ? 'right' : 'left'} />
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

// import { Ticker } from "@/components/ticker/ticker3";
// import { cards, Card } from "@/components/ticker/tickerCards";
// import React from "react";

// const Projects = () => {
//   return (
//     <div className="border border-neutral-100 bg-light-chestnutRose dark:bg-dark-thunderbird h-screen w-screen overflow-hidden flex items-center justify-center">
//       <Ticker>
//         {cards.map((card) => {
//           return <Card key={card.id} card={card} />;
//         })}
//       </Ticker>
//     </div>
//   );
// };

export default Projects;
