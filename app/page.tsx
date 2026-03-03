"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md bg-white/5 sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">VIKISHA</h1>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 md:py-32 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Premium Invisible Grills <br /> in Visakhapatnam
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Safety. Strength. Style. High-tensile stainless steel invisible grills
          for balconies and windows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <a
            href="tel:7386194588"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917386194588"
            target="_blank"
            className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            WhatsApp
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-white/5 p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose VIKISHA?</h3>
          <p className="text-gray-300 text-base md:text-lg leading-8">
            Durable, rust-free stainless steel cables ensuring child and pet
            safety while preserving the elegance of your balcony or windows.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-black/40 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-12">Our Services</h3>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {["Balcony Safety", "Window Protection", "Custom Installation"].map(
            (service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-md"
              >
                <h4 className="text-xl font-semibold mb-4">{service}</h4>
                <p className="text-gray-300">
                  Premium safety solution with professional finishing.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-12">Recent Installations</h3>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f1",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="rounded-2xl"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h3>
        <p className="text-gray-300 mb-4">Serving all Visakhapatnam areas</p>
        <p className="text-lg md:text-xl font-semibold">📞 7386194588</p>
        <p className="text-lg md:text-xl font-semibold">📞 8688367177</p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black/60 text-gray-400 text-sm">
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
