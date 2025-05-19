
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Car Repair Blog</h1>
      <div className="grid gap-4">
        {[1,2,3].map((idx) => (
          <Link key={idx} to={`/blog/demo-post-${idx}`} className="block p-4 border rounded bg-card shadow hover:bg-gray-50 transition">
            <h2 className="font-semibold text-xl mb-1">How to Pick a Panel Beater After an Accident #{idx}</h2>
            <p className="text-xs mb-1 text-gray-500">Car Repair Tips</p>
            <p className="text-sm text-gray-700">This article explains how to select a reliable panel beater after a minor car accident. (Preview...)</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="bg-accent text-white rounded px-2 py-1 text-xs">All</span>
        <span className="bg-primary text-white rounded px-2 py-1 text-xs">Car Repair Tips</span>
        <span className="bg-green-500 text-white rounded px-2 py-1 text-xs">Insurance</span>
        <span className="bg-gray-300 text-gray-800 rounded px-2 py-1 text-xs">DIY</span>
      </div>
    </div>
  );
}
