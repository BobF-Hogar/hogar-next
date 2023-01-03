import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import localize from "../../localization";

import LoginForm from "./components/LoginForm";
import ThemeButton from "../../ui/ThemeButton";

import "./Login.css";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = localize("APP_PAGE_LOGIN");

        if (window.location.pathname !== "/") {
            navigate("/");
        }
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
            <ThemeButton>{localize("LABEL_SAVE_APP")}</ThemeButton>
        </div>
    </main>;
}

export default Login;