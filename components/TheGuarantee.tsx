"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const headline = "If someone isn't working out,\nwe replace them.";

export default function TheGuarantee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0d1117] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(31,111,235,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#f0f6fc] leading-tight mb-8 whitespace-pre-line"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[#8b949e] text-lg leading-relaxed max-w-2xl mx-auto mb-6"
        >
          No re-hiring process. No gap in your team. No awkward offboarding on your end. That&apos;s our problem, and we own it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="text-[#f0f6fc] font-semibold text-lg mb-12"
        >
          This is what it means to have an actual partner.
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="inline-flex flex-col items-center gap-3 border border-[#21262d] rounded-2xl px-10 py-8 bg-[#161b22]"
        >
          <Image src="/mark-gradient.svg" alt="Betterfit mark" width={40} height={40} />
          <div className="text-center">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#8b949e]">
              Replacement
            </p>
            <p className="text-2xl font-bold tracking-[0.15em] text-[#f0f6fc] uppercase">
              Guaranteed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
