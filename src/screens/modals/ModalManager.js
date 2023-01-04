import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, clearModal } from "../../redux/modal";

import modalList from ".";

import "./ModalManager.css";

function isChild(checkNode, matchNode) {
    let curNode = checkNode.parentNode;

    while (curNode) {
        if (curNode === matchNode) {
            return true;
        }

        curNode = curNode.parentNode;
    }

    return false;
}

function ModalManager() {
    const backgroundRef = useRef(null);
    const modalInfo = useSelector(selectModal);
    const dispatch = useDispatch();

    const ModalComponent = modalList[modalInfo.type]?.component;

    const shouldClearModal = (e) => {
        if ((!isChild(e.target, backgroundRef.current)) && (!ModalComponent.noCancel)) {
            dispatch(clearModal());
        }
    }
    
    if (ModalComponent) {
        return <div id="modal-background" ref={backgroundRef} onClick={shouldClearModal}>
            <ModalComponent />
        </div>
    } else {
        return null;
    }
}

export default ModalManager;