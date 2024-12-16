import { ComponentInterface } from "@/types/ComponentInterface";
import Home from "@/app/page";
import Experience from "@/app/experience/page";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Connect from "@/app/connect/page";

export const components: ComponentInterface[] = [
  {
    id: 1,
    name: "home",
    path: "#home",
    shown: true,
    uiOrientation: "vertical",
    component: Home,
  },
  {
    id: 2,
    name: "experience",
    path: "#experience",
    shown: true,
    uiOrientation: "horizontal",
    component: Experience,
  },
  {
    id: 3,
    name: "projects",
    path: "#projects",
    shown: true,
    uiOrientation: "horizontal",
    component: Projects,
  },
  {
    id: 4,
    name: "about",
    path: "#about",
    shown: true,
    uiOrientation: "horizontal",
    component: About,
  },
  {
    id: 5,
    name: "connect",
    path: "#connect",
    shown: true,
    uiOrientation: "horizontal",
    component: Connect,
  },
];
