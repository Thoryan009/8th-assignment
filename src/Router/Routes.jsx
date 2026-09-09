import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppInfo from "../Pages/Apps/AppInfo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        index: true,
      },
      {
        path: "/apps",
        loader: () => {
          return fetch("/apps.json").then((res) => res.json());
        },
        Component: Apps,
      },
      {
        path: "apps/:id",
        loader: () => {
          return fetch("/apps.json").then((res) => res.json());
        },
        Component: AppInfo,
      },
      {
        path: "*",
        element: <div> No app found yetttttttttt</div>,
      },

      {
        path: "*",
        element: <div> No page found</div>,
      },
    ],
  },
]);

export default router;
