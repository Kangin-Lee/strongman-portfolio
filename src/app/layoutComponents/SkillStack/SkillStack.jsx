// 보유 기술 스택 컴포넌트

import SkillStackMenuTabs from "./components/SkillStackMenuTabs";

export default function SkillStack() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <p className="text-myblue font-semibold">보유 기술 스택</p>
        <div className="text-xl font-semibold mt-2 mb-8">
          아래의 기술을 사용할 수 있습니다.
        </div>
        <div>
          {/* 기술스택 탭 컴포넌트 */}
          <SkillStackMenuTabs />

          {/* 자격 컴포넌트 */}
        </div>
      </div>
    </div>
  );
}
