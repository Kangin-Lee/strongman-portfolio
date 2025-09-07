// 프로젝트 사항 아이템 컴포넌트

import { Asterisk } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { projectData } from "../data/projectData";

export default function ProjectComponent() {
  return (
    <div>
      {/* projectData 배열을 map 함수로 순회하며 각 항목을 렌더링 */}
      {projectData.map((item) => (
        <div className="flex items-start gap-8 mb-8" key={item.id}>
          {/* 날짜 들어가는 영역 */}
          <section className="flex items-center gap-2 text-mygray">
            <Asterisk size={16} />
            <p className="w-[145px] text-start">{item.date}</p>
          </section>

          {/* 메인 컨텐츠 영역 */}
          <section className="flex flex-col text-start gap-1">
            {/* 프로젝트 타이틀 */}
            <h1 className="font-semibold text-xl">{item.title}</h1>

            {/* 프로젝트 설명 */}
            <p className="text-mygray">{item.description}</p>

            {/* 사용 기술 스택 */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.skill.map((tech, index) => (
                <Image
                  key={index}
                  src={`/skill/${tech}`}
                  alt={tech}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              ))}
            </div>

            {/* 업무 리스트 */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>주요 업무 보기</AccordionTrigger>
                <AccordionContent>
                  <div className="bg-foreground/5 p-4 rounded-md">
                    <ul className="list-disc pl-4 text-sm font-light leading-relaxed">
                      {/* item.details 배열을 다시 map 함수로 순회하며 리스트 항목을 렌더링 */}
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      ))}
    </div>
  );
}
