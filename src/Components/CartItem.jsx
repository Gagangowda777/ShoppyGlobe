import { useDispatch } from "react-redux";
import { removeFromCart } from "../cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
        <p className="text-gray-600 mt-1">
          {item.quantity} x ₹{item.price}
        </p>
      </div>
      <button 
        onClick={() => dispatch(removeFromCart(item.id))}
        className="px-4 py-2 border border-red-500 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;