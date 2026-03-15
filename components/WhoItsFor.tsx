"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const audiences = [
  {
    label: "Founders & CEOs",
    pitch: "You're managing developers instead of closing deals. Every hour you spend on tech is an hour not spent on revenue. We take the whole thing off your plate — hiring, managing, replacing, admin. All of it.",
    pull: "You should be running your company.",
  },
  {
    label: "CTOs & Tech Leads",
    pitch: "You want good offshore talent without becoming an international HR department. We handle the legal, payroll, compliance. You get dedicated engineers — not shared resources. You stop managing tickets and start leading the roadmap.",
    pull: "You should be setting direction, not managing tasks.",
  },
  {
    label: "Non-Tech Companies",
    pitch: "You need a technical team and have no frame of reference for building one. We find the right people, embed them in your workflow, manage everything, and guarantee the delivery milestones. You don't need to know how any of this works.",
    pull: "You don't need to become a tech operator.",
  },
];

export default function WhoItsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

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
            Who This Is For
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-tight">
            The situation,
            <br />
            <span className="text-[#999] font-normal">not the title.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            {audiences.map((a, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-[#fafafa] text-[#666] border border-[#ebebeb] hover:border-[#d0d0d0] hover:text-[#0a0a0a]"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-[#fafafa] border border-[#ebebeb] rounded-2xl px-8 py-10 min-h-[180px]">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-display text-xl md:text-2xl font-semibold text-[#0a0a0a] leading-snug mb-5">
                &ldquo;{audiences[active].pitch}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#888]">
                → {audiences[active].pull}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
