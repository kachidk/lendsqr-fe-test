import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Siderbar";
import "./index.scss";

export const UserLayout: React.FC = () => {
  const [showSiderbar, useShowSiderbar] = useState(false);
  return (
    <div className="user-layout">
      <section>
        <Header showSiderbar={showSiderbar} useShowSiderbar={useShowSiderbar} />
      </section>
      <section className="user-layout__main">
        <div>
          <Sidebar
            showSiderbar={showSiderbar}
            useShowSiderbar={useShowSiderbar}
          />
        </div>
        <div className="user-layout__content">
          <Outlet />
        </div>
      </section>
    </div>
  );
};
