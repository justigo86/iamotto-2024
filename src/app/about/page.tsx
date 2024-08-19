const About = () => {
  return (
    <div className="bg-purple-300 dark:bg-purple-800 h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-5xl font-raleway font-bold">About</h1>
      <div>
        <p>
          I started in the industry two yeas ago primarily as a front-end
          developer but been blessed with opportunities to contribute to
          projects in a full-stack capacity. Always learning, building, and
          growing to push myself to be a better developer. I am passionate about
          building scalable, secure, user-friendly websites and applications
          through teamwork and critical thinking.
        </p>
        <div>
          <h5>Competencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS/TailwindCSS</li>
            <li>TypeScript/JavaScript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Angular</li>
            <li>SQL</li>
            <li>Splunk</li>
            <li>XML</li>
            <li>AWS</li>
          </ul>
        </div>
        <div>
          <h5>Previously Used</h5>
          <ul>
            <li>DynamoDB</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Java</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
