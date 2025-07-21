import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="w-full flex justify-start items-center py-2 bg-[#fbfbfb] px-4 sm:px-14">
      <nav className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-600 font-serif">
        <Link to="/" className="hover:text-gray-800">Home</Link>
        <Link to="aboutus" className="hover:text-gray-800">About</Link>
        <Link to="contactus" className="hover:text-gray-800">Contact</Link>
      </nav>
    </div>
  );
}
