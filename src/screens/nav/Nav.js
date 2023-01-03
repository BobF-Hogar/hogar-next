import React from "react";
import { Outlet } from "react-router-dom";
import localize from "../../localization";

import ThemePanel from "../../ui/ThemePanel";
import NavButton from "./components/NavButton";

import { screens } from "..";

import "./Nav.css";

function Nav(props) {
    return <main id="navScreen">
        <nav>
            <ThemePanel id="nav-bar">
                <div className="logo-small" />
                <ul>
                    {screens.map((screen) => {
                        return <NavButton
                            key={screen.name}
                            name={localize(screen.name)}
                            icon={screen.icon}
                            path={screen.path}
                        />
                    })}
                </ul>
            </ThemePanel>
        </nav>
        <Outlet {...props} />
    </main>
}

export default Nav;