import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    key: "free" as const,
    name: "Free",
    price: 0,
    features: [
      "One Active Listing",
      "Basic Business Info (Name, City, Service Type)",
      "Appears in Public Search",
      "No Contact Buttons",
      "No Images or Videos",
      "Not Verified",
    ],
    cta: "Start Free",
  },
  {
    key: "standard" as const,
    name: "Standard",
    price: 20,
    features: [
      "All Free Features Included",
      "Call, WhatsApp, and Email Buttons Enabled",
      "Full Business Profile (Address, Hours, Experience)",
      "Upload up to 3 Business Photos",
      "Appear Higher in Search Results",
      "Claim Existing Listings",
    ],
    cta: "Subscribe Now",
  },
  {
    key: "premium" as const,
    name: "Premium",
    price: 50,
    features: [
      "All Standard Features Included",
      "Verified Badge on Your Listing",
      "Upload Up to 10 High-Quality Images",
      "Add 1 Promotional Video",
      "Featured in Blog & Newsletter",
      "Priority Support from Admin Team",
      "Appear at Top in Search Filters",
    ],
    cta: "Subscribe Now",
  },
];

function planKeyToRole(
  key: "free" | "standard" | "premium"
): "visitor" | "business_owner" | "admin" {
  if (key === "standard") return "business_owner";
  if (key === "premium") return "admin";
  return "visitor";
}

export default function PricingPage() {
  const { user } = useAuth();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubscribe(planKey: "free" | "standard" | "premium") {
    if (!user) {
      navigate("/auth");
      return;
    }
    setLoadingId(planKey);
    setMessage(null);
    try {
      await supabase.from("user_roles").delete().eq("user_id", user.id);

      await supabase.from("user_roles").insert([
        {
          user_id: user.id,
          role: planKeyToRole(planKey),
        },
      ]);
      setMessage(
        `You are now on the ${
          planKey.charAt(0).toUpperCase() + planKey.slice(1)
        } plan.`
      );
    } catch (err: any) {
      setMessage("Error updating subscription.");
    }
    setLoadingId(null);
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Pricing & Subscription Plans
      </h1>
      {message && (
        <div className="text-green-600 text-center mb-6">{message}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className="bg-white rounded-lg shadow p-6 flex flex-col"
          >
            <h2 className="text-xl font-bold mb-2 text-center">{plan.name}</h2>
            <div className="mb-4 text-3xl font-bold text-center text-primary">
              ${plan.price}
            </div>
            <ul className="flex-grow mb-6 space-y-2 text-gray-700 list-disc list-inside">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="bg-primary text-white px-6 py-2 rounded font-semibold w-full"
              onClick={() => handleSubscribe(plan.key)}
              disabled={loadingId === plan.key}
            >
              {loadingId === plan.key ? "Processing..." : plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
