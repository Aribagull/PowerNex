import { useState, useRef } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { TbGridDots, TbShoppingBag } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import TopNav from "./TopNav";
import ShopMenu from "../Pages/ShopMenu";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [showInput, setShowInput] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const menuTimeout = useRef(null);

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(menuTimeout.current);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => setShowMenu(false), 200);
  };

  const handleSearch = () => {
  if (searchText.trim() !== "") {
    navigate(`/search/${searchText.trim()}`);
    setShowInput(false);
    setMobileMenu(false);  
    setSearchText("");
  }
};


  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <TopNav />

      <div className="flex justify-between items-center px-6 md:px-14 md:py-5 py-3 font-serif relative">
        <button
          className="text-2xl md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <HiMenuAlt3 />
        </button>

        <Link to="/" className="text-2xl text-black md:hidden">
          PowerNex
        </Link>

        {/* Desktop search */}
        <div
          className="relative w-8 hidden md:block"
          onMouseEnter={() => setShowInput(true)}
          onMouseLeave={() => setShowInput(false)}
        >
          <button className="text-xl text-gray-700 hover:text-gray-900">
            <FiSearch />
          </button>

          <div
            className={`absolute left-0 top-[-3px] flex items-center gap-2 bg-[#f8eee6] rounded-full px-4 py-2 transition-all duration-300 ease-in-out overflow-hidden z-50 ${
              showInput ? "w-60 opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              height: "35px",
              pointerEvents: showInput ? "auto" : "none",
            }}
          >
            <FiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-xs text-gray-700 flex-1 placeholder:text-gray-400"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              autoFocus={showInput}
            />
            <button
              className="text-xl text-gray-500 hover:text-gray-700"
              onClick={() => {
                setShowInput(false);
                setSearchText("");
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-16">
          <div className="flex items-center space-x-6">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                <TbGridDots className="text-lg" />
                <span>Shop</span>
              </button>
              {showMenu && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ShopMenu closeMenu={() => setShowMenu(false)} />
                </div>
              )}
            </div>

            <Link to="/popular" className="text-sm text-gray-600 hover:text-gray-900">
              POPULAR
            </Link>
            <Link to="/best-deals" className="text-sm text-gray-600 hover:text-gray-900">
              BEST DEALS
            </Link>
          </div>

          <Link to="/" className="text-2xl text-black">
            PowerNex
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/new-arrivals" className="text-sm text-gray-600 hover:text-gray-900">
              NEW ARRIVALS
            </Link>
            <Link to="/accessories" className="text-sm text-gray-600 hover:text-gray-900">
              ACCESSORIES
            </Link>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <button
            className="text-2xl text-gray-700 hover:text-gray-900"
            onClick={() => setCartOpen(true)}
          >
            <TbShoppingBag />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          {/* ✅ Mobile search input */}
          <div className="flex items-center gap-2 bg-[#f8eee6] rounded-full px-4 py-2">
            <FiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm text-gray-700 flex-1 placeholder:text-gray-400"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            {searchText && (
              <button
                className="text-xl text-gray-500 hover:text-gray-700"
                onClick={() => setSearchText("")}
              >
                <IoMdClose />
              </button>
            )}
          </div>

          {/* Shop Toggle */}
          <button
            className="flex items-center justify-between w-full text-gray-800"
            onClick={() => setMobileShopOpen(!mobileShopOpen)}
          >
            <span className="flex items-center gap-2">
              <TbGridDots />
              Shop
            </span>
            <FiChevronDown
              className={`transition-transform ${mobileShopOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobileShopOpen && (
            <div className="pl-4">
              <ShopMenu
                closeMenu={() => setMobileShopOpen(false)}
                onLinkClick={() => setMobileMenu(false)}
              />
            </div>
          )}

          <Link to="/popular" className="block text-gray-700" onClick={() => setMobileMenu(false)}>
            Popular
          </Link>
          <Link to="/best-deals" className="block text-gray-700" onClick={() => setMobileMenu(false)}>
            Best Deals
          </Link>
          <Link to="/new-arrivals" className="block text-gray-700" onClick={() => setMobileMenu(false)}>
            New Arrivals
          </Link>
          <Link to="/accessories" className="block text-gray-700" onClick={() => setMobileMenu(false)}>
            Accessories
          </Link>
        </div>
      )}
    </div>
  );
}
