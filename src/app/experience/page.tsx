import React from "react";
import bgSmart from "/public/SmartBrainCapture.jpg";
import Image from "next/image";

type Props = {};

const sparqTags: string[] = [
  "React",
  "Angular",
  "TypeScript",
  "SQL",
  "Splunk",
  "AWS",
];

const augTechTags: string[] = ["SQL"];

const Experience = (props: Props) => {
  return (
    <div className="bg-orange-200 dark:bg-orange-600 h-screen w-screen  overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-7xl">
        <div className="py-6 px-8 grid grid-cols-4 gap-10">
          <div className="col-span-3 grid grid-cols-5">
            <header className="col-span-1">2021 - Present</header>
            <div className="col-span-4">
              <h3>Developer - Sparq Holdings</h3>
              <p>
                Worked on several projects in web-design (frontend, backend, and
                fullstack), web-based software development, and database
                management/analysis.
              </p>
              <ul className="flex gap-2">
                {sparqTags.map((tag) => {
                  return (
                    <li
                      key={tag}
                      className="border border-slate-300 rounded-lg px-2"
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={bgSmart} alt="Sparq"></Image>
          </div>
        </div>

        <div className="py-6 px-8 grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <Image src={bgSmart} alt="Sparq"></Image>
          </div>
          <div className="col-span-3 grid grid-cols-5">
            <header className="col-span-1">2019 - 2021</header>
            <div className="col-span-4">
              <h3>Registrar - Augusta Technical College</h3>
              <p>Director of Student Records</p>
              <ul className="flex gap-2">
                {augTechTags.map((tag) => {
                  return (
                    <li
                      key={tag}
                      className="border border-slate-300 rounded-lg px-2"
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
