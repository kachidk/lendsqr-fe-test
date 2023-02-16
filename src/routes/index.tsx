import { createBrowserRouter, Navigate } from "react-router-dom";
import { UserLayout } from "../layouts/UserLayout";
import { UsersPage } from "../pages/users/UsersPage";
import { Login } from "../pages/auth/Login";
import { UserDetailsPage } from "../pages/users/UserDetailsPage";
import { Signup } from "../pages/auth/Signup";
import { PrivateRoute } from "./guard/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <UserLayout />,
        children: [
          {
            path: "/users",
            element: <UsersPage />,
          },
          {
            path: "users/user-details/:userID",
            element: <UserDetailsPage />,
          },
        ],
      },
    ],
  },
]);
