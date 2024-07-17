"use client";

import React from "react";
import Ticker from "./ticker";
import { InteractiveMarquee } from "../ticker3";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-raleway font-bold">J.Otto</h1>
      <Ticker />
      <InteractiveMarquee>
        <div>Onand</div>
        <div>Onand</div>
        <div>Onand</div>
        <div>Onand</div>
      </InteractiveMarquee>
    </div>
  );
};

export default Hero;
