import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function ListingDetail() {
  // Accept both category and slug in url
  const { category = "panel-beaters", slug } = useParams();

  // Simulated listing (update as needed)
  const listing = {
    businessName: "Panel Beater: " + slug,
    category,
    mapsUrl: "https://maps.app.goo.gl/XYZ",
    // ...other fields here
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{listing.businessName}</h1>
      <div className="mb-4">
        <span className="inline-block bg-primary text-white rounded px-2 py-1 text-xs mr-2">Verified</span>
        <span className="inline-block bg-accent text-white rounded px-2 py-1 text-xs">Top Rated</span>
      </div>
      <div className="mb-4">
        <img src="https://placehold.co/600x200" alt="Workshop" className="rounded w-full mb-2" />
        <p className="mb-2">Full description of the business goes here. In-depth overview of services, years in business, and what makes them unique.</p>
        <ul className="mb-2 text-sm">
          <li>Services: Panel Beating, Spray Painting, Dent Removal</li>
          <li>Years in Business: 10</li>
          <li>Turnaround Time: 2-3 days</li>
          <li>Location: Example Address, Harare</li>
        </ul>
      </div>
      <div className="flex gap-3 mb-4">
        <a href="tel:0772000000" className="bg-primary text-white rounded px-4 py-2">Call</a>
        <a href="https://wa.me/263772000000" target="_blank" rel="noopener" className="bg-green-500 text-white rounded px-4 py-2">WhatsApp</a>
        <a href="mailto:info@example.com" className="bg-accent text-white rounded px-4 py-2">Email</a>
        {listing.mapsUrl && (
          <a
            href={listing.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700"
            aria-label="View on Google Maps"
          >
            <MapPin size={18} />
            Maps
          </a>
        )}
      </div>
      <div className="bg-gray-100 rounded p-4">
        <h2 className="font-semibold mb-1">Ratings</h2>
        <p>⭐⭐⭐⭐⭐ (4.8 from 20 reviews)</p>
      </div>
    </div>
  );
}
