import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import ProtectedRoutes from "./contexts/ProtectedRoutes";
import { TypescriptClass } from "./TypescriptClass";
import { ChildrenExample } from "./ChildrenExample";

function App() {
  // const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <>
      <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <TypescriptClass name="Musa" age={30} status={true} />
      </div>
      <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <ChildrenExample>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rerum
            illum sit est sequi ea laboriosam aperiam itaque ipsam nisi.
          </p>
        </ChildrenExample>
      </div>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" />

            {/* Admin Routes */}
            <Route path="/admin" />

            {/* Organization Routes */}
            <Route path="/" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
