

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f1f8da] text-gray-800 py-8 px-6">
   
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

      <div className="flex items-center gap-2">
  <div className="bg-[#698927] w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
    P
  </div>

  <div className="flex flex-col leading-tight text-[#698927]">
    <span className="text-2xl font-bold">Powernex</span>
    <span className="text-sm ml-2">Systems INC.</span>
  </div>
</div>


     
        <nav className="flex space-x-6 font-medium">
          <Link to="/aboutUs" className="hover:text-gray-300">About Us</Link>
    <Link to="/contactUs" className="hover:text-gray-300">Contact Us</Link>
  
  <Link to="/termsOfService" className="hover:text-gray-300">
    Terms & Conditions
  </Link>

        </nav>

     
        <div className="flex space-x-4 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaXTwitter /></a>
        </div>
      </div>

      
      <hr className="my-6 border-gray-300" />

   
      <div className="text-center text-sm text-gray-600">
        Copyright © 2025 Generic eCommerce
      </div>
    </footer>
  );
};

export default Footer;
