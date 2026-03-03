"use client";

export default function SharedContent() {
  return (
    <>
      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About VIKISHA</h2>
        <p className="text-gray-300 leading-8 text-lg">
          VIKISHA is a trusted provider of premium invisible grills, UPVC windows,
          and interior & exterior solutions in Visakhapatnam. Safety, quality, and
          aesthetics are our priorities. Serving all residential and commercial projects.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="tel:7386194588"
            className="px-10 py-4 bg-white text-black rounded-full font-semibold transform hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/917386194588"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white rounded-full hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}