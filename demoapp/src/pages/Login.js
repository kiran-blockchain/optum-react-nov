import { useState } from "react";
import Button from "../components/Button";
import TextBox from "../components/Texbox"
import axios from "axios";
import { useFormik } from "formik";//import formik
import { loginValidation } from "../utils/loginValidation";
import { useDispatch } from "react-redux";
import {login as loginAction} from "../store/AuthReducer"
import { useNavigate } from "react-router";

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLogin] = useState({
        username: "",
        password: "",
        isLoggedIn: null,
        token: ""
    });
    //configure formik
    const formik = useFormik({
        
        initialValues: { username: "", password: "" },
        validationSchema: loginValidation,
        // onSubmit: async (values) => {
        //     if (formik.isValid) {
        //         await handleClick();
        //     }
        // }
    })
    const handleChange = (e) => {
        formik.handleChange(e);
        console.log(e.target.name + "=>" + e.target.value);
        let login = loginData;
        login[e.target.name] = e.target.value;
        console.log(login);
        //loginData.username
        ///loginData[username]
        setLogin({ ...login });
    };
    const handleClick = async () => {
        if (formik.dirty && formik.isValid) {
            try {
                const result = await axios.post('https://fakestoreapi.com/auth/login', loginData);
                console.log(result.data);

                if (result.data.token) {
                    setLogin({ ...loginData, isLoggedIn: true, token: result.data.token });
                    dispatch(loginAction({token:result.data.token}));
                    navigate("/products");
                    
                }
            } catch (ex) {
                console.log(ex);
                setLogin({ ...loginData, isLoggedIn: false, token: "" });
            }
        }
    }
    const login = {
        username: {
            id: "username",
            type: "text",
            placeholder: "Enter User name",
            label: "User Name",
            name: "username",
            onChange: handleChange
        },
        password: {
            id: "password",
            type: "password",
            placeholder: "Enter Password",
            label: "Password",
            name: "password",
            onChange: handleChange
        },
        button: {
            cssClass: "btn btn-primary",
            text: "Login",
            handleClick: handleClick
        }
    };
    const showLoginResult = () => {
        if (loginData.isLoggedIn === false) {
            return <h6 className="text-danger">Invalid credentials</h6>
        } else if (loginData.isLoggedIn) {
            return <h6 className="text-success">User Logged in</h6>
        } else {
            return null;
        }
    };


    return (
        <div className="container mt-5">
            <TextBox inputConfig={login.username} formik={formik} />
            <TextBox inputConfig={login.password} formik={formik} />
            {showLoginResult()}
            <Button btnConfig={login.button} />
            <pre>
                {JSON.stringify(loginData)}
            </pre>

        </div>
    )
}

export default Login;