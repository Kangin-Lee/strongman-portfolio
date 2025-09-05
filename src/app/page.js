import Image from "next/image";
import Introduce from "./layoutComponents/Introduce/Introduce";
import MenuBar from "./layoutComponents/MenuBar/MenuBar";
import CoreCompetencies from "./layoutComponents/CoreCompetencies/CoreCompetencies";
import ContactInfo from "./layoutComponents/ContactInfo/ContactInfo";
import EducationSection from "./layoutComponents/EducationSection/EducationSection";
import Blog from "./layoutComponents/Blog/Blog";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* 소개 및 인사 글 컴포넌트 */}
        <Introduce />

        {/* 메뉴바 컴포넌트 */}
        <MenuBar />

        {/* 핵심역량 */}
        <CoreCompetencies />

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
