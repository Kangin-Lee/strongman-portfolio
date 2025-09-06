import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"], // 한글 포함
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata = {
  title: "이강인 | FrontEnd 개발자",
  description: "FrontEnd dev. Lee Kangin(strongman)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.variable}`}>{children}</body>
    </html>
  );
}
