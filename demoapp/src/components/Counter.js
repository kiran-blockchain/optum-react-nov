import { useState } from "react";
const Counter =(props)=>{
    const [count,setCount] = useState(93283);
    const increment = ()=>{
        setCount(count+1)
    };
    const decrement = ()=>{
        setCount(count-1)
    };
    return(
        <div>
            <h1>Count-{count}</h1>
            <button className="btn btn-primary" onClick={increment} >+</button>
            <button className="btn btn-danger" onClick={decrement}>-</button>
        </div>
    )
};
export default Counter;