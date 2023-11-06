import { useState } from "react"

const Toggle = (props) => {

    const [show, setShow] = useState(false);
    const showText = () => {
        if (show) {
            return (<h1>Welcome to Optum</h1>)
        } else {
            return null;
        }
    };
    return (
        <div>
            {showText()}
            <button className="btn btn-primary"
                onClick={e => {
                    setShow(!show);
                }}
            >Click</button>
        </div>
    )

}
export default Toggle;