import React, { useEffect } from "react";
import localize from "../../localization";

import ThemePanel from "../../ui/ThemePanel";

function Dashboard() {
    useEffect(() => {
        document.title = localize("APP_TITLE");
    }, []);

    return <ThemePanel>Dashboard</ThemePanel>;
}

export default Dashboard;