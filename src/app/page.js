import Image from "next/image";
import Introduce from "./layoutComponents/Introduce/Introduce";
import CoreCompetencies from "./layoutComponents/CoreCompetencies/CoreCompetencies";
import ContactInfo from "./layoutComponents/ContactInfo/ContactInfo";
import EducationSection from "./layoutComponents/EducationSection/EducationSection";
import Blog from "./layoutComponents/Blog/Blog";
import SkillStack from "./layoutComponents/SkillStack/SkillStack";
import MenuBar from "./layoutComponents/Menubar/MenuBar";
import Career from "./layoutComponents/Career/Career";
import Projects from "./layoutComponents/Projects/Projects";

export default function Home() {
  return (
    <div>
      <main className="w-full min-w-96 max-w-screen-lg min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative">
        <MenuBar />
        <div
          id="home"
          className="h-screen flex flex-col justify-center items-center"
        >
          <Introduce />
        </div>
        <div id="skills">
          <CoreCompetencies />
        </div>
        <div id="tech">
          <SkillStack />
        </div>
        <div id="experience">
          <Career />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <ContactInfo /> {/* 끝인사 + 연락처 + 메일 */}
      </main>
    </div>
  );
}
