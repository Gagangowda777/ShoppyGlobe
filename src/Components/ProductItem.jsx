import useProduct from "../utils/useProduct"

function ProductItem() {
  const {products} = useProduct('https://dummyjson.com/products')
  
  return (
    <div className="grid grid-cols-3 p-8 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border-2 border-black">
          <img
            src={product.thumbnail || (product.images && product.images[0])}
            alt={product.title}
            className="w-full h-52 object-cover"
          />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductItem