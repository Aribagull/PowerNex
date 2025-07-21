export default function DeliveryInfo({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Delivery</h2>
      <select className="w-full border p-2 rounded mb-2">
        <option value="Pakistan">Pakistan</option>
      </select>
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="border p-2 rounded focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          className="border p-2 rounded focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Address"
        className="border p-2 rounded w-full mt-2 focus:ring-1 focus:ring-[#eb8a30] focus:outline-none"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="apartment"
        placeholder="Apartment, suite, etc. (optional)"
        className="border p-2 rounded w-full mt-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
        value={formData.apartment}
        onChange={handleChange}
      />
      <div className="grid grid-cols-2 gap-2 mt-2">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="border p-2 rounded focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code (optional)"
          className="border p-2 rounded focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
          value={formData.postalCode}
          onChange={handleChange}
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="border p-2 rounded w-full mt-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
        value={formData.phone}
        onChange={handleChange}
      />
      <label className="text-sm mt-2 block">
        <input type="checkbox" className="mr-2 accent-[#eb8a30]" /> Save this information for next time
      </label>
    </div>
  );
}
