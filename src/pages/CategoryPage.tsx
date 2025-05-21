
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FAQAccordion from "@/components/FAQAccordion";

// Helper to generate a slug given a business name
function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

const getFaqs = (category: string, city?: string) => {
  // Add contextual sample FAQs - consider more categories if desired
  if (category.includes("panel")) {
    return [
      { question: "What does a panel beater do?", answer: "A panel beater repairs car body damage, including dents, collision repairs, and fabrication." },
      { question: "How long does a car body repair take?", answer: "Most repairs take 2-5 days, depending on severity and parts availability." },
      { question: `Are panel beaters in ${city ? city.charAt(0).toUpperCase() + city.slice(1) : "Zimbabwe"} insurance-approved?`, answer: "Many are insurance-approved. Check details in the listings or call ahead." },
      { question: "Can I get a quote online?", answer: "Many shops offer quotes by phone, WhatsApp, or email using photos of the damage." },
      { question: "Do I need an appointment?", answer: "Appointments aren’t always required, but calling ahead is recommended." },
      { question: "What’s the difference between panel beating and spray painting?", answer: "Panel beating repairs structural damage, spray painting restores factory-finish looks." },
      { question: "How do I know a shop is verified?", answer: "Look for a Verified badge or see recommended/top-rated shops on the site." },
      { question: "Are weekend repairs available?", answer: "Some shops offer Saturday service—check the listing details." },
    ];
  }
  // Add spray, windscreen, etc.
  return [
    { question: "How do I book this service?", answer: "Contact a provider via their listing to book." },
  ];
}

export default function CategoryPage() {
  const { category = "panel-beating", city } = useParams();

  // Always include "category" for later
  const listings = [
    {
      slug: slugify("Best Auto Clinic"),
      businessName: "Best Auto Clinic",
      city: "harare",
      services: [category.replace("-", " ")],
      detailUrl: `/services/${category}/${slugify("Best Auto Clinic")}${city ? "?city=" + encodeURIComponent(city) : ""}`,
      category,
      plan: "premium"
    },
    {
      slug: slugify("Paint Pros"),
      businessName: "Paint Pros",
      city: "bulawayo",
      services: [category.replace("-", " ")],
      detailUrl: `/services/${category}/${slugify("Paint Pros")}${city ? "?city=" + encodeURIComponent(city) : ""}`,
      category,
      plan: "standard"
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
              to={`/services/${listing.category}/${listing.slug}`}
              className="mt-2 inline-block bg-primary text-white px-3 py-1 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      {/* FAQ Accordion */}
      <div className="mt-8 mb-10">
        <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
        <FAQAccordion faqs={getFaqs(category, city)} ariaLabel={`FAQs about ${category}${city ? " in " + city : ""}`} />
      </div>
    </div>
  );
}

