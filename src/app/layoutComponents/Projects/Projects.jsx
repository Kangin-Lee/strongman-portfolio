// 프로젝트 상세

import ProjectCard from "./components/ProjectCard";
import { projectData } from "./data/projectData";

export default function Projects() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <p className="text-myblue font-semibold mb-6">프로젝트 상세</p>
        <div className="text-xl font-semibold mt-2 mb-8">
          주요 프로젝트의 세부 사항을 소개드립니다.
        </div>
      </div>

      {/* 프로젝트 카드 map으로 보여주기*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
}
