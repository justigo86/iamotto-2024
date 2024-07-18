"use client";

import React, { useEffect, useRef } from "react";
import {
  // animate,
  AnimationPlaybackControls,
  motion,
  // useAnimate,
  useMotionValue,
} from "framer-motion";
import { cards, Card } from "./tickerCards";

const Ticker = () => {
  // const [scope, animate] = useAnimate();
  const [numDupes, setNumDupes] = React.useState<number>(1);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerContentWidth, setTickerContentWidth] = React.useState<
    number | null
  >(0);
  const spin = useMotionValue(0);
  const controls = useRef<AnimationPlaybackControls | null>(null);

  // const animation = animate(0, 100);

  useEffect(() => {
    let contentWidth = 0;
    const element = document.querySelector(".card");
    contentWidth += element?.clientWidth || 0;

    // for (let index = 0; index < cards.length; index++) {
    //   const element = document.querySelector(".card");
    // console.log(element);
    // if (element) {
    //   contentWidth += element;
    // }
    // }

    setTickerContentWidth(contentWidth);
  }, []);

  useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth),
          1
        )
      );
    }
  }, [tickerContentWidth]);

  const tickerVariants = {
    animate: {
      x: tickerContentWidth ? tickerContentWidth * -1 : 0,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 9,
          ease: "linear",
        },
      },
    },
  };

  // useEffect(() => {
  //   animate(spin, , {})
  // })

  return (
    <section className="relative h-[30vh] w-screen bg-white flex items-center">
      <div
        className="h-[25vh] w-screen bg-pink-500 flex items-center overflow-hidden"
        // onMouseEnter={() => animation.pause()}
        // onMouseLeave={() => animation.play()}
      >
        <motion.div
          className="card flex gap-4"
          variants={tickerVariants}
          animate="animate"
          // style={{
          //   x
          // }}
        >
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
          {[...Array(numDupes)].map((_) =>
            cards.map((card) => {
              return <Card key={card.id} card={card} />;
            })
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Ticker;
