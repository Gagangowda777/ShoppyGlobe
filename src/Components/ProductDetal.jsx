import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import useProduct from '../utils/useProduct';

function ProductDetal() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, loading, error } = useProduct('https://dummyjson.com/products');
  const product = products.find((p) => p.id === Number(id));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img src={product.thumbnail} alt={product.title} className="w-full h-96 object-cover md:w-96" loading="lazy"/>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-xl font-bold text-gray-900 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <span className="text-sm text-gray-500">Rating: {product.rating}</span>
            </div>

            <button onClick={() => dispatch(addToCart(product))} className="border border-gray-600 rounded-xl p-2 mt-2 hover:bg-black hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetal;