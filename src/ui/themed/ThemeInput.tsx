import React, { useState } from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../redux/theme";
import applyTheme from "../../util/theme";

interface ThemeInputProps extends React.PropsWithChildren {
    className?: string,
    defaultValue?: string,
    style?: React.CSSProperties,
    onChange: (a: any) => void,
}

// Themed text input - type may be overridden for email, password, etc.
const ThemeInput: React.FC<ThemeInputProps> = ({ children, className, defaultValue, style, onChange, ...rest }) => {
    const theme = useSelector(themeSelectors.theme);

    const [ value, setValue ] = useState(defaultValue || "");

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