import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Timer, Truck } from "lucide-react";

function formatETA(minutesFromNow = 30) {
  const eta = new Date(Date.now() + minutesFromNow * 60 * 1000);
  const hh = eta.getHours().toString().padStart(2, "0");
  const mm = eta.getMinutes().toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

export default function OrderCTA() {
  const [eta, setEta] = useState(formatETA(30));
  useEffect(() => {
    const t = setInterval(() => setEta(formatETA(30)), 30 * 1000);
    return () => clearInterval(t);
  }, []);

  const [zip, setZip] = useState("");
  const deliveryCopy = useMemo(() => {
    if (zip && /\d{5}/.test(zip)) {
      return `Estimated arrival: ${eta}`;
    }
    return `Order now — arrives by ${eta}`;
  }, [eta, zip]);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-xl sm:p-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready for guilt-free indulgence?</h3>
            <p className="mt-2 text-sm text-white/70">
              Mini cups, macro-friendly, delivered in a flash. Enter your ZIP to preview delivery time.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative">
                <input
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))}
                  placeholder="ZIP code"
                  className="w-48 rounded-xl border border-white/10 bg-[#0b0f1a] px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
                  inputMode="numeric"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40">US</div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(255,128,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Truck className="h-4 w-4" />
                Order Now
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full sm:w-auto"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
              <Timer className="h-5 w-5 text-orange-300" />
              <div>
                <div className="font-medium">{deliveryCopy}</div>
                <div className="text-[11px] text-white/60">Most orders arrive in 30 minutes or less</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
