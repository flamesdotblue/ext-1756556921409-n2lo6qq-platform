import React from "react";
import { motion } from "framer-motion";
import { Rocket, Timer } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-32 -left-40 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(138,90,255,0.25),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute top-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,102,0,0.18),transparent)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <Rocket className="h-4 w-4 text-orange-400" />
            Delivered in 30 minutes via FedEx
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl font-[800] tracking-tight sm:text-6xl md:text-7xl"
          >
            FedEx Ice Cream
            <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Guilt-free. Protein-packed. Fast.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Mini-sized, sugar-free, low-calorie ice cream with high-quality protein. Indulge smarter—and get it at your door in under 30 minutes.
          </motion.p>

          {/* Product showcase */}
          <div className="relative mt-12 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto aspect-[4/3] w-full max-w-xl transform-gpu rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
              style={{ perspective: 1200 }}
            >
              <div className="relative h-full w-full rounded-3xl bg-[#0c101c]/60 backdrop-blur-xl">
                {/* Floating 3D-inspired cups */}
                <div className="absolute inset-0 grid place-items-center">
                  <motion.div
                    initial={{ y: -8 }}
                    animate={{ y: [ -8, 8, -8 ] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="group relative h-48 w-48 rotate-[-6deg] transform-gpu rounded-2xl bg-gradient-to-b from-purple-500 to-purple-700 shadow-2xl shadow-purple-900/40 ring-1 ring-white/10">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-white/20 blur" />
                      <div className="absolute inset-x-0 bottom-0 h-12 rounded-b-2xl bg-white/15" />
                      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
                    </div>
                    <div className="absolute -right-20 top-6 h-40 w-40 rotate-[8deg] rounded-2xl bg-gradient-to-b from-orange-400 to-orange-600 shadow-2xl shadow-orange-900/30 ring-1 ring-white/10" />
                    <div className="absolute -left-16 top-20 h-36 w-36 rotate-[14deg] rounded-2xl bg-gradient-to-b from-sky-400 to-sky-600 shadow-2xl shadow-sky-900/30 ring-1 ring-white/10" />
                  </motion.div>
                </div>
                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-xs text-white/70">
                  <span>Guilt-Free Indulgence</span>
                  <span>Packed with Protein</span>
                </div>
              </div>
            </motion.div>

            {/* Shipping timeline animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mx-auto w-full max-w-xl"
            >
              <h3 className="text-xl font-semibold tracking-tight">Delivered in a Flash</h3>
              <p className="mt-2 text-sm text-white/70">
                Follow the journey from our freezer to your door—usually in 30 minutes or less.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="relative h-24">
                  <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded bg-gradient-to-r from-purple-500/60 via-white/30 to-orange-500/60" />

                  {/* Stations */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                    <div className="flex items-center justify-between text-[11px] text-white/70">
                      <span>Packed</span>
                      <span>Dispatched</span>
                      <span>Out for delivery</span>
                      <span>At your door</span>
                    </div>
                  </div>

                  {/* Moving marker */}
                  <motion.div
                    className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-white/30 bg-gradient-to-br from-orange-400 to-purple-500 shadow-[0_0_20px_rgba(255,128,0,0.6)]"
                    initial={{ left: "0%" }}
                    animate={{ left: ["0%", "33%", "66%", "100%", "0%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Timer className="h-4 w-4 text-orange-300" />
                  Typical delivery time: 30 minutes
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
