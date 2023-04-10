import React from "react";
import localize from "../../../localization";

import SettingsButton from "./SettingsButton";

import "./SettingsList.css";

function GeneralSettingsList() {
    return <div className="settingList">
        <div className="settingGroup">
            <SettingsButton label={localize("SETTING_LABEL_SELECT_HOME")} />
            <SettingsButton label={localize("SETTING_LABEL_INFO_HC")} />
            <SettingsButton label={localize("SETTING_LABEL_OTA")} />
            <SettingsButton label={localize("SETTING_LABEL_SYNC_DATA")} />
        </div>
        <div className="settingGroup">
            <SettingsButton label={localize("SETTING_LABEL_CONFIG_ROOM_FLOOR")} />
            <SettingsButton label={localize("SETTING_LABEL_SETUP_DEVICES")} />
            <SettingsButton label={localize("SETTING_LABEL_GROUP_DEVICES")} />
        </div>
        <div className="settingGroup">
            <SettingsButton label={localize("SETTING_LABEL_SECURITY")} />
            <SettingsButton label={localize("SETTING_LABEL_CAMERA")} />
            <SettingsButton label={localize("SETTING_LABEL_SCHEDULE")} />
            <SettingsButton label={localize("SETTING_LABEL_RULE")} />
            <SettingsButton label={localize("SETTING_LABEL_SECURITY_DEVICES")} />
        </div>
    </div>
}

export default GeneralSettingsList;