import { IoMdClose } from "react-icons/io";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSidebar({ onClose, isOpen }) {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();

  const getShortTitle = (title) => {
    return title.split(" ").slice(0, 5).join(" ");
  };

  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    onClose();
    navigate("/checkout");
  };

  return (
    <>
 
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

   
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-lg border-l z-50 flex flex-col 
        transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
 
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-gray-800 tracking-wide">
            SHOPPING CART
          </h2>
          <button className="text-2xl text-gray-800" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

      
        <div className="flex-1 px-4 sm:px-6 py-4 overflow-y-auto space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-gray-800 text-sm sm:text-base">
                    {getShortTitle(item.title)}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Wired</p>

                  <div className="flex flex-wrap items-center justify-between mt-3 gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs sm:text-sm text-gray-400 hover:text-red-500 transition"
                    >
                      Remove
                    </button>

                    <div className="flex items-center border rounded text-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-sm sm:text-md font-serif text-gray-800 whitespace-nowrap">
                      US ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      
        <div className="border-t px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm sm:text-md font-serif text-gray-800">Subtotal</span>
            <span className="text-sm sm:text-md font-serif text-gray-800">
              US ${subtotal.toFixed(2)}
            </span>
          </div>

          <button
            className="w-full bg-orange-400 hover:bg-orange-500 text-white text-base sm:text-lg font-serif py-3 rounded-full transition"
            onClick={handleCheckout}
          >
            Proceed To Checkout
          </button>

          <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-2 font-serif">
            Shipping & taxes calculated at checkout
          </p>
        </div>
      </div>
    </>
  );
}
