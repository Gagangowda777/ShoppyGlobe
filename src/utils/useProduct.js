import { useEffect, useState } from "react"


function useProduct(api) {
  const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchAPI(){
            try{
                const response = await fetch(api);
                const data = await response.json()
                setProducts(Array.isArray(data) ? data : data.products || [])
            }
            catch(err){
                console.log(err)
            }
        }
        fetchAPI()
    }, [])
    return {products}
}

export default useProduct