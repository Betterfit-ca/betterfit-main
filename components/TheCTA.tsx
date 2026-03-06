"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0d1117] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(31,111,235,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b949e] mb-6">
            Next steps
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0f6fc] leading-tight mb-8">
            Start small. Scale when it makes sense.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#8b949e] text-lg leading-relaxed mb-8"
        >
          Most of our Growth clients started with an On-Demand project. They saw how we work. Then we built their team.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-[#f0f6fc] font-medium text-lg mb-10"
        >
          The first call is 20 minutes. No deck. No pitch. Just your situation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://cal.com/betterfit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#f0f6fc] text-[#0d1117] font-semibold rounded-md hover:bg-white transition-colors duration-200 text-lg"
          >
            Book a discovery call →
          </a>
          <p className="text-[#8b949e] text-sm">No commitment required.</p>
        </motion.div>
      </div>
    </section>
  );
}
