import { redirect } from "react-router-dom";

export async function checkLogin() {
    // TODO - This is just a placeholder, need to check login for real!
    return new Promise(res => {
        setTimeout(() => {
            res(redirect("./login"));
        }, 1000);
    })
}