import React from "react";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../../redux/theme";
import applyTheme from "../../../util/theme";

import { Link } from "react-router-dom";

import "./NavButton.css";

function matchPath(path) {
    if (window.location.pathname.endsWith(path)) {
        return true;
    } else if (path === "/") {
        return ((window.location.hostname.indexOf("github.io") > -1) && (window.location.pathname.lastIndexOf(path) <= 0));
    } else {
        return false;
    }
}

function NavButton(props) {
    const { name, icon, path } = props;

    const theme = useSelector(themeSelectors.theme);

    return <li
        className="nav-button"
    >
        <Link to={path}
            style={applyTheme({}, theme, matchPath(path) ? "navButtonSelected" : "navButton")}
        >
            <span>{name}</span>
        </Link>
    </li>
}

export default NavButton;