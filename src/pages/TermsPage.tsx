
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Terms &amp; Conditions | PanelBeaters.co.zw</title>
        <meta name="description" content="Usage terms for PanelBeaters.co.zw—Zimbabwe’s trusted car body repair directory. Transparency and user safety." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
      <h2 className="text-xl font-semibold mb-3">Agreements & Responsibilities</h2>
      <p className="mb-3">
        By using PanelBeaters.co.zw, you agree that the site serves as an information directory only. We carefully verify businesses, but you are responsible for vetting any provider you use.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>No liability for issues from third-party providers</li>
        <li>Personal data is protected (see our <Link to="/privacy" className="text-primary underline">privacy policy</Link>)</li>
      </ul>
      <h2 className="font-semibold text-lg mb-2">Listing Content & Copyright</h2>
      <p className="mb-4">
        Listings and reviews are user-generated and may be subject to moderation.
        <br />
        <Link to="/city/harare" className="text-primary underline">Browse shops in Harare</Link>
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <Link to="/" className="text-primary underline">Return to main page</Link>
      </div>
    </div>
  );
}
