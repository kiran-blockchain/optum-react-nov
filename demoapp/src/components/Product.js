import { useContext } from "react";
import Button from "./Button"
import { CartContext } from "../context/CartContext";
import { useDispatch } from "react-redux";
import { addItemToCart, removeFromCart } from "../store/CartReducer";

export const Product = (props) => {
    //const cartContext = useContext(CartContext);
    const list = props.list;
    const dispatch = useDispatch();
    const showProducts = () => {
        return list.map((item, index) => {
            return (
                <div className="col-md-3" key={item.title}>
                    <figure class="figure">
                        <img src={item.image}
                            class="figure-img img-fluid rounded" alt="..." />
                        <figcaption class="figure-caption text-end">{item.description}</figcaption>
                        <h6>{item.title}</h6>
                        <p class="figure-caption text-end">{item.price}</p>
                        <button className="btn btn-primary" onClick={e=>{
                            //cartContext.setCartItems(item);
                            dispatch(addItemToCart(item));
                        }}>Add To Cart</button>
                         <button className="btn btn-danger" onClick={e=>{
                            //cartContext.setCartItems(item);
                            dispatch(removeFromCart(item));
                        }}>Remove</button>
                    </figure>
                </div>)
        })
    }
    return (
        showProducts()
    )
}