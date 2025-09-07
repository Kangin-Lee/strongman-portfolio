// 경력 섹션 컴포넌트

import CareerComponent from "./components/CareerComponent";

export default function Career() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <p className="text-myblue font-semibold mb-6">경력 사항</p>

        <div>
          <div className="flex gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
            <div className="w-full h-[1px] bg-gradient-to-l from-foreground/15"></div>
            <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">
              경력
            </p>
            <div className="w-full h-[1px] bg-gradient-to-r from-foreground/15"></div>
          </div>
          {/* 경력 컴포넌트 */}
          <CareerComponent />

          {/* 교육 자격 구분선 */}
          <div className="flex gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
            <div className="w-full h-[1px] bg-gradient-to-l from-foreground/15"></div>
            <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">
              프로젝트
            </p>
            <div className="w-full h-[1px] bg-gradient-to-r from-foreground/15"></div>
          </div>

          {/* 프로젝트 컴포넌트 */}
        </div>
      </div>
    </div>
  );
}
