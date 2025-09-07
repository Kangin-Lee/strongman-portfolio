// 경력 정보를 담은 데이터

export const careerData = [
  {
    id: 1, // 각 항목을 구분할 고유 ID (선택 사항이지만 React list에선 'key'로 사용 권장)
    date: "2023.12 ~ 현재",
    title: "아이옵스",
    status: "ing",
    description: "AI 기반 위성 지상 시스템 소프트웨어 개발 스타트업",
    skill: [
      "react.svg",
      "next.svg",
      "tailwindcss.svg",
      "shadcn-ui.svg",
      "thymleaf.svg",
      "tanstack-query.svg",
      "react-hook-form.svg",
      "github.svg",
      "jquery.svg",
      "figma.svg",
    ],
    details: [
      "Figma를 이용한 사용자 중심 UI/UX 설계 및 JQuery, Next.js를 이용한 반응형 웹 개발",
      "React Hook Form과 Zod 스키마를 활용하여 복잡한 입력 폼에 대한 클라이언트 측 유효성 검증 시스템을 구축",
      "회사 아이덴티티가 반영된 UI 컴포넌트 스타일 가이드를 제작 및 디자인 시스템을 구축",
    ],
  },
  {
    id: 2,
    date: "2023.01 ~ 2023.02",
    title: "지엔소프트",
    status: "past",
    description: "IT 서비스 및 SI(시스템 통합) 전문 기업",
    skill: [
      "springboot.svg",
      "java.svg",
      "mysql.svg",
      "github.svg",
      "jquery.svg",
    ],
    details: [
      "자바스크립트 기본 문법, 함수, API 활용법 등의 웹 개발 기본기 습득 및 활용",
      "jQuery를 활용하여 게시판 UI를 개발하고, 스프링을 이용한 게시판 서버 개발",
      "MySQL을 활용한 CRUD(생성, 읽기, 업데이트, 삭제) 기능 개발 및 전체 프로젝트 배포",
    ],
  },
];
