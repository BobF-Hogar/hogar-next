const themePresets = {
    dark: {
        button: {
            backgroundColor: "rgba(128, 128, 128, 0.4)",
            color: "white",
        },
        buttonDisabled: {
            backgroundColor: "rgba(128, 128, 128, 0.0625)",
            color: "#606060"
        },
        input: {
            backgroundColor: "rgba(128, 128, 128, 0.2)",
            color: "white",
        },
        interactable: {
            backgroundColor: "#101010",
            color: "white",
        },
        interactableActive: {
            backgroundColor: "white",
            color: "black",
        },
        navButton: {
            backgroundColor: "black",
            color: "white",
        },
        navButtonSelected: {
            color: "white",
            fontWeight: "bold",
            pointerEvents: "none",
        },
        panel: {
            backgroundColor: "#202020",
            color: "white",
        },
        topLevelText: {
            color: "white",
        }
    }
};

export default function applyTheme(style, theme, type, overrides) {
    if ((!theme) || (!type)) {
        return style;
    }

    const result = style || {};
    const themeData = (typeof theme === "string") ? themePresets[theme] : theme;

    if ((themeData) && (themeData[type])) {
        Object.entries(themeData[type]).forEach(([key, value]) => {
            result[key] = value;
        });
    }

    return result;
}