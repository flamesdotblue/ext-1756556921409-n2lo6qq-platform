import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ava R.",
    quote:
      "The only ice cream that fits my macros and still tastes decadent. The vanilla is unreal.",
    rating: 5,
  },
  {
    name: "Jordan M.",
    quote:
      "Ordered during a movie night—showed up in 22 minutes still perfectly frozen.",
    rating: 5,
  },
  {
    name: "Chris T.",
    quote:
      "Finally a dessert that doesn’t wreck my calories. Protein boost is a bonus.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-300/90" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Loved by snack-savvy humans</h2>
        <p className="mt-2 text-sm text-white/70">Real reviews from people who like their ice cream fast and their macros tight.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((r, idx) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <Stars count={r.rating} />
            <p className="mt-3 text-sm leading-relaxed text-white/80">“{r.quote}”</p>
            <div className="mt-5 text-xs text-white/60">— {r.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
