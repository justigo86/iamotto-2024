import React from "react";
import HeroIcons from "@/components/hero/heroIcons";
import Eyes from "@/components/eyes/eyes";

//Notes about font-awesome - more complicated than it should be
//but necessary because brand icons are depreciating with other icon libraries
//must import each library type (fab, fas, far, etc) separately
//then import each icon type (faGithub, faLinkedin, etc) separately using library.add()
//then use icon={["library", "icon"]} in FontAwesomeIcon

const Home = () => {
  return (
    <div className="min-h-screen bg-light-fountainBlue dark:bg-dark-oracle">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
          <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Who am I?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
            <h2 className="text-xl font-bold mb-4">Photo?</h2>
            {/* <Image src="/placeholder.svg" alt="Night sky" width={300} height={200} className="rounded-lg" /> */}
          </div>

          <div className="bg-blue-600 p-6 rounded-lg flex flex-col gap-2 items-center justify-center">
            <h2 className="text-xl font-bold text-center">Links</h2>
            <HeroIcons />
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-lg overflow-hidden ">
            <div>
              <Eyes />
            </div>
            <div className="flex flex-col items-center gap-2 font-urbanist font-extrabold">
              <h1 className="text-6xl">J_Otto</h1>
              <h2 className="text-2xl">Full-Stack Engineer</h2>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Technologies</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                "JS",
                "TS",
                "SQL",
                "Splunk",
                "React",
                "Node",
                "NextJS",
                "Angular",
                "Git",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-700 p-2 rounded-full text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4">About</h2>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              Not sure what is going to go here yet
            </h2>
            <ul className="space-y-2">
              <li>
                <h3 className="font-bold">Topic One</h3>
                <p className="text-sm">Bullet point one</p>
              </li>
            </ul>
          </div>

          <div className="bg-blue-600 p-6 rounded-lg flex items-center justify-center">
            <p className="text-center font-bold">Quote?</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
