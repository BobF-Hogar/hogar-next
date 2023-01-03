import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUser } from "../../redux/auth";

import Login from "../login/Login";
import Nav from "../nav/Nav";

function Main() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO - Attempt auto-login if localStorage has userData!

        if (window.location.pathname !== "/") {
            navigate("/");
        }
    }, []);

    if (user) {
        return <Nav />
    } else {
        return <Login />
    }
}

export default Main;