// 블로그 노션 섹션 컴포넌트

import { Button } from "@/components/ui/button";
import BlogItem from "./components/BlogItem";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <div>
          <p className="text-myblue font-semibold">블로그 & 노션</p>
          <div className="text-xl font-semibold mt-2 mb-8">
            지속적인 학습과 지식 공유를 통해 기술적 성장을 기록합니다.
          </div>
        </div>

        <div>
          <BlogItem />
        </div>
        <div>
          <Link href="https://conquer-it.tistory.com/" target="_blank">
            <Button>
              블로그 이동 <SquareArrowOutUpRight />
            </Button>
          </Link>

          <Link
            href="https://www.notion.so/eee1a7cf346f41b48e4c30350ad05437"
            target="_blank"
            className="ml-4"
          >
            <Button>
              노션 이동 <SquareArrowOutUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
