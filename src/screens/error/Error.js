import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import localize from "../../localization";

import ThemePanel from "../../ui/themed/ThemePanel";
import ThemeButton from "../../ui/themed/ThemeButton";

import "./Error.css";

function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    const leaveErrorScreen = () => {
        navigate("/");
    }

    return <section id="error-container">
        <ThemePanel>
            <h1>{localize("LABEL_ERROR")}</h1>
            <p>{error.message || error}</p>
            {error.fileName && <p>{`${error.fileName}:${error.lineNumber}:${error.columnNumber}`}</p>}
            {error.stack && <pre>{error.stack}</pre>}
            <ThemeButton onClick={leaveErrorScreen}>Ok</ThemeButton>
        </ThemePanel>
    </section>
}

export default Error;