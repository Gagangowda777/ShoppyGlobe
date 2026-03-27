import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useProduct from "../utils/useProduct"
import { selectFilteredProducts, selectSearchTerm } from "../utils/productSelector"
import { addToCart } from "../utils/cartSlice";

function ProductItem() {
  const { loading, error } = useProduct('https://dummyjson.com/products')
  const filteredProducts = useSelector(selectFilteredProducts)
  const searchTerm = useSelector(selectSearchTerm)
  const dispatch = useDispatch()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    )
  }
  else if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Error Loading Products</p>
      </div>
    )
  }

  if (filteredProducts.length === 0 && searchTerm) {
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-2">
        <p className="text-gray-500 text-lg">No products found for "{searchTerm}"</p>
        <p className="text-gray-400 text-sm">Try a different search term</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-60 h-56 object-cover rounded-t-lg "
              loading="lazy"/>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-xl font-bold mb-2">${product.price}</p>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <p className="text-sm text-gray-500">Rating: {product.rating}</p>
            <div className="flex gap-2 mt-2">
              <Link to={`/product/${product.id}`}>
                <button className="border border-gray-600 rounded-xl p-2 hover:bg-black hover:text-white">View Item</button>
              </Link>
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="border border-gray-600 rounded-xl p-2 hover:bg-black hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductItem