"use client";

import React from "react";
import Ticker from "./ticker";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-raleway font-bold">J.Otto</h1>
      <Ticker />
    </div>
  );
};

export default Hero;