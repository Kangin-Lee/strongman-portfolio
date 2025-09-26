import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        <div className="space-x-3">
          {project.techStack.map((tech, index) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger>
                <img
                  src={tech.src}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="rounded shadow-xl cursor-pointer hover:shadow-none hover:translate-y-0.5 transition-transform duration-200"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </ProjectModal>
  );
}
