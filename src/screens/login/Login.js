import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import localize from "../../localization";
import { detectEnvironment, setEnvironmentOverride } from "../../util";

import modalList from "../modals";
import { setModal } from "../../redux/modal";

import LoginForm from "./components/LoginForm";
import ThemeButton from "../../ui/ThemeButton";

import "./Login.css";

function Login() {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = localize("APP_PAGE_LOGIN");
        window.getEnvironment = detectEnvironment;
        window.setEnvironment = setEnvironmentOverride;

        return () => {
            window.setEnvironment = undefined;
        }
    }, []);

    const showInstallModal = () => {
        dispatch(setModal(modalList.MODAL_SAVE_PWA.create()));
    }

    return <main id="loginScreen">
        <div id="hero">
            <h1>{localize("HERO_HEADER")}</h1>
            <div className="mainLogo" />
            <p>{localize("HERO_TEXT")}</p>
        </div>
        <div id="loginActions">
            <div />
            <LoginForm />
            <ThemeButton onClick={showInstallModal}>{localize("LABEL_SAVE_APP")}</ThemeButton>
        </div>
    </main>;
}

export default Login;