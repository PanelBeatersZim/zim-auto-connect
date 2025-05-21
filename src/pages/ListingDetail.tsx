
import { useParams, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "@/components/Breadcrumbs";
import FeaturedSidebar from "@/components/FeaturedSidebar";

// Helper for slugs – must match all systems
function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

// DUMMY demo listings (simulate db)
const demoListings = [
  {
    slug: slugify("Best Auto Clinic"),
    businessName: "Best Auto Clinic",
    category: "panel-beating",
    city: "Harare",
    plan: "premium",
    mapsUrl: "https://maps.app.goo.gl/XYZ",
    description: "Premium repair shop with top reviews.",
    services: ["Panel Beating", "Spray Painting"],
    years: 12,
    address: "123 Samora Machel Ave, Harare",
    phone: "+263772111222",
    whatsapp: "+263772111222",
    email: "info@bestautoharare.com",
    badges: ["Verified"],
    starRating: 5,
    openingHours: "8am-5pm Mon-Sat",
    gallery: [
      "https://placehold.co/600x300",
      "https://placehold.co/600x301"
    ],
    video: "https://www.youtube.com/embed/somevideo"
  },
  {
    slug: slugify("Paint Pros"),
    businessName: "Paint Pros",
    category: "panel-beating",
    city: "Bulawayo",
    plan: "standard",
    mapsUrl: "https://maps.google.com/",
    description: "Affordable, pro-quality repairs for all vehicle makes.",
    services: ["Panel Beating"],
    years: 8,
    address: "44 Main Rd, Bulawayo",
    phone: "+263777222333",
    whatsapp: "+263777222333",
    email: "admin@paintpro.co.zw",
    badges: [],
    starRating: 4,
    openingHours: "7:30am-5pm Mon-Sat"
  },
  {
    slug: slugify("Panel King"),
    businessName: "Panel King",
    category: "panel-beating",
    city: "Bulawayo",
    plan: "free",
    description: "Trust and fast repairs from a local expert.",
    services: ["Panel Beating", "Dent Removal"],
    years: 6,
    address: "7 Fifth, Bulawayo",
    badges: [],
    starRating: 4,
  },
];

function getListing(category: string, slug?: string) {
  return demoListings.find(
    l => l.slug === slug && l.category.replace(/s$/, "") === category.replace(/s$/, "")
  );
}

// Sidebar: get up to 3 standard/premium from same category
function getFeatured(category: string, excludeSlug?: string) {
  return demoListings.filter(
    l =>
      l.category === category &&
      l.slug !== excludeSlug &&
      (l.plan === "standard" || l.plan === "premium")
  ).slice(0, 3);
}

export default function ListingDetail() {
  const { category = "panel-beating", slug } = useParams();
  const location = useLocation();
  const listing = getListing(category, slug);

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

  const isFree = listing.plan === "free";
  const isStandard = listing.plan === "standard";
  const isPremium = listing.plan === "premium";

  // SEO Meta tags
  const canonical =
    `https://panelbeaters.co.zw/services/${listing.category}/${listing.slug}`;
  const title = `${listing.businessName} | ${listing.category.replace("-", " ")} in ${listing.city || "Zimbabwe"}`;
  const description = listing.description
    ? `Contact ${listing.businessName} for professional ${listing.category.replace("-", " ")} in ${listing.city || ""}. WhatsApp, directions, and verified service info available.`
    : `Details for ${listing.businessName}, a top ${listing.category.replace("-", " ")} provider in ${listing.city || "Zimbabwe"}.`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="flex-1 min-w-0">
        <Breadcrumbs
          crumbs={[
            { to: "/", label: "Home" },
            { to: `/services/${listing.category}`, label: listing.category.replace("-", " ").toUpperCase() },
            { label: listing.businessName }
          ]}
        />
        <h1 className="text-3xl font-bold mb-2">{listing.businessName}</h1>
        <div className="flex flex-wrap gap-2 mb-1 text-sm">
          <span className="font-semibold">{listing.city}</span>
          <span>•</span>
          <span>{listing.category.replace("-", " ")}</span>
          <span>•</span>
          <span>Years in business: {listing.years}</span>
        </div>
        <div className="mb-3 text-gray-600">{listing.address}</div>
        {isPremium && listing.badges?.length ? (
          <div className="mb-2 flex gap-1">{listing.badges.map(badge => (
            <span key={badge} className="bg-primary text-white rounded px-2 py-1 text-xs">{badge}</span>
          ))}</div>
        ) : null}
        {isPremium && listing.gallery?.length ? (
          <div className="mb-4 flex gap-4 flex-wrap">
            {listing.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className="rounded w-32 h-20 object-cover border shadow"
              />
            ))}
          </div>
        ) : null}
        {isPremium && listing.video ? (
          <div className="mb-4">
            <iframe width="100%" height="240" src={listing.video} title="Shop Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen className="rounded shadow" />
          </div>
        ) : null}
        {(isStandard || isPremium) && (
          <div className="flex gap-3 mb-4 flex-wrap">
            <a href={`tel:${listing.phone}`} className="bg-primary text-white rounded px-4 py-2 mb-2">Call</a>
            <a href={`https://wa.me/${listing.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener" className="bg-green-500 text-white rounded px-4 py-2 mb-2">WhatsApp</a>
            <a href={`mailto:${listing.email}`} className="bg-accent text-white rounded px-4 py-2 mb-2">Email</a>
            {listing.mapsUrl && (
              <a
                href={listing.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-2 items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 mb-2"
                aria-label="View on Google Maps"
              >
                Maps
              </a>
            )}
          </div>
        )}
        {isStandard || isPremium ? (
          <>
            <p className="mb-2">{listing.description || "No description provided."}</p>
            {listing.openingHours && (
              <div className="mb-2 text-sm text-gray-700">Opening hours: {listing.openingHours}</div>
            )}
          </>
        ) : null}
        {isFree && (
          <div className="mb-4 italic text-gray-600 text-sm">
            This business is not verified, and contact details are hidden.
          </div>
        )}
        <div className="bg-gray-100 rounded p-4 mt-2">
          <h2 className="font-semibold mb-1">Ratings</h2>
          <p>{"⭐".repeat(listing.starRating)} ({listing.starRating} from 20 reviews)</p>
        </div>
      </main>
      {
        isFree ? (
          <aside className="w-full md:w-[320px] md:ml-4">
            <FeaturedSidebar
              category={listing.category}
              currentSlug={listing.slug}
              getFeatured={getFeatured}
            />
          </aside>
        ) : null
      }
    </div>
  );
}
