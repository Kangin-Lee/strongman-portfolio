import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function ProjectModal({ children, project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto min-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-3">
            <img src="/projectIcons/satellite.png" width={50} />
            <span className="text-2xl">{project.title}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 my-5">
          <div>
            <DialogDescription>프로젝트 소개</DialogDescription>
            <p>{project.intro}</p>
          </div>

          <div>
            <DialogDescription>기술스택</DialogDescription>
            <p>
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>

          <div className="flex gap-5">
            <div>
              <DialogDescription>참여인원</DialogDescription>
              <p>
                {project.team.members}명 (
                {Object.entries(project.team.roles).map(
                  ([role, count], index) => (
                    <span key={index}>
                      {role} {count}
                      {index < Object.keys(project.team.roles).length - 1 ? (
                        <span key={index}>, </span>
                      ) : null}
                    </span>
                  )
                )}
                )
              </p>
            </div>

            <div>
              <DialogDescription>기간</DialogDescription>
              <p>{project.period}</p>
            </div>

            {project.links &&
              project.links.length > 0 &&
              project.links[0].url && (
                <div>
                  <DialogDescription>관련링크</DialogDescription>
                  <p>
                    <Link
                      href={project.links[0].url}
                      target="_blank"
                      className="underline hover:text-myblue duration-150"
                    >
                      {project.links[0].label}
                    </Link>
                  </p>
                </div>
              )}
          </div>
        </div>

        <hr />

        {/* 주요 업무 */}
        <div className="my-5">
          <h1 className="text-lg font-semibold mb-3">주요 업무</h1>
          {project.tasks.map((task, i) => (
            <div key={i}>
              <p>
                {i + 1}. {task.title}
              </p>
              <ul className="list-disc pl-8 text-sm font-light mt-1 mb-3 space-y-1.5">
                {task.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr />

        {/* 업무 성과 */}
        <div className="my-5">
          <h1 className="text-lg font-semibold mb-3">업무 성과</h1>
          {project.achievements.map((achieve, i) => (
            <div key={i}>
              <p>
                {i + 1}. {achieve.title}
              </p>
              <ul className="list-disc pl-8 text-sm font-light mt-1 mb-3 space-y-1.5">
                {achieve.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
              {achieve.image && (
                <div className="flex justify-center mb-3">
                  <img src={achieve.image} width={600} />
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
