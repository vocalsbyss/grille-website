"use client";

import { motion } from "framer-motion";

export const metadata = {
  title: "VIKISHA Invisible Grills | Best Invisible Grills in Visakhapatnam",
  description:
    "VIKISHA provides premium invisible grills in Visakhapatnam. Balcony safety, window protection, rust-free stainless steel installation. Call 7386194588.",
  keywords:
    "Invisible Grills Visakhapatnam, Balcony Safety Grills Vizag, Window Safety Grills Visakhapatnam, Stainless Steel Invisible Grills",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-purple-600/30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-600/30 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Hero */}
      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Best Invisible Grills <br /> in Visakhapatnam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        >
          Premium stainless steel invisible grills for balconies & windows.
          Safety for children and pets without blocking your beautiful view.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <a
            href="tel:7386194588"
            className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917386194588"
            target="_blank"
            className="px-10 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Invisible Grills Installation in Visakhapatnam
        </motion.h2>

        <p className="text-gray-300 leading-8 text-lg">
          VIKISHA is one of the leading invisible grill providers in
          Visakhapatnam. We specialize in balcony safety grills, window
          protection grills, and high-rise apartment installations using
          rust-proof stainless steel cables.
        </p>
      </section>

      {/* Strong CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-700 to-blue-700">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Get Free Site Inspection Today
        </h3>
        <p className="mb-6">Serving all areas in Visakhapatnam</p>
        <a
          href="tel:8688367177"
          className="px-12 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
        >
          Call 8688367177
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © 2026 VIKISHA Invisible Grills – Visakhapatnam
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917386194588"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl"
      >
        WhatsApp
      </a>
    </div>
  );
}
