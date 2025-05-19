
export default function AddListingPage() {
  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-2">Add Your Panel Beater Listing</h1>
      <form className="bg-white rounded shadow p-4 flex flex-col gap-2">
        <input className="border rounded px-3 py-2" placeholder="Business Name" />
        <input className="border rounded px-3 py-2" placeholder="City" />
        <input className="border rounded px-3 py-2" placeholder="Phone Number" />
        <input className="border rounded px-3 py-2" placeholder="WhatsApp" />
        <input className="border rounded px-3 py-2" placeholder="Email" />
        <input className="border rounded px-3 py-2" placeholder="Full Address" />
        <textarea className="border rounded px-3 py-2" placeholder="Short Description" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2">Submit Listing</button>
      </form>
      <div className="mt-6 text-xs text-gray-500">
        <b>Tip:</b> Include a Google Maps link. <br />
        Choose your subscription plan after submitting.
      </div>
    </div>
  );
}
