
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Helmet>
        <title>Contact PanelBeaters.co.zw Support</title>
        <meta name="description" content="Contact our support team for questions, feedback, or help with PanelBeaters.co.zw - Zimbabwe’s top car repair directory." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Contact Support</h1>
      <h2 className="text-xl font-semibold mb-3">Have a question or need help?</h2>
      <p className="mb-3">
        Email us at <a className="text-primary underline" href="mailto:support@panelbeaters.co.zw">support@panelbeaters.co.zw</a>, or WhatsApp us using the chat icon in the footer.
      </p>
      <p className="mb-4">
        Our team is available Mon-Fri, 8am-5pm Zimbabwe time, and will respond to most queries within 24 hours.
      </p>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        Need fast help?  
        <Link to="/why-trust-us" className="ml-1 text-accent underline">Why trust us</Link>
        {" | "}
        <Link to="/add-listing" className="text-accent underline">Add your business</Link>
        {" | "}
        <Link to="/" className="text-primary underline">Home</Link>
      </div>
    </div>
  );
}
