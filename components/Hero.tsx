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
    case "command": return "text-white font-medium";
    case "info": return "text-[#888]";
    case "success": return "text-[#4ade80]";
    case "ready": return "text-white font-semibold";
    default: return "text-[#666]";
  }
}

const CLIENTS = ["Follosoft", "Inex", "ProAthlete", "Gridbank"];

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
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Very subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-12">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/50 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
            Growth Talent Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Most tech problems
            <br />
            <span className="text-white/40">aren&apos;t talent problems.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed font-sans">
            They&apos;re accountability problems. No one owns the layer between your leadership and what gets built. We do — vetted engineers, managed delivery, milestone guarantee.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="rounded-2xl overflow-hidden border border-white/8 bg-[#111]">
            {/* Chrome */}
            <div className="bg-[#1a1a1a] border-b border-white/6 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <span className="ml-3 text-xs text-white/30 font-mono">betterfit — setup</span>
            </div>
            {/* Body */}
            <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
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
              <span className="inline-block w-2 h-4 bg-white/40 cursor-blink align-middle ml-0.5" />
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="https://cal.com/betterfit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-white text-[#0a0a0a] font-semibold rounded-full hover:bg-[#f0f0f0] transition-colors duration-200 text-center text-sm"
          >
            Book a discovery call
          </a>
          <a
            href="#how-it-works"
            className="px-7 py-3.5 border border-white/15 text-white/70 font-medium rounded-full hover:border-white/30 hover:text-white transition-all duration-200 text-center text-sm"
          >
            See how it works
          </a>
        </motion.div>

        {/* Client strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span className="text-xs text-white/25 uppercase tracking-widest">Trusted by</span>
          <div className="flex items-center gap-1">
            {CLIENTS.map((c, i) => (
              <span key={c} className="flex items-center gap-1">
                {i > 0 && <span className="text-white/15 mx-1.5">·</span>}
                <span className="text-white/35 text-sm font-medium">{c}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
