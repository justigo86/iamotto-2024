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
    <div className="container mx-auto px-4 py-12">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="relative mb-24">
          <div
            className={`grid grid-cols-3 gap-8 w-4/5 mx-auto ${
              rowIndex % 2 === 0 ? "-ml-16" : "-mr-16"
            }`}
          >
            {row.map((project, index) => (
              <div key={project.id}>
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
