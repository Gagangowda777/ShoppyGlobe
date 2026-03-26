import { useDispatch, useSelector } from "react-redux";
import {selectCartItems,selectCartTotal} from "../cart/cartSelector";
import { removeFromCart } from "../cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  return (
    <div>
      <h2>Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>
            {item.quantity} × ₹{item.price}
          </p>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default Cart