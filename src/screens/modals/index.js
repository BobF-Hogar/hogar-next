import ModalSavePWA from "./savepwa/ModalSavePWA";

class ModalType {
    constructor(key, component) {
        this.key = key;
        this.component = component;
    }

    create(data) {
        const result = { type: this.key };

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
    MODAL_SAVE_PWA: new ModalType("MODAL_SAVE_PWA", ModalSavePWA),
};

export default modalList;