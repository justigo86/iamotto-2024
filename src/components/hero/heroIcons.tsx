"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faGithub, faLinkedin);

const HeroIcons = () => {
  return (
    <div className="flex gap-2">
      <FontAwesomeIcon
        icon={["fab", "github"]}
        className="text-3xl cursor-pointer hover:text-red-500"
      />
      <FontAwesomeIcon
        icon={["fab", "linkedin"]}
        className="text-3xl cursor-pointer hover:text-red-500"
      />
    </div>
  );
};

export default HeroIcons;
