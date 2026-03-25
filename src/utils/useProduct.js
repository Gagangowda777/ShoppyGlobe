import { useEffect, useState } from "react"


function useProduct(api) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, seterror] = useState(null)

    useEffect(()=>{
        async function fetchAPI(){
            try{
                const response = await fetch(api);
                const data = await response.json()
                setProducts(Array.isArray(data) ? data : data.products || [])
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