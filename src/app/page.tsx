import Connect from "./connect/page";
import Experience from "./experience/page";
import Hero from "./hero/page";
import Projects from "./projects/page";

const Home = () => {
  return (
    <>
      <Hero id={"home"} />
      <Experience id={"experience"} />
      <Projects id={"projects"} />
      <Connect id={"connect"} />
    </>
  );
};

export default Home;
