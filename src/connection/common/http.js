import apiRoutes from "./api_routes";
import { getApiUrlInfo } from "./api_info";
import { sendPost } from "./api";

const prefReqid = "Hogar Next";

let countReq = 0;

export function generateReqId(tag) {
    const deviceName = "TODO";

    return `${!!tag ? tag : ''}${prefReqid}-${deviceName}-${(new Date()).getTime()}-${countReq++}`;
}

function buildUrl(url, callToServer) {
    if ((!!callToServer) || (apiRoutes[url].callToServer)) {
        return `${getApiUrlInfo().apiUrl}${url}`;
    } else {
        return `${getApiUrlInfo().apiUrl}${url}`; // TODO - BaseUrlApi
    }
}

// TODO - Actually check token
function processTokenExpired(token) {
    return new Promise((res) => {
        res(token);
    });
}

// Methods split out from connection/index.js in RN version
function doPost(
    url,
    data,
    token,
    apiKey,
    dontNeedBase = false,
    timeout,
    dontListenSocket,
    showNotifications,
    callToServer) {
    if (apiRoutes[url].callToThing) {
        // TODO!
    }

    return new Promise((resolve, reject) => {
        sendPost(
            !dontNeedBase ? buildUrl(url, callToServer) : url,
            data,
            token,
            apiKey,
            "en-us", // TODO!
            timeout
        ).then((response) => {
            // TODO - Add valid token/user statuses
            switch (response.statusCode) {
                default:
                    resolve(response);
                    break;
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

export function POST(
    url,
    data,
    token,
    apiKey,
    dontNeedBase = false,
    timeout,
    dontListenSocket,
    showNotifications,
    callToServer
) {
    return new Promise((resolve) => {
        processTokenExpired(token).then((tokenRefresh) => {
            doPost(
                url,
                data,
                tokenRefresh,
                apiKey,
                dontNeedBase,
                timeout,
                dontListenSocket,
                showNotifications,
                callToServer
            ).then(resolve)
            .catch(() => resolve({ success: false, statusCode: 597 }));
        })
        .catch(() => {
            // TODO - dispatch for login
            resolve({ success: false, statusCode: 597 });
        });
    });
}