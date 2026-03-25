import ProductItem from "./ProductItem"

function ProductList() {

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ShoppyGlobe</h1>
            <p className="text-lg text-gray-600">Discover amazing products at great prices</p>
        </div>
        <ProductItem/>
    </div>
  )
}

export default ProductList