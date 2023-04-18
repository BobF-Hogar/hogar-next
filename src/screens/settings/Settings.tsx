import React from "react";
import localize from "../../localization";

import ThemePanel from "../../ui/themed/ThemePanel";
import TabView from "../../ui/TabView";
import GeneralSettingsList from "./components/GeneralSettingsList";
import AccountSettingsList from "./components/AccountSettingsList";

import "./Settings.css";

const Settings: React.FC = () => {
    return <ThemePanel id="settings">
        <header>
            <h3>Account Name</h3>
            <p>email@account.com</p>
        </header>
        <TabView tabNames={[localize("SETTING_HEADER_GENERAL"), localize("SETTING_HEADER_ACCOUNT")]}>
            <GeneralSettingsList />
            <AccountSettingsList />
        </TabView>
    </ThemePanel>;
}

export default Settings;