
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Terms &amp; Conditions | PanelBeaters.co.zw</title>
        <meta name="description" content="Read the usage terms and conditions for PanelBeaters.co.zw. Transparency for Zimbabwe's car body repair community." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
      <h2 className="text-xl font-semibold mb-3">Your Agreement</h2>
      <p className="mb-3">
        By using PanelBeaters.co.zw, you agree to our service is for personal, non-commercial use. All business listings are verified to the best of our ability, but users must conduct their own assessment before hiring.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>No liability for damages from third-party service providers</li>
        <li>Personal data handled as per our <Link to="/privacy" className="text-primary underline">privacy policy</Link></li>
      </ul>
      <h2 className="font-semibold text-lg mb-2">Content & Listings</h2>
      <p className="mb-4">
        All content is protected by copyright. 
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <Link to="/" className="text-primary underline">Return to main page</Link>
      </div>
    </div>
  );
}
