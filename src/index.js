import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import SignupsPage from "./Pages/SignupsPage"
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element: <HomePage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/signups",
        element: <SignupsPage />
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);