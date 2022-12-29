import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/themeSlice";
import applyTheme from "../util/theme";

function ThemePanel(props) {
    const { children, className, style, ...rest } = props;

    const theme = useSelector(selectTheme);

    return <div
        className={"panel " + (className || "")}
        style={applyTheme(style, theme, "panel")}
        {...rest}
    >
        {children}
    </div>
}

export default ThemePanel;