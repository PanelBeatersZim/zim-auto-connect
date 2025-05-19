
import React from "react";
import { useAuth } from "@/components/AuthProvider";
import { Navigate, NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <div className="max-w-7xl mx-auto px-4 flex pt-8 pb-20 gap-8">
      <nav className="w-56 shrink-0 hidden md:block border-r pr-4">
        <ul className="space-y-1">
          <li><NavLink to="/dashboard" end className="block p-2 rounded hover:bg-accent">Dashboard Home</NavLink></li>
          <li><NavLink to="/dashboard/listings" className="block p-2 rounded hover:bg-accent">My Listings</NavLink></li>
          <li><NavLink to="/dashboard/subscriptions" className="block p-2 rounded hover:bg-accent">Subscriptions</NavLink></li>
          <li><NavLink to="/dashboard/claims" className="block p-2 rounded hover:bg-accent">Claims</NavLink></li>
          <li><NavLink to="/dashboard/settings" className="block p-2 rounded hover:bg-accent">Settings</NavLink></li>
          <li><NavLink to="/dashboard/support" className="block p-2 rounded hover:bg-accent">Contact Support</NavLink></li>
          <li><NavLink to="/dashboard/admin" className="block p-2 rounded hover:bg-accent">Admin Panel</NavLink></li>
        </ul>
      </nav>
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
