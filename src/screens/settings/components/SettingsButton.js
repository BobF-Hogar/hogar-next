import React from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../../redux/theme";
import applyTheme from "../../../util/theme";

import ThemeToggle from "../../../ui/themed/ThemeToggle";

import "./SettingsButton.css";

function SettingsButton({ label, toggleLabels, value, expandFunc, changeFunc }) {
    const theme = useSelector(themeSelectors.theme);

    const toggle = ((toggleLabels) || (typeof value === "boolean"));

    console.log(toggle);

    const clickArea = () => {
        if (expandFunc) {
            expandFunc();
        }
    }

    return <div className={`button settingsButton ${toggle ? "" : "expandable"}`} style={applyTheme({}, theme, "insetButton")} onClick={clickArea}>
        {label}
        {toggle ? 
        <ThemeToggle value={value} labels={toggleLabels} changeFunc={changeFunc} /> :
        <div>{`${value ? value + " " : ""}>`}</div>}
    </div>
}

export default SettingsButton;