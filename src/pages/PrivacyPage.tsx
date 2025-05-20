
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Privacy Policy | PanelBeaters.co.zw</title>
        <meta name="description" content="Our privacy policy details how we protect your information at PanelBeaters.co.zw, Zimbabwe’s trusted car repair directory." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <h2 className="text-xl font-semibold mb-3">How We Use Your Info</h2>
      <p className="mb-3">
        Your personal information is only used with your consent and will never be sold to third parties. Data is secured using SSL encryption.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Cookies for site functionality only</li>
        <li>Email addresses and phone numbers are not published without consent</li>
      </ul>
      <p>
        For questions, contact us at <a className="text-primary underline" href="mailto:support@panelbeaters.co.zw">support@panelbeaters.co.zw</a>.
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <Link to="/" className="text-primary underline">Go to Homepage</Link>
      </div>
    </div>
  );
}
