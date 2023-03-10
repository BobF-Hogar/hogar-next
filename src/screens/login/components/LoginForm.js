import React, { useState } from "react";
import { useDispatch } from "react-redux";
import localize from "../../../localization";

import { loginAction } from "../../../redux/auth";
import { getWeather } from "../../../redux/weather"; // TODO - Test code

import ThemePanel from "../../../ui/ThemePanel";
import ThemeInput from "../../../ui/ThemeInput";
import ThemeCheckbox from "../../../ui/ThemeCheckbox";
import ThemeButton from "../../../ui/ThemeButton";

import "./LoginForm.css";

function LoginForm() {
    const [ formData, setFormData ] = useState({});
    const [ loginMode, setLoginMode ] = useState((window.screen.width < 440) ? "phonenumber" : "email");

    const dispatch = useDispatch();

    const disableLogin = ((!formData.email) && (!formData.phonenumber)) || !formData.password;

    const toggleLoginMode = () => {
        const newFormData = { ...formData };

        delete newFormData[loginMode];

        setLoginMode((loginMode === "phonenumber") ? "email" : "phonenumber");
        setFormData(newFormData);
    }

    const changeFormItem = (e) => {
        const newFormData = { ...formData };

        newFormData[e.target.dataset.key] = e.target.value;

        setFormData(newFormData);
    }

    const toggleRememberLogin = () => {
        const remember = sessionStorage.getItem("rememberLogin");

        if (remember) {
            sessionStorage.removeItem("rememberLogin");
        } else {
            sessionStorage.setItem("rememberLogin", !remember);
        }
    }

    const doLogin = () => {
        dispatch(loginAction(formData));
        dispatch(getWeather(true));
    }

    return <ThemePanel id="login-form">
        <div className="checkbox-row">
            <ThemeCheckbox defaultValue={loginMode === "email"} onChange={toggleLoginMode} />
            {localize("LABEL_LOGIN_EMAIL")}
        </div>
        {(loginMode === "email") && <div className="form-row">
            <label>{localize("LABEL_EMAIL")}</label>
            <ThemeInput type="email" defaultValue={formData.email} onChange={changeFormItem} data-key="email" />
        </div>}
        {(loginMode === "phonenumber") && <div className="form-row">
            <label>{localize("LABEL_PHONE_NO")}</label>
            <ThemeInput type="phone" defaultValue={formData.phonenumber} onChange={changeFormItem} data-key="phonenumber" />
        </div>}
        <div className="form-row">
            <label>{localize("LABEL_PASSWORD")}</label>
            <ThemeInput type="password" defaultValue={formData.password} onChange={changeFormItem} data-key="password" />
        </div>
        <div className="checkbox-row">
            <ThemeCheckbox onChange={toggleRememberLogin} defaultValue={sessionStorage.getItem("rememberLogin")} />
            {localize("LABEL_REMEMBER_ME")}
        </div>
        <ThemeButton id="login-button" onClick={doLogin} disabled={disableLogin}>{localize("LABEL_LOGIN")}</ThemeButton>
    </ThemePanel>
}

export default LoginForm;