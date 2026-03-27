import { useSelector } from "react-redux";
import { selectCartItems } from "../cart/cartSelector";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(selectCartItems);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-xl">Your cart is empty.</p>
        </div>) 
      : 
      (<div className="flex flex-col gap-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart