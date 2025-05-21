
import { useParams, Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const demoListings = [
  {
    slug: "best-auto-harare",
    businessName: "Best Auto Harare",
    category: "panel-beating",
    plan: "premium",
    mapsUrl: "https://maps.app.goo.gl/XYZ",
    description: "Premium repair shop with top reviews.",
    services: ["Panel Beating", "Spray Painting"],
    years: 12,
    address: "123 Samora Machel Ave, Harare",
    phone: "+263772111222",
    whatsapp: "+263772111222",
    email: "info@bestautoharare.com",
    badges: ["Verified", "Top Rated"],
    starRating: 5,
    openingHours: "8am-5pm Mon-Sat",
    gallery: [
      "https://placehold.co/600x300",
      "https://placehold.co/600x301"
    ],
    video: "https://www.youtube.com/embed/somevideo",
  },
  // ... add other dummy listings here ...
];

function getListing(slug?: string) {
  return demoListings.find(l => l.slug === slug);
}

export default function ListingDetail() {
  const { category = "panel-beating", slug } = useParams();
  const listing = getListing(slug);

  if (!listing) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <Breadcrumbs crumbs={[
          { to: "/", label: "Home" },
          { to: `/services/${category}`, label: category.replace("-", " ").toUpperCase() },
          { label: "Not Found" }
        ]} />
        <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
        <p>The requested business does not exist. Check your link or return <Link to={`/services/${category}`} className="text-primary underline">to listings</Link>.</p>
      </div>
    );
  }

  // Show expanded info and contact based on plan
  const isPremium = listing.plan === "premium";
  const isStandard = listing.plan === "standard";

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Breadcrumbs crumbs={[
        { to: "/", label: "Home" },
        { to: `/services/${category}`, label: category.replace("-", " ").toUpperCase() },
        { label: listing.businessName }
      ]} />
      <h1 className="text-3xl font-bold mb-2">{listing.businessName}</h1>
      <div className="mb-4 flex gap-2">
        {listing.badges?.map(badge => (
          <span key={badge} className="inline-block bg-primary text-white rounded px-2 py-1 text-xs">{badge}</span>
        ))}
      </div>
      {isPremium && (
        <div className="mb-4 flex gap-4">
          {listing.gallery?.map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i+1}`} className="rounded w-32 h-20 object-cover border shadow" />
          ))}
        </div>
      )}
      {isPremium && listing.video && (
        <div className="mb-4">
          <iframe width="100%" height="240" src={listing.video} title="Shop Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen className="rounded shadow" />
        </div>
      )}
      <p className="mb-2">{listing.description || "No description provided."}</p>
      <ul className="mb-2 text-sm">
        <li>Services: {listing.services?.join(", ")}</li>
        <li>Years in Business: {listing.years}</li>
        <li>Location: {listing.address}</li>
        {isStandard || isPremium ? <li>Opening hours: {listing.openingHours}</li> : null}
      </ul>
      {(isStandard || isPremium) && (
        <div className="flex gap-3 mb-4 flex-wrap">
          {listing.phone && (
            <a href={`tel:${listing.phone}`} className="bg-primary text-white rounded px-4 py-2 mb-2">Call</a>
          )}
          {listing.whatsapp && (
            <a href={`https://wa.me/${listing.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener" className="bg-green-500 text-white rounded px-4 py-2 mb-2">WhatsApp</a>
          )}
          {listing.email && (
            <a href={`mailto:${listing.email}`} className="bg-accent text-white rounded px-4 py-2 mb-2">Email</a>
          )}
          {listing.mapsUrl && (
            <a
              href={listing.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 mb-2"
              aria-label="View on Google Maps"
            >
              <MapPin size={18} />
              Maps
            </a>
          )}
        </div>
      )}
      <div className="bg-gray-100 rounded p-4">
        <h2 className="font-semibold mb-1">Ratings</h2>
        <p>{"⭐".repeat(listing.starRating)} ({listing.starRating} from 20 reviews)</p>
      </div>
      {!isStandard && !isPremium && (
        <div className="mt-5 italic text-gray-500">Contact details available with business upgrade.</div>
      )}
    </div>
  );
}
