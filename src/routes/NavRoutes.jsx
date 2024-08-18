import React from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
export default NavRoutes;
