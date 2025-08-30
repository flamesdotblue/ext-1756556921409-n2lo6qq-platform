import React from "react";
import Hero from "./components/Hero";
import FlavorGallery from "./components/FlavorGallery";
import Testimonials from "./components/Testimonials";
import OrderCTA from "./components/OrderCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0c] via-[#0c0f19] to-[#0b0b12] text-white font-inter antialiased">
      <Hero />
      <FlavorGallery />
      <Testimonials />
      <OrderCTA />
      <footer className="py-14 text-center text-sm text-white/50">
        © {new Date().getFullYear()} FedEx Ice Cream — Guilt-free treats, delivered fast.
      </footer>
    </div>
  );
}
