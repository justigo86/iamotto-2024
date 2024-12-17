"use client";

import React from "react";

interface TechIconProps {
  tech: string;
  icon: string;
}

const techIconList: TechIconProps[] = [
  {
    tech: "JS",
    icon: "javascript-plain colored",
  },
  {
    tech: "TS",
    icon: "typescript-plain colored",
  },
  {
    tech: "SQL",
    icon: "mysql-plain colored",
  },
  {
    tech: "React",
    icon: "react-original colored",
  },
  {
    tech: "Node",
    icon: "nodejs-plain-wordmark colored",
  },
  {
    tech: "Splunk",
    icon: "splunk-original-wordmark",
  },
  {
    tech: "NextJS",
    icon: "nextjs-plain",
  },
  {
    tech: "Angular",
    icon: "angularjs-plain colored",
  },
  {
    tech: "Git",
    icon: "git-plain-wordmark colored",
  },
];

const TechIcons = () => {
  return (
    <div className="grid grid-cols-3 gap-9">
      {techIconList.map((tech) => (
        // <div
        //   key={tech}
        //   className="bg-gray-700 p-2 rounded-full text-center"
        // >
        //   {tech}
        // </div>
        <i key={tech.tech} className={`text-4xl devicon-${tech.icon}`}></i>
      ))}
    </div>
  );
};

export default TechIcons;
