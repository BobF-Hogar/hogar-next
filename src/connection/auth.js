import apiRoutes from "./common/api_routes";
import { POST } from "./common/http";

export function login(user) {
    return POST(
        apiRoutes.LOGIN,
        user,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        true
    );
}