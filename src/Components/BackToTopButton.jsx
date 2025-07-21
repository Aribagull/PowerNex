import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
 <button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 z-50 px-2 py-[6px] bg-white rounded text-black border transition-opacity duration-300 ${
    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  } flex flex-col items-center`}
  aria-label="Back to Top"
>
  <FaAngleUp size={10} />
  <p className="text-[10px] font-serif">TOP</p>
</button>


  );
}
