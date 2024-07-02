"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface LinkInterface {
  id: number;
  path: string;
}

const links: LinkInterface[] = [
  {
    id: 1,
    path: "home",
  },
  {
    id: 2,
    path: "projects",
  },
  {
    id: 3,
    path: "about",
  },
  {
    id: 4,
    path: "connect",
  },
];

const NavMenu = () => {
  return (
    <div className="flex flex-col mx-4 mt-10">
      {links.map((link: LinkInterface) => {
        return (
          <Link
            key={link.id}
            href={link.path}
            className="my-5 hover:cursor-pointer hover:underline text-2xl"
          >
            <span>0{link.id}</span>
            {link.path}
          </Link>
        );
      })}
    </div>
  );
};

export default NavMenu;
