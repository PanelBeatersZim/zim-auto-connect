
import { Link } from "react-router-dom";

export default function DashboardHome() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-12 pb-24">
      <h1 className="text-2xl font-bold mb-3">Business Dashboard</h1>
      <p className="mb-5">Welcome! Here's a sneak peek of your future business dashboard on PanelBeaters.co.zw.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-5">
          <h2 className="font-bold mb-2">My Listings</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <Link to="/listing/example-listing" className="text-primary underline">ProFix Panelbeaters</Link>
              <span className="ml-2 text-sm text-gray-500">(Active)</span>
            </li>
            <li>
              <Link to="/listing/quick-bodyworks" className="text-primary underline">Quick BodyWorks</Link>
              <span className="ml-2 text-sm text-gray-500">(Pending)</span>
            </li>
          </ul>
          <Link to="/add-listing" className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded font-semibold">Add New Listing</Link>
        </div>
        <div className="bg-white rounded shadow p-5">
          <h2 className="font-bold mb-2">Subscription Status</h2>
          <p>You are on the <span className="font-semibold text-primary">Premium</span> plan.</p>
          <ul className="mt-2 text-gray-700 text-sm">
            <li>Next Billing: <b>June 18, 2025</b></li>
            <li>Status: <span className="font-bold text-green-600">Active</span></li>
          </ul>
          <Link to="/pricing" className="inline-block mt-3 px-4 py-2 bg-accent text-white rounded font-semibold">Upgrade/Renew</Link>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Link to="/dashboard/claims" className="px-4 py-2 bg-grayish rounded font-semibold text-primary hover:bg-primary hover:text-white">Manage Claims</Link>
          <Link to="/dashboard/settings" className="px-4 py-2 bg-grayish rounded font-semibold text-primary hover:bg-primary hover:text-white">Settings</Link>
          <Link to="/dashboard/support" className="px-4 py-2 bg-grayish rounded font-semibold text-primary hover:bg-primary hover:text-white">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}
