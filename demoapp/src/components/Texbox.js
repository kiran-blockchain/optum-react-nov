import { useState } from "react";

const TextBox = (props) => {
        const config = props.inputConfig;
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
                    //value={config.value}
                    name={config.name}
                    onChange={config.onChange}
                    />
                    
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