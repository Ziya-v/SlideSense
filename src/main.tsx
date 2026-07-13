import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Technology from "./pages/Technology";
import DemoPage from "./pages/DemoPage";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
      {
        path: "demo",
        element: <DemoPage />,
      },
      {
        path: "documentation",
        element: <Documentation />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
  path: "dashboard",
  element: <Dashboard />,
},
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);