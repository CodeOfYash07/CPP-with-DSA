import { Link } from "react-router-dom";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Velvet Matte Lipstick",
      price: "$24.99",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/7437346/pexels-photo-7437346.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hydra Glow Foundation",
      price: "$35.50",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Natural Skincare Kit",
      price: "$59.00",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "5 Tips for a Flawless Skincare Routine",
      desc: "Learn how to transform your skin with our expert-approved daily routine.",
      link: "/blog/flawless-skincare",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Discover Your Perfect Shade",
      desc: "Our guide to finding the ideal foundation and lipstick colors for your skin tone.",
      link: "/blog/perfect-shade",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4273436/pexels-photo-4273436.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Power of Organic Ingredients",
      desc: "Explore the benefits of our cruelty-free, organic products and their impact on your skin.",
      link: "/blog/organic-power",
    },
  ];

  // Refined Color Palette
  const PRIMARY_COLOR = "#8A6440"; // Deeper Bronze
  const HOVER_COLOR = "#725132";
  const TEXT_DARK = "#2C2C2C"; // Richer Charcoal
  const BG_LIGHT = "#FBF7F4"; // Cleaner off-white

  // Function to render a simple Shopping Cart SVG (pure React/HTML)
  const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );

  return (
    <div className="w-full font-sans antialiased bg-white">
      {/* Hero Section - Maximum Impact */}
      <section
        className="relative h-[90vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center shadow-lg" // Increased height slightly
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
        }}
      >
        {/* Cinematic Overlay: Deeper and more subtle */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-20 animate-slideDown">
          <p className="text-xl md:text-3xl font-light text-white italic mb-4 tracking-widest uppercase">
            New Collection
          </p>
          <h1 className="text-7xl md:text-[10rem] font-serif text-white tracking-tighter drop-shadow-xl mb-8 leading-none">
            Luxurious Bloom
          </h1>
          <p className="text-lg md:text-2xl text-white font-extralight drop-shadow-lg mb-16 max-w-4xl mx-auto">
            Discover the new collection—a fusion of nature's finest ingredients and timeless elegance, designed for the modern muse.
          </p>
          <Link
            to="/shop"
            // Finalized CTA style: extra large, bold, and high contrast
            className={`inline-block px-16 py-6 bg-white text-[${PRIMARY_COLOR}] text-2xl font-extrabold uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-700 transform hover:scale-105 border-4 border-[${PRIMARY_COLOR}] focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-white`}
          >
            Explore & Shop
          </Link>
        </div>
      </section>

      {/* --- */}

      {/* Featured Products - Clean Grid */}
      <section className={`py-32 bg-[${BG_LIGHT}]`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-5xl md:text-7xl font-serif mb-16 text-[${TEXT_DARK}] relative after:content-[''] after:block after:w-28 after:h-1 after:bg-[${PRIMARY_COLOR}] after:mx-auto after:mt-5 after:shadow-md`}>
            Iconic Selections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-700 border border-gray-100"
              >
                {/* Image Container with Hover Effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-80 object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Add to Cart Button (Hover Micro-Interaction) */}
                  <button className={`absolute bottom-6 right-6 p-4 bg-white text-[${PRIMARY_COLOR}] rounded-full shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 ring-[${PRIMARY_COLOR}]/50`}>
                    <ShoppingCartIcon />
                  </button>
                </div>

                <div className="p-8 text-left">
                  <h3 className={`text-3xl font-bold text-[${TEXT_DARK}] mb-2 font-serif`}>
                    {item.name}
                  </h3>
                  <p className="text-xl text-gray-800 font-extrabold mb-6 tracking-wide">{item.price}</p>
                  <Link
                    to="/shop"
                    className={`inline-block px-8 py-3 w-full text-center bg-[${PRIMARY_COLOR}] text-white font-bold uppercase tracking-wider rounded-lg hover:bg-[${HOVER_COLOR}] transition-all duration-300 focus-visible:ring-2 ring-white/50`}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* About Section (Artistic Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-20 items-center">
          {/* Image (Takes 2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <img
              src="https://images.pexels.com/photos/5923838/pexels-photo-5923838.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="About Lipsa Clean Beauty"
              className={`rounded-3xl shadow-2xl shadow-gray-400/50 w-full object-cover h-[550px] transform transition-transform duration-700 hover:scale-[1.01]`}
            />
          </div>
          
          {/* Text (Takes 1/3 width on large screens) */}
          <div className="lg:col-span-1 text-left">
            <h2 className={`text-5xl font-serif text-[${TEXT_DARK}] mb-8`}>
              Our Ethical Craftsmanship
            </h2>
            <div className={`border-l-4 border-l-[${PRIMARY_COLOR}] pl-6 mb-8`}>
                <p className="text-gray-600 italic text-2xl font-light">
                "Beauty that heals, not harms. Every formula is a promise."
                </p>
            </div>
            <p className="text-gray-700 mb-10 leading-relaxed text-lg">
              At **Lipsa**, we are dedicated to **Purity and Performance**. Our commitment goes beyond cruelty-free; we utilize **sustainable, organic botanicals** and innovative science to deliver products that are powerful, yet gentle. This is clean beauty, elevated.
            </p>
            <Link
              to="/about"
              className={`inline-block px-12 py-4 border-2 border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] font-semibold rounded-full hover:bg-[${PRIMARY_COLOR}] hover:text-white transition-colors duration-300 uppercase tracking-widest text-lg`}
            >
              Our Full Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Blog/Lifestyle Section - Refined Titles */}
      <section className={`py-32 bg-[${BG_LIGHT}]`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-5xl md:text-7xl font-serif mb-16 text-[${TEXT_DARK}] relative after:content-[''] after:block after:w-28 after:h-1 after:bg-[${PRIMARY_COLOR}] after:mx-auto after:mt-5 after:shadow-md`}>
            Beauty Journal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-xl p-0 text-left border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-64 object-cover mb-4"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 block">Tips & Trends</span>
                  <h3 className={`text-2xl font-bold text-[${TEXT_DARK}] mb-3 font-serif line-clamp-2`}>{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.desc}</p>
                  <Link
                    to={post.link}
                    className={`text-[${PRIMARY_COLOR}] font-bold uppercase text-sm inline-flex items-center hover:gap-2 transition-all duration-300`}
                  >
                    Read More 
                    <span className="ml-1 text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Final Call to Action (Newsletter/Shop) - Enhanced Form */}
      <section
        className="relative py-36 bg-cover bg-fixed bg-center text-white text-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=900')" }}
      >
        {/* Overlay with subtle warm color */}
        <div className={`absolute inset-0 bg-[${PRIMARY_COLOR}]/70 backdrop-blur-sm`}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-xl">
            Join the Inner Circle
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            Sign up for our newsletter to receive **exclusive product launches**, styling tips, and **15% off** your first order.
          </p>
          <div className="flex justify-center max-w-xl mx-auto">
            <input 
                type="email" 
                placeholder="Enter your elegant email address" 
                className="w-full p-5 text-lg text-gray-800 rounded-l-full focus:outline-none focus:ring-4 ring-white/50"
            />
            <button
                className={`px-8 py-4 bg-[${TEXT_DARK}] text-white font-bold text-lg uppercase rounded-r-full shadow-lg hover:bg-black transition-colors duration-300 focus-visible:ring-4 ring-white/50`}
            >
                Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}