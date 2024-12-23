"use client";

import { ProjectCard } from "../../components/cards/projectCard";
// import { Arrow } from '@/components/projects/Arrow'
import { cardInfo } from "../../components/cards/projectData";

const Projects = ({ id }: { id: string }) => {
  const rows = [
    cardInfo.slice(0, 3),
    cardInfo.slice(3, 6),
    cardInfo.slice(6, 9),
  ];

  return (
    <div
      id={id}
      // className="bg-orange-200 dark:bg-orange-600 w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32"
      className="w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32"
    >
      <main className="flex flex-col container mx-auto px-4 py-12">
        <h1 className="self-center text-5xl font-urbanist font-bold mb-10 md:mb-[4rem]">
          Projects
        </h1>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative flex mb-10 md:mb-24">
            <div
              className={`flex flex-col md:flex-row gap-10 w-full md:w-4/5 mx-auto md:${
                rowIndex % 2 === 0 ? "ml-4" : "mr-4 justify-end"
              }`}
            >
              {row.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex  ${
                    rowIndex % 2 === 0
                      ? index % 2 === 0
                        ? "justify-end"
                        : "justify-start"
                      : index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }`}
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
      </main>
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
