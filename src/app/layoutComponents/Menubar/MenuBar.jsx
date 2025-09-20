"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menuItems } from "./data/menuItem";
import { useState, useEffect } from "react";

export default function MenuBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.substring(1)); // # 제거

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center bg-gray-200/20 backdrop-blur-lg px-6 py-2 rounded-full">
      <section className="mr-8">strongman</section>
      <section className="flex gap-2">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            size="sm"
            onClick={() => handleClick(item.href)}
            className={`text-black bg-transparent rounded-full hover:bg-black hover:text-white transition-colors ${
              activeSection === item.href.substring(1)
                ? "bg-black text-white"
                : ""
            }`}
          >
            {item.name}
          </Button>
        ))}
      </section>
    </div>
  );
}
