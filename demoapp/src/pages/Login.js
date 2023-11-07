import Button from "../components/Button";
import TextBox from "../components/Texbox"

const Login =(props)=>{

    const handleChange = (e)=>{
        console.log(e.target.name+ "=>"+e.target.value)
    };
    const handleClick = ()=>{
        console.log("Login Clicked");
    }
    const login = {
        username:{
            id:"username",
            type:"text",
            placeholder:"Enter User name",
            label:"User Name",
            name:"username",
            onChange:handleChange
        },
        password:{
            id:"password",
            type:"password",
            placeholder:"Enter Password",
            label:"Password",
            name:"password",
            onChange:handleChange
        },
        button:{
            cssClass:"btn btn-primary",
            text:"Login",
            handleClick:handleClick
        }
    };

    return(
        <div className="container mt-5">
            <TextBox inputConfig ={login.username}/>
            <TextBox inputConfig ={login.password}/>
            <Button btnConfig={login.button}/>
        </div>
    )
}

export default Login;