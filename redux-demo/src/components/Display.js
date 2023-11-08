import { useSelector } from "react-redux"

export const Display =()=>{
    //reading the data from the store
    const counter = useSelector(x=>x.counter);
    console.log(counter);
    return(
        <h1>Count - {counter.count}</h1>
    )
}