import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./pages/Main";
import store from "./store";

import "./index.css";
import { Provider } from "react-redux";
import DataProducts from "./pages/DataProducts";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "products/:id", element: <DataProducts /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
