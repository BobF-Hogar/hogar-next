import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/theme";
import applyTheme from "../util/theme";

function ThemeButton(props) {
    const { children, className, style, ...rest } = props;

    const theme = useSelector(selectTheme);

    return <button
        className={"button " + (className || "")}
        style={applyTheme(style, theme, (rest.disabled) ? "buttonDisabled" : "button")}
        {...rest}
    >
        {children}
    </button>
}

export default ThemeButton;