import React from "react";
import Error404 from "../pages/404";
import AiDetails from "../pages/Ai/Details";
import AiList from "../pages/Ai/List";
import GameDetails from "../pages/Game/Details";
import GameList from "../pages/Game/List";
import Home from "../pages/Home";
import MetaverseDetails from "../pages/Metaverse/Details";
import MetaverseList from "../pages/Metaverse/List";

export const Links = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    showInNavigation: false,
  },
  {
    name: "Games",
    path: "/games",
    element: <GameList />,
    showInNavigation: true,
  },
  {
    name: "Game Details",
    path: "/games/:id",
    element: <GameDetails />,
    showInNavigation: false,
  },
  {
    name: "AI Bots",
    path: "/ai-bots",
    element: <AiList />,
    showInNavigation: true,
  },
  {
    name: "Ai Details",
    path: "/ai-bots/:id",
    element: <AiDetails />,
    showInNavigation: false,
  },
  {
    name: "Metaverse",
    path: "/metaverse",
    element: <MetaverseList />,
    showInNavigation: true,
  },
  {
    name: "Metaverse Details",
    path: "/metaverse/:id",
    element: <MetaverseDetails />,
    showInNavigation: false,
  },
  {
    name: "Error404",
    path: "*",
    element: <Error404 />,
    showInNavigation: false,
  },
];
