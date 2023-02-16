import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RegisteredUsers } from "../../pages/auth/Login/types/RegisteredUsers";

export const PrivateRoute = () => {
  let encryptedUsers = localStorage.getItem("registeredUsers")
    ? atob(localStorage.getItem("registeredUsers")!)
    : "[]";

  var registeredUsers: RegisteredUsers[] = JSON.parse(encryptedUsers);

  if (registeredUsers.length > 0) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
