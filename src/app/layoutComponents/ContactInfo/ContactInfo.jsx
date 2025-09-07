// 연락처 및 정보 컴포넌트

import Link from "next/link";

export default function ContactInfo() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      className="mb-20"
    >
      <p className="text-center text-3xl mb-8 font-[600]">
        감사합니다. <br /> 더 궁금한 점이 있다면 <br /> 연락 주세요.
      </p>

      <section className="bg-[#f3f3f4] rounded-2xl p-8">
        <div className="flex">
          <p className="font-semibold w-24">휴대폰 번호</p>
          <p className="font-light">010-6472-8358</p>
        </div>

        <div className="flex my-4">
          <p className="font-semibold w-24">이메일</p>
          <p className="font-light">rkddls0205@naver.com</p>
        </div>

        <div className="flex">
          <p className="font-semibold w-24">깃허브</p>
          <Link
            href="https://github.com/Kangin-Lee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="underline font-light hover:text-myblue cursor-pointer transition">
              @Kangin-LEE
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
