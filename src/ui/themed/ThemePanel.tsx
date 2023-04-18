import React from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../redux/theme";
import applyTheme from "../../util/theme";

interface ThemePanelProps extends React.PropsWithChildren {
    className?: string,
    style?: React.CSSProperties,
}

const ThemePanel: React.FC<ThemePanelProps> = ({ children, className, style, ...rest }) => {
    const theme = useSelector(themeSelectors.theme);

    return <div
        className={"panel " + (className || "")}
        style={applyTheme(style, theme, "panel")}
        {...rest}
    >
        {children}
    </div>
}

export default ThemePanel;