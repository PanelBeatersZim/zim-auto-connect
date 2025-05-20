
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function CategoryPage() {
  // Accept category and (optional) city filter from url
  const { category = "panel-beaters", city } = useParams();

  // Example listings (replace with API/data fetch for real)
  const listings = [
    {
      slug: "best-auto-harare",
      businessName: "Best Auto Clinic",
      city: "harare",
      services: [category.replace("-", " ")],
      detailUrl: `/services/${category}/${"best-auto-harare"}${city ? "?city=" + encodeURIComponent(city) : ""}`,
    },
    {
      slug: "paint-pros-bulawayo",
      businessName: "Paint Pros",
      city: "bulawayo",
      services: [category.replace("-", " ")],
      detailUrl: `/services/${category}/${"paint-pros-bulawayo"}${city ? "?city=" + encodeURIComponent(city) : ""}`,
    },
  ].filter(
    (l) => !city || l.city.toLowerCase() === city?.toLowerCase()
  );

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Helmet>
        <title>
          {city
            ? `Top ${category.replace("-", " ")} in ${city.charAt(0).toUpperCase() + city.slice(1)} | Zimbabwe`
            : `Top ${category.replace("-", " ")} Services in Zimbabwe`}
        </title>
        <link
          rel="canonical"
          href={`https://panelbeaters.co.zw/services/${category}${city ? "/" + city : ""}`}
        />
        <meta
          name="description"
          content={
            city
              ? `Browse the best ${category.replace("-", " ")} in ${city}, recommended panel beaters in Zimbabwe.`
              : `Find the best ${category.replace("-", " ")} providers. All shops rated by real customers!`
          }
        />
      </Helmet>
      <h1 className="text-2xl font-bold mb-2 capitalize">
        {city
          ? `Top ${category.replace("-", " ")} in ${city.replace("-", " ")}`
          : `Top ${category.replace("-", " ")} Services in Zimbabwe`}
      </h1>
      <p className="mb-4 text-gray-600">
        {city
          ? `Panel beaters in ${city.replace("-", " ")} are listed below with full details and contact options!`
          : `Find the best ${category.replace("-", " ")} providers. All shops are rated and reviewed by real customers!`}
      </p>
      {!city && (
        <div className="mb-6">
          <input
            className="border p-2 rounded w-full"
            placeholder="Filter by city..."
            // onChange={...}
          />
        </div>
      )}
      {/* Listings */}
      <div className="grid gap-4">
        {listings.map((listing) => (
          <div key={listing.slug} className="border rounded p-4 bg-card shadow-sm">
            <strong>{listing.businessName}</strong>
            <div>City: {listing.city.charAt(0).toUpperCase() + listing.city.slice(1)}</div>
            <div>Services: {listing.services.join(", ")}</div>
            <Link
              to={listing.detailUrl}
              className="mt-2 inline-block bg-primary text-white px-3 py-1 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Category FAQs</h2>
        <ul>
          <li>How do I find a trusted shop?</li>
          <li>What’s the average price for {category.replace("-", " ")}?</li>
        </ul>
      </div>
    </div>
  );
}
