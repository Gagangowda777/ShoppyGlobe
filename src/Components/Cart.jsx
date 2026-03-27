import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems, selectCartTotal } from "../utils/cartSelector";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-xl">Your cart is empty.</p>
        </div>) 
      : 
      (<div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 grow">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md h-fit min-w-[320px] lg:sticky top-24">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Cart Total</h3>
            <div className="flex justify-between items-center text-xl font-bold mb-8 text-gray-900">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <Link to="/checkout" className="block text-center w-full bg-blue-600 text-white rounded-xl p-4 hover:bg-blue-700 font-bold transition-all shadow-md">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;