import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="bg-orange-200 dark:bg-orange-600 h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <div>
        <header>2021 - Present</header>
        <div>
          <h3>Developer - Sparq Holdings</h3>
          <p>
            Worked on several projects in web-design (frontend, backend, and
            fullstack), web-based software development, and database
            management/analysis.
          </p>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>Splunk</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
      <div>
        <header>2019 - 2021</header>
        <div>
          <h3>Registrar</h3>
          <p>Director of Student Records</p>
          <ul>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
