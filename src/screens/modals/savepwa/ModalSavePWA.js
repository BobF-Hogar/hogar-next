import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../redux/modal";

import ThemeButton from "../../../ui/ThemeButton";
import ThemePanel from "../../../ui/ThemePanel";

import "./ModalSavePWA.css";

function ModalSavePWA() {
    const dispatch = useDispatch();

    const killMe = () => {
        dispatch(modalActions.clear());
    }

    return <ThemePanel id="modal-save-pwa">
        <h2>Saving the Hogar App</h2>
        <h3>
            Work in Progress
        </h3>
        <p>
            This popup will detect the user's browser/OS and give the relevant PWA install instructions.
        </p>
        <div>
            <ThemeButton onClick={killMe}>Ok</ThemeButton>
        </div>
    </ThemePanel>
}

export default ModalSavePWA;