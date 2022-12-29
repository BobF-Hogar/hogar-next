const themePresets = {
    dark: {
        button: {
            backgroundColor: "#404040",
            color: "white",
        },
        input: {
            backgroundColor: "#303030",
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