export const TIMEOUT = 30000;

// TODO - RN version uses blob for GET & POST?

function sendRequest(method, url, data, token, apiKey, timeout, trusty = true) {
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Lumi-Language": "en-US",
        "X-Lumi-Api-Key" : apiKey,
        Authorization: `Bearer ${token}`,
        token
    };

    if (!token || token === "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbHVjaS52bm4iLCJhdWQiOiJodHRwOi8vbHVjaS52bmMiLCJleHAiOjk1NDI2MTUyNTgsImp0aSI6ODIsInVzZXJfaW5mbyI6eyJpZCI6ImRlbW9fdXNlcmlkIiwibmFtZSI6IkRlbW8gVXNlciJ9LCJob21lX2xpc3QiOlt7ImlkIjoiZGVtb19ob21laWQiLCJuYW1lIjoiRGVtbyBIb21lIn1dLCJuZXdfa2V5IjoxMjMxMjN9.QWp4k9p1l72v38Z33rlwIWE6voME8nc5fPbDG41tTgRst89IB-y_f1QLiPJlFtXO") {
        delete headers.Authorization;
        delete headers.token;
    }

    // TODO - What does trusty do?
    // const req = fetch(url, {
    //     method,
    //     headers,
    //     body: JSON.stringify(data)
    // });
    // TODO - Dummy test call!
    const req = new Promise((res) => {
        setTimeout(res, 1000, { ok: false });
    });

    return new Promise((res) => {
        Promise.race(req,
            new Promise((resTimeout) => {
                setTimeout(resTimeout, timeout || TIMEOUT, { _isTimeOut: true, statusCode: 597 })
            }) 
        ).then((response) => {
            if (response.ok) {
                response.json(res);
            } else {
                res({
                    success: false,
                    message: response.message || "TODO",
                    statusCode: response.statusCode
                });
            }
        })
    });
}

export function sendGet(url, data, token, apiKey, timeout, trusty = true) {
    return sendRequest("GET", url, data, token, apiKey, timeout, trusty);
}

export function sendPost(url, data, token, apiKey, timeout, trusty = true) {
    return sendRequest("POST", url, data, token, apiKey, timeout, trusty);
}

export function sendPut(url, data, token, apiKey, timeout, trusty = true) {
    return sendRequest("PUT", url, data, token, apiKey, timeout, trusty);
}