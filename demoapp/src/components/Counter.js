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
    return(
        <div>
            <h1>Count-{count}</h1>
            <Button
            text={props.btnProps.text}
            cssClass ="btn btn-primary"
            handleClick= {increment}
            />
            
            
             <Button
            text="Decrement"
            cssClass ="btn btn-danger mt-3"
            handleClick= {decrement}/>
             
             <Button
            text="Reset"
            cssClass ="btn btn-warning mt-3"
            handleClick= {reset}/>
        </div>
    )
};
export default Counter;