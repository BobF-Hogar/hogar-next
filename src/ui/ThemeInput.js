import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/theme";
import applyTheme from "../util/theme";

// Themed text input - type may be overridden for email, password, etc.
function ThemeInput(props) {
    const { children, className, style, onChange, ...rest } = props;

    const theme = useSelector(selectTheme);

    const [ value, setValue ] = useState(props.defaultValue || "");

    const changeFunc = (e) => {
        setValue(e.target.value);

        if (onChange) {
            onChange(e);
        }
    }

    return <input
        className={"input " + (className || "")}
        style={applyTheme(style, theme, "input")}
        type="text"
        onChange={changeFunc}
        {...rest}
        value={value}
    >
        {children}
    </input>
}

export default ThemeInput;