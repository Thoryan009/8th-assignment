import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import { useEffect } from "react";

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
          // useEffect(()=> {
           return fetch('apps.json').then(res => res.json()).then()
          // }, [])
        },
        Component: Apps,
      },
      {
        path: "*",
        element: <div> No page found</div>,
      },
    ],
  },
]);

export default router;
