import { useState } from "react";
import { Demo1 } from "../components/Demo1";
import { Demo2 } from "../components/Demo2";

const Cart =()=>{
    const [demo1,setDemo1] = useState("d1")
    const [demo2,setDemo2] = useState("d2")
    return(
        <div>
            <Demo1 data1={demo1}/>
            <Demo2 data2={demo2}/>
            <button className="btn btn-primary" 
            onClick={e=>{
                setDemo1("I am d1")
            }}>For Demo 1</button>
            <button className="btn btn-primary" onClick={e=>{
                setDemo2("i am d2")
            }}>For Demo 2</button>
        </div>
    )
}
export default Cart;