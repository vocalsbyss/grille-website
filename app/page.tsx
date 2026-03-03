export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Premium Invisible Grills
        </h1>
        <p className="text-xl mb-8">
          Safety. Strength. Style.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Free Quote
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose Our Invisible Grills?
        </h2>
        <p className="text-lg text-gray-600">
          We provide high-tensile stainless steel invisible grills designed
          for balconies, windows, and high-rise apartments. Our solutions
          ensure maximum safety without blocking your view.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Balcony Safety</h3>
              <p>Child and pet safety with strong stainless steel cables.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Window Protection</h3>
              <p>Secure your windows without blocking ventilation or light.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Custom Installation</h3>
              <p>Professional installation tailored to your space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Contact Us Today
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get expert consultation and free site inspection.
        </p>
        <p className="text-xl font-semibold">
          📞 +91 XXXXX XXXXX
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        © 2026 Invisible Grills Company. All rights reserved.
      </footer>

    </div>
  );
}
