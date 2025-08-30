import React, { useRef } from "react";
import { motion } from "framer-motion";

const flavors = [
  {
    name: "Vanilla Sky",
    macro: "12g protein · 90 cal · 0g sugar",
    hue: "from-sky-300 to-sky-600",
  },
  {
    name: "Cocoa Lift",
    macro: "14g protein · 110 cal · 1g sugar",
    hue: "from-amber-300 to-amber-600",
  },
  {
    name: "Berry Boost",
    macro: "13g protein · 95 cal · 0g sugar",
    hue: "from-fuchsia-300 to-fuchsia-600",
  },
  {
    name: "Matcha Charge",
    macro: "15g protein · 100 cal · 0g sugar",
    hue: "from-emerald-300 to-emerald-600",
  },
];

function FlavorCard({ flavor }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = -((y / rect.height) - 0.5) * 10;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="transform-gpu rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out"
        style={{ willChange: "transform" }}
      >
        <div className="relative rounded-3xl bg-[#0d1220]/70 p-6 backdrop-blur-xl">
          <div className={`h-36 w-full rounded-2xl bg-gradient-to-b ${flavor.hue} ring-1 ring-white/10 shadow-2xl`} />
          <div className="mt-5 flex items-start justify-between">
            <div>
              <h4 className="text-lg font-semibold tracking-tight">{flavor.name}</h4>
              <p className="mt-1 text-xs text-white/70">{flavor.macro}</p>
            </div>
            <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/80">High Protein</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlavorGallery() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Choose your flavor</h2>
          <p className="mt-2 text-sm text-white/70">Mini cups engineered for joy, macros tuned for goals.</p>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 md:block">Sugar-free · Low-calorie · Protein-packed</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {flavors.map((f) => (
          <FlavorCard key={f.name} flavor={f} />
        ))}
      </div>
    </section>
  );
}
