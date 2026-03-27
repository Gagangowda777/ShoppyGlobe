import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../cart/cartSelector';
import { clearCart } from '../cart/cartSlice';

function CheckOut() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Display success message, clear cart, and navigate home
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-8 p-4 md:p-8 bg-gray-50 min-h-screen'>
      {/* Checkout Form */}
      <form onSubmit={handlePlaceOrder} className='flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-lg'>
        <h2 className="text-2xl font-bold mb-2">Checkout Details</h2>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="name">Name : </label>
          <input className="border border-gray-300 rounded-xl p-2 focus:outline-blue-500" type="text" placeholder='Full Name' id='name' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="email">Email : </label>
          <input className="border border-gray-300 rounded-xl p-2 focus:outline-blue-500" type="email" placeholder='Email Address' id='email' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="address">Address : </label>
          <input className="border border-gray-300 rounded-xl p-2 focus:outline-blue-500" type="text" placeholder='Street Address' id='address' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="city">City : </label>
          <input className="border border-gray-300 rounded-xl p-2 focus:outline-blue-500" type="text" placeholder='City' id='city' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="state">State : </label>
          <input className="border border-gray-300 rounded-xl p-2 focus:outline-blue-500" type="text" placeholder='State' id='state' required />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="zip">Zip Code : </label>
          <input className="border border-gray-300 rounded-xl p-2 focus:outline-blue-500" type="text" placeholder='Zip Code' id='zip' required />
        </div> 
        <button className="bg-blue-600 text-white rounded-xl p-3 mt-4 hover:bg-blue-700 font-bold transition-colors" type='submit'>
          Place Order
        </button>
      </form>

      {/* Order Summary */}
      <div className='bg-white p-6 rounded-xl shadow-md w-full max-w-md h-fit'>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-3">
                  <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded-md border" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
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
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CheckOut