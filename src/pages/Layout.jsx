import React from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavBar/TopNavBar";

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <main className="admin-main-container_block">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
