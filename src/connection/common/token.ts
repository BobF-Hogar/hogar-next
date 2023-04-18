import { isCallApiServer, waitForRefreshToken, setRefreshToken } from ".";
import apiRoutes from "./api_routes";
import { HogarResponse } from ".";

import store from "../../redux/store";
import { authActions, authSelectors} from "../../redux/auth";
import { login } from "../auth";

let currentTokenLocal: string;
let currentTokenServer: string;
let currentTimeExpired: number;
let timeoutRefreshToken: ReturnType<typeof setTimeout>;

export function getToken(url: string, callToServer: boolean) {
    if (!!callToServer || !!!url || apiRoutes[url].callToServer || isCallApiServer) {
        if (!this._currentTokenServer) {
          const token = authSelectors.token(store.getState());
          currentTokenServer = token;
        }
  
        return currentTokenServer;
      }
      return currentTokenLocal;
}

export function processTokenExpired(token: string) {
    return new Promise((resolve, reject) => {
        if (token !== currentTokenServer) {
          resolve(token);
        } else {
          const currentTime = Math.floor(Date.now() / 1000);
          // token expired
          if (currentTimeExpired && currentTimeExpired <= currentTime) {
            // console.log('TOKEN_EXPIRED::::', currentTime, this._currentTimeExpired, this._waitForRefreshToken);
            if (waitForRefreshToken) {
              if (timeoutRefreshToken) {
                clearTimeout(timeoutRefreshToken);
                timeoutRefreshToken = null;
              }
  
              timeoutRefreshToken = setTimeout(() => {
                resolve(currentTokenServer);
  
                if (timeoutRefreshToken) {
                  clearTimeout(timeoutRefreshToken);
                  timeoutRefreshToken = null;
                }
              }, 1000);
  
              return;
            }
  
            const currentUser = authSelectors.user(store.getState());
  
            if (currentUser.password && (currentUser.email || currentUser.phonenumber)) {
              const data = {
                email: currentUser.email,
                phonenumber: currentUser.phonenumber,
                password: currentUser.password
              };
  
              setRefreshToken(true);
              // TODO!
              login(data).then(res => {
                setRefreshToken(false);
                if (res.success && res.statusCode === 200) {
                  currentTokenServer = res.data.access_token;
  
                  store.dispatch(authActions.refreshToken(res.data.access_token));
                  resolve(currentTokenServer);
                } else {
                  resolve(token);
                }
              })
                .catch(e => {
                  resolve(token);
                });
            } else {
              resolve(token);
            }
          } else {
            resolve(token);
          }
        }
      });
}