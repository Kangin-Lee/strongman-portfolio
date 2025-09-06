/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns를 사용하여 허용할 외부 이미지 도메인을 설정합니다.
    remotePatterns: [
      {
        protocol: "https", // 이미지 호스트의 프로토콜 (http 또는 https)
        hostname: "blog.kakaocdn.net", // 문제가 발생했던 이미지 호스트네임
        port: "", // 기본 포트를 사용하므로 비워둡니다.
        pathname: "/dn/**", // 해당 호스트네임 내에서 이미지가 있는 경로 (경로가 다양할 경우 와일드카드 ** 사용)
      },
      {
        protocol: "https",
        hostname: "t1.daumcdn.net", // 기본 썸네일로 사용했던 티스토리 기본 이미지 도메인도 추가해줍니다.
        port: "",
        pathname: "/tistory_admin/**",
      },
    ],
  },
};

export default nextConfig;
