import React, { useEffect } from "react";
import localize from "../../localization";

import LoginForm from "./components/LoginForm";
import ThemeButton from "../../ui/ThemeButton";

import "./Login.css";

function Login() {
    useEffect(() => {
        document.title = localize("APP_PAGE_LOGIN");
    }, []);

    return <main id="loginScreen">
        <div id="hero">
            <h1>{localize("HERO_HEADER")}</h1>
            <div className="mainLogo" />
            <p>{localize("HERO_TEXT")}</p>
        </div>
        <div id="loginActions">
            <div />
            <LoginForm />
            <ThemeButton onClick={() => { window.alert("This will show a popup with insructions for saving the PWA based on the user's browser/OS.")}}>{localize("LABEL_SAVE_APP")}</ThemeButton>
        </div>
    </main>;
}

export default Login;