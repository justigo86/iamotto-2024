"use client";
import bgBlue from "/public/blue-view.jpg";

import React from "react";

type Props = {};

const Ticker = (props: Props) => {
  return (
    <section className="relative h-[30vh] w-screen bg-white flex items-center">
      <div className="h-[25vh] w-screen bg-blue-600 flex items-center overflow-hidden">
        <div className="flex gap-4">
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
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
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
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
    url: "/public/vercel.svg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/public/vercel.svg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/public/vercel.svg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/public/vercel.svg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/public/next.svg",
    title: "Title 6",
    id: 6,
  },
];

export default Ticker;
