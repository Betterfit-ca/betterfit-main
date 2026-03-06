"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const audiences = [
  {
    label: "Founders & CEOs",
    pitch:
      "You're managing developers instead of closing deals. Every hour you spend on tech is an hour not spent on revenue. We take the whole thing off your plate — hiring, managing, replacing, admin. All of it.",
  },
  {
    label: "CTOs & Tech Leads",
    pitch:
      "You want good offshore talent without becoming an international HR department. We handle the legal, the payroll, the compliance. You get engineers who are actually yours, not shared resources on someone else's bench.",
  },
  {
    label: "Non-Tech Companies",
    pitch:
      "You need a technical team and have no frame of reference for building one. We find the right people, embed them in your workflow, and keep things running. You don't need to know how any of this works.",
  },
];

export default function WhoItsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="py-28 px-6 bg-[#161b22]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8b949e] mb-4">
            Who This Is For
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f0f6fc] leading-tight">
            The situation, not the title.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-2 mb-8">
            {audiences.map((a, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left sm:text-center ${
                  active === i
                    ? "bg-[#f0f6fc] text-[#0d1117]"
                    : "bg-[#0d1117] text-[#8b949e] border border-[#21262d] hover:border-[#30363d] hover:text-[#f0f6fc]"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="border border-[#21262d] rounded-xl p-8 bg-[#0d1117] min-h-[140px]">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-[#f0f6fc] leading-relaxed font-medium"
            >
              &ldquo;{audiences[active].pitch}&rdquo;
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
