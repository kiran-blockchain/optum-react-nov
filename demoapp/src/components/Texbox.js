import { useState } from "react";

const TextBox = (props) => {
    const config = props.inputConfig;
    const formik = props.formik;
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
                    onChange={config.onChange}
                />
                <p> <label class="text-danger">{formik.errors[config.name]}</label></p>

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

export default TextBox;