
import { useParams } from "react-router-dom";

export default function ClaimListingPage() {
  const { listing } = useParams();

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-2xl mb-2 font-bold">Claim Listing: {listing}</h1>
      <p className="mb-4">If this is your business, you can claim it to update details and unlock more features!</p>
      <ul className="list-disc mb-3 ml-5 text-gray-700">
        <li>Step 1: Verify ownership via business call or email.</li>
        <li>Step 2: Complete the verification form below.</li>
      </ul>
      <form className="bg-white rounded p-4 flex flex-col gap-2 border">
        <input className="border rounded px-3 py-2" placeholder="Your Name" />
        <input className="border rounded px-3 py-2" placeholder="Email or Phone (must match listing)" />
        <textarea className="border rounded px-3 py-2" placeholder="Describe your connection to the business" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2">Claim Listing</button>
      </form>
      <div className="mt-6 text-xs">Having trouble? <b>Contact Admin</b> at <a href="mailto:support@panelbeaters.co.zw" className="text-accent underline">support@panelbeaters.co.zw</a></div>
    </div>
  );
}
