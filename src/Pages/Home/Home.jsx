import Navbar from "../../NavigationLayout/Navbar";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Contact from "../../Sections/Contact/Contact";
import Projects from "../../Sections/Projects/Projects";
import Skill from "../../Sections/Skill/Skill";
import SkillProgress from "../../Sections/SkillProgress/SkillProgress";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <AboutMe />
      <Skill />
      <SkillProgress />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
