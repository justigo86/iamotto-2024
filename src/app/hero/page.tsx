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
  // const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  const innerMovement = (
    mouseX: number,
    mouseY: number,
    boundX: number,
    boundY: number
  ): number => {
    const difX = mouseX - boundX;
    const difY = mouseY - boundY;
    return (Math.atan2(difY, difX) * 180) / Math.PI;
  };
  React.useEffect(() => {
    const container = document.getElementById("container");
    const inner = document.getElementById("inner");
    const bound = container?.getBoundingClientRect();
    let containerX: number;
    let containerY: number;

    window.addEventListener("mousemove", (e) => {
      if (!bound || !inner) return;
      containerX = bound?.left + bound?.width / 2;
      containerY = bound?.top + bound?.height / 2;
      const mvmt = innerMovement(e.clientX, e.clientY, containerX, containerY);
      inner.style.transform = `rotate(${90 + mvmt}deg)`;
    });

    // return () => {
    //   window.removeEventListener("mousemove", innerMovement);
    // };
  }, []);
  return (
    <div className="flex justify-center w-screen max-w-7xl">
      <div className="flex justify-between w-full">
        <div className="text-3xl">
          {/* <p>{mouse.x}</p> <p>{mouse.y}</p> */}
          <div id="container" className="w-20 h-20 bg-white rounded-full">
            <div
              id="inner"
              className="w-5 h-5 bg-black rounded-full"
              // style={{
              //   left: `${mouse.x - }`,
              // }}
            ></div>
          </div>
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
