import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkLogin } from "./util/auth";
import store from "./redux/store";
import { Provider } from "react-redux";

import Login from "./screens/login/Login";
import Dashboard from "./screens/dashboard/Dashboard";
import { detectEnvironment } from "./util";

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
  basename: (detectEnvironment() === "staging") ? "/router-next" : "",
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
