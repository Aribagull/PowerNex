import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Ultra Slim High-Performance Laptop",
    discount: 25,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pro-Grade Compact DSLR Camera",
    discount: 20,
    image: "https://images.unsplash.com/photo-1551194201-5b634bd23931?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LED Case AirPods with Bass Boost",
    discount: 25,
    image: "https://images.unsplash.com/photo-1600183042195-fa3f15d427e9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HD Display Pocket-Friendly Phone",
    discount: 15,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Smart Mini Home Security Camera",
    discount: 10,
    image: "https://plus.unsplash.com/premium_photo-1749609574925-7cea58de5841?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LED Glow Over-Ear Headphones",
    discount: 15,
    image: "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mini Cute Bluetooth Speaker",
    discount: 20,
    image: "https://i.pinimg.com/736x/35/63/39/35633906639cce4c2a8317c4eeddc35a.jpg",
  },
  {
    title: "Crystal Clear Screen Guard",
    discount: 15,
    image: "https://case-mate.com/cdn/shop/files/cmi_Slam-dunk_CaseMate_Screen_Protector_Clear_CM054520_PDP1.jpg?v=1726253550",
  },
  {
    title: " Robotic Vacuum Cleaner Floor Clean",
    discount: 75,
    image: "https://p.globalsources.com/IMAGES/PDT/B1182114039/Robotic-Vacuum-Cleaner-Dry-Wet.jpg",
  },
];

const ProductCard = ({ title, discount, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.2,
    }}
    viewport={{ once: true }}
    className="relative flex bg-[#f8eee6] rounded-lg overflow-visible shadow-md"
  >
    <div className="w-1/2 p-2 flex flex-col justify-center">
      <h3 className="text-sm font-serif text-gray-800 mb-4 leading-tight">
        {title}
      </h3>

      <div className="flex items-start">
        <span className="text-5xl italic text-gray-800 leading-none">
          {discount}
        </span>
        <div className="flex flex-col items-center ml-1 mt-2">
          <span className="text-lg font-bold text-gray-800 leading-none">%</span>
          <span className="text-base text-gray-700 leading-none">off</span>
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}  
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{
        duration: 0.6,
        delay: index * 0.2 + 1,  
      }}
      viewport={{ once: true }}
      className="relative w-1/2 flex items-center justify-center"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-52 h-48 -mt-4 -mb-4 rounded-lg"
      />
    </motion.div>
  </motion.div>
);

export default function MidCards() {
  return (
    <div className="min-h-screen bg-white py-10 md:px-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} index={index} />
        ))}
      </div>
    </div>
  );
}