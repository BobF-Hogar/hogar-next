export function detectEnvironment() {
    const environmentOverride = sessionStorage.getItem("environmentOverride");

    if (environmentOverride) {
        return environmentOverride;
    } else if (window.location.hostname === "localhost") {
        return "development";
    } else if (window.location.hostname.indexOf("github.io") > -1) {
        return "staging";
    } else {
        return "production";
    }
}

// TODO - return "android", "ios", or "web"
export function detectPlatform() {
    return "web";
}