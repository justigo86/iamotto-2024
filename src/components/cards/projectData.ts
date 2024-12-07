export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 50,
    title: "Immortals Fenyx Rising",
    description:
      "An action-adventure game set in the world of Greek mythology.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Ubisoft Quebec", "Action-Adventure", "Greek Mythology"],
  },
  {
    id: 49,
    title: "Final Fantasy VII Remake Intergrade",
    description:
      "A reimagining of the iconic RPG with enhanced visuals and new content.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Square Enix", "RPG", "PlayStation 5"],
  },
  {
    id: 48,
    title: "Mundaun",
    description: "A hand-penciled horror tale set in the Swiss Alps.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Hidden Fields", "Horror", "Indie"],
  },
  {
    id: 47,
    title: "Back 4 Blood",
    description:
      "A cooperative first-person shooter from the creators of Left 4 Dead.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Turtle Rock Studios", "FPS", "Cooperative"],
  },
  {
    id: 46,
    title: "Tender: Creature Comforts",
    description: "A narrative game about finding love in a world of monsters.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Gideon Lazarus", "Visual Novel", "Indie"],
  },
  {
    id: 45,
    title: "Cookie Run: Kingdom",
    description: "A mobile RPG featuring cookie characters in a fantasy world.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Devsisters", "Mobile", "RPG"],
  },
  {
    id: 44,
    title: "Cyber Shadow",
    description: "A challenging 2D action-platformer in a cyberpunk world.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Mechanical Head Studios", "Platformer", "Retro"],
  },
  {
    id: 43,
    title: "Hitman 3",
    description:
      "The dramatic conclusion to the World of Assassination trilogy.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["IO Interactive", "Stealth", "Action"],
  },
  {
    id: 42,
    title: "Hades",
    description:
      "A rogue-like dungeon crawler that combines Greek mythology with fast-paced action.",
    image: "/placeholder.svg?height=600&width=600",
    technologies: ["Supergiant Games", "Rogue-like", "Action RPG"],
  },
];
