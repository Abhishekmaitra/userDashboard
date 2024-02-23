import React from "react";
import { navigations } from "./navigation";
import { Routes, Route } from "react-router-dom";
const RoutesRenderer = () => {
  return (
    <Routes>
      {navigations.map((route) => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RoutesRenderer;
