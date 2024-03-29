import React, { useState } from "react";
import localize from "../../../localization";

import SettingsButton from "./SettingsButton";

import "./SettingsList.css";

const AccountSettingsList: React.FC = () => {
    const [vibrate, setVibrate] = useState<boolean>(true);
    const [notifications, setNotifications] = useState<boolean>(true);
    const [voiceService, setVoiceService] = useState<boolean>(true);
    const [connectionType, setConnectionType] = useState<string>("Cloud");
    const [statusBar, setStatusBar] = useState<string>("Show");

    return <div className="settingList">
        <div className="settingGroup">
            <SettingsButton label={localize("SETTING_LABEL_ACCOUNT_INFO")} />
            <SettingsButton label={localize("SETTING_LABEL_CHANGE_PASSWORD")} />
            <SettingsButton label={localize("SETTING_LABEL_SHARE")} />
        </div>
        <div className="settingGroup">
            <SettingsButton label={localize("SETTING_LABEL_THEMES")} value="Dark theme" />
            <SettingsButton label={localize("SETTING_LABEL_DISPLAY")} />
        </div>
        <div className="settingGroup">
            <SettingsButton label={localize("SETTING_LABEL_VIBRATE")} value={vibrate} changeFunc={setVibrate} />
            <SettingsButton label={localize("SETTING_LABEL_NOTIFICATIONS")} value={notifications} changeFunc={setNotifications} />
            <SettingsButton label={localize("SETTING_LABEL_VOICE_SERVICE")} value={voiceService} changeFunc={setVoiceService} />
            <SettingsButton
                label={localize("SETTING_LABEL_CONNECTION_TYPE")}
                toggleLabels={[ "Auto", "Cloud" ]}
                value={connectionType}
                changeFunc={setConnectionType}
            />
            <SettingsButton
                label={localize("SETTING_LABEL_STATUS_BAR")}
                toggleLabels={[ "Hide", "Show" ]}
                value={statusBar}
                changeFunc={setStatusBar}
            />
        </div>
    </div>
}

export default AccountSettingsList;