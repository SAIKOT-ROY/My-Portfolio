import Navbar from "../../NavigationLayout/Navbar";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Projects from "../../Sections/Projects/Projects";
import Skill from "../../Sections/Skill/Skill";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <AboutMe />
      <Skill />
      <Projects />
    </div>
  );
};

export default Home;
