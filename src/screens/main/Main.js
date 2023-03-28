import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelectors } from "../../redux/auth";

import Login from "../login/Login";
import Nav from "../nav/Nav";
import ModalManager from "../modals/ModalManager";

// Wrapper component for top level logic.
function Main() {
    const user = useSelector(authSelectors.user);
    const navigate = useNavigate(); // Bizarrely, NavButton route detection fails if this is removed???

    useEffect(() => {
        // TODO - Attempt auto-login if localStorage has userData!
    }, []);

    return <>
        {(user) ? <Nav /> : <Login />}
        <ModalManager />
    </>
}

export default Main;