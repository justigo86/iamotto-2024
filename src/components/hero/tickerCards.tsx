import React from "react";
import bgCrown from "/public/CrownClothingHomepage.png";
import bgSmart from "/public/SmartBrainCapture.jpg";
import bgPen from "/public/PennyGalleryCapture2.jpg";
import bgRobo from "/public/RoboFriendsCap.jpg";

type CardType = {
  url: string;
  title: string;
  id: number;
};

export const cards: CardType[] = [
  {
    url: bgCrown.src,
    title: "Title 1",
    id: 1,
  },
  {
    url: bgSmart.src,
    title: "Title 2",
    id: 2,
  },
  {
    url: bgPen.src,
    title: "Title 3",
    id: 3,
  },
  {
    url: bgRobo.src,
    title: "Title 4",
    id: 4,
  },
];

export const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="relative h-[20vh] w-[30vw] overflow-hidden bg-neutral-200"
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
