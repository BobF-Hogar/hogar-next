import React, { useEffect } from "react";
import localize from "../../localization";

import LoginForm from "./components/LoginForm";
import ThemeButton from "../../ui/ThemeButton";

import "./Login.css";

function Login() {
    useEffect(() => {
        document.title = localize("APP_PAGE_LOGIN");
    }, []);

    return <div id="loginScreen">
        <div id="hero">
            <h1>{localize("HERO_HEADER")}</h1>
            <p>{localize("HERO_TEXT")}</p>
        </div>
        <div id="loginActions">
            <div />
            <LoginForm />
            <ThemeButton>{localize("LABEL_SAVE_APP")}</ThemeButton>
        </div>
    </div>;
}

export default Login;