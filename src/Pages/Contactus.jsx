export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-white font-serif mt-20">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-700">
          Got questions, concerns or compliments? <br />
          Just want to say hi? Send us an email!
        </p>

        <form className="mt-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="* Name"
              className="w-full border border-gray-400 px-3 sm:px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="* Email"
              className="w-full border border-gray-400 px-3 sm:px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <textarea
            rows="6"
            placeholder="* Message"
            className="w-full border border-gray-400 px-3 sm:px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
