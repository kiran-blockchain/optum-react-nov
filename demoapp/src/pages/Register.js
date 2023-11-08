import { Calendar } from "primereact/calendar";
import { useState } from "react"

export const Register = () => {

    const [register, setRegister] = useState({dob:""});

    return (<div className="row mt-5">
        <div class="form-group row mb-3">
            <label for="dob"
                class="col-sm-2 col-form-label">Date of Birth</label>
            <div class="col-sm-6">
                <Calendar value={register.dob}
                name="dob"
                onChange={(e) => { 
                    setRegister({...register,dob:e.value})
                 }
                } />
            </div>
        </div>
    </div>)

}