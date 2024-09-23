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
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden bg-light-fountainBlue dark:bg-dark-oracle">
      <div className="flex flex-col md:flex-row w-full">
        <div className="mt-16">
          <Eyes />
        </div>
        <div className="flex flex-col w-screen pr-2 gap-4 items-end font-urbanist font-extrabold">
          <h1 className="text-9xl">J_Otto</h1>
          <h2 className="text-3xl">Full-Stack Engineer</h2>
          <HeroIcons />
        </div>
      </div>
    </div>
  );
};

export default Home;
