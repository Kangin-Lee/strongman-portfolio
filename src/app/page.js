import Image from "next/image";
import Introduce from "./layoutComponents/Introduce/Introduce";
import MenuBar from "./layoutComponents/MenuBar/MenuBar";
import CoreCompetencies from "./layoutComponents/CoreCompetencies/CoreCompetencies";

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
      </main>
    </div>
  );
}
