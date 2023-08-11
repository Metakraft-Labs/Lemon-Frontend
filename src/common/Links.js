import React from "react";
import Error404 from "../pages/404";
import AiList from "../pages/Ai/List";
import GameList from "../pages/Game/List";
import Home from "../pages/Home";
import MetaverseList from "../pages/Metaverse/List";

export const Links = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        showInNavigation: false
    },
    {
        name: "Games",
        path: "/games",
        element: <GameList />,
        showInNavigation: true
    },
    {
        name: "Ai Bots",
        path: "/ai-bots",
        element: <AiList />,
        showInNavigation: true
    },
    {
        name: "Metaverse",
        path: "/metaverse",
        element: <MetaverseList />,
        showInNavigation: true
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: false
    }
];