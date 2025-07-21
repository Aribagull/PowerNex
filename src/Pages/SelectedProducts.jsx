import React from "react";
import Productsdata from "../Data/ProductData"; 

export default function SelectedProducts({ selectedItem }) {
  if (!selectedItem) return null;

  const filteredProducts = Productsdata.filter(
    (product) => product.category === selectedItem
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="mt-4 bg-red-100 p-4 text-red-600 font-medium rounded">
        No products found for: {selectedItem}
      </div>
    );
  }

  return (
    <div className="mt-4 bg-gray-100 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Products for: {selectedItem}</h2>
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 bg-white rounded hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-cover"
            />
            <h4 className="mt-2 font-semibold">{product.name}</h4>
            <p className="text-sm text-gray-600">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
