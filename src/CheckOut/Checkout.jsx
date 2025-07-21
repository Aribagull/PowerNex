import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../Context/CartContext"; 
import OrderSummary from "./OrderSummary";
import ContactInfo from "./ContactInfo";
import DeliveryInfo from "./DeliveryInfo";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";

export default function Checkout() {
  const [formData, setFormData] = useState({
    email: "",
    whatsappUpdates: true,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    payment: "payfast",
    billingAddress: "same",
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  useEffect(() => {
    const singleProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!cartItems?.length && singleProduct) {
      setSelectedProduct(singleProduct);
    }
  }, [cartItems]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Placed:", formData);
    localStorage.removeItem("cartItems");
  };

  const productsToShow =
    cartItems.length > 0
      ? cartItems
      : selectedProduct
      ? [selectedProduct]
      : [];

  return (
    <main className="pt-16 flex flex-col md:flex-row w-full min-h-screen">
      
    
      <div className="block md:hidden bg-[#f5f5f5] border-b p-4">
        <OrderSummary products={productsToShow} />
      </div>

     
      <div className="w-full md:w-[55%] flex justify-end bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-6 pt-12 space-y-6 mb-20"
        >
          <ContactInfo formData={formData} handleChange={handleChange} />
          <DeliveryInfo formData={formData} handleChange={handleChange} />
          <ShippingMethod />
          <PaymentMethod formData={formData} handleChange={handleChange} />

          <button
            type="submit"
            className="bg-[#eb8a30] text-white w-full p-3 rounded hover:bg-[#eb8a30]"
          >
            Complete Order
          </button>
        </form>
      </div>

      
      <div className="hidden md:block w-full md:w-[45%] bg-[#f5f5f5] border-l p-6 pt-10">
        <OrderSummary products={productsToShow} />
      </div>
    </main>
  );
}
