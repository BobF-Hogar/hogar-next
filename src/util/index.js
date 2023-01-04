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

export function setEnvironmentOverride(newEnvironment) {
    newEnvironment = newEnvironment?.toLowerCase();

    switch (newEnvironment) {
        case "development":
        case "staging":
        case "production":
            sessionStorage.setItem("environmentOverride", newEnvironment);
            break;
        default:
            sessionStorage.removeItem("environmentOverride");
            break;
    }

    console.log(`Current environment is ${detectEnvironment()}.`);
}

// TODO - return "android", "ios", or "web"
export function detectPlatform() {
    return "web";
}