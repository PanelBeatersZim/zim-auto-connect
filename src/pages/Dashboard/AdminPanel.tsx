
import { useAuth } from "@/components/AuthProvider";
import React from "react";

export default function AdminPanel() {
  const { userRole } = useAuth();
  if (userRole !== "admin") {
    return <div className="text-red-600 font-bold">Access denied. Admins only.</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul className="list-disc ml-6">
        <li>Manage all Listings</li>
        <li>Approve subscriptions</li>
        <li>View claims</li>
        <li>Upload listings via CSV</li>
        <li>Email notifications, etc.</li>
      </ul>
      <div className="mt-6 bg-blue-50 p-4 rounded">
        <b>Note:</b> This is a placeholder page for the admin dashboard.
      </div>
    </div>
  );
}
