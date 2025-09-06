import Image from "next/image";
import { skillItems } from "../../data/skillItem";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DesignSkillTab() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {skillItems
          .filter((item) => item.category === "design") // design 카테고리 필터링
          .map((item, index) => (
            <Tooltip key={item.name}>
              <TooltipTrigger>
                <Image
                  src={item.src}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-lg shadow-xl cursor-pointer hover:shadow-none hover:translate-y-1 transition-transform duration-200"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
      </div>
    </div>
  );
}
