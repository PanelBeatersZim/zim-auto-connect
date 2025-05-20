
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function BrowseAllPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>Browse All Panel Beaters in Zimbabwe</title>
        <meta name="description" content="View all car body repairers, panel beaters, spray painters, and dent specialists across Zimbabwe on PanelBeaters.co.zw" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Browse All Panel Beaters</h1>
      <h2 className="text-xl font-semibold mb-3">Full List by City &amp; Service</h2>
      <p className="mb-3">
        Use the links below to quickly explore panel beaters by city or service type:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-bold mb-2 text-primary">By City</h3>
          <ul className="list-disc ml-5">
            <li><Link to="/city/harare" className="underline text-primary">Panel Beaters in Harare</Link></li>
            <li><Link to="/city/bulawayo" className="underline text-primary">Panel Beaters in Bulawayo</Link></li>
            <li><Link to="/city/gweru" className="underline text-primary">Panel Beaters in Gweru</Link></li>
            <li><Link to="/city/mutare" className="underline text-primary">Panel Beaters in Mutare</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-accent">By Service</h3>
          <ul className="list-disc ml-5">
            <li><Link to="/services/panel-beating" className="underline text-accent">Panel Beating</Link></li>
            <li><Link to="/services/spray-painting" className="underline text-accent">Spray Painting</Link></li>
            <li><Link to="/services/windscreen" className="underline text-accent">Windscreen Repair</Link></li>
            <li><Link to="/services/dent" className="underline text-accent">Dent Removal</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-accent/10 p-4 rounded-lg mt-6 mb-2">
        Can't find your business? <Link to="/add-listing" className="text-primary underline">Add your business</Link> or <Link to="/" className="text-accent underline">return to home</Link>.
      </div>
    </div>
  );
}
