import { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/Texbox"

const Login =(props)=>{
    const [loginData,setLogin] = useState({
        username:"",
        password:""
    })
    const handleChange = (e)=>{
        console.log(e.target.name+ "=>"+e.target.value);
        let login = loginData;
        login[e.target.name]= e.target.value;
        console.log(login);
        //loginData.username
        ///loginData[username]
        setLogin({...login});
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
            <pre>
                {JSON.stringify(loginData)}
            </pre>
            
        </div>
    )
}

export default Login;