import React, { useRef } from "react";
import { Truck, DollarSign, Headphones, CreditCard } from "lucide-react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="bg-[#fdf4e9] py-16 px-4 mx-auto max-w-7xl mb-20 sm:px-6 lg:px-20 font-serif"
    >

      <motion.div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 mb-12 text-center sm:text-left"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
          Why <span className="font-bold">PowerNex.com?</span>
        </h2>
        <p className="text-sm text-gray-700">SHOP BEST SELLERS</p>
      </motion.div>

      <div className="bg-[#fefaf5] rounded-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-10 mb-14">
        {[
          {
            title: "Uncompromised Quality",
            desc:
              "Experience enduring elegance and durability with our premium collection",
          },
          {
            title: "Curated Selection",
            desc:
              "Discover exceptional products for your refined lifestyle in our handpicked collection",
          },
          {
            title: "Exclusive Deals",
            desc:
              "Access special savings on luxurious items, elevating your experience for less",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="text-center sm:text-left"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i + 1}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-600">
        {[
          { icon: <Truck />, label: "EXPRESS DELIVERY" },
          { icon: <DollarSign />, label: "FREE RETURNS" },
          { icon: <Headphones />, label: "AVAILABLE CUSTOMER SERVICE" },
          { icon: <CreditCard />, label: "SAFE PAYMENTS" },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i + 4}
          >
            <div className="flex justify-center mb-2">{item.icon}</div>
            <p className="font-semibold text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
