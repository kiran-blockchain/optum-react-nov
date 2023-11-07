import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            let result = await axios.get('https://fakestoreapi.com/products');
            setProducts(result.data);
        }
        catch (ex) {
            setProducts([]);
        }
    };
    useEffect(() => {
        getProducts();
    },[]);
    
    return (
        <div className="row">
            <Product list = {products}/>
          

        </div>
    )
}
export default Products;