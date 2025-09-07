// 경력 섹션 컴포넌트

import CareerComponent from "./components/CareerComponent";
import DividingLine from "./components/DividingLine";
import ProjectComponent from "./components/ProjectComponent";

export default function Career() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <p className="text-myblue font-semibold">경력 사항</p>
        <div className="text-xl font-semibold mt-2 mb-8">
          아래의 기술을 사용할 수 있습니다.
        </div>
        <div>
          {/* 경력 구분선 */}
          <DividingLine title="경력" />

          {/* 경력 컴포넌트 */}
          <CareerComponent />

          {/* 프로젝트 구분선 */}
          <DividingLine title="프로젝트" />

          {/* 프로젝트 컴포넌트 */}
          <ProjectComponent />
        </div>
      </div>
    </div>
  );
}
