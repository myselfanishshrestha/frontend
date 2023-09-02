import { useParams, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
const CategoryProductList = ()=> {
    let params = useParams();
    // const [query, setQuery] = useSearchParams()

    // useEffect(() => {
    //     setQuery({test: "test", price: 1000})
    // }, [])
    return (<>
        <p>{params.categorySlug}</p>

    </>)
}

export default CategoryProductList