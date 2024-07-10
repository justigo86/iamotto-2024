"use client";
import bgBlue from "/public/blue-view.jpg";
import bgVercel from "/public/vercel.svg";
import bgNext from "/public/next.svg";
import React from "react";
import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

// type TickerProps = {
//   children: JSX.Element[];
//   duration?: number;
//   onMouseEnter?: () => void;
//   onMouseLeave?: () => void;
//   isPlaying?: boolean;
//   direction?: number;
// };

type CardType = {
  url: string;
  title: string;
  id: number;
};

const noop = () => {};

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

const Ticker: React.FunctionComponent = () => {
  // const {
  //   children,
  //   duration = 10,
  //   onMouseEnter = noop,
  //   onMouseLeave = noop,
  //   isPlaying = true,
  //   direction = TICKER_DIRECTION_LEFT,
  // } = props;
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [tickerContentWidth, setTickerContentWidth] = React.useState<
    number | null
  >(0);
  const [numDupes, setNumDupes] = React.useState<number>(1);
  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = React.useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);
  const [isPlaying, setIsPlaying] = React.useState(true);

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

  React.useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        {
          x: tickerContentWidth
            ? tickerContentWidth * TICKER_DIRECTION_LEFT
            : 0,
        },
        { ease: "linear", duration: 10, repeat: Infinity }
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [isInView]);

  React.useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying]);

  return (
    <div
      className="FMT__container"
      ref={tickerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div
        ref={scope}
        className="FMT__container__contents"
        // initial={false}
        // animate={{ x: tickerContentWidth * direction }}
        // transition={{ ease: 'linear', duration, repeat: Infinity }}
        style={{ display: "flex" }}
      >
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
        {[...Array(numDupes)].map((_) =>
          cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })
        )}
      </div>
    </div>
  );
};

export default Ticker;
