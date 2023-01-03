import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import Main from "./screens/main/Main";
import { screens } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: screens,
  },
  {
    path: "*",
    element: <div>404</div>
  }
],
{
  basename: (window.location.hostname.indexOf("github.io") > -1) ? "/hogar-next" : "",
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
