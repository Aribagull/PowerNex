import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Mobile",
    desc: "Accessorize to impress with our selection of trendy pieces",
    img: "https://images.pexels.com/photos/16812192/pexels-photo-16812192.jpeg",
    category: "Mobile",
    subcategory: "Mobile",
  },
  {
    title: "Laptops",
    desc: "From functional to fancy – find must-have car accessories here",
    img: "https://images.pexels.com/photos/10948208/pexels-photo-10948208.jpeg",
    subcategory: "Laptop",
  },
  {
    title: "Airports",
    desc: "We’re continually pushing to reduce our footprint by choosing recycled",
    img: "https://images.pexels.com/photos/21424620/pexels-photo-21424620.jpeg",
    category: "Airpods",
  },
  {
    title: "HeadPhones",
    desc: "We’re continually pushing to reduce our footprint by choosing recycled",
    img: "https://plus.unsplash.com/premium_photo-1679864782395-cc5697bf614f?w=600&auto=format&fit=crop&q=60",
    category: "HeadPhones",
  },
  {
    title: "Security Cameras",
    desc: "We’re continually pushing to reduce our footprint by choosing recycled",
    img: "https://plus.unsplash.com/premium_photo-1729210234080-dba7771d2389?q=80&w=1032&auto=format&fit=crop",
    category: "Security Cameras",
  },
];

function Card({ title, desc, img, category, subcategory }) {
  const imgRef = useRef();
  const [zoomed, setZoomed] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const navigate = useNavigate();

  const resolvedCategory = category || subcategory;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !zoomed) {
          setZoomed(true);
          setTextVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [zoomed]);

  const handleClick = () => {
    if (resolvedCategory) {
      navigate(`/products/${resolvedCategory}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-full overflow-hidden rounded-xl font-serif cursor-pointer"
    >
      <img
        ref={imgRef}
        src={img}
        alt={title}
        style={{
          transformOrigin: "center center",
          willChange: "transform",
        }}
        className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-out ${
          zoomed ? "scale-110" : "scale-100"
        }`}
      />

      <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-30 transition duration-300"></div>

      <div className="absolute bottom-6 text-white z-10 px-5 sm:px-7">
        <h2
          className={`text-xl sm:text-3xl pb-2 transition-all duration-[1200ms] ease-in-out ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm sm:text-base mt-1 max-w-xs pb-2 transition-all duration-[1200ms] ease-in-out ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {desc}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (resolvedCategory) {
              navigate(`/products/${resolvedCategory}`);
            }
          }}
          className={`text-base sm:text-xl underline transition-all duration-[1200ms] ease-in-out ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default function CustomFlexLayout() {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto py-12 px-4">
      <div className="w-full md:w-1/4 h-[250px] md:h-[585px]">
        <Card {...cards[0]} />
      </div>

      <div className="w-full md:flex-1 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[280px]">
          <div className="w-full md:w-2/3 h-[250px] md:h-full">
            <Card {...cards[1]} />
          </div>
          <div className="w-full md:w-1/3 h-[250px] md:h-full">
            <Card {...cards[2]} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[280px]">
          <div className="w-full md:w-1/3 h-[250px] md:h-full">
            <Card {...cards[3]} />
          </div>
          <div className="w-full md:w-2/3 h-[250px] md:h-full">
            <Card {...cards[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
