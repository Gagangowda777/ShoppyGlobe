import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../utils/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
        <p className="text-gray-600 mt-1"> ₹{item.price} </p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => dispatch(decrementQuantity(item.id))}
            disabled={item.quantity <= 1}
            className={`w-8 h-8 flex items-center justify-center rounded border shadow-sm ${item.quantity <= 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50' : 'border-gray-400 text-gray-800 hover:bg-gray-100 hover:border-gray-500 transition-colors'}`}>
              -
          </button>
          <span className="font-semibold text-lg w-6 text-center">{item.quantity}</span>
          <button 
            onClick={() => dispatch(incrementQuantity(item.id))}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-400 text-gray-800 shadow-sm hover:bg-gray-100 hover:border-gray-500">
            +
          </button>
        </div>
        <button 
          onClick={() => dispatch(removeFromCart(item.id))}
          className="px-4 py-2 border border-red-500 bg-red-600 text-white rounded-xl hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem