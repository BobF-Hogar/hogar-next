import apiRoutes from "./common/api_routes";
import { POST } from "./common/http";

export function login(user) {
    // return POST(
    //     apiRoutes.LOGIN.url,
    //     user,
    //     undefined,
    //     undefined,
    //     undefined,
    //     undefined,
    //     undefined,
    //     true
    // );

    const newUserData = { ...user, token: "blahblahblah" };
    return newUserData;
}