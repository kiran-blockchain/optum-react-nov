import { Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { Register } from "./pages/Register";

const AppRoutes = (props)=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/products" element={<Products/>}>
              
            </Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="*" element={<Login/>}></Route>
        </Routes>
    )
};

export default AppRoutes;