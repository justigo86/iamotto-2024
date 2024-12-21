"use client";

import React from "react";

const Eyes = () => {
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
      // containerX = (e.clientX - bound?.left) / 2;
      // containerY = (e.clientY - bound?.top) / 2;
      const containerRect = container.getBoundingClientRect();
      const containerX = (e.clientX - containerRect.left) / 2;
      const containerY = (e.clientY - containerRect.top) / 2;
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
    <div className="flex gap-2">
      <div
        id="container"
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center ease-in-out"
      >
        <div className="pupil w-4 h-4 bg-black rounded-full"></div>
      </div>
      <div
        id="container"
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center ease-in-out"
      >
        <div className="pupil w-4 h-4 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Eyes;
