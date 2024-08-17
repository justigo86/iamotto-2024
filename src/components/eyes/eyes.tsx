"use client";

import React from "react";

type Props = {};

const Eyes = (props: Props) => {
  React.useEffect(() => {
    // const pupilMovement = (
    //   mouseX: number,
    //   mouseY: number,
    //   boundX: number,
    //   boundY: number
    // ): number => {
    //   const difX = mouseX - boundX;
    //   const difY = mouseY - boundY;
    //   return (Math.atan2(difY, difX) * 180) / Math.PI;
    // };

    const container = document.getElementById("container");
    const pupils = document.querySelectorAll(
      ".pupil"
    ) as NodeListOf<HTMLElement>;
    const bound = container?.getBoundingClientRect();
    let containerX: number;
    let containerY: number;

    const pupilMovement = (e: MouseEvent): void => {
      if (!bound || !pupils || !container) return;
      // containerX = bound?.left + bound?.width / 2;
      // containerY = bound?.top + bound?.height / 2;
      // const mvmt = pupilMovement(e.clientX, e.clientY, containerX, containerY);

      // containerX = (e.clientX - bound?.left) / 25;
      // containerY = (e.clientY - bound?.top) / 25;
      containerX = (e.clientX - bound?.left) / 2;
      containerY = (e.clientY - bound?.top) / 2;
      pupils.forEach((pupil) => {
        // pupil.style.transform = `translate(${containerX}px, ${containerY}px)`;
        pupil.style.transform = `translate(clamp(-100%, ${containerX}%, 100%), clamp(-100%, ${containerY}%, 100%)`;
      });
    };

    window.addEventListener("mousemove", pupilMovement);
    return () => {
      window.removeEventListener("mousemove", pupilMovement);
    };
  }, []);

  return (
    <div className="flex">
      <div
        id="container"
        className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
      >
        <div className="pupil w-5 h-5 bg-black rounded-full"></div>
      </div>
      <div
        id="container"
        className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
      >
        <div className="pupil w-5 h-5 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Eyes;
