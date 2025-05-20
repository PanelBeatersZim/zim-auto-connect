
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Privacy Policy | PanelBeaters.co.zw</title>
        <meta name="description" content="PanelBeaters.co.zw privacy policy for how we collect, process, and protect your personal data. Transparent practices for Zimbabwe’s car body repair community." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <h2 className="text-xl font-semibold mb-3">How We Handle Your Data</h2>
      <p className="mb-3">
        We only collect personal data you provide, never share it without consent, and use SSL encryption to keep it safe.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Cookies are used for basic site operation</li>
        <li>Email/phone are never published without approval</li>
        <li>See our <Link to="/terms" className="underline text-primary">Terms & Conditions</Link> for details</li>
      </ul>
      <p>
        Have questions? Email <a href="mailto:support@panelbeaters.co.zw" className="text-primary underline">support@panelbeaters.co.zw</a> anytime.
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <Link to="/" className="text-primary underline">Go to Homepage</Link>
      </div>
    </div>
  );
}
