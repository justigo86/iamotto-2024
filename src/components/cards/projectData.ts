import image1 from "../../../public/RoboFriendsCap.jpg";
import image2 from "../../../public/PennyGalleryCapture2.jpg";
import image3 from "../../../public/SmartBrainCapture.jpg";
import image5 from "../../../public/CrownClothingHomepage.png";

export interface ProjectInfo {
  id: number;
  title: string;
  details: string;
  technologies: string[];
  link1: string;
  link2: string;
  image?: string;
}

export const cardInfo: ProjectInfo[] = [
  {
    id: 4,
    title: "E-Commerce Shopping App",
    details: `E-commerce inspired clothing store app. 
      User account with shopping cart capability.
      Project part of Complete React Developer course.`,
    technologies: ["React", "Redux", "Firebase/Firestore"],
    link1: "https://justigo86.github.io/crd_capstone_dev/",
    link2: "https://github.com/justigo86/crd_capstone_dev",
    image: image5.src,
  },
  {
    id: 3,
    title: "Face Detection App",
    details: `PERN stack React App with AI face-detection. 
      User account capability with upload history.
      Project part of Zero to Mastery Web Development course.`,
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
    link1: "http://smart-brain-jotto.herokuapp.com/",
    link2: "https://github.com/justigo86/SmartBrain",
    image: image3.src,
  },
  {
    id: 2,
    title: "Image Gallery App",
    details: `Unfinished React App. View, add, and delete gallery images.
      A learning project that grew to memorialize a beloved pup.`,
    technologies: ["React", "Firebase/Firestore"],
    link1: "https://justigo86.github.io/gallery4pen/",
    link2: "https://github.com/justigo86/gallery4pen",
    image: image2.src,
  },
  {
    id: 1,
    title: "Dynamic Search Bar App",
    details: `React App used to dynamically search hash database. 
      Project part of Zero to Mastery Web Development course.`,
    technologies: ["React"],
    link1: "https://justigo86.github.io/robofriends/",
    link2: "https://github.com/justigo86/SmartBrain",
    image: image1.src,
  },
];
