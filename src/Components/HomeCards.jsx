import { useNavigate, Link } from "react-router-dom";



const products = [
  {
    id: 26,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.g3y6fFanVFVHX7IA6aIRXAHaHa?r=0&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "HP | EliteBook 840 G4 Laptop",
    oldPrice: "US $1400.99",
    price: " $899",
    discount: "-35%",
    rating: 5,
  },
  {
    id: 44,
    image:
      "https://www.empiricalsecurity.net/wp-content/uploads/2022/06/close-up-of-a-security-camera-port-st-lucie-fl.webp",
    name: "Smart city Security CCTV Camera HD",
    oldPrice: "US $530.32",
    price: "$249",
    discount: "-43%",
    rating: 4,
  },
  {
    id: 1,
    image:
      "https://i5.walmartimages.com/asr/b67a1473-6248-4dd7-b1cf-887ce473933d.be3b51660388320843c4a7842f2aef4a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    name: "Bluetooth Stereo Speaker with LED Light",
    oldPrice: "US $190.99",
    price: "$120.99",
    discount: "-33%",
    rating: 4,
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/564x/88/4b/3c/884b3cceac47cc5428222a597fbf39ab.jpg",
    name: "Pink AirPods 3rd Gen with Wireless",
    oldPrice: "US S$320.99",
    price: "$179.99",
    discount: "-40%",
    rating: 5,
  },
];

export default function HomeCards() {
   const navigate = useNavigate(); 
  const handleHeroClick = () => {
    navigate("/products/accessories"); 
  };
  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row gap-6 px-4">

     <div
      onClick={handleHeroClick}
      className="relative w-full h-[400px] sm:h-[450px] md:basis-[48%] md:h-[800px] rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <button
        className="absolute inset-0 flex items-center justify-center uppercase tracking-wide text-lg text-white group"
      >
        <span className="relative inline-block">
          Shop Now
          <span className="block h-[1px] bg-white mt-1 transition-transform duration-500 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"></span>
        </span>
      </button>
    </div>


      <div className="w-full grid grid-cols-2 md:grid-cols-2 grid-rows-2 gap-4 md:basis-[52%]">
  {products.map((product, index) => (
    <Link to={`/product/${product.id}`} key={product.id}>
      <div className="overflow-hidden flex flex-col rounded-lg transition duration-300 hover:shadow-customShadow group">
        <div className="overflow-hidden rounded-lg p-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 sm:h-52 md:h-64 object-cover transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </div>
        <div className="flex flex-col px-2">
          <div className="px-1">
            <h3 className="text-xs font-semibold text-gray-600">
              {product.name}
            </h3>
            <div className="flex items-center mt-4 space-x-2">
              <span className="line-through text-gray-500 text-sm">
                {product.oldPrice}
              </span>
              <span className="bg-gray-100 text-yellow-800 px-1 py-0.5 rounded text-xs">
                {product.discount}
              </span>
            </div>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
          {index === 0 && (
            <div className="flex text-yellow-400">
              {"★".repeat(product.rating)}
            </div>
          )}
        </div>
      </div>
    </Link>
  ))}
</div>

    </div>
  );
}
