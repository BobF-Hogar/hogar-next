import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import localize from "../../localization";
import applyTheme from "../../util/theme";

import { themeSelectors } from "../../redux/theme";

// import ThemePanel from "../../ui/themed/ThemePanel";
import StatusBar from "./components/StatusBar";
import FavoriteScenes from "./components/FavoriteScenes";
import FavoriteDevices from "./components/FavoriteDevices";

import "./Dashboard.css";

function Dashboard() {
    const theme = useSelector(themeSelectors.theme);

    useEffect(() => {
        document.title = localize("APP_TITLE");
    }, []);

    return <section id="dashboard" style={applyTheme({}, theme, "topLevelText")}>
        <StatusBar />
        <div id="dashboard-container">
            <div id="scene-container">
                <FavoriteScenes />
            </div>
            <div id="device-container">
                <FavoriteDevices />
            </div>
        </div>
    </section>;
}

export default Dashboard;