"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#e8e8e8]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="Betterfit home">
            <Image
              src={scrolled ? "/logo-black.svg" : "/logo-white.svg"}
              alt="Betterfit"
              width={120}
              height={32}
              priority
            />
          </a>
          <a
            href="https://cal.com/betterfit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
              scrolled
                ? "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"
                : "bg-white text-[#0a0a0a] hover:bg-[#f0f0f0]"
            }`}
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}
