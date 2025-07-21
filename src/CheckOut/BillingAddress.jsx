import { useEffect, useState } from "react";

export default function BillingAddress({ formData, handleChange }) {
  const [showForm, setShowForm] = useState(formData.billingAddress === "different");

  useEffect(() => {
    setShowForm(formData.billingAddress === "different");
  }, [formData.billingAddress]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Billing address</h2>
      <div className="border rounded-lg overflow-hidden">
        <div className="border-b">
          <label className="flex items-center gap-2 px-4 py-3 cursor-pointer">
            <input
              type="radio"
              name="billingAddress"
              value="same"
              checked={formData.billingAddress === "same"}
              onChange={handleChange}
            />
            Same as shipping address
          </label>
          <label className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-t cursor-pointer">
            <input
              type="radio"
              name="billingAddress"
              value="different"
              checked={formData.billingAddress === "different"}
              onChange={handleChange}
            />
            Use a different billing address
          </label>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showForm ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm text-gray-600">Country/Region</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2"
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name (optional)"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
            />

            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none" 
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal code (optional)"
                value={formData.postalCode}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone number for order updates"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
