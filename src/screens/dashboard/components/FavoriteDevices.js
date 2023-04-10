import React from "react";

import ThemePanel from "../../../ui/themed/ThemePanel";
import DeviceButton from "./DeviceButton";

function FavoriteDevices() {
    return <>
        <div className="panel-header">
            <h2>Favorite Devices</h2>
            <div>E</div>
            <div>A</div>
        </div>
        <ThemePanel id="device-favorites">
            <DeviceButton active={true} />
            <DeviceButton active={true} />
            <DeviceButton />
            <DeviceButton active={true} />
            <DeviceButton active={true} />
            <DeviceButton active={true} />
            <DeviceButton />
        </ThemePanel>
    </>;
}

export default FavoriteDevices;
