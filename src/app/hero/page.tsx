import React from "react";
// import { Ticker } from "../ticker/ticker3";
// import { cards, Card } from "../ticker/tickerCards";
// import bgNaut from "/public/kobby-mendez-d0oYF8hm4GI-unsplash.jpg";
import HeroIcons from "../../components/hero/heroIcons";
import Eyes from "@/components/eyes/eyes";

//Notes about font-awesome - more complicated than it should be
//but necessary because brand icons are depreciating with other icon libraries
//must import each library type (fab, fas, far, etc) separately
//then import each icon type (faGithub, faLinkedin, etc) separately using library.add()
//then use icon={["library", "icon"]} in FontAwesomeIcon

const Hero = () => {
  // const mouse = React.useMemo(() => ({ x: 0, y: 0 }), []);
  // const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  return (
    <div
      className="flex items-center justify-center w-screen"
      // style={{
      //   backgroundImage: `url(${bgNaut.src})`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      //   width: "100vw",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="flex w-full">
        <div className="ml-72 mt-16">
          {/* <p>{mouse.x}</p> <p>{mouse.y}</p> */}
          <Eyes />
        </div>
        <div className="flex flex-col w-screen pr-2 gap-4 items-end">
          {/* <div
        className="z-0 overflow-hidden invert dark:invert-0"
        style={{
          backgroundImage: `url(${bgNaut.src})`,
          backgroundSize: "cover",
          height: "80vh",
          width: "100vw",
          backgroundPosition: "center",
        }}
      ></div> */}
          <h1 className="text-9xl font-raleway font-bold">J_Otto</h1>
          <h2 className="text-3xl font-raleway font-bold">
            Full-Stack Engineer
          </h2>
          <HeroIcons />
          {/* <div>
        <h3>Projects</h3>
        <Ticker>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </Ticker>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
