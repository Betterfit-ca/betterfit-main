"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const layers = [
  {
    number: "01",
    label: "Execution",
    body: "Vetted developers matched to your stack and culture, confirmed before placement. A senior Betterfit delivery lead on every engagement. You receive output — not management overhead.",
  },
  {
    number: "02",
    label: "Integration",
    body: "Betterfit owns the communication layer between your leadership and the dev team. Every decision and product context documented and owned by the system — not a person.",
  },
  {
    number: "03",
    label: "Retention",
    body: "Domain knowledge captured and stored as product infrastructure. Developer retention managed actively. The institutional knowledge of your product survives every departure.",
  },
];

export default function TheModel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-5">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-tight">
            Three layers.
            <br />
            <span className="text-[#999] font-normal">One partner.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * (i + 1) }}
              className="bg-white border border-[#ebebeb] rounded-2xl p-8 hover:border-[#d0d0d0] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200"
            >
              <span className="text-xs font-mono text-[#aaa] mb-4 block">{layer.number}</span>
              <h3 className="font-display text-[#0a0a0a] font-extrabold text-2xl mb-4">{layer.label}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{layer.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border border-[#ebebeb] rounded-2xl px-8 py-6"
        >
          <p className="font-display text-lg md:text-xl font-semibold text-[#0a0a0a]">
            &ldquo;The value compounds. Every month Betterfit is embedded is a month your competitor can&apos;t replicate.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
