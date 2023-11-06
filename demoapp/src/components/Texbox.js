import { useState } from "react";

const TextBox = (props) => {
        const [email,setEmail]= useState('test@gmail.com');

        //event handler
        const handleChange = (e)=>{
            //e is called event
            //e.target will tell us which control is originating the event
            //e.target.value will tell give the latest value of the ctrl
            console.log(e.target.value);
            setEmail(e.target.value)
        };
    return (
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="Email" 
                    value={email}
                    name="email"
                    onChange={handleChange}
                    />
                    {email}
            </div>
        </div>
    )
}

export default TextBox;