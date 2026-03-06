"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TERMINAL_LINES = [
  { text: "$ betterfit --setup", delay: 0, type: "command" },
  { text: "", delay: 600, type: "blank" },
  { text: "> Scouting candidates for your stack...", delay: 900, type: "info" },
  { text: "  ✓  3 engineers shortlisted", delay: 1600, type: "success" },
  { text: "  ✓  Technical screening complete", delay: 2100, type: "success" },
  { text: "  ✓  References checked", delay: 2600, type: "success" },
  { text: "", delay: 3000, type: "blank" },
  { text: "> Onboarding to your team...", delay: 3300, type: "info" },
  { text: "  ✓  Added to your Slack", delay: 4000, type: "success" },
  { text: "  ✓  First PR reviewed", delay: 4500, type: "success" },
  { text: "  ✓  Sprint workflow matched", delay: 5000, type: "success" },
  { text: "", delay: 5400, type: "blank" },
  { text: "> Admin handled...", delay: 5700, type: "info" },
  { text: "  ✓  Contract signed", delay: 6400, type: "success" },
  { text: "  ✓  Payroll set up", delay: 6900, type: "success" },
  { text: "  ✓  One invoice sent", delay: 7400, type: "success" },
  { text: "", delay: 7900, type: "blank" },
  { text: "Your team is ready.", delay: 8200, type: "ready" },
];

function getLineClass(type: string) {
  switch (type) {
    case "command":
      return "text-[#f0f6fc] font-medium";
    case "info":
      return "text-[#8b949e]";
    case "check":
      return "text-[#8b949e]";
    case "result-bad":
      return "text-[#f85149]";
    case "diagnosis":
      return "text-[#ffa657] font-semibold";
    case "severity":
      return "text-[#f85149] font-semibold";
    case "success":
      return "text-[#3fb950]";
    case "ready":
      return "text-[#f0f6fc] font-semibold";
    default:
      return "text-[#8b949e]";
  }
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay));
    });
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(33,38,45,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33,38,45,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(31,111,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10">
        {/* Headline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#f0f6fc] leading-tight">
            Build your offshore dev team
            <br />
            without the overhead.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
            We scout, hire, and embed dedicated engineers into your company. You interview them. You work with them daily. We handle the contracts, payroll, and compliance. One invoice.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="rounded-xl border border-[#21262d] overflow-hidden shadow-2xl">
            {/* Terminal title bar */}
            <div className="bg-[#161b22] border-b border-[#21262d] px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#f85149] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#ffa657] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#3fb950] opacity-80" />
              <span className="ml-3 text-xs text-[#8b949e] font-mono">betterfit — setup</span>
            </div>
            {/* Terminal body */}
            <div className="bg-[#0d1117] p-5 font-mono text-sm leading-relaxed min-h-[380px]">
              {TERMINAL_LINES.map((line, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-200 ${
                    visibleLines.includes(i) ? "opacity-100" : "opacity-0"
                  } ${line.type === "blank" ? "h-3" : ""} ${getLineClass(line.type)}`}
                >
                  {line.type !== "blank" && line.text}
                </div>
              ))}
              {/* Blinking cursor — show after last line or while typing */}
              <span className="inline-block w-2 h-4 bg-[#f0f6fc] cursor-blink align-middle ml-0.5" />
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="https://cal.com/betterfit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#f0f6fc] text-[#0d1117] font-semibold rounded-md hover:bg-white transition-colors duration-200 text-center"
          >
            Book a discovery call
          </a>
          <a
            href="#how-it-works"
            className="px-7 py-3.5 border border-[#21262d] text-[#f0f6fc] font-medium rounded-md hover:border-[#30363d] hover:bg-[#161b22] transition-colors duration-200 text-center"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
