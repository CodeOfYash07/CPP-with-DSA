import { Link } from "react-router-dom";


// Main App component that renders the Contact page
export default function App() {
  return (
    <div className="w-full font-sans antialiased bg-stone-50 text-stone-900">
      
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 text-center overflow-hidden bg-white/50 border-b border-stone-200">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 100c1.1-1.1 2.5-1.9 4-2.4C10.7 93.9 18.5 90 25 85.5 31.5 81 37 77.2 45 74c8-3.2 16.5-5.5 25.5-5.5 9 0 17.5 2.3 25.5 5.5s17 8.3 22 13.8c5 5.5 7 11.2 7 16.8V100H1z' fill='%236B4226' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            filter: 'blur(1px)'
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-6 leading-tight">
            Let's Talk
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-600 leading-relaxed">
            Whether you have a question about our products, need assistance with an order, or are interested in a partnership, our team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8 md:p-12">
            <h3 className="text-4xl font-serif text-stone-900 mb-8 font-semibold">
              Send Us a Message
            </h3>
            <form className="w-full space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 py-3 border border-stone-200 rounded-xl bg-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#8A6440] focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 py-3 border border-stone-200 rounded-xl bg-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#8A6440] focus:border-transparent transition-all duration-300"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 border border-stone-200 rounded-xl bg-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#8A6440] focus:border-transparent transition-all duration-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-3 border border-stone-200 rounded-xl bg-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#8A6440] focus:border-transparent transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-5 py-3 border border-stone-200 rounded-xl bg-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#8A6440] focus:border-transparent transition-all duration-300"
              ></textarea>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-lg bg-[#8A6440] text-white font-semibold uppercase tracking-widest rounded-full shadow-lg hover:bg-[#725132] transition-colors duration-300 transform hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-stone-200">
            <h3 className="text-4xl font-serif text-stone-900 mb-8 font-semibold">
              Reach Us Directly
            </h3>
            <ul className="space-y-8 text-stone-700">
              <li className="flex items-start">
                <span className="text-2xl text-[#8A6440] mr-4 mt-1">📍</span>
                <div>
                  <span className="block font-bold text-stone-900 mb-1">Our Headquarters:</span>
                  <span className="text-lg">
                    188 Beauty Avenue, SURAT, Gujarat, India 395007
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-[#8A6440] mr-4 mt-1">✉️</span>
                <div>
                  <span className="block font-bold text-stone-900 mb-1">Email Us:</span>
                  <a href="mailto:support@lipsacosmetics.com" className="text-lg hover:text-[#8A6440] transition-colors">
                    support@lipsacosmetics.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-[#8A6440] mr-4 mt-1">📞</span>
                <div>
                  <span className="block font-bold text-stone-900 mb-1">Call Us:</span>
                  <a href="tel:+9178618216821691" className="text-lg hover:text-[#8A6440] transition-colors">
                    +91 78618216821691
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-[#8A6440] mr-4 mt-1">🕒</span>
                <div>
                  <span className="block font-bold text-stone-900 mb-1">Working Hours:</span>
                  <span className="text-lg">
                    Mon – Sat: 9:00 AM – 8:00 PM (IST)
                  </span>
                </div>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-12">
              <iframe
                title="Lipsa Cosmetics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234914.805560662!2d72.74109924257403!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5b72651475%3A0x6b45e9903b44b204!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1716919253456!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-xl shadow-lg border border-stone-200"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
