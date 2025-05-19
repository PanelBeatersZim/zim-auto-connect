// V1: Modern mobile-first Zimbabwe Panel Beaters Directory Landing Page

import { useState } from "react";
import ListingCard from "../components/ListingCard";
import { ServiceBubble } from "../components/ServiceBubble";
import { Phone, Mail, MessageCircle } from "lucide-react";

const SERVICES = [
  { key: "panel-beating", label: "Panel Beating" },
  { key: "spray-painting", label: "Spray Painting" },
  { key: "windscreen", label: "Windscreen Repair" },
  { key: "towing", label: "Towing" },
  { key: "dent", label: "Dent Removal" },
];

const CITIES = [
  "Harare",
  "Bulawayo",
  "Mutare",
  "Gweru",
  "Masvingo",
  "Kwekwe",
  "Chinhoyi",
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
      {/* Header */}
      <header className="pt-8 pb-3 px-4 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-heading mb-2 text-center">
          Find Trusted Panel Beaters & Auto Body Shops in Zimbabwe
        </h1>
        <p className="text-lg text-body text-center mb-5 max-w-xl">
          Search & connect instantly with verified car body shops across Zimbabwe.
        </p>
        {/* Contact Buttons, prominent on mobile */}
        <div className="flex gap-3 mb-5">
          <a
            href="https://wa.me/263772123456"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500 text-white font-medium text-sm shadow hover:bg-green-600 transition"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href="tel:0772123456"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-white font-medium text-sm shadow hover:bg-primary/90 transition"
          >
            <Phone size={20} />
            Call
          </a>
          <a
            href="mailto:info@panelbeaters.co.zw"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-white font-medium text-sm shadow hover:bg-accent/90 transition"
          >
            <Mail size={20} />
            Email
          </a>
        </div>

        {/* Search bar */}
        <div className="w-full max-w-md flex items-center bg-white rounded-lg border px-2 md:px-4 py-2 shadow mb-4">
          <input
            className="flex-1 outline-none text-body bg-transparent px-2 text-base"
            type="text"
            placeholder="Search by business name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Service Bubbles */}
        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {SERVICES.map((svc) => (
            <ServiceBubble
              key={svc.key}
              label={svc.label}
              selected={selectedService === svc.key}
              onClick={() =>
                setSelectedService((cur) => (cur === svc.key ? null : svc.key))
              }
            />
          ))}
        </div>
        {/* City Dropdown (simple inline for now) */}
        <div className="flex flex-wrap gap-2 items-center justify-center mt-2">
          <span className="text-sm text-gray-600">City:</span>
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() =>
                setSelectedCity((cur) => (cur === city ? null : city))
              }
              className={`px-3 py-1 text-sm rounded border transition ${
                selectedCity === city
                  ? "bg-primary text-white border-primary font-semibold"
                  : "bg-white text-primary border-primary"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </header>
      {/* Listings grid */}
      <main className="flex-1 w-full max-w-xl mx-auto mt-3 px-2 pb-14">
        {filtered.length ? (
          filtered.map((listing, idx) => (
            <ListingCard listing={listing} key={listing.businessName + idx} />
          ))
        ) : (
          <div className="text-body text-center py-14">No businesses found. Try changing filters!</div>
        )}
      </main>
      {/* Footer */}
      <footer className="mt-auto py-5 text-center bg-white shadow border-t text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} PanelBeaters.co.zw
          </span>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mt-2">
          <span className="font-medium text-primary">
            Are you a business owner?
          </span>{" "}
          <a
            href="#"
            className="hover:underline text-accent font-medium ml-1"
            title="Feature coming soon"
          >
            Add your business
          </a>
        </div>
      </footer>
    </div>
  );
}
