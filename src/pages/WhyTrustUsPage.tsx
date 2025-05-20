
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function WhyTrustUsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Why Trust PanelBeaters.co.zw? | Your Trusted Car Body Repair Directory</title>
        <meta name="description" content="Learn why PanelBeaters.co.zw is Zimbabwe's most trusted directory for panel beaters, spray painting, windscreen, and car body repairs." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Why Trust PanelBeaters.co.zw?</h1>
      <h2 className="text-xl font-semibold mb-3">Expert Vetted Listings & Real Reviews</h2>
      <p className="mb-3">
        Our platform brings you carefully vetted panel beaters in Zimbabwe so you can be confident in the quality of service you're getting.
        Each business is checked for registration, experience, and customer ratings.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Verified business information</li>
        <li>Real reviews from Zimbabwean drivers</li>
        <li>Direct WhatsApp & call connect</li>
        <li>No hidden fees—just trusted connections</li>
      </ul>
      <h2 className="font-semibold text-lg mb-2">Find Panel Beaters With Local Knowledge</h2>
      <p className="mb-4">
        Whether you’re in <Link to="/city/harare" className="text-primary underline">Harare</Link>, <Link to="/city/bulawayo" className="text-primary underline">Bulawayo</Link>, or any major city, our listings connect you to local experts. 
        <Link to="/browse-all" className="text-accent underline ml-1">Browse all panel beaters</Link>
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <h2 className="font-semibold mb-1">Ready to get your car fixed?</h2>
        <Link to="/" className="text-primary underline">Return to home page</Link> or <Link to="/add-listing" className="text-accent underline">add your business</Link>.
      </div>
    </div>
  );
}
