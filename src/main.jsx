import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Details1 from "./components/Details1";
import Details2 from "./components/Details2";
import Details3 from "./components/Details3";
import Skills from "./components/Skills";
import Works from "./components/Works";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/detail-1",
        Component: Details1,
      },
      {
        path: "/detail-2",
        Component: Details2,
      },
      {
        path: "/detail-3",
        Component: Details3,
      },
      {
        path: "/skill",
        Component: Skills,
      },
       {
        path: "/project",
        Component: Works,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
