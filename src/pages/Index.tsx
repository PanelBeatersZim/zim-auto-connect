// V2 Engaging Home Page for PanelBeaters.co.zw

import { useState } from "react";
import { Link } from "react-router-dom";
import ListingCard from "../components/ListingCard";
import { ServiceBubble } from "../components/ServiceBubble";
import { MessageCircle, Phone, Mail, Star, Users, MapPin, Wrench } from "lucide-react";

const SERVICES = [
  { key: "panel-beating", label: "Panel Beating", icon: <Wrench size={18} /> },
  { key: "spray-painting", label: "Spray Painting", icon: <Wrench size={18} /> },
  { key: "windscreen", label: "Windscreen Repair", icon: <Wrench size={18} /> },
  { key: "towing", label: "Towing", icon: <Wrench size={18} /> },
  { key: "dent", label: "Dent Removal", icon: <Wrench size={18} /> },
];

const CITIES = [
  "Harare",
  "Bulawayo",
  "Mutare",
  "Gweru",
  "Masvingo",
  "Kwekwe",
  "Chinhoyi",
  "Kadoma",
  "Marondera",
];

const DUMMY_TESTIMONIALS = [
  {
    name: "James T",
    city: "Gweru",
    quote: "I found a panel beater in Gweru in under 3 minutes. My car was fixed in 2 days!",
  },
  {
    name: "Chipo N",
    city: "Harare",
    quote: "Super easy to reach a trusted shop via WhatsApp. Highly recommend!",
  },
];

const DUMMY_BLOGS = [
  {
    title: "How to Pick a Panel Beater After an Accident",
    slug: "pick-panel-beater-after-accident",
    excerpt: "Quick tips for choosing a trusted car repair shop in Zimbabwe...",
  },
];

const RECENT_LISTINGS = [
  { name: "ProFix Panelbeaters", city: "Harare", tags: ["New"], star: 5 },
  { name: "Kwese Body Shop", city: "Bulawayo", tags: ["New"], star: 4 },
  { name: "AutoPro Repairs", city: "Gweru", tags: ["New"], star: 4 },
  { name: "FastFix Motors", city: "Mutare", tags: ["New"], star: 5 },
  { name: "TrustPanel", city: "Masvingo", tags: ["New"], star: 3 },
  { name: "Panel King", city: "Chinhoyi", tags: ["New"], star: 4 },
];

