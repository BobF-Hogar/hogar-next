import React from "react";
import ModalGeneric from "./generic/ModalGeneric";
import ModalSavePWA from "./savepwa/ModalSavePWA";

export interface ModalData {
    title?: string,
    text?: string | string[],
    buttonLabel?: string,
    action?: any, // TODO - Redux action
}

interface ModalPayload {
    type: string,
    data?: ModalData,
}

class ModalType {
    key: string
    component: React.FC

    constructor(key, component) {
        this.key = key;
        this.component = component;
    }

    create(data?: ModalData) {
        const result: ModalPayload = { type: this.key };

        if (data) {
            result.data = data;
        }

        return result;
    }

    toString() {
        return this.key;
    }
}

const modalList = {
    MODAL_GENERIC: new ModalType("MODAL_GENERIC", ModalGeneric),
    MODAL_SAVE_PWA: new ModalType("MODAL_SAVE_PWA", ModalSavePWA),
};

export default modalList;