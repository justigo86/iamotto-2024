"use client";
import React from "react";
// import { Ticker } from "../ticker/ticker3";
// import { cards, Card } from "../ticker/tickerCards";
// import bgNaut from "/public/kobby-mendez-d0oYF8hm4GI-unsplash.jpg";
import HeroIcons from "../../components/hero/heroIcons";

//Notes about font-awesome - more complicated than it should be
//but necessary because brand icons are depreciating with other icon libraries
//must import each library type (fab, fas, far, etc) separately
//then import each icon type (faGithub, faLinkedin, etc) separately using library.add()
//then use icon={["library", "icon"]} in FontAwesomeIcon

const Hero = () => {
  // const mouse = React.useMemo(() => ({ x: 0, y: 0 }), []);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const mouseMovement = (e: { clientX: number; clientY: number }) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMovement);

    return () => {
      window.removeEventListener("mousemove", mouseMovement);
    };
  }, [mouse]);
  return (
    <div className="flex justify-center w-screen max-w-7xl">
      <div className="flex justify-between w-full">
        <div className="text-3xl">
          <p>{mouse.x}</p> <p>{mouse.y}</p>
        </div>
        <div className="flex flex-col gap-4 items-end">
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
