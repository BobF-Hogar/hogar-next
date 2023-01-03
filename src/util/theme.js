const themePresets = {
    dark: {
        button: {
            backgroundColor: "rgba(128, 128, 128, 0.4)",
            color: "white",
        },
        input: {
            backgroundColor: "rgba(128, 128, 128, 0.2)",
            color: "white",
        },
        panel: {
            backgroundColor: "#202020",
            color: "white",
        },
    }
};

export default function applyTheme(style, theme, type) {
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