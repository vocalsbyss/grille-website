export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">VIKISHA</h1>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-28 px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Invisible Grills <br /> in Visakhapatnam
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Safety. Strength. Style. High-tensile stainless steel invisible grills 
          designed for modern homes and high-rise apartments.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
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
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-white/5 p-10 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Why Choose VIKISHA?</h3>
          <p className="text-gray-300 text-lg leading-8">
            We provide durable, rust-free invisible grill solutions for balconies,
            windows, and staircases. Our installations ensure maximum safety for
            children and pets while maintaining a clean, elegant exterior look.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-4">Balcony Safety</h4>
              <p className="text-gray-300">
                High-strength cables ensuring safety without blocking your view.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-4">Window Protection</h4>
              <p className="text-gray-300">
                Secure your home while maintaining airflow and natural light.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-4">Custom Installation</h4>
              <p className="text-gray-300">
                Professional on-site measurement and precision fitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Get Free Site Inspection</h3>
        <p className="text-gray-300 mb-6">
          Serving all areas in Visakhapatnam.
        </p>

        <div className="text-xl font-semibold space-y-2">
          <p>📞 7386194588</p>
          <p>📞 8688367177</p>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/918688367177"
            target="_blank"
            className="px-10 py-4 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black/60 text-gray-400 text-sm">
        © 2026 VIKISHA Invisible Grills – Visakhapatnam. All rights reserved.
      </footer>

    </div>
  );
}
