"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const offers = [
  {
    name: "On-Demand",
    subtitle: "Project-based. Hybrid team. Competitive rates.",
    body: "Need to move fast on a specific project? We work like an agency — hybrid local and offshore team, matched to your scope. You pay less than you would at a local agency. We get moving quickly.",
    cta: "Start a project",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    subtitle: "Long-term. Dedicated team. One invoice.",
    body: "We become your offshore hiring infrastructure. Dedicated engineers embedded in your org. We scout, hire, manage, and replace. You handle the product. We handle everything else.",
    cta: "Build your team",
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Cohorts",
    subtitle: "Equity partnership. 15% non-diluted.",
    body: "Early-stage with a strong thesis but limited runway? We build your product in exchange for equity. We only take on companies we'd invest in.",
    cta: "Let's talk",
    highlight: false,
    badge: null,
  },
];

export default function TheOffers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f0f6fc] leading-tight">
            Three ways to engage.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1), ease: "easeOut" }}
              className={`relative rounded-xl border p-8 flex flex-col transition-all duration-300 group ${
                offer.highlight
                  ? "bg-[#f0f6fc] border-[#f0f6fc] text-[#0d1117]"
                  : "bg-[#0d1117] border-[#21262d] text-[#f0f6fc] hover:border-[#30363d]"
              }`}
              style={
                offer.highlight
                  ? {}
                  : {
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }
              }
              onMouseEnter={(e) => {
                if (!offer.highlight) {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(240,246,252,0.08), 0 8px 32px rgba(0,0,0,0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (!offer.highlight) {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }
              }}
            >
              {offer.badge && (
                <span className="absolute top-5 right-5 text-xs font-semibold px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e]">
                  {offer.badge}
                </span>
              )}
              <h3
                className={`text-2xl font-bold mb-1 ${
                  offer.highlight ? "text-[#0d1117]" : "text-[#f0f6fc]"
                }`}
              >
                {offer.name}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  offer.highlight ? "text-[#30363d]" : "text-[#8b949e]"
                }`}
              >
                {offer.subtitle}
              </p>
              <p
                className={`text-sm leading-relaxed flex-1 mb-8 ${
                  offer.highlight ? "text-[#21262d]" : "text-[#8b949e]"
                }`}
              >
                {offer.body}
              </p>
              <a
                href="https://cal.com/betterfit/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-semibold px-5 py-2.5 rounded-md text-center transition-colors duration-200 ${
                  offer.highlight
                    ? "bg-[#0d1117] text-[#f0f6fc] hover:bg-[#161b22]"
                    : "border border-[#21262d] text-[#f0f6fc] hover:bg-[#161b22]"
                }`}
              >
                {offer.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
