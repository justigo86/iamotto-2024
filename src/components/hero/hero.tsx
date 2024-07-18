"use client";

import React from "react";
// import Ticker from "./ticker";
import { Ticker } from "../ticker3";
import { cards, Card } from "./tickerCards";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-raleway font-bold">J.Otto</h1>
      {/* <Ticker /> */}
      <div>
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
