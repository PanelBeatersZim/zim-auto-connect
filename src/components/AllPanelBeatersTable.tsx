
import { Link } from "react-router-dom";

// Add a category field for each listing for proper routing.
const listings = [
  { name: 'Auto Body Experts', location: 'Harare', services: 'Collision Repair', rating: '4.8', slug: "auto-body-experts", category: "panel-beating" },
  { name: 'Panel King', location: 'Bulawayo', services: 'Panel Beating', rating: '4.7', slug: "panel-king", category: "panel-beating" },
  { name: 'Trust Panel', location: 'Masvingo', services: 'Dent Removal', rating: '4.5', slug: "trust-panel", category: "panel-beating" },
];

export default function AllPanelBeatersTable() {
  return (
    <section aria-label="All Panel Beaters" className="bg-white py-6 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-lg font-bold mb-4">All Panel Beaters</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full border-collapse">
            <thead>
              <tr className="bg-background">
                <th className="px-3 py-2 text-left font-semibold">Name</th>
                <th className="px-3 py-2 text-left font-semibold">Location</th>
                <th className="px-3 py-2 text-left font-semibold">Services</th>
                <th className="px-3 py-2 text-left font-semibold">Rating</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {listings.map(listing => (
                <tr key={listing.slug} className="hover:bg-accent/10">
                  <td className="px-3 py-2">{listing.name}</td>
                  <td className="px-3 py-2">{listing.location}</td>
                  <td className="px-3 py-2">{listing.services}</td>
                  <td className="px-3 py-2 font-semibold text-yellow-500">{listing.rating}</td>
                  <td className="px-3 py-2">
                    <Link
                      to={`/services/${listing.category}/${listing.slug}`}
                      className="text-xs px-2 py-1 bg-primary text-white rounded hover:bg-primary/90"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

