import React from "react";
import Error404 from "../pages/404";
import Home from "../pages/Home";
export const Links = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        showInNavigation: true
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: false
    }
];