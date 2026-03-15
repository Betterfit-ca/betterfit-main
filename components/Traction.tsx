"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 423620, prefix: "$", suffix: "", label: "Revenue, first 8 months", format: "currency" },
  { value: 20000, prefix: "", suffix: "+", label: "Hours delivered", format: "number" },
  { value: 95, prefix: "", suffix: "%", label: "Developer retention", format: "number" },
  { value: 20, prefix: "", suffix: "", label: "Developers placed", format: "number" },
];

function AnimatedCounter({
  value, prefix, suffix, format, inView,
}: {
  value: number; prefix: string; suffix: string; format: string; inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v);
    if (format === "currency") return prefix + n.toLocaleString("en-US") + suffix;
    return prefix + n.toLocaleString("en-US") + suffix;
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [inView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Traction() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-5">
            Traction
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Eight months.{" "}
            <span className="text-white/30 font-normal">No outside money.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="bg-[#0a0a0a] px-8 py-10 flex flex-col"
            >
              <p className="font-display text-4xl md:text-5xl font-black text-white tabular-nums leading-none mb-3">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  format={stat.format}
                  inView={inView}
                />
              </p>
              <p className="text-sm text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/25 text-sm"
        >
          Built without a pitch deck or a funding round. That&apos;s proof the model works.
        </motion.p>
      </div>
    </section>
  );
}
