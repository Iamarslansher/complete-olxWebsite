import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashbord from "../Views/Dashbord";
import Signup from "../Views/Signup";
import Login from "../Views/Login";
import MainDashbord from "../Views/MainDashbord";
import Additem from "../Views/Additem";
import CardDetail from "../Views/CardDetail";
import Profile from "../ReuseAble/Profile";
import Cart from "../Views/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/maindashbord",
    element: <MainDashbord />,
  },
  {
    path: "/additem",
    element: <Additem />,
  },
  {
    path: "/carddetail/:id",
    element: <CardDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
