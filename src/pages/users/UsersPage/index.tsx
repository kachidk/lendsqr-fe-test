import React from "react";
import { UsersStats } from "./components/UsersStats";
import { UsersTable } from "./components/UsersTable";
import "./index.scss";

export const UsersPage: React.FC = () => {
  return (
    <div className="users-page">
      <h1 className="users-page__header">Users</h1>

      <UsersStats />
      <UsersTable />
    </div>
  );
};
