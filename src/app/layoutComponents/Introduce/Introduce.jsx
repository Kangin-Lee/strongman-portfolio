import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Introduce() {
  return (
    <div className="text-center my-20">
      {/* 타이틀 */}
      <h1 className=" text-5xl font-semibold leading-[1.3]">
        안녕하세요.
        <br />
        FrontEnd 개발자 <br />
        <span className="text-myblue">이강인</span>입니다.
      </h1>

      {/* 설명 */}
      <div className="my-6 text-mygray text-lg">
        React, Next를 중심으로 웹 프론트엔드를 개발합니다.
        <br />
        끊임없이 학습하고 성장하며 도전을 통해 함께 발전해나갈 팀을 기대합니다.
      </div>

      {/* 경력기술서 다운로드 버튼 */}
      <div>
        <Button asChild>
          <Link href="/login">
            경력기술서 다운로드 <Download />
          </Link>
        </Button>
      </div>
    </div>
  );
}
