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
import { ChildrenExample } from "./ChildrenExample";
import { Button } from "./Button";
import BeneficiaryLayout from "./layouts/BeneficiaryLayout";

function App() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <>
      {/* <div className="p-4 bg-gray-100 dark:bg-gray-800 mb-10">
        <ChildrenExample>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rerum
            illum sit est sequi ea laboriosam aperiam itaque ipsam nisi.
          </p>
          <div className="flex mt-4 ">
            <button className="bg-blue-900  px-5 rounded-xl text-white hover:bg-blue-950 transition-all">
              Explore{" "}
            </button>
            <Button name="Get Started" />
          </div>
        </ChildrenExample>
      </div> */}

      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <BeneficiaryLayout
                  theme={theme}
                  setTheme={setTheme}
                  resolvedTheme={resolvedTheme}
                />
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="/profile" element />
            </Route>
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
