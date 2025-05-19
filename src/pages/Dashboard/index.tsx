
import React from "react";
import { Outlet } from "react-router-dom";
export default function DashboardHomePage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Business Dashboard</h1>
      <Outlet />
    </div>
  );
}
