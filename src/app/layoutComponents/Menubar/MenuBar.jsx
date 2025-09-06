import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menuItems } from "./data/menuItem";

export default function MenuBar() {
  return (
    <div className="sticky top-6 z-50 flex justify-between items-center bg-gray-200/20 backdrop-blur-lg px-6 py-2 rounded-full">
      {" "}
      {/* bg-gray-200/80 와 backdrop-blur-md 추가 */}
      <section className="mr-8">strongman</section>
      <section className="flex gap-2">
        {/* 버튼 이름, 링크는 다른 파일에 분리 */}
        {menuItems.map((item) => (
          <Button
            key={item.href}
            asChild
            size="sm"
            className={`text-black bg-transparent rounded-full ${
              item.name === "핵심역량" ? "hover:bg-black" : ""
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
        ))}
      </section>
    </div>
  );
}
