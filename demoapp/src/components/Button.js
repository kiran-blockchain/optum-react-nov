
const Button =(props)=>{
    const config = props.btnConfig;
    return(
        <div>
            <button className={config.cssClass? config.cssClass:"btn btn-secondary"}
            onClick = {config.handleClick}
            >{config.text}</button>
        </div>
    )
};
export default Button;