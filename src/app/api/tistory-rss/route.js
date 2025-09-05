// app/api/tistory-rss/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const rssFeedUrl = "https://conquer-it.tistory.com/rss";

  try {
    const res = await fetch(rssFeedUrl, {
      // 서버에서 외부 API로 요청을 보낼 때, 브라우저가 아닌 서버 환경이므로
      // CORS 문제가 발생하지 않습니다.
      // 필요하다면 User-Agent 등을 추가하여 요청할 수도 있습니다.
    });

    if (!res.ok) {
      // HTTP 오류 상태 코드 (예: 404, 500)가 반환되면 에러 처리
      const errorText = await res.text();
      return NextResponse.json(
        {
          error: `Failed to fetch RSS: ${res.status} ${res.statusText} - ${errorText}`,
        },
        { status: res.status }
      );
    }

    const xmlText = await res.text();
    // 클라이언트에서 파싱할 수 있도록 XML 텍스트 그대로 전달합니다.
    return new Response(xmlText, {
      headers: {
        "Content-Type": "application/xml", // XML 타입으로 명시
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching Tistory RSS:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
