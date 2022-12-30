import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";

import About from "./routes/About";

import Dashboard from "./routes/Dashboard";

import Documentation from "./routes/Doc";

import SetupDoc from "./routes/docs/Setup";

import TutorialDoc from "./routes/docs/Tutorial";

import TroubleshootDoc from "./routes/docs/Troubleshoot";

import NotFound from "./routes/404";

import './index.css';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />
  },
  {
    path: "/docs",
    element: <Documentation />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <NotFound />
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
