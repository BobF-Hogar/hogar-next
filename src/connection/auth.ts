import apiRoutes from "./common/api_routes";
import { POST } from "./common/http";

export interface HogarUser {
    email?: string,
    phonenumber?: string,
    password?: string,
    token?: string,
}

export function login(user: HogarUser) {
    // return POST(
    //     apiRoutes.LOGIN,
    //     user,
    //     undefined,
    //     undefined,
    //     undefined,
    //     undefined,
    //     undefined,
    //     true
    // );
    const newUser = { ...user };
    delete newUser.password;
    newUser.token = "blahblahblah";
    return new Promise((res) => {
        res({newUser });
    });
}