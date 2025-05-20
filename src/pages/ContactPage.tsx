
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Contact PanelBeaters.co.zw Support</title>
        <meta name="description" content="Contact our support team for questions, service feedback, or getting listed on Zimbabwe’s leading panel beater directory." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Contact Support</h1>
      <h2 className="text-xl font-semibold mb-3">Get Expert Help or List Your Business</h2>
      <p className="mb-3">
        Email us at <a href="mailto:support@panelbeaters.co.zw" className="underline text-primary">support@panelbeaters.co.zw</a> or WhatsApp via the floating chat icon.
        <br />
        Our team responds within 24 hours, Monday to Friday.
      </p>
      <p className="mb-3">
        For immediate help, see • <Link to="/why-trust-us" className="underline text-accent">Why trust us</Link> • <Link to="/add-listing" className="underline text-accent">Add your business</Link> • <Link to="/" className="text-primary underline">Home</Link>
      </p>
      <h2 className="text-lg font-semibold mb-2">Other Ways to Reach Us</h2>
      <ul className="list-disc ml-6 mb-2">
        <li>Use our chat for quick questions</li>
        <li>Follow us on <a href="https://facebook.com/" target="_blank" rel="noopener" className="underline">Facebook</a></li>
        <li>Check out <Link to="/blog" className="underline text-primary">our blog for guides</Link></li>
      </ul>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        <Link to="/" className="text-primary underline">Go to Homepage</Link>
      </div>
    </div>
  );
}
