"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const items = [
  {
    title: "Miss a milestone?",
    body: "We don't invoice for it. We charge for outcomes, not hours.",
  },
  {
    title: "Developer not working out?",
    body: "We replace them. No re-hiring, no gap, no offboarding on your end.",
  },
  {
    title: "Context at risk?",
    body: "Impossible. Every decision is documented and owned by the system — not a person.",
  },
];

export default function TheGuarantee() {
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

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
            The Guarantee
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Accountable
            <br />
            <span className="text-white/35">to outcomes.</span>
          </h2>
          <p className="mt-5 text-white/40 text-base max-w-lg leading-relaxed">
            Not hours. Not effort. Outcomes. That is a fundamentally different offer than anything else in this market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * (i + 1) }}
              className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-12 py-8">
            <Image src="/mark-gradient.svg" alt="Betterfit mark" width={40} height={40} />
            <div className="text-center">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-1">
                Delivery
              </p>
              <p className="font-display text-2xl font-extrabold tracking-[0.1em] uppercase text-white">
                Guaranteed
              </p>
              <p className="text-xs text-white/30 mt-2">
                Miss it — we don&apos;t invoice for it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
