import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Portfolio/",
        element: <About />,
      },
      {
        path: "Portfolio/resume",
        element: <Resume />,
      },
      {
        path: "Portfolio/portfolio",
        element: <Portfolio />,
      },
      {
        path: "Portfolio/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      basename="/tothepoint_login"
      router={router}></RouterProvider>
    <Toaster
      position="top-center"
      gutter={12}
      container={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#DAD8c9",
            color: "#6A6767",
          },
        },
      }}
    />
  </React.StrictMode>
);
