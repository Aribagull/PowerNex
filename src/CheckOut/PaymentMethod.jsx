export default function PaymentMethod({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Payment</h2>
      <p className="text-sm text-gray-500 mb-4">
        All transactions are secure and encrypted.
      </p>

      <label
        className={`block border rounded-t-lg overflow-hidden cursor-pointer ${
          formData.payment === "payfast" ? "ring-0 ring-black" : "border-gray-300"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="payfast"
              checked={formData.payment === "payfast"}
              onChange={handleChange}
              className="accent-black"
            />
            <span className="font-medium text-sm">
              PAYFAST (Pay via Debit/Credit/Wallet/Bank Account)
            </span>
          </div>
          <div className="flex gap-1">
            <img src="https://img.icons8.com/color/32/visa.png" alt="visa" />
            <img src="https://img.icons8.com/color/32/mastercard.png" alt="mastercard" />
            <img src="https://img.icons8.com/color/32/unionpay.png" alt="unionpay" />
          </div>
        </div>


        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden bg-gray-50 text-center text-sm text-gray-600 ${
            formData.payment === "payfast" ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="p-6">
           <img
  src="https://img.icons8.com/ios-filled/100/9ca3af/bank-card-back-side.png"
  alt="debit card"
  className="mx-auto mb-2 w-12"
/>

            <p>
              After clicking “Pay now”, you will be redirected to PAYFAST to complete your purchase securely.
            </p>
          </div>
        </div>
      </label>

      <label
        className={`block border overflow-hidden cursor-pointer rounded-t-none ${
          formData.payment === "cod" ? "ring-0 ring-black" : "border-gray-300"
        }`}
      >
        <div className="flex items-center gap-2 p-4">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={formData.payment === "cod"}
            onChange={handleChange}
            className="accent-black"
          />
          <span className="font-medium text-sm">Cash on Delivery (COD)</span>
        </div>

        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden bg-gray-50 text-sm text-gray-600 border-t ${
            formData.payment === "cod" ? "max-h-28" : "max-h-0"
          }`}
        >
          <div className="p-4">
            For COD please expect a confirmation call from +447927462089. Orders will only be dispatched after you confirm.
          </div>
        </div>
      </label>
    </div>
  );
}
