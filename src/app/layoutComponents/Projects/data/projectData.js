export const projectData = [
  {
    id: 1,
    title: "OpsNet",
    icon: "/projectIcons/satellite.png",
    intro:
      "위성 관련 품질 문서 등의 데이터를 관리·분석하는 시스템 고도화 프로젝트",
    techStack: [
      {
        name: "JavaScript",
        src: "/skill/javascript.png",
      },
      {
        name: "jQuery",
        src: "/skill/jquery.png",
      },
      {
        name: "Thymeleaf",
        src: "/skill/thymleaf.png",
      },
      {
        name: "Java",
        src: "/skill/java.png",
      },
      {
        name: "Spring Boot",
        src: "/skill/springboot.png",
      },
      {
        name: "MariaDB",
        src: "/skill/mariadb.png",
      },
      {
        name: "Bootstrap",
        src: "/skill/bootstrap.png",
      },
      {
        name: "Figma",
        src: "/skill/figma.png",
      },
    ],
    team: {
      members: 3,
      roles: { Developer: 3 },
    },
    period: "2023.12 ~ 2025.12",
    links: [],
    tasks: [
      {
        title: "화면 설계 및 UI/UX 개선",
        details: [
          "Figma를 활용하여 100장이 넘는 사용자 플로우 기반의 화면과 직관적인 UI 컴포넌트를 설계",
          "기존의 복잡한 UI를 단순화하여 사용자 중심의 인터페이스와 접근성을 향상",
        ],
      },
      {
        title: "데이터베이스 분석 및 마이그레이션 로직 설계",
        details: [
          "기존 데이터베이스의 비효율적인 구조와 문제점을 심층 분석",
          "데이터 무결성 손상 및 오류 발생 가능성을 사전 진단하여 최적화된 마이그레이션 로직을 설계해 안정적인 전환을 이끔",
          "시스템 요구사항을 면밀히 반영하여 기능적 완성도를 높임",
        ],
      },
      {
        title: "백엔드 시스템 구축 및 프론트엔드 통합 개발",
        details: [
          "Spring Boot와 MariaDB를 기반으로 백엔드 아키텍처를 구축하고, 핵심 비즈니스 로직을 구현",
          "Thymeleaf를 활용하여 사용자 친화적인 웹 화면을 구현하고, HTML/CSS 및 jQuery를 통한 반응형 웹 퍼블리싱 및 프론트엔드 개발",
        ],
      },
    ],
    achievements: [
      {
        title: "사용자 편의성 및 효율성 극대화",
        details: [
          "사용자 중심의 화면 설계와 직관적인 UI/UX 개선을 통해 전반적인 시스템 사용 편의성을 20% 향상시키고, 사용자 동선 단축 및 업무 효율성 증대에 크게 기여",
        ],
      },
      {
        title: "데이터 안정성 및 무결성 확보",
        details: [
          "기존 데이터베이스 분석과 마이그레이션 오류의 사전 진단을 통해 데이터 정합성 및 시스템 안정성을 해 데이터 손상 리스크 제거와 서비스 연속성 보장에 핵심적인 역할",
        ],
      },
      {
        title: "데이터 처리 속도 및 시스템 성능 향상",
        details: [
          "최적화된 데이터 마이그레이션 로직 설계를 통해 이전 시스템 대비 처리 속도를 30% 향상시킴",
          "Base64 인코딩 이미지 최적화를 통해 데이터 로딩 속도를 기존 7.15초에서 1.5초로 약 79% 단축하여, 사용자 경험과 시스템 반응 속도를 대폭 개선",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "NEW WORCS",
    icon: "/projectIcons/setting.png",
    intro:
      "고객사들의 요청 및 케어를 효율적으로 관리하는 시스템을 개편하는 프로젝트",
    techStack: [
      {
        name: "JavaScript",
        src: "/skill/javaScript.png",
      },
      {
        name: "Next.js",
        src: "/skill/next.png",
      },
      {
        name: "Tailwind CSS",
        src: "/skill/tailwindcss.png",
      },
      {
        name: "Shadcn UI",
        src: "/skill/shadcn-ui.png",
      },
      {
        name: "React Hook Form",
        src: "/skill/react-hook-form.png",
      },
      {
        name: "Zustand",
        src: "/skill/zustand.png",
      },
      {
        name: "tanstack-query",
        src: "/skill/tanstack-query.png",
      },
      {
        name: "Spring Boot",
        src: "/skill/springboot.png",
      },
      {
        name: "MySQL",
        src: "/skill/mysql.png",
      },
      {
        name: "Figma",
        src: "/skill/figma.png",
      },
    ],
    team: {
      members: 4,
      roles: { FE: 2, BE: 2 },
    },
    period: "2025.06 ~ 2025.12",
    links: [
      {
        label: "프로토타입 보기",
        url: "https://newworcs-fe-spcr.vercel.app/",
      },
    ],
    tasks: [
      {
        title: "사용자 중심 화면 설계 및 반응형 UI 개발",
        details: [
          "Figma 디자인 시스템을 기반으로 NEXT.js 환경에서 재사용 가능한 컴포넌트를 개발",
          "웹과 모바일 환경에서 일관되고 최적화된 사용자 경험을 제공하는 반응형 UI를 설계하고 구현",
        ],
      },
      {
        title: "효율적인 입력 폼 개발 및 검증",
        details: [
          "React Hook Form과 Zod 스키마를 활용하여 복잡한 입력 폼을 개발하고 클라이언트 측 유효성 검증 시스템을 구축",
          "사용자 입력 오류를 최소화하고 데이터 품질 향상에 기여",
        ],
      },
      {
        title: "상태 관리 및 서버 통신 최적화",
        details: [
          "Zustand를 활용해 전역 상태를 효율적으로 관리",
          "Tanstack Query를 도입하여 서버 통신을 견고히 하며 캐싱 및 데이터 동기화 전략을 구현",
        ],
      },
      {
        title: "데이터 시각화 및 스타일링 최적화",
        details: [
          "Recharts 라이브러리를 이용해 복잡한 데이터를 직관적인 차트로 시각화하고 UI에 통합",
          "Tailwind CSS로 디자인 시스템 기반의 스타일링을 효율화하여 일관된 UI/UX와 빠른 개발 속도를 달성",
        ],
      },
    ],
    achievements: [
      {
        title: "입력 폼 검증 시스템 구축",
        details: [
          "React Hook Form과 Zod를 활용한 견고한 입력 폼 검증 시스템을 구축하여, 사용자 입력 오류를 25% 감소시키고 데이터 정확도를 크게 향상",
        ],
        image: "/project/new_worcs/new_worcs_form.png",
      },
      {
        title: "애플리케이션 최적화",
        details: [
          "Zustand와 Tanstack Query를 도입하여 애플리케이션의 상태 관리와 서버 데이터 통신을 최적화함으로써, 전반적인 반응성과 안정성을 향상시키고 사용자 로딩 시간을 단축",
        ],
      },
      {
        title: "UI 개발 효율성 및 품질 향상",
        details: [
          "Tailwind CSS와 Figma 기반의 사용자 중심 설계를 통해 UI 개발 기간을 20% 단축하였고, 다양한 디바이스에 최적화된 반응형 UI를 완성하여 사용자 만족도를 높임",
        ],
        image: "/project/new_worcs/new_worcs_figma.png",
      },
      {
        title: "데이터 시각화를 통한 서비스 가치 증대",
        details: [
          "Recharts를 이용하여 핵심 데이터를 시각화함으로써 사용자들이 복잡한 정보를 쉽고 빠르게 이해하도록 도와 서비스의 가치와 사용자 편의성을 높임",
        ],
        image: "/project/new_worcs/new_worcs_statistics.png",
      },
    ],
  },
  {
    id: 3,
    title: "IOPS Style Guide",
    icon: "/projectIcons/palette.png",
    intro:
      "아이옵스의 아이덴티티를 반영한 UI 컴포넌트 스타일 가이드 제작 및 디자인 시스템 구축 프로젝트",
    techStack: [
      {
        name: "JavaScript",
        src: "/skill/javaScript.png",
      },
      {
        name: "Next.js",
        src: "/skill/next.png",
      },
      {
        name: "Tailwind CSS",
        src: "/skill/tailwindcss.png",
      },
      {
        name: "Shadcn UI",
        src: "/skill/shadcn-ui.png",
      },
      {
        name: "React Hook Form",
        src: "/skill/react-hook-form.png",
      },
      {
        name: "Zustand",
        src: "/skill/zustand.png",
      },
    ],
    team: {
      members: 1,
      roles: { FE: 1 },
    },
    period: "2025.06 ~ 2025.07",
    links: [
      {
        label: "스타일가이드 보기",
        url: "https://kangin-style-guide.vercel.app/",
      },
    ],
    tasks: [
      {
        title: "통합 UI 컴포넌트 스타일 가이드 제작 및 관리",
        details: [
          "NEXT.js 기반 환경에서 부서 전체가 일관되게 활용할 수 있는 UI 컴포넌트 스타일 가이드를 기획 및 제작",
        ],
      },
      {
        title: "일관된 디자인 시스템 구축",
        details: [
          "Tailwind CSS와 Shadcn/ui를 적극 활용하여 회사 고유의 브랜드 아이덴티티와 디자인 가이드라인이 반영된 커스텀 스타일을 정의하고 통합 디자인 시스템을 구축",
        ],
      },
      {
        title: "Figma 디자인 기반 컴포넌트 스타일 정의",
        details: [
          "Figma로 구현된 디자인 시안을 참고하여 재사용 가능한 컴포넌트들의 스타일 정의",
        ],
        image: "/project/style_guide/main.png",
      },
    ],
    achievements: [
      {
        title: "브랜드 일관성 및 UI 완성도 향상",
        details: [
          "브랜드 고유의 색상과 디자인 원칙을 스타일 가이드에 명확히 반영함으로써 UI 완성도를 높이고, 사용자에게 일관된 브랜드 경험과 인지도를 제공하는 데 기여",
        ],
      },
      {
        title: "디자인 시스템 구축을 통한 효율성 및 안정성 확보",
        details: [
          "명확한 디자인 시스템을 확립하여 프로젝트 내 디자인 오류 및 스타일 충돌을 현저히 감소시킴",
          "이는 개발 과정의 효율성을 증대시키고 최종 제품의 품질 안정성을 강화하는 핵심적인 성과로 이어짐",
        ],
        image: "/project/style_guide/button-component.png",
      },
    ],
  },
];
