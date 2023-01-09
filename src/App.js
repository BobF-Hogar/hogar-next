import React from "react";
import "./App.css";

import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import Main from "./screens/main/Main";
import Error from "./screens/error/Error";
import { screens } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: screens,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <div>404</div>,
    errorElement: <Error />,
    loader: () => {
      return redirect("/"); // Automatically kick back URLs back to the root.
    }
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
