"use client";

import React from "react";
import { Ticker } from "../ticker/ticker3";
import { cards, Card } from "../ticker/tickerCards";
import bgNaut from "/public/kobby-mendez-d0oYF8hm4GI-unsplash.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="z-0 overflow-hidden invert dark:invert-0"
        style={{
          backgroundImage: `url(${bgNaut.src})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className="text-9xl font-raleway font-bold absolute top-[25%] right-2">
        J_Otto
      </h1>
      <div className="object-bottom">
        <h3>Projects</h3>
        <Ticker>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </Ticker>
      </div>
    </div>
  );
};

export default Hero;
