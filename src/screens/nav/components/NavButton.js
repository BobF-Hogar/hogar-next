import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme";
import applyTheme from "../../../util/theme";

import { Link } from "react-router-dom";

import "./NavButton.css";

function NavButton(props) {
    const { name, icon, path } = props;

    const theme = useSelector(selectTheme);

    return <li
        className="nav-button"
    >
        <Link to={path}
            style={applyTheme({}, theme, (window.location.pathname.endsWith(path) || ((path === "/") && (window.location.pathname.lastIndexOf(path) <= 0))) ? "navButtonSelected" : "navButton")}
        >
            <span>{name}</span>
        </Link>
    </li>
}

export default NavButton;