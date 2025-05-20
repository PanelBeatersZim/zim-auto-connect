
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

function isGoogleMapsUrl(url: string) {
  return (
    url.startsWith("https://maps.app.goo.gl/") ||
    url.startsWith("https://goo.gl/maps/") ||
    url.startsWith("https://www.google.com/maps/")
  );
}

export default function AddListingPage() {
  const [mapsLink, setMapsLink] = useState("");
  const [mapsError, setMapsError] = useState("");

  function handleMapsChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    setMapsLink(value);
    if (value && !isGoogleMapsUrl(value)) {
      setMapsError("Enter a valid Google Maps link.");
    } else {
      setMapsError("");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mapsLink && !isGoogleMapsUrl(mapsLink)) {
      setMapsError("Enter a valid Google Maps link.");
      return;
    }
    // ...rest of submit logic
  }

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-2">Add Your Panel Beater Listing</h1>
      <form className="bg-white rounded shadow p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
        <input className="border rounded px-3 py-2" placeholder="Business Name" />
        <input className="border rounded px-3 py-2" placeholder="City" />
        <input className="border rounded px-3 py-2" placeholder="Phone Number" />
        <input className="border rounded px-3 py-2" placeholder="WhatsApp" />
        <input className="border rounded px-3 py-2" placeholder="Email" />
        <input className="border rounded px-3 py-2" placeholder="Full Address" />
        <textarea className="border rounded px-3 py-2" placeholder="Short Description" />
        {/* New Google Maps URL field */}
        <div>
          <label htmlFor="maps-link" className="font-semibold flex items-center gap-2">
            <MapPin size={18} />
            Google Maps Link
            <span className="text-xs font-normal text-gray-400 ml-1">(optional)</span>
          </label>
          <Input
            id="maps-link"
            value={mapsLink}
            onChange={handleMapsChange}
            placeholder="https://maps.app.goo.gl/…"
            className={`${mapsError ? "border-red-500" : ""}`}
            aria-invalid={!!mapsError}
            type="url"
            autoComplete="off"
          />
          {mapsError && <div className="text-red-600 text-xs mt-1">{mapsError}</div>}
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded mt-2"
        >
          Submit Listing
        </button>
      </form>
      <div className="mt-6 text-xs text-gray-500">
        <b>Tip:</b> Include a Google Maps link. <br />
        Choose your subscription plan after submitting.
      </div>
    </div>
  );
}
