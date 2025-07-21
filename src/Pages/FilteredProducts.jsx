import { useLocation } from "react-router-dom";
import products from "../Data/ProductData";

export default function FilteredProducts() {
  const location = useLocation();

  const getFilteredProducts = () => {
    if (location.pathname === "/popular") {
      return products.filter((product) => product.sabstatus === "Popular");
    }
    if (location.pathname === "/new-arrivals") {
      return products.filter((product) => product.status === "New Arrivals");
    }
    if (location.pathname === "/best-deals") {
      return products.filter((product) => product.deal === "Best Deal");
    }
    if (location.pathname === "/accessories") {
      return products.filter((product) => product.subcategory === "accessories");
    }
    return [];
  };

  const filteredProducts = getFilteredProducts();
  const pageTitle = location.pathname.replace("/", "").replace("-", " ").toUpperCase();

  return (
    <div className="px-12 mt-40 mb-20 font-serif">
      <h1 className="text-4xl text-gray-700 text-center mb-2">{pageTitle} ({filteredProducts.length})</h1>
      <p className="text-center text-lg mb-10">{filteredProducts.length} PRODUCTS</p>

      {filteredProducts.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="overflow-hidden flex flex-col rounded-lg transition duration-300 hover:shadow-customShadow group"
            >
              <div className="overflow-hidden rounded-lg p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <div className="flex flex-col px-2">
                <div className="px-1">
                  <h3 className="text-base text-gray-600">{product.title}</h3>
                  <p className="text-lg">US ${product.price}</p>
                  <div className="flex items-center mt-4 space-x-2">
                    {product.oldPrice && (
                      <span className="line-through text-gray-500 text-sm">
                        {product.oldPrice}
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-gray-100 text-yellow-800 px-1 py-0.5 rounded text-xs">
                        {product.discount}
                      </span>
                    )}
                  </div>
                </div>
                {product.rating && (
                  <div className="flex text-yellow-400 mt-1">
                    {"★".repeat(product.rating)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
