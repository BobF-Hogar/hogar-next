import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

import ThemePanel from "../../ui/ThemePanel";
import ThemeButton from "../../ui/ThemeButton";

import "./Error.css";

function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    const leaveErrorScreen = () => {
        navigate("/");
    }

    return <section id="error-container">
        <ThemePanel>
            <h1>An error has occurred</h1>
            <p>{error.message || error}</p>
            {error.fileName && <p>{`${error.fileName}:${error.lineNumber}:${error.columnNumber}`}</p>}
            {error.stack && <pre>{error.stack}</pre>}
            <ThemeButton onClick={leaveErrorScreen}>Ok</ThemeButton>
        </ThemePanel>
    </section>
}

export default Error;