import { useState } from "react";
import Button from "./Button";
const Counter =(props)=>{
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1)
    };
    const decrement = ()=>{
        setCount(count-1)
    };
    const reset =()=>{
        setCount(0);
    }
    const incrementConfig ={
        text:"increment",
        cssClass:"btn btn-primary",
        handleClick:increment
    }
    return(
        <div>
            <h1>Count-{count}</h1>
            <Button
             btnConfig ={incrementConfig}
            />

        </div>
    )
};
export default Counter;