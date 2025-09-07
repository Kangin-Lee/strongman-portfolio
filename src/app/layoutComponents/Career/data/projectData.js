// 프로젝트 정보를 담은 데이터

export const projectData = [
  {
    id: 1, // 각 항목을 구분할 고유 ID (선택 사항이지만 React list에선 'key'로 사용 권장)
    date: "2025.06 ~ 2025.12",
    title: "NEW WORCS",
    description:
      "고객사들의 요청 및 케어를 효율적으로 관리하는 시스템을 개편하는 프로젝트",
    skill: [
      "javascript.svg",
      "java.svg",
      "next.svg",
      "springboot.svg",
      "tailwindcss.svg",
      "shadcn-ui.svg",
      "zustand.svg",
      "tanstack-query.svg",
      "react-hook-form.svg",
      "mysql.svg",
      "github.svg",
      "figma.svg",
    ],
    details: [
      "기존 WORCS 시스템의 낮은 반응성, 복잡한 UI 문제를 해결하고자 Next.js 기반 시스템 개편의 프론트엔드 아키텍처 및 UI/UX 혁신 주도.",
      "Shadcn, TailwindCSS, Next.js 기반의 디자인/스타일 가이드를 정의하여 UI/UX 일관성 확보 및 협업 효율성 증대.",
      "React Hook Form/Zod로 견고한 입력 검증 로직 구현(사용자 입력 오류 25% 감소) 및 Zustand/Tanstack Query로 효율적 상태 관리.",
      "재사용 가능한 컴포넌트 설계 및 빠른 스타일링으로 UI 개발 기간 20% 단축 및 사용자 만족도 향상에 기여.",
    ],
  },
  {
    id: 2, // 각 항목을 구분할 고유 ID (선택 사항이지만 React list에선 'key'로 사용 권장)
    date: "2025.06 ~ 2025.07",
    title: "IOPS Style Guide",
    description:
      "아이옵스의 아이덴티티를 반영한 UI 컴포넌트 스타일 가이드 제작 및 디자인 시스템 구축",
    skill: [
      "javascript.svg",
      "next.svg",
      "tailwindcss.svg",
      "shadcn-ui.svg",
      "tanstack-query.svg",
      "react-hook-form.svg",
      "github.svg",
      "figma.svg",
    ],
    details: [
      "Next.js 기반 환경에서 부서 전체가 활용할 통합 UI 컴포넌트 스타일 가이드를 기획 및 제작하여 개발 작업 표준화와 유지보수 효율성 증대.",
      "Tailwind CSS와 Shadcn/ui를 활용, 회사 브랜드 아이덴티티가 반영된 커스텀 스타일 정의 및 일관된 디자인 시스템 구축.",
      "Figma 디자인 시안을 기반으로 재사용 가능한 컴포넌트 스타일을 정의하고 협업에 기여.",
      "명확한 디자인 시스템 확립으로 UI 완성도 향상, 디자인 오류 및 스타일 충돌 감소, 개발 과정 효율성 증대 및 제품 품질 안정성 강화.",
    ],
  },
  {
    id: 3,
    date: "2023.12 ~ 2025.12",
    title: "OpsNet",
    description: "위성 관련 품질 데이터를 관리·분석하는 시스템 고도화 프로젝트",
    skill: [
      "javascript.svg",
      "springboot.svg",
      "java.svg",
      "jquery.svg",
      "thymleaf.svg",
      "mariadb.svg",
      "github.svg",
      "figma.svg",
    ],
    details: [
      "위성 품질 데이터 관리 시스템의 복잡한 UI, 비효율적 데이터 흐름 문제 해결을 위한 고도화 프로젝트 전반 담당.",
      "Figma로 100여 개 화면 설계, 사용자 중심 UX 재정의 및 HTML, CSS, jQuery, Chart.js, Thymeleaf로 반응형 웹 구현.",
      "Chart.js 기반 대시보드 및 그래프 시각화 도입으로 복잡한 데이터 가독성 및 업무 처리 속도 대폭 향상.",
      "백엔드 개발 및 데이터 관리 체계 고도화를 통해 데이터 처리 안정성 및 효율성 개선, 사용자 만족도 증대에 기여.",
    ],
  },
];
