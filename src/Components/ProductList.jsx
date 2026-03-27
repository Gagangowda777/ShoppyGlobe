import ProductItem from "./ProductItem"

function ProductList() {

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="text-center py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Welcome to ShoppyGlobe</h1>
            <p className="text-base md:text-lg text-gray-600 px-4">Discover amazing products at great prices</p>
        </div>
        <ProductItem/>
    </div>
  )
}

export default ProductList