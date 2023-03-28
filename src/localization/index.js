import en_us from "./dictionary/en-us";

const dictionaries = {
    "en-us": en_us,
};

function localizeRecursive(input) {
    if (!input) {
        return input;
    }

    const doReplace = (_, p1) => {
        return localize(p1);
    }

    return input.replace(/{{(.+?)}}/g, doReplace);
}

export default function localize(key) {
    let language = window.navigator.language.toLowerCase(); // TODO - Pull from redux/localStorage!

    // Default to english
    if ((!dictionaries[language]) || (!dictionaries[language][key])) {
        language = "en-us";
    }

    return localizeRecursive(dictionaries[language][key]) || key;
}