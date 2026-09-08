import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello guys</div>,
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        index: true,
      },
    ],
  },
  {
    path: '*',
    element: <div> No page found</div>
  }
]);

export default router;
