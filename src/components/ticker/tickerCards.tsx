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
      className="relative h-[50vh] w-[40vw] lg:w-[25vw] overflow-hidden bg-transparenthover:scale-110 cursor-pointer grayscale hover:grayscale-0"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute m-auto inset-0 transition-transform duration-300 rounded h-[45vh] w-[35vw] lg:w-[20vw] min-w-60"
      ></div>
      <div className="absolute inset-0 grid place-content-center group">
        <p className="p-8 text-6xl font-black uppercase text-white backdrop-blur-lg group-hover:backdrop-blur-0">
          {card.id}
        </p>
      </div>
    </div>
  );
};

// export default Card;
