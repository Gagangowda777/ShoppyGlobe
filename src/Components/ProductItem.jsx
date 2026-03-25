import useProduct from "../utils/useProduct"

function ProductItem() {
  const {products, loading, error} = useProduct('https://dummyjson.com/products')
  
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
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-60 h-56 object-cover rounded-t-lg "/>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-xl font-bold mb-2">${product.price}</p>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <p className="text-sm text-gray-500">Rating: {product.rating}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductItem