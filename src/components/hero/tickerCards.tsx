import React from "react";
import bgBlue from "/public/blue-view.jpg";
import bgVercel from "/public/vercel.svg";
import bgNext from "/public/next.svg";

type CardType = {
  url: string;
  title: string;
  id: number;
};

export const cards: CardType[] = [
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

export const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="flex relative h-[20vh] w-[30vw] overflow-hidden bg-neutral-200"
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

// export default Card;
