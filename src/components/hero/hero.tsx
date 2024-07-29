"use client";

import React from "react";
import { Ticker } from "../ticker/ticker3";
import { cards, Card } from "../ticker/tickerCards";
import bgNaut from "/public/kobby-mendez-d0oYF8hm4GI-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faGithub, faLinkedin);

//Notes about font-awesome - more complicated than it should be
//but necessary because brand icons are depreciating with other icon libraries
//must import each library type (fab, fas, far, etc) separately
//then import each icon type (faGithub, faLinkedin, etc) separately using library.add()
//then use icon={["library", "icon"]} in FontAwesomeIcon

const Hero = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-4 items-end w-screen mr-4 z-10">
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
      <h2 className="text-3xl font-raleway font-bold">Full-Stack Engineer</h2>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={["fab", "github"]} className="text-3xl" />
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-3xl" />
      </div>
      {/* <div>
        <h3>Projects</h3>
        <Ticker>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </Ticker>
      </div> */}
    </div>
  );
};

export default Hero;
