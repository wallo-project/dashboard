import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./routes/Home";

import About from "./routes/About";

import Dashboard from "./routes/Dashboard";

import Documentation from "./routes/Docs";

import NotFound from "./routes/404";

import "./index.css";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/docs",
    element: <Documentation />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
