import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./Pages/HomePage";
import BrowsePage from "./Pages/BrowsePage";

export let router = createBrowserRouter([
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/browse",
    Component: BrowsePage,
  },
]);
