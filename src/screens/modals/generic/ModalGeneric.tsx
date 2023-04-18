import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, modalSelectors } from "../../../redux/modal";
import { ModalData } from "..";

import ThemeButton from "../../../ui/themed/ThemeButton";
import ThemePanel from "../../../ui/themed/ThemePanel";

function generateTextMarkup(text: string, index: number = null): React.ReactElement {
    const split = text.split(":");

    switch(split[0]) {
        case "HEADER":
            return <h3 key={index}>{split.slice(1).join(":")}</h3>;
        default:
            return <p key={index}>{text}</p>;
    }
}

const ModalGeneric: React.FC = () => {
    const modalData: ModalData = useSelector(modalSelectors.data);
    const dispatch = useDispatch();

    const doAction = () => {
        if (modalData.action) {
            dispatch(modalData.action);

            // Clear the modal if we're not chaining into a different one.
            if (!modalData.action.type.startsWith("modal")) {
                dispatch(modalActions.clear());
            }
        } else {
            dispatch(modalActions.clear());
        }
    }

    const cancelAction = () => {
        dispatch(modalActions.clear());
    }

    return <ThemePanel>
        <h2>{modalData.title}</h2>
        { (typeof(modalData.text) === "string" ? [modalData.text] : modalData.text).map((item, index) => generateTextMarkup(item, index))}
        <div>
            <ThemeButton onClick={doAction}>{modalData.buttonLabel || "Ok"}</ThemeButton>
            {modalData.action && <ThemeButton onClick={cancelAction}>Cancel</ThemeButton>}
        </div>
    </ThemePanel>;
}

export default ModalGeneric;