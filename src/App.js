import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkLogin } from "./util/auth";
import store from "./redux/store";
import { Provider } from "react-redux";

import Login from "./screens/login/Login";
import Dashboard from "./screens/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: checkLogin,
  },
  {
    path: "/login",
    element: <Login />,
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
