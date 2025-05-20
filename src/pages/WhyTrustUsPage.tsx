
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function WhyTrustUsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Why Trust PanelBeaters.co.zw? | Zimbabwe’s Trusted Car Body Repair Directory</title>
        <meta name="description" content="Why is PanelBeaters.co.zw the most trusted panel beating directory in Zimbabwe? Learn how we vet our listings, use expert reviews, and guarantee trustworthy service." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Why Trust PanelBeaters.co.zw?</h1>
      <h2 className="text-xl font-semibold mb-3">Verified Panel Beaters & Real Reviews</h2>
      <p className="mb-3">
        At PanelBeaters.co.zw, each business is vetted for experience, licensing, and customer satisfaction. We never list a service that does not meet our standards.
        <br /><br />
        <Link to="/services/panel-beating" className="underline text-primary">See panel beating services</Link> or <Link to="/city/harare" className="underline text-primary">find top Harare panel beaters</Link>.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Transparent rating and review system</li>
        <li>No hidden advertising or “paid” bias</li>
        <li>All businesses must pass background checks</li>
      </ul>
      <h2 className="font-semibold text-lg mb-2">Your Safety, Our Priority</h2>
      <p className="mb-4">
        Our team checks for business registration, insurance, and safety records—so you only connect with the best.
        <br />
        <Link to="/terms" className="underline text-accent">Read our terms</Link>
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <h2 className="font-semibold mb-1">Need Repair? Trusted Help Is Here</h2>
        <Link to="/" className="text-primary underline">Return to home page</Link> or <Link to="/add-listing" className="text-accent underline">add your business</Link>.
      </div>
    </div>
  );
}
