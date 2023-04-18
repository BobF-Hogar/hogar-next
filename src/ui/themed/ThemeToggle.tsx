import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../redux/theme";
import applyTheme from "../../util/theme";

import "./ThemeToggle.css";

interface ThemeToggleProps {
    value: boolean | string,
    labels?: string[],
    changeFunc: (a: boolean | string) => void,
    style?: React.CSSProperties,
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ value, labels, changeFunc, style }) => {
    const theme = useSelector(themeSelectors.theme);

    const [toggled, setToggled] = useState(labels ? labels.indexOf(value.toString()) > 0 : value);

    const pinRef = useRef(null);

    useEffect(() => {
        setToggled(labels ? labels.indexOf(value.toString()) > 0 : value);
    }, [ labels, value, setToggled ]);

    const valueText = (labels ? value : [ "Disabled", "Enabled" ][Number(value)]);

    console.log("valueText", valueText, value, toggled);

    const doChange = () => {
        if (changeFunc) {
            if (labels) {
                const index = Math.max(labels.indexOf(value.toString()), 0);

                changeFunc(labels[index ^ 1]); // Toggle between index 0 and 1
            } else {
                changeFunc(!value);
            }
        }
    }

    return <div className="toggleContainer" onClick={doChange}>
        <label>{valueText}</label>
        <div className={`toggle ${toggled ? "toggleActive" : "toggleInactive"}`} style={applyTheme(style, theme, (toggled) ? "toggleActive" : "toggleInactive")}>
            <div ref={pinRef} className="togglePin" style={applyTheme(null, theme, "togglePin")} />
        </div>
    </div>
}

export default ThemeToggle;