const DEMO_LISTINGS: {
  businessName: string;
  city: string;
  services: string[];
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  years: number;
  vehicles: string[];
  badges: ("Verified" | "Recommended" | "Top Rated")[]; // <--- Enforce allowed types explicitly
  starRating: number;
}[] = [
  {
    businessName: "Harare Panelbeaters",
    city: "Harare",
    services: ["Panel Beating", "Spray Painting"],
    phone: "0772123456",
    whatsapp: "263772123456",
    email: "info@hararepanelbeaters.co.zw",
    address: "123 Samora Machel Ave, Harare",
    years: 15,
    vehicles: ["Cars", "Pickups"],
    badges: ["Verified", "Recommended"], // correct values
    starRating: 5,
  },
  {
    businessName: "Rapid Windscreen Repairs",
    city: "Bulawayo",
    services: ["Windscreen Repair", "Towing"],
    phone: "0712888999",
    whatsapp: "263712888999",
    email: "contacts@rapidwindscreens.co.zw",
    address: "77 Fort Street, Bulawayo",
    years: 8,
    vehicles: ["Cars", "Trucks"],
    badges: ["Verified"], // correct value
    starRating: 4,
  },
  {
    businessName: "ProSpray Auto",
    city: "Mutare",
    services: ["Spray Painting", "Dent Removal"],
    phone: "0783555111",
    whatsapp: "263783555111",
    email: "hello@prospray.co.zw",
    address: "41 Third St, Mutare",
    years: 12,
    vehicles: ["Cars"],
    badges: [], // empty okay
    starRating: 4,
  },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Filter logic is for demo only
  const filtered = DEMO_LISTINGS.filter((l) => {
    const matchService = selectedService
      ? l.services.includes(
          SERVICES.find((s) => s.key === selectedService)?.label || ""
        )
      : true;
    const matchCity = selectedCity ? l.city === selectedCity : true;
    const matchSearch = search
      ? l.businessName.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchService && matchCity && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero section */}
      <section className="py-12 px-4 flex flex-col items-center bg-gradient-to-b from-primary/10 to-white">
        <h1 className="text-3xl md:text-5xl font-bold text-heading text-center mb-3">
          Need a Car Fixed After an Accident? <br />Find Zimbabwe's Most Trusted Panel Beaters.
        </h1>
        <p className="text-lg md:text-xl text-body text-center mb-6">
          Search. Compare. Connect — instantly and directly via WhatsApp or call.
        </p>
        <div className="flex flex-wrap gap-3 mb-7 justify-center">
          <Link
            to="/add-listing"
            className="px-5 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 text-base"
          >
            💼 Add Your Business
          </Link>
          <a
            href="#filters"
            className="px-5 py-3 bg-accent text-white rounded-lg font-semibold shadow hover:bg-accent/90 text-base"
          >
            🔎 Search Directory
          </a>
        </div>
        <div className="w-full max-w-lg flex justify-center">
          <input type="text" placeholder="Search business name..." className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 outline-none" />
          <button className="px-4 py-3 bg-primary text-white rounded-r-lg font-semibold">Search</button>
        </div>
        <div className="flex gap-3 mt-7">
          <Link to="/city/harare" className="flex items-center gap-1 px-4 py-2 bg-grayish rounded-full font-medium text-primary"><MapPin size={18}/>Browse Cities</Link>
          <Link to="/services/panel-beating" className="flex items-center gap-1 px-4 py-2 bg-accent rounded-full font-medium text-white"><Wrench size={18}/>Browse Services</Link>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-8 bg-white flex flex-col items-center">
        <h2 className="text-xl font-bold mb-3">Why Trust PanelBeaters.co.zw?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-primary font-semibold"><Star size={22}/> Verified Listings</div>
          <div className="flex items-center gap-2 text-accent font-semibold"><MessageCircle size={22}/> Direct WhatsApp Contact</div>
          <div className="flex items-center gap-2 text-green-600 font-semibold"><Users size={22}/> Rated by Real Drivers</div>
        </div>
      </section>

      {/* Recently Added Carousel */}
      <section className="py-8 bg-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Recently Added Panel Beaters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {RECENT_LISTINGS.map((shop, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-start">
                <span className="mb-1 text-xs font-semibold bg-accent text-white px-2 rounded">{shop.tags.join(", ")}</span>
                <div className="text-lg font-semibold">{shop.name}</div>
                <div className="text-sm text-gray-500 mb-1">{shop.city}</div>
                <span className="text-yellow-400">{'★'.repeat(shop.star)}<span className="text-gray-300">{'★'.repeat(5 - shop.star)}</span></span>
                <Link to={`/listing/${shop.name.toLowerCase().replace(/\s/g, "-")}`} className="mt-2 text-xs px-2 py-1 bg-primary text-white rounded">View</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters (anchor for scroll) */}
      <section id="filters" className="py-6 bg-white border-t border-b">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-lg mb-2">Find Shops by City or Service</h3>
          {/* Service Bubbles */}
          <div className="flex flex-wrap gap-2 mb-2 justify-center">
            {SERVICES.map((svc) => (
              <ServiceBubble
                key={svc.key}
                label={svc.label}
                icon={svc.icon}
                selected={selectedService === svc.key}
                onClick={() =>
                  setSelectedService((cur) => (cur === svc.key ? null : svc.key))
                }
              />
            ))}
          </div>
          {/* City list */}
          <div className="flex flex-wrap gap-2 mb-2 justify-center">
            {CITIES.map((city) => (
              <Link
                key={city}
                to={`/city/${city.toLowerCase()}`}
                className="px-3 py-1 text-sm rounded border border-primary text-primary bg-white hover:bg-primary hover:text-white transition"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-8 bg-background">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg font-bold mb-3">Latest Articles</h2>
          {DUMMY_BLOGS.map((blog, idx) => (
            <Link to={`/blog/${blog.slug}`} key={idx} className="block bg-white rounded p-4 shadow mb-2 hover:bg-accent/5">
              <div className="font-semibold">{blog.title}</div>
              <p className="text-sm text-gray-500">{blog.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg font-bold mb-3">What Drivers Say</h2>
          <div className="flex flex-col gap-4">
            {DUMMY_TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-100 rounded p-3 italic">
                "{t.quote}" – <b>{t.name}, {t.city}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-accent text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Own a car repair shop?</h2>
        <p className="mb-3 text-lg">Get found by customers across Zimbabwe. Join us today.</p>
        <Link to="/add-listing" className="px-5 py-2 bg-white text-accent font-bold rounded shadow">🔧 Add My Business</Link>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-5 text-center bg-white shadow border-t text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} PanelBeaters.co.zw
          </span>
          <span className="hidden md:inline mx-2">|</span>
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          <span className="hidden md:inline mx-2">|</span>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <div className="mt-2">
          <span className="font-medium text-primary">
            Are you a business owner?
          </span>{" "}
          <Link
            to="/add-listing"
            className="hover:underline text-accent font-medium ml-1"
            title="Feature coming soon"
          >
            Add your business
          </Link>
        </div>
      </footer>
    </div>
  );
}
