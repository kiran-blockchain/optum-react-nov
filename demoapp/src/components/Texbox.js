import { memo, useState } from "react";

const TextBox = (props) => {
    const config = props.inputConfig;
    const formik = props.formik;
    const showValidation = ()=>{
        if(formik.initialTouched && formik.errors[config.name]){
            return <div> <label class="text-danger">{formik.errors[config.name]}</label></div>
        }
        else{
            return null;
        }
    }
    return (
        <div class="form-group row mb-3">
            <label for={config.id}
                class="col-sm-2 col-form-label">{config.label}</label>
            <div class="col-sm-6">
                <input
                    type={config.type}
                    class="form-control"
                    id={config.id}
                    placeholder={config.placeholder}
                    value={formik.values[config.name]}
                    name={config.name}
                    onBlur={formik.handleBlur}
                    onChange={config.onChange}
                />
                
                {showValidation()}
            </div>
        </div>
    )
}
// label
// placeholder
// value
// name
// handleEvent
// id
// type

export default TextBox ;