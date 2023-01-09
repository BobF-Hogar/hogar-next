import { isCallApiServer, waitForRefreshToken } from ".";
import apiRoutes from "./api_routes";

import store from "../../redux/store";
import { selectToken, selectUser, refreshToken } from "../../redux/auth";
import { login } from "../auth";

let currentTokenLocal;
let currentTokenServer;
let currentTimeExpired;
let timeoutRefreshToken;

export function getToken(url, callToServer) {
    if (!!callToServer || !!!url || apiRoutes[url].callToServer || isCallApiServer) {
        if (!this._currentTokenServer) {
          const token = selectToken(store.getState());
          currentTokenServer = token;
        }
  
        return currentTokenServer;
      }
      return currentTokenLocal;
}

export function processTokenExpired(token) {
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
  
            const currentUser = selectUser(store.getState());
  
            if (currentUser.password && (currentUser.email || currentUser.phonenumber)) {
              const data = {
                email: currentUser.email,
                phonenumber: currentUser.phonenumber,
                password: currentUser.password
              };
  
              waitForRefreshToken = true;
              login(data).then(res => {
                waitForRefreshToken = false;
                if (res.success && res.statusCode === 200) {
                  currentTokenServer = res.data.access_token;
  
                  store.dispatch(refreshToken(res.data.access_token));
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