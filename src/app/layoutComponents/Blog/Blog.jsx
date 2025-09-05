// 블로그 섹션 컴포넌트

import BlogItem from "./components/BlogItem";

export default function Blog() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
      className="text-center mt-20 mb-24"
    >
      <div>
        <p className="text-myblue font-semibold mb-6">블로그</p>

        <div>
          <BlogItem />
        </div>
      </div>
    </div>
  );
}
