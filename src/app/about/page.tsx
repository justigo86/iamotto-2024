const About = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      // className="bg-purple-300 dark:bg-purple-800 w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32"
      className="w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32"
    >
      <main className="container flex flex-col justify-center items-center mx-auto p-4 max-w-4xl">
        <h1 className="text-5xl font-urbanist font-bold">About</h1>
        <div>
          <div>
            <h3>About Me</h3>
            <p>
              I started in the industry two years ago primarily as a front-end
              developer but have been blessed with opportunities to contribute
              to projects in a full-stack capacity. Always learning, building,
              and growing to push myself to be a better developer. I am
              passionate about building scalable, secure, user-friendly websites
              and applications through teamwork and critical thinking.
            </p>
          </div>
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
      </main>
    </div>
  );
};

export default About;
