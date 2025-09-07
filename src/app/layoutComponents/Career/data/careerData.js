// 경력 정보를 담은 데이터

export const careerData = [
  {
    id: 1, // 각 항목을 구분할 고유 ID (선택 사항이지만 React list에선 'key'로 사용 권장)
    date: "2023.12 ~ 현재",
    title: "아이옵스",
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
      "총점 4.5점 만점에 4.42 학점으로 대전대학교 컴퓨터정보통신공학과 수석 졸업",
      "C, Java를 포함한 핵심 프로그래밍 언어 및 자료구조, 알고리즘 등 탄탄한 컴퓨터 과학(CS) 기초 지식 습득",
      "대전대학교 HRD 사업단 온디바이스 AI 응용시스템 개발자 과정 수료",
    ],
  },
  {
    id: 2,
    date: "2023.01 ~ 2023.02",
    title: "지엔소프트",
    description: "IT 서비스 및 SI(시스템 통합) 전문 기업",
    skill: [
      "springboot.svg",
      "java.svg",
      "mysql.svg",
      "github.svg",
      "jquery.svg",
    ],
    details: [
      "JAVA, Python 프로그래밍 이해 및 활용",
      "머신러닝/딥러닝 기반 인공지능 기술 학습",
      "안드로이드 스튜디오를 이용한 앱 개발 경험",
    ],
  },
];
