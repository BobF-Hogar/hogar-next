import React, { useState } from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../redux/theme";
import applyTheme from "../../util/theme";

interface ThemeCheckboxProps {
    className?: string,
    defaultValue: boolean,
    style?: React.CSSProperties,
    onChange: (a: boolean) => void,
}

const ThemeCheckbox: React.FC<ThemeCheckboxProps> = (props) => {
    const { className, defaultValue, style, onChange, ...rest } = props;

    const theme = useSelector(themeSelectors.theme);

    const [ checked, setChecked ] = useState(!!defaultValue);

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
            onClick={changeFunc}
        />
    </div>
}

export default ThemeCheckbox;