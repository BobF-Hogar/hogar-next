import React from "react";

import Weather from "./Weather";

import "./StatusBar.css";

const StatusBar: React.FC = () => {
    return <header id="status">
        <Weather />
        <div id="status-home">
            <div style={{color: "#25e54e"}}>●</div>
            <div>HOME STATUS</div>
        </div>
        <div id="status-buttons">
            <div>S</div>
            <div>E</div>
            <div>N</div>
        </div>
    </header>;
}

export default StatusBar;