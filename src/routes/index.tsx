import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
