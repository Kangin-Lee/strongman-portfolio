import Image from "next/image";
import Introduce from "./layoutComponents/Introduce/Introduce";
import MenuBar from "./layoutComponents/MenuBar/MenuBar";
import CoreCompetencies from "./layoutComponents/CoreCompetencies/CoreCompetencies";
import ContactInfo from "./layoutComponents/ContactInfo/ContactInfo";
import EducationSection from "./layoutComponents/EducationSection/EducationSection";
import Blog from "./layoutComponents/Blog/Blog";
import SkillStack from "./layoutComponents/SkillStack/SkillStack";

export default function Home() {
  return (
    <div>
      <main className=" w-full min-w-96 max-w-screen-lg min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative ">
        {/* 소개 및 인사 글 컴포넌트 */}
        <Introduce />

        {/* 메뉴바 컴포넌트 */}
        <MenuBar />

        {/* 핵심역량 */}
        <CoreCompetencies />

        {/* 기술스택 */}
        <SkillStack />

        {/* 블로그 */}
        <Blog />

        {/* 교육 및 자격 */}
        <EducationSection />

        {/* 끝인사 + 연락처 + 메일 */}
        <ContactInfo />
      </main>
    </div>
  );
}
