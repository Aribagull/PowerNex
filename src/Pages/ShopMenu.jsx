import { useNavigate } from "react-router-dom";

export default function ShopMenu({ closeMenu, onLinkClick }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    closeMenu?.();
    onLinkClick?.(); 
    navigate(`/products/${category}`);
  };

  return (
    <div className="relative">
      <div className="hidden md:flex absolute left-1/2 -translate-x-[28%] top-full mt-4 w-[1410px] bg-white z-50 p-14 justify-between transition-all duration-300">
        {[
          {
            title: "Laptop",
            items: [ "HP", "Lenovo", "Dell", "Laptop bag",],
          },
          {
            title: "Camera",
            items: ["Security Cameras", "DSLR"],
          },
          {
            title: "Mobile",
            items: ["Apple Mobiles", "Samsung Mobiles", "Oppo Mobile", "Mobile Protector"],
          },
          {
            title: "Accessories",
            items: [ "Speaker", "Airpods", "Electric vacuum", "HeadPhones", ],
          },
        ].map((section, idx) => (
          <div key={idx} className="space-y-2 w-1/4 md:px-14">
            <h3 className="mt-4 font-semibold text-gray-800">{section.title}</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              {section.items.map((item) => (
                <li
                  key={item}
                  onClick={() => handleCategoryClick(item)}
                  className="cursor-pointer hover:text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="md:hidden bg-white z-50 p-4 grid grid-cols-2 gap-4">
        {[
          {
            title: "Laptop",
            items: [ "HP", "Lenovo", "Dell", "Laptop bag",],
          },
          {
            title: "Camera",
            items: ["Security Cameras", "DSLR"],
          },
          {
            title: "Mobile",
            items: ["Apple Mobiles", "Samsung Mobiles", "Oppo Mobile", "Mobile Protector"],
          },
          {
            title: "Accessories",
            items: [ "Speaker", "Airpods", "Electric vacuum", "HeadPhones", ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-gray-800 mb-2">{section.title}</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              {section.items.map((item) => (
                <li
                  key={item}
                  onClick={() => handleCategoryClick(item)}
                  className="cursor-pointer hover:text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
