import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../utils/cartSelector';
import { clearCart } from '../utils/cartSlice';

// checkout page where their is a dummy form and checkout btn
function CheckOut() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function to handle the order
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // shows alert that order is placed and clears the cart and returns to home page 
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className='flex flex-col lg:flex-row justify-center items-start gap-6 md:gap-8 p-4 md:p-8 bg-gray-50 min-h-screen'>

      {/*Form to get user details (dummy form) */}
      <form onSubmit={handlePlaceOrder} className='flex flex-col gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-md w-full max-w-lg mx-auto lg:mx-0'>
        <h2 className="text-2xl font-bold mb-2">Checkout Details</h2>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="name">Name : </label>
          <input className="border border-gray-300 rounded-xl p-2 " type="text" placeholder='Full Name' id='name' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="email">Email : </label>
          <input className="border border-gray-300 rounded-xl p-2 " type="email" placeholder='Email Address' id='email' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="address">Address : </label>
          <input className="border border-gray-300 rounded-xl p-2 " type="text" placeholder='Street Address' id='address' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="city">City : </label>
          <input className="border border-gray-300 rounded-xl p-2 " type="text" placeholder='City' id='city' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="state">State : </label>
          <input className="border border-gray-300 rounded-xl p-2 " type="text" placeholder='State' id='state' required />
        </div>  
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="zip">Zip Code : </label>
          <input className="border border-gray-300 rounded-xl p-2 " type="text" placeholder='Zip Code' id='zip' required />
        </div> 
        <button className="border border-gray-600 rounded-xl p-2 hover:bg-black hover:text-white" type='submit'>
          Place Order
        </button>
      </form>

      {/* Order details */}
      <div className='bg-white p-4 sm:p-6 rounded-xl shadow-md w-full max-w-lg lg:max-w-md h-fit mx-auto lg:mx-0 mt-6 lg:mt-0'>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.title} x {item.quantity}</h4>
                  </div>
                </div>
                <p className="font-semibold text-gray-800 shrink-0">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 text-xl font-bold text-gray-900">
              <span>Total:</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CheckOut