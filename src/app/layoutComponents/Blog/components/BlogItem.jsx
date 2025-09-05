"use client";
import { useEffect, useState } from "react";

export default function BlogItem() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        // 직접 티스토리 RSS 대신, 우리가 만든 API Route로 요청
        const res = await fetch("/api/tistory-rss"); // local API endpoint

        if (!res.ok) {
          // API Route에서 에러가 발생했는지 확인
          const errorData = await res.text(); // 또는 .json()
          throw new Error(
            `Failed to fetch from API: ${res.status} ${res.statusText} - ${errorData}`
          );
        }

        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        // XML 파싱 로직은 동일합니다.
        const items = Array.from(xml.querySelectorAll("item"))
          .slice(0, 3)
          .map((el) => {
            const title = el.querySelector("title")?.textContent || "";
            const pubDate = el.querySelector("pubDate")?.textContent || "";
            const description =
              el.querySelector("description")?.textContent || "";

            let thumbnail = null;
            const match = description.match(/<img.*?src=["'](.*?)["']/);
            if (match) {
              thumbnail = match[1];
            } else {
              thumbnail =
                "https://t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png";
            }

            return { title, pubDate, thumbnail };
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
    return <div>블로그 게시물을 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post, idx) => (
        <div key={idx} className="flex items-center gap-4 border-b pb-2">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.pubDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
