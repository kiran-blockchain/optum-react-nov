import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextBox from "./components/Texbox";
import Toggle from "./components/Toggle";
import UserList from "./components/UserList";
import { CartContext } from "./context/CartContext";
import Login from "./pages/Login";

//Step1 

// arrow function
// Every component name should start with a Capital Letter 
// Every compnent must have a return statement 
// inside the return we should have one root enclosing html tag
const App = (props) => {

  const [cartItems,setCartItems] = useState([]);
  
  const addToCart =(item)=>{
    setCartItems([...cartItems,item])
  }
  return (
    <CartContext.Provider 
    value={{
      items:cartItems,
    setCartItems:addToCart
    }} >
      <div>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </CartContext.Provider>

  )
};
export default App;