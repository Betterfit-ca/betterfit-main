"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-6">
            Next Steps
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
            Two paths
            <br />
            <span className="text-white/30">from here.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-base md:text-lg leading-relaxed mb-3 max-w-xl mx-auto"
        >
          You keep solving this the way you have been — which means repeating this conversation in six months.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Or we start an On-Demand engagement this month, you see the delivery model in action, then we talk Growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="https://cal.com/betterfit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-[#0a0a0a] font-bold rounded-full text-base hover:bg-[#f0f0f0] transition-colors duration-200"
          >
            Book a discovery call →
          </a>
          <p className="text-white/25 text-xs">
            20 minutes. No deck. No pitch. Short contract. Guaranteed milestone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
