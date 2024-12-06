import Connect from "./connect/page";
import Experience from "./experience/page";
import Hero from "./hero/page";
import Projects from "./projects/page";

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Connect />
    </>
  );
};

export default Home;
