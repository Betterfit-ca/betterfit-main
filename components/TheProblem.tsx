"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const failures = [
  {
    number: "01",
    title: "Hire locally",
    body: "Good engineers are expensive and slow to find. Once you have them, they're fixed overhead — whether the work justifies it or not.",
  },
  {
    number: "02",
    title: "Use an agency",
    body: "Fast to start. You never own the relationship. They rotate people. Three months in, nobody on their side knows your codebase.",
  },
  {
    number: "03",
    title: "Go offshore yourself",
    body: "You found someone on Upwork. Now you're an international employer. Contracts, compliance, FX, benefits. That's not your job.",
  },
];

export default function TheProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-5">
            The Problem
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-tight max-w-3xl">
            You&apos;ve tried the options.
            <br />
            <span className="text-[#999]">They all have the same flaw.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {failures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="bg-[#fafafa] border border-[#ebebeb] rounded-2xl p-7 hover:border-[#d0d0d0] transition-colors duration-200"
            >
              <span className="text-xs font-mono text-[#aaa] mb-4 block">{item.number}</span>
              <h3 className="font-display text-[#0a0a0a] font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-[#ebebeb] pt-10"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-[#0a0a0a] leading-snug max-w-3xl">
            The issue isn&apos;t the developers.{" "}
            <span className="text-[#999] font-normal">It&apos;s operational accountability — no one owns the layer between your decisions and what gets built.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
