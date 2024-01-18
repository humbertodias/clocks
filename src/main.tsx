import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.tsx";
import App from "./App.tsx";
// import "./index.css";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]
const router = createBrowserRouter( routes
  , { basename: import.meta.env.MODE == 'gh-pages' ? '/clocks/' : '/' } 
  );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);