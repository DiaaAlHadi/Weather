import React from "react";
import PropTypes from "prop-types";
import app from "../services/appService";
function Input(props) {
    function handler(event) {
        const {value} = event.target;
        if (props.OnChange && typeof props.OnChange == "function") props.OnChange(value);
    }

    return (
        <div className={`d-flex flex-lg-row  align-items-center ${props.ContainerClass}`}>
            {props.Label && <label className={`${props.LabelClass}`}>{app.translate(props.Label, props.Lang)}</label>}
            <div className={`d-flex  border border-2 rounded ${props.InputContainerClass}`}>
                {props.Lang !== "ar" && props.Icon && props.children && (
                    <div className={`mx-2 ${props.IconClass}`}>{props.children}</div>
                )}

                <input
                    type={props.Type}
                    key={props.Key}
                    className={`form-control form-control-sm border-0 ${props.Class}`}
                    disabled={props.Disabled}
                    onChange={handler}
                    value={props.Model}
                    onBlur={props.OnBlur}
                    onKeyDown={props.OnKeyDown}
                    placeholder={app.translate(props.Placeholder, props.Lang)}
                    dir={props.Lang === "ar" ? "rtl" : "ltr"}
                    required
                />
                {props.Lang === "ar" && props.Icon && props.children && (
                    <div className={`mx-2 ${props.IconClass}`}>{props.children}</div>
                )}
            </div>
        </div>
    );
}

Input.propTypes = {
    ContainerClass: PropTypes.string,
    InputContainerClass: PropTypes.string,
    Icon: PropTypes.bool,
    IconClass: PropTypes.string,
    Type: PropTypes.string,
    Key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Class: PropTypes.string,
    Disabled: PropTypes.bool,
    Model: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    OnBlur: PropTypes.func,
    Placeholder: PropTypes.string,
    Label: PropTypes.string,
    LabelClass: PropTypes.string,
    Dir: PropTypes.string,
    OnChange: PropTypes.func,
    OnKeyDown: PropTypes.func,
    Lang: PropTypes.string,
};
Input.defaultProps = {
    ContainerClass: "m-1",
    InputContainerClass: "mx-2",
    IconClass: "",
    Icon: false,
    Type: "text",
    Class: "col",
    Disabled: false,
    Placeholder: "",
    LabelClass: "col",
};

export default Input;
