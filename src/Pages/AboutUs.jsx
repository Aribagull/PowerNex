export default function AboutUs() {
  return (
    <div className="w-full font-serif">
      <div
        className="relative h-[400px] sm:h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1714976326978-7190264e7b55?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative text-white text-2xl sm:text-4xl font-semibold z-10 text-center px-4">
          About Us
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
          Welcome to powernex.com. From day one our team keeps bringing together
          the finest materials and stunning design to create something very
          special for you. All our products are developed with a complete
          dedication to quality, durability, and functionality. We've made it
          our mission to not only offer the best products and great bargains,
          but to also provide the most incredible customer service possible.
        </p>
      </div>
    </div>
  );
}
