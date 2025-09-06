// 블로그 및 노션 카드 컴포넌트

"use client";
import Image from "next/image"; // Next.js의 Image 컴포트 사용
import { useEffect, useState } from "react";
import {
  Card,
  CardAction, // 현재 코드에서는 사용되지 않지만 Card 컴포넌트에 포함된 prop
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Card 컴포넌트 경로 확인
import { ChevronsRight } from "lucide-react";
import Link from "next/link"; // Next.js의 Link 컴포넌트 사용

export default function BlogItem() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/tistory-rss"); // Next.js API Route로 요청

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(
            `Failed to fetch from API: ${res.status} ${res.statusText} - ${errorText}`
          );
        }

        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const items = Array.from(xml.querySelectorAll("item"))
          .slice(0, 3)
          .map((el) => {
            const title = el.querySelector("title")?.textContent || "";
            const pubDateStr = el.querySelector("pubDate")?.textContent || "";
            const description =
              el.querySelector("description")?.textContent || "";
            const postUrl = el.querySelector("link")?.textContent || "#"; // 1. 게시물 URL 파싱

            // 썸네일 이미지 추출
            let thumbnail = null;
            const match = description.match(/<img.*?src=["'](.*?)["']/);
            if (match && match[1]) {
              thumbnail = match[1];
            } else {
              // 이미지 없으면 기본 썸네일
              thumbnail =
                "https://t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png";
            }

            // 2. 날짜 포맷 변경 (YYYY.MM.DD 형식)
            let formattedDate = "";
            try {
              const dateObj = new Date(pubDateStr);
              const year = dateObj.getFullYear();
              const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
              const day = String(dateObj.getDate()).padStart(2, "0");
              formattedDate = `${year}.${month}.${day}`;
            } catch (e) {
              formattedDate = pubDateStr; // 파싱 실패 시 원본 문자열 사용
              console.error("Failed to parse date:", pubDateStr, e);
            }

            return { title, pubDate: formattedDate, thumbnail, url: postUrl }; // postUrl 추가
          });

        setPosts(items);
      } catch (err) {
        console.error("Error in BlogItem component:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p>블로그 게시물을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-48 text-red-500">
        <p>오류 발생: {error}</p>
      </div>
    );
  }

  // 게시물이 없을 경우 메시지 표시
  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        <p>표시할 블로그 게시물이 없습니다.</p>
      </div>
    );
  }

  return (
    // Card들을 가로로 나열하기 위해 flex 사용, gap-4로 간격 추가
    <div className="flex gap-4 overflow-x-auto p-4">
      {" "}
      {/* 필요한 경우 overflow-x-auto 추가 */}
      {posts.map((post, idx) => (
        <Card
          key={idx}
          className="relative w-[280px] h-[280px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          {/* 카드 전체를 덮는 이미지 */}
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized={post.thumbnail.startsWith("https://t1.daumcdn.net")}
          />

          {/* 오버레이 (어두운 배경) */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* 내용 (이미지 위에 표시) */}
          <div className="relative z-10 flex flex-col justify-between h-full text-start">
            <CardHeader className="">
              <CardTitle className="text-white text-2xl font-bold line-clamp-2">
                {post.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-300 mt-1">
                {post.pubDate}
              </CardDescription>
            </CardHeader>

            <CardFooter className="pt-2">
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-200 hover:underline text-sm font-medium transition-colors duration-200"
              >
                자세히 보기 <ChevronsRight size={18} className="ml-1" />
              </Link>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}
