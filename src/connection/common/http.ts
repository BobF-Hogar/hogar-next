import apiRoutes from "./api_routes";
import { getApiUrlInfo } from "./api_info";
import { sendPost } from "./api";
import { processTokenExpired } from "./token";
import { HogarResponse } from ".";

const prefReqid = "Hogar Next";

let countReq = 0;

export function generateReqId(tag) {
    const deviceName = window.navigator.platform;

    return `${!!tag ? tag : ""}${prefReqid}-${deviceName}-${(new Date()).getTime()}-${countReq++}`;
}

function buildUrl(url, callToServer) {
    if ((!!callToServer) || (url.callToServer)) {
        return `${getApiUrlInfo().apiUrl}${url}`;
    } else {
        return `${getApiUrlInfo().apiUrl}${url}`; // TODO - BaseUrlApi
    }
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
    if (url.callToThing) {
        // TODO!
    }

    return new Promise((resolve, reject) => {
        const sendUrl = !dontNeedBase ? buildUrl(url, callToServer) : url.toString();

        sendPost(
            sendUrl,
            data,
            token,
            apiKey,
            "en-us", // TODO?
            timeout
        ).then((response: Response & HogarResponse) => {
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
    url: string,
    data: object,
    token: string,
    apiKey: string,
    dontNeedBase: boolean = false,
    timeout: number,
    dontListenSocket: boolean,
    showNotifications: boolean,
    callToServer: boolean
) {
    console.log("POST", url);
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