"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    name: "Follosoft",
    domain: "follosoft.com",
    type: "Growth Partner",
    since: "May 2025",
    metric: "70%",
    metricLabel: "saved in engineering",
    description: "Leading ERP for snow removal companies. We handle their entire tech function — 12 embedded engineers and fractional tech HR.",
    team: "3 mobile · 7 fullstack · 1 UX/UI",
    dark: true,
  },
  {
    name: "Inex",
    domain: "inex.ca",
    type: "Growth Partner",
    since: "June 2025",
    metric: "40%",
    metricLabel: "less spend. 2× the team.",
    description: "$2M+ revenue company. From 2 engineers at $200k/yr to 4 at $120k/yr. They help companies ship cheaper — we help them do it.",
    team: "3 devs · 1 PM",
    dark: false,
  },
  {
    name: "ProAthlete",
    domain: "proathlete.ca",
    type: "On-Demand",
    since: "November 2025",
    metric: "2×",
    metricLabel: "faster than quoted timeline",
    description: "Athlete performance platform. Quoted $50k over 7–9 months. Delivered under budget in under 4 months with a 4-person team.",
    team: "4 devs",
    dark: false,
  },
  {
    name: "Gridbank",
    domain: "gridbank.io",
    type: "On-Demand",
    since: "July 2025",
    metric: "70%",
    metricLabel: "below local market rate",
    description: "Senior mobile engineer placed at 70% below local market — vetted, confirmed, and delivering from day one.",
    team: "1 mobile engineer",
    dark: true,
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-5">
            Client Results
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-tight">
            Built without a pitch deck.
            <br />
            <span className="text-[#999] font-normal">Proven by results.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className={`rounded-2xl p-8 flex flex-col gap-5 transition-all duration-200 ${
                client.dark
                  ? "bg-[#0a0a0a]"
                  : "bg-white border border-[#ebebeb] hover:border-[#d0d0d0] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`font-display font-extrabold text-xl ${client.dark ? "text-white" : "text-[#0a0a0a]"}`}>
                    {client.name}
                  </h3>
                  <p className={`text-xs mt-0.5 ${client.dark ? "text-white/30" : "text-[#aaa]"}`}>
                    {client.domain}
                  </p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  client.dark
                    ? "border-white/10 text-white/40 bg-white/5"
                    : "border-[#ebebeb] text-[#888] bg-[#fafafa]"
                }`}>
                  {client.type}
                </span>
              </div>

              {/* Metric */}
              <div>
                <p className={`font-display text-5xl font-black leading-none ${client.dark ? "text-white" : "text-[#0a0a0a]"}`}>
                  {client.metric}
                </p>
                <p className={`text-sm mt-1 ${client.dark ? "text-white/40" : "text-[#888]"}`}>
                  {client.metricLabel}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px ${client.dark ? "bg-white/8" : "bg-[#ebebeb]"}`} />

              {/* Description */}
              <p className={`text-sm leading-relaxed flex-1 ${client.dark ? "text-white/45" : "text-[#666]"}`}>
                {client.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono ${client.dark ? "text-white/25" : "text-[#bbb]"}`}>
                  {client.team}
                </span>
                <span className={`text-xs ${client.dark ? "text-white/25" : "text-[#bbb]"}`}>
                  Since {client.since}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
