import React from "react";

export default function ShippingDelivery() {
  return (
    <div className="max-w-3xl mx-auto md:px-4 px-6 py-20 font-serif text-gray-600 mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Shipping & Delivery</h1>

      <section className="mb-10">
        <h2 className="text-base font-semibold mb-2">SHIPPING</h2>
        <p className="text-sm">
          We are proud to offer international shipping services that currently operate in over 200
          countries and islands world wide. Nothing means more to us than bringing our customers
          great value and service. We will continue to grow to meet the needs of all our customers,
          delivering a service beyond all expectation anywhere in the world.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-base font-semibold mb-1">Do you ship worldwide?</h3>
        <p className="text-sm">
          Yes. We provide free shipping to over 200 countries around the world. However, there are
          some locations we are unable to ship to. If you happen to be located in one of those
          countries we will contact you.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-base font-semibold mb-1">What about customs?</h3>
        <p className="text-sm">
          We are not responsible for any custom fees once the items have been shipped. By
          purchasing our products, you consent that one or more packages may be shipped to you and
          may get custom fees when they arrive to your country.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-base font-semibold mb-1">How long does shipping take?</h3>
        <p className="mb-4 text-sm">Shipping time varies by location. These are our estimates:</p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">*Estimated Shipping Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["United States", "5-20 Business days"],
                ["Canada, Europe", "5-20 Business days"],
                ["Australia, New Zealand", "5-20 Business days"],
                ["Central & South America", "5-25 Business days"],
                ["Asia", "5-20 Business days"],
                ["Africa", "5-25 Business days"],
              ].map(([location, time], index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{location}</td>
                  <td className="border px-4 py-2">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs mt-2 italic text-gray-600">
          *This doesn’t include our 1-5 day processing time.
        </p>
      </section>
    </div>
  );
}
