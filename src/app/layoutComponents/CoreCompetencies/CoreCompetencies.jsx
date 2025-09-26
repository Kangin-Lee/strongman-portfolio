//핵심역량 컴포넌트
"use client";

import CoreCard from "./components/CoreCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CoreCompetencies() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="text-center mt-20 mb-24">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
        className="text-center mt-20 mb-24"
      >
        <p className="text-myblue font-semibold">핵심역량</p>

        <div className="text-xl font-semibold mt-2 mb-10">
          사용자 경험, 성능 최적화, 협업에 강한 프론트엔드 개발자입니다.
        </div>

        <CoreCard />
      </div>
    </div>
  );
}
