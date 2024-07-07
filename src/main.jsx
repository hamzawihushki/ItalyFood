import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Menu from "./components/Menu/Menu.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/menu",
//     element: <Menu />,
//   },
//   {
//     path: "/",
//     element: <Home />,
//   },
//   { path: "https://wa.me/+962772756325" },
//   { path: "https://www.facebook.com/hamzawi.hushki" },
//   { path: "https://www.linkedin.com/in/hamza-hushki-12644b257/" },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
