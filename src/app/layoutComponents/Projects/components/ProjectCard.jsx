import ProjectModal from "./ProjectModal";

export default function ProjectCard() {
  return (
    <ProjectModal>
      <div className="border rounded-md p-4 text-start flex flex-col gap-2 cursor-pointer">
        {/* 아이콘 */}
        <img src="/projectIcons/satellite.png" width={35} />

        {/* 프로젝트 제목 */}
        <div className="text-xl font-semibold">NEW WORCS</div>

        {/* 프로젝트 설명 */}
        <p className="text-sm mt-2">
          고객사들의 요청 및 케어를 효율적으로 관리하는 시스템을 개편하는
          프로젝트
        </p>

        {/* 기술 스택 */}
        <div>기술 스택</div>
      </div>
    </ProjectModal>
  );
}
