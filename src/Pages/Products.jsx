import { useParams, Link } from "react-router-dom";
import products from "../Data/ProductData";

export default function Products({ openCart }) {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === category.toLowerCase() ||
      product.subcategory?.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="px-4 sm:px-8 md:px-12 mt-32 sm:mt-40 mb-16 sm:mb-20 font-serif">
      <h1 className="text-2xl sm:text-4xl text-center text-gray-700 mb-2">
        {category} ({filteredProducts.length})
      </h1>
      <p className="text-sm sm:text-lg text-center mb-6 sm:mb-10">
        {filteredProducts.length} PRODUCTS
      </p>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-sm sm:text-base">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden flex flex-col rounded-lg transition hover:shadow-customShadow group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden rounded-lg p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 sm:h-72 sm:object-cover object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="flex flex-col px-2">
                <h3 className="text-sm sm:text-base text-gray-600">
                  {product.title.split(" ").slice(0, 6).join(" ")}
                </h3>

                <p className="text-base sm:text-lg">US ${product.price}</p>

                {product.rating && (
                  <div className="flex text-yellow-400 mt-1 text-sm sm:text-base">
                    {"★".repeat(product.rating)}
                  </div>
                )}

                <div className="flex items-center mt-3 sm:mt-4 space-x-2">
                  {product.oldPrice && (
                    <span className="line-through text-xs sm:text-sm text-gray-500">
                      {product.oldPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-gray-100 text-yellow-800 text-xs px-1 py-0.5 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
