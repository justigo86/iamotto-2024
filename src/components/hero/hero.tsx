"use client";

import React from "react";
import { Ticker } from "../ticker3";
import { cards, Card } from "./tickerCards";

const Hero = () => {
  return (
    <div className="z-0 overflow-hidden">
      <h1 className="text-4xl font-raleway font-bold">J.Otto</h1>
      <div>
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
