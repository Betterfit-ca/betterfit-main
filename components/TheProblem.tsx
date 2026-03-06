"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const failures = [
  {
    number: "01",
    title: "Hire locally",
    body: "Good engineers are expensive and slow to find. Once you have them, they're fixed overhead on your books whether the work justifies it or not.",
  },
  {
    number: "02",
    title: "Use an agency",
    body: "Fast to start. But you never own the relationship. They rotate people. Three months in, nobody on their side knows your codebase.",
  },
  {
    number: "03",
    title: "Go offshore yourself",
    body: "You found someone on Upwork. Now you're an international employer. Contracts, compliance, foreign exchange, benefits. That's not your job.",
  },
];

export default function TheProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 px-6 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b949e] mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f0f6fc] leading-tight max-w-3xl">
            You&apos;ve tried the options. They all have the same problem.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {failures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1), ease: "easeOut" }}
              className="bg-[#161b22] border border-[#21262d] rounded-xl p-7"
            >
              <span className="text-xs font-mono text-[#8b949e] mb-4 block">{item.number}</span>
              <h3 className="text-[#f0f6fc] font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="border-t border-[#21262d] pt-10"
        >
          <p className="text-xl md:text-2xl text-[#f0f6fc] font-medium italic">
            &ldquo;There&apos;s a fourth option. Most people don&apos;t know it exists.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
