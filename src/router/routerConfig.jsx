import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import ItemDesc from "../pages/ItemDesc.jsx";
import { Search } from "../pages/Search.jsx";
import Navbar from "../containers/navbar/Navbar.jsx";
import ErrorAPI from "../pages/ErrorAPI.jsx";
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "items",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "details",
        element: (
          <>
            <ItemDesc />
          </>
        ),
      },
    ],
  },
  {
    path: "404",
    element: (
      <>
        <Navbar />
        <ErrorAPI />
      </>
    ),
  },
]);
export default routerConfig;
