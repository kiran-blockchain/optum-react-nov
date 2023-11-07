import { memo } from "react";

export const Demo1 = memo((props) => {
    console.log("Demo 1 called");
    return (
        <h1>I am demo 1 {props.data1}</h1>
    )
});


