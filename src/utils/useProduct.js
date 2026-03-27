import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setProducts as setStoreProducts } from "../products/productSlice"

// custom hook to fectch data ffrom api 
function useProduct(api) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, seterror] = useState(null)
  const dispatch = useDispatch()

    useEffect(()=>{
        async function fetchAPI(){
            try{
                const response = await fetch(api);
                const data = await response.json()
                const productList = Array.isArray(data) ? data : data.products || []
                setProducts(productList)
                dispatch(setStoreProducts(productList))
            }
            catch(err){
                seterror(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchAPI()
    }, [])
    return {products, loading, error}
}

export default useProduct