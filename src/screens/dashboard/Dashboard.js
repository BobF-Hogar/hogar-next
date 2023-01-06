import React, { useEffect } from "react";
import localize from "../../localization";

import ThemePanel from "../../ui/ThemePanel";
import StatusBar from "./components/StatusBar";

import "./Dashboard.css";

function Dashboard() {
    useEffect(() => {
        document.title = localize("APP_TITLE");
    }, []);

    return <section id="dashboard">
        <StatusBar />
        <ThemePanel>Dashboard</ThemePanel>
        </section>;
}

export default Dashboard;