import React from "react";

const brandLogos = [
  "https://images.seeklogo.com/logo-png/53/1/assuredpartners-logo-png_seeklogo-538665.png?v=1962085425128204808",
  "https://images.seeklogo.com/logo-png/54/1/plixi-logo-png_seeklogo-540699.png?v=1962083401725827864",
  "https://images.seeklogo.com/logo-png/43/1/e-cloth-logo-png_seeklogo-430656.png",
  "https://images.seeklogo.com/logo-png/35/1/turbologo-logo-maker-logo-png_seeklogo-357902.png",
  "https://images.seeklogo.com/logo-png/13/1/takata-racing-products-logo-png_seeklogo-135422.png",
  "https://images.seeklogo.com/logo-png/26/1/apple-watch-logo-png_seeklogo-268289.png",
  "https://images.seeklogo.com/logo-png/15/1/yamaha-logo-png_seeklogo-154895.png",
  "https://images.seeklogo.com/logo-png/30/1/kyocera-electronics-company-logo-png_seeklogo-304476.png",
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden bg-white py-10">
      <div className="relative">
        <div className="flex animate-marquee space-x-10 w-max">
          {[...brandLogos, ...brandLogos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand-${i}`}
              className="h-28 w-36 object-contain"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
