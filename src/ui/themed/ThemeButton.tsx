import React from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../redux/theme";
import applyTheme from "../../util/theme";

interface ThemeButtonProps extends React.PropsWithChildren {
    className?: string,
    style?: React.CSSProperties,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ children, className, style, disabled, ...rest }) => {
    const theme = useSelector(themeSelectors.theme);

    return <button
        className={"button " + (className || "")}
        style={applyTheme(style, theme, (disabled) ? "buttonDisabled" : "button")}
        {...rest}
    >
        {children}
    </button>
}

export default ThemeButton;