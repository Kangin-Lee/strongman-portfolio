// 교육 및 자격 섹션 컴포넌트

import EducationItem from "./components/EducationItem";
import QualificationItem from "./components/QualificationItem";

export default function EducationSection() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <p className="text-myblue font-semibold mb-6">교육 및 자격</p>

        <div>
          {/* 교육 컴포넌트 */}
          <EducationItem />

          {/* 교육 자격 구분선 */}
          <div className="w-full max-w-[600px] h-[1px] mx-auto my-3 md:my-5 bg-gradient-to-r from-foreground/0 via-foreground/15 to-foreground/0"></div>

          {/* 자격 컴포넌트 */}
          <QualificationItem />
        </div>
      </div>
    </div>
  );
}
