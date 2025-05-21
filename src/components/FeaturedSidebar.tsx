
// Sidebar: Shows up to 3 featured competitors in the category
import { Link } from "react-router-dom";

// Receives a getFeatured(category, excludeSlug) prop for data
export default function FeaturedSidebar({
  category,
  currentSlug,
  getFeatured
}: {
  category: string;
  currentSlug: string;
  getFeatured: (cat: string, excludeSlug: string) => any[];
}) {
  const listings = getFeatured(category, currentSlug);

  if (!listings.length) {
    return null;
  }

  return (
    <div className="bg-white rounded p-4 shadow mb-4 sticky top-6">
      <h3 className="font-bold text-base mb-2">Featured Listings</h3>
      <div className="flex flex-col gap-3">
        {listings.map(listing => (
          <div key={listing.slug} className="border p-2 rounded">
            <div className="font-semibold">{listing.businessName}</div>
            <div className="text-xs text-gray-500">
              {listing.city} — {listing.category.replace("-", " ")}
            </div>
            <Link
              to={`/services/${listing.category}/${listing.slug}`}
              className="mt-1 text-xs inline-block px-2 py-1 bg-primary text-white rounded hover:bg-primary/90"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

