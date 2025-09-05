export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myblue: "#007aff", // 원하는 컬러명과 값
        mygray: "#6B7280",
      },
    },
  },
  plugins: [],
};
