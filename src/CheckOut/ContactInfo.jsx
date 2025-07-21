export default function ContactInfo({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Contact</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-2 rounded mb-2 focus:ring-1 focus:ring-[#eb8a30]  focus:outline-none"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label className="flex items-center gap-2 text-sm accent-[#eb8a30]">
        <input
          type="checkbox"
          name="whatsappUpdates "
          checked={formData.whatsappUpdates}
          onChange={handleChange}
        />
        Email me with news and offers
      </label>
    </div>
  );
}
