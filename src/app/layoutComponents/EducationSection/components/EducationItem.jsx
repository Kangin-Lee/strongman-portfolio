// 교육 및 자격 아이템 컴포넌트

import { Asterisk } from "lucide-react";
import { educationData } from "../data/EducationItem";

export default function EducationItem() {
  return (
    <div>
      {/* educationData 배열을 map 함수로 순회하며 각 항목을 렌더링 */}
      {educationData.map((item) => (
        <div className="flex items-start gap-8 mb-8" key={item.id}>
          {/* 날짜 들어가는 영역 */}
          <section className="flex items-center gap-2 text-mygray">
            <Asterisk size={16} />
            <p className="w-[145px]">{item.date}</p>
          </section>

          {/* 메인 컨텐츠 영역 */}
          <section className="flex flex-col text-start gap-1">
            {/* 교육 및 자격 타이틀 */}
            <h1 className="font-semibold text-xl">{item.title}</h1>

            {/* 교육 및 자격 설명 */}
            <p className="text-mygray">{item.description}</p>

            {/* 리스트 */}
            <ul className="list-disc pl-4 text-sm font-light">
              {/* item.details 배열을 다시 map 함수로 순회하며 리스트 항목을 렌더링 */}
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}
