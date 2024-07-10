"use client";
import bgBlue from "/public/blue-view.jpg";
import bgVercel from "/public/vercel.svg";
import bgNext from "/public/next.svg";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Ticker = (props: Props) => {
  const [numDupes, setNumDupes] = React.useState<number>(1);
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [tickerContentWidth, setTickerContentWidth] = React.useState<
    number | null
  >(0);

  React.useEffect(() => {
    let contentWidth = 0;

    for (let index = 0; index < cards.length; index++) {
      const element = document.getElementById("_" + index)?.clientWidth;
      if (element) {
        contentWidth += element;
      }
    }

    setTickerContentWidth(contentWidth);
  }, []);

  React.useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth),
          1
        )
      );
    }
  }, [tickerRef.current, tickerContentWidth]);

  return (
    <section className="relative h-[30vh] w-screen bg-white flex items-center">
      <div className="h-[25vh] w-screen bg-pink-500 flex items-center overflow-hidden">
        <motion.div
          className="flex gap-4"
          variants={marqueeVariants}
          animate="animate"
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

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[20vh] w-[30vw] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.id}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: bgBlue.src,
    title: "Title 1",
    id: 1,
  },
  {
    url: bgVercel.src,
    title: "Title 2",
    id: 2,
  },
  {
    url: bgVercel.src,
    title: "Title 3",
    id: 3,
  },
  {
    url: bgVercel.src,
    title: "Title 4",
    id: 4,
  },
  {
    url: bgVercel.src,
    title: "Title 5",
    id: 5,
  },
  {
    url: bgNext.src,
    title: "Title 6",
    id: 6,
  },
];

export default Ticker;