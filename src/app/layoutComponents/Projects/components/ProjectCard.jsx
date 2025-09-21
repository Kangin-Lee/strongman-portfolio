import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }) {
  return (
    <ProjectModal project={project}>
      <div className="border rounded-md p-4 text-start flex flex-col gap-2 cursor-pointer hover:bg-gray-100 duration-200">
        {/* 아이콘 */}
        <img src={project.icon} width={35} />

        {/* 프로젝트 제목 */}
        <div className="text-xl font-semibold">{project.title}</div>

        {/* 프로젝트 설명 */}
        <p className="text-sm mt-2">{project.intro}</p>

        {/* 기술 스택 */}
        <div>
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </ProjectModal>
  );
}
