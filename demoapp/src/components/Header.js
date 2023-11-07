import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";

const Header = (props) => {
    //business area
    const companyName ="Optum";
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    
    //presentation 
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{companyName}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
             
              <li class="nav-item" onClick={e=>{
                navigate('/login')
              }}>
                <a class="nav-link">Login</a>
              </li>
              <li class="nav-item" onClick={e=>{
                navigate('/products')
              }}>
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item" onClick={e=>{
                navigate('/cart')
              }}>
                <a class="nav-link" href="#">Cart - {cartContext.items.length}</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Header