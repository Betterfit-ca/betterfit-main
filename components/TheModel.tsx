"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const layers = [
  {
    number: "01",
    label: "We find them",
    tagline: "We scout and vet developers who fit your stack and your culture.",
    body: "You get a shortlist. You interview. You choose who joins. We don't place anyone you haven't approved.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "They join your team",
    tagline: "Named, dedicated engineers — in your Slack, in your standups, in your codebase.",
    body: "Not a shared resource. Not rotated. Your devs. They stay until you decide otherwise.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M7 12h5m2-5.5L12 12m0 0l2 5.5" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "We handle everything else",
    tagline: "Contracts, payroll, compliance, FX, benefits, replacement. One invoice.",
    body: "When you want to grow the team, we scout ahead of the need. When someone isn't working out, we replace them. You don't re-hire. We do.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4v4m0 8v4M4 12h4m8 0h4" />
        <path d="M6.3 6.3l2.8 2.8m5.6 5.6l2.8 2.8M6.3 17.7l2.8-2.8m5.6-5.6l2.8-2.8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function TheModel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-28 px-6 bg-[#161b22]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b949e] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f0f6fc] leading-tight max-w-xl">
            Your team. Our infrastructure.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 md:gap-0 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[33.33%] right-[33.33%] h-px bg-[#21262d]" />

          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1), ease: "easeOut" }}
              className={`relative p-8 ${
                i < 2 ? "md:border-r border-[#21262d]" : ""
              } border-b md:border-b-0 border-[#21262d] last:border-b-0`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#21262d] flex items-center justify-center text-[#8b949e] mb-6">
                {layer.icon}
              </div>
              <p className="text-xs font-mono text-[#8b949e] mb-2">{layer.number}</p>
              <h3 className="text-xl font-semibold text-[#f0f6fc] mb-3">{layer.label}</h3>
              <p className="text-[#f0f6fc] text-sm font-medium mb-3 italic">&ldquo;{layer.tagline}&rdquo;</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{layer.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-16 border border-[#21262d] rounded-xl p-8 bg-[#0d1117]"
        >
          <p className="text-xl md:text-2xl text-[#f0f6fc] font-medium text-center italic">
            &ldquo;You get a team that feels like yours. Because it is.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
