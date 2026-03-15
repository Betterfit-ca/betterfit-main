"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const offers = [
  {
    number: "01",
    name: "On-Demand",
    subtitle: "Project-based · Short-term contracts · Guaranteed milestones",
    body: "Need to move fast? Short-term contracts with senior supervision and a delivery milestone guaranteed. Every On-Demand engagement is a potential Growth partnership.",
    cta: "Start a project",
    featured: false,
  },
  {
    number: "02",
    name: "Growth",
    subtitle: "Long-term retainer · Embedded operations · One invoice",
    body: "We become your offshore hiring infrastructure. Dedicated engineers, fractional tech HR, talent operations, and full delivery management — on a monthly retainer. This is the core engine.",
    cta: "Build your team",
    featured: true,
  },
  {
    number: "03",
    name: "Cohorts",
    subtitle: "Equity partnership · 15% non-diluted",
    body: "Early-stage with a strong thesis but limited runway? Full Growth-tier engagement in exchange for equity. We only take on companies we'd invest in.",
    cta: "Let's talk equity",
    featured: false,
  },
];

export default function TheOffers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="offers" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-5">
            How We Engage
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-tight">
            Three ways in.
            <br />
            <span className="text-[#999] font-normal">One operating model.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * (i + 1) }}
              className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-200 ${
                offer.featured
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-[#fafafa] border border-[#ebebeb] hover:border-[#d0d0d0] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`text-xs font-mono ${offer.featured ? "text-white/30" : "text-[#aaa]"}`}>
                  {offer.number}
                </span>
                {offer.featured && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/60">
                    Core Offer
                  </span>
                )}
              </div>

              <h3 className={`font-display text-2xl font-extrabold mb-2 ${offer.featured ? "text-white" : "text-[#0a0a0a]"}`}>
                {offer.name}
              </h3>
              <p className={`text-xs mb-5 leading-relaxed ${offer.featured ? "text-white/35" : "text-[#aaa]"}`}>
                {offer.subtitle}
              </p>
              <p className={`text-sm leading-relaxed flex-1 mb-8 ${offer.featured ? "text-white/50" : "text-[#666]"}`}>
                {offer.body}
              </p>

              <a
                href="https://cal.com/betterfit/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-200 ${
                  offer.featured
                    ? "bg-white text-[#0a0a0a] hover:bg-[#f0f0f0]"
                    : "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {offer.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[#aaa] text-sm mt-8"
        >
          Most Growth clients started On-Demand. They saw the model — then we built their team.
        </motion.p>
      </div>
    </section>
  );
}
