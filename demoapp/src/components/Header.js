import { useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/AuthReducer";

const Header = (props) => {
  //business area
  const companyName = "Optum";
  const navigate = useNavigate();
  // const cartContext = useContext(CartContext);
  const cartReducer = useSelector(x => x.cart);
  const authReducer = useSelector(x => x.auth);
  const dispatch = useDispatch();
  const showLoginFeatures = () => {
    if (authReducer.isLoggedIn) {
      return (
        <ul class="navbar-nav me-auto">

          <li class="nav-item" onClick={e => {
            navigate('/products')
          }}>
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item" onClick={e => {
            navigate('/cart')
          }}>
            <a class="nav-link" href="#">Cart -{cartReducer.cartItems.length}</a>
          </li>
          <li class="nav-item" onClick={e => {
           dispatch(logout())
            navigate('/login')
          }}>
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul class="navbar-nav me-auto">
          <li class="nav-item" onClick={e => {
            navigate('/register')
          }}>
            <a class="nav-link">Register</a>
          </li>
          <li class="nav-item" onClick={e => {
            navigate('/login')
          }}>
            <a class="nav-link">Login</a>
          </li>
        </ul>
      )
    }
}


//presentation 
return (
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{companyName}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        {showLoginFeatures()}
      </div>
    </div>
  </nav>
)
}
export default Header