import { useState } from "react"
import { countrylist } from "../config/countrylist";
const Dropdown = (props) => {
    const [option, setOption] = useState("");
    const handleChange = (e) => {
        setOption(e.target.value);
    }
    const buildOptions =()=>{
       const optionArray = countrylist.map((item,index)=>{
          return <option value={item.value}>{item.name}</option>
       });
       return optionArray;
    };
    return (
        <div class="form-group row">
            <label for="country" class="col-sm-2 col-form-label">Country</label>
            <div class="col-sm-10">
                <select className="form-control"
                    value={option}
                    onChange={handleChange}
                >
                    <option value="">Please select</option>
                     {buildOptions()}
                </select>
                {option}
            </div>
        </div>
    )
}
export default Dropdown;