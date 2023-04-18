export let isCallApiServer = false;
export let waitForRefreshToken = false;

export interface HogarResponse {
    _isTimeout: boolean,
    statusCode: number,
    message: string,
}


export function setRefreshToken(value: boolean) {
    waitForRefreshToken = value;
}