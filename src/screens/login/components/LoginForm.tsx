import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import localize from "../../../localization";

import { HogarUser } from "../../../connection/auth";

import { authActions } from "../../../redux/auth";
import { weatherActions } from "../../../redux/weather"; // TODO - Test code

import ThemePanel from "../../../ui/themed/ThemePanel";
import ThemeInput from "../../../ui/themed/ThemeInput";
import ThemeCheckbox from "../../../ui/themed/ThemeCheckbox";
import ThemeButton from "../../../ui/themed/ThemeButton";

import "./LoginForm.css";

function validLoginData(formData: HogarUser): boolean {
    if (formData.email) {
        if (!formData.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return false;
        }
    } else if (formData.phonenumber) {
        if (!formData.phonenumber.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
            return false;
        }
    } else { return false; }
    
    if (formData.password) {
        // TODO - Validate length?
    } else { return false; }

    return true;
}

const LoginForm: React.FC = () => {
    const [ formData, setFormData ] = useState<HogarUser>({});
    const [ loginMode, setLoginMode ] = useState<string>((window.screen.width < 440) ? "phonenumber" : "email");

    const dispatch = useDispatch();

    const disableLogin = !validLoginData(formData);

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
            sessionStorage.setItem("rememberLogin", (!remember).toString());
        }
    }

    const doLogin = () => {
        dispatch(authActions.loginAction(formData));
        dispatch(weatherActions.getWeather(true));
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