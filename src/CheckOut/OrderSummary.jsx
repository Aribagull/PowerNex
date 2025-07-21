import React, { useState } from "react";

export default function OrderSummary({ products = [] }) {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  if (products.length === 0) return <div>No items to checkout.</div>;

  const subtotal = products.reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (item.quantity || 1), 
    0
  );

  const shipping = 50;
  const total = subtotal + shipping - appliedDiscount;

  const applyDiscount = () => {
    if (discountCode === "SAVE200") {
      setAppliedDiscount(70);
    } else {
      setAppliedDiscount(0);
      alert("Invalid discount code");
    }
  };

  return (
    <div className="w-full bg-[#f7f7f7] pr-8 pt-10 flex flex-col gap-4">
      {products.map((product, index) => (
        <div key={index} className="flex justify-start items-center gap-4">
          <div className="relative w-16 h-16">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {product.quantity || 1} 
            </div>
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">{product.title}</p>
            <p className="text-xs text-gray-500">{product.description}</p>
          </div>
          <div className="mt-4">
            $ {(product.price * (product.quantity || 1)).toFixed(2)}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2 mt-6">
        <label htmlFor="discount" className="text-sm font-medium">
          Discount Code
        </label>
        <div className="flex">
          <input
            id="discount"
            type="text"
            className="border p-2 flex-grow text-sm focus:ring-1 focus:ring-[#eb8a30] focus:outline-none"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Enter discount code"
          />
          <button
            onClick={applyDiscount}
            className="bg-[#eb8a30] text-white px-4 py-2 text-sm"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="pt-4 text-sm text-gray-700">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$ {subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$ {shipping}</span>
        </div>
        {appliedDiscount > 0 && (
          <div className="flex justify-between text-green-600 mb-2">
            <span>Discount</span>
            <span>- $ {appliedDiscount}</span>
          </div>
        )}
        <div className="flex justify-between font-semibold text-black pt-2 mt-2">
          <span>Total</span>
          <span>US $ {total}</span>
        </div>
      </div>
    </div>
  );
}
