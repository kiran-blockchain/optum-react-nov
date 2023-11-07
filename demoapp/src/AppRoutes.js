import { Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const AppRoutes = (props)=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="*" element={<Login/>}></Route>
        </Routes>
    )
};

export default AppRoutes;