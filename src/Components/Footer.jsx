import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 font-serif text-sm">
      <div className="max-w-7xl mx-auto py-10 flex flex-wrap gap-10 flex-col sm:flex-row px-6">
        <div className="flex-1 min-w-[350px] md:pr-0 pr-6">
          <h3 className="font-semibold mb-2 text-gray-700">NEWSLETTER</h3>
          <p className="mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 px-4 py-2 rounded w-full"
            />
            <button className="bg-black text-white px-5 py-2 rounded-full font-semibold w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>

      
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-2 text-gray-700">CONTACT</h3>
          <div className="mb-2 flex items-start gap-2">
            <FiPhone className="mt-0.5" />
            <p>6315203173</p>
          </div>
          <div className="mb-2 flex items-start gap-2">
            <IoMailOpenOutline className="mt-0.5 md:h-8 md:w-8" />
            <p>Powernexsystem@gmail.com</p>
          </div>
          <div className="flex items-start gap-2">
            <FiMapPin className="mt-0.5 md:h-6 md:w-6" />
            <p>1464 OMEGA STREET ELMONT NEWYORK 11003</p>
          </div>
        </div>

       
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-2 text-gray-700">CUSTOMER SUPPORT</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/shipping-delivery" className="hover:underline">
                Shipping & Delivery
              </Link>
            </li>
          </ul>
        </div>

     
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-2 text-gray-700">COMPANY INFO</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/taerms-condition" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-2 text-gray-700">ABOUT THE SHOP</h3>
          <p>
            Welcome to powenex.com. From day one our team keeps bringing you
            the finest materials and stunning design to create something very
            special for you...
          </p>
        </div>
      </div>

     
      <div className="border-t py-4 px-6 flex flex-col sm:flex-row items-center justify-between text-xs max-w-7xl mx-auto gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/us.svg"
            alt="us"
            className="w-5 h-4"
          />
          <span>(US $)</span>
        </div>
        <div className="text-center text-gray-500 text-[10px] sm:text-xs text-wrap text-balance">
          © 2025.support @powernex.com
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            className="h-3"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            className="h-4"
          />
        </div>
      </div>
    </footer>
  );
}
