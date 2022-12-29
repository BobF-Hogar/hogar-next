import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/themeSlice";
import applyTheme from "../util/theme";

function ThemeCheckbox(props) {
    const { className, style, onChange, ...rest } = props;

    const theme = useSelector(selectTheme);

    const [ checked, setChecked ] = useState(props.defaultValue);

    const changeFunc = (e) => {
        setChecked(!checked);

        if (onChange) {
            onChange(!checked);
        }
    }

    let buildClass = "checkbox ";

    if (checked) {
        buildClass += "checked "
    }

    if (Object.keys(props).find(item => item === "disabled")) {
        buildClass += "disabled ";
    }

    return <div className="checkbox-holder">
        <div
            className={buildClass + (className || "")}
            style={applyTheme(style, theme, "input")}
            {...rest}
            type="checkbox"
            onClick={changeFunc}
        />
    </div>
}

export default ThemeCheckbox;