"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="border-b border-[#21262d] backdrop-blur-md"
        style={{ backgroundColor: "rgba(13, 17, 23, 0.85)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="Betterfit home">
            <Image
              src="/logo-white.svg"
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
            className="px-4 py-2 text-sm font-medium bg-[#f0f6fc] text-[#0d1117] rounded-md hover:bg-white transition-colors duration-200"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}
