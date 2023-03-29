import React from "react";
import { useSelector } from "react-redux";
import applyTheme from "../../../util/theme";

import { themeSelectors } from "../../../redux/theme";

import "./DeviceButton.css";

function DeviceButton(props) {
    const { active } = props; 
    const theme = useSelector(themeSelectors.theme);
    return <div className={`device-button ${active ? "active" : ""}`} style={applyTheme({}, theme, (active ? "interactableActive" : "interactable"))}>
        <div className="device-button-status-row">
            <div>Icon</div>
            <div>Status</div>
        </div>
        <div>Device</div>
        <div>Room</div>
    </div>;
}

export default DeviceButton;