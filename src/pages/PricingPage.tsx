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
      "1 Listing, Basic Info, Appears in Search",
    ],
    cta: "Start Free",
  },
  {
    key: "standard" as const,
    name: "Standard",
    price: 20,
    features: [
      "All Free + Detailed Info, Call/WhatsApp Buttons, 3 Photo Uploads, No Video",
    ],
    cta: "Subscribe Now",
  },
  {
    key: "premium" as const,
    name: "Premium",
    price: 50,
    features: [
      "All Standard + Verified Badge, Image Gallery with 10 Photo Uploads, Video Upload",
    ],
    cta: "Subscribe Now",
  },
];

function planKeyToRole(
  key: "free" | "standard" | "premium"
): "visitor" | "business_owner" | "admin" {
  if (key === "standard") return "business_owner";
  if (key === "premium") return "admin"; // Use "admin" if you want premium users to have the most privileges; otherwise, create a new role in your enum!
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
    // Store the user's plan in user_roles (strict typing)
    try {
      await supabase.from("user_roles").delete().eq("user_id", user.id);

      // Correct typing
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
      <h1 className="text-3xl font-bold text-center mb-10">Pricing & Subscription Plans</h1>
      {message && <div className="text-green-600 text-center mb-6">{message}</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.key} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-3">{plan.name}</h2>
            <div className="mb-2 text-3xl font-bold text-primary">${plan.price}</div>
            <ul className="text-left mb-8 space-y-2">
              {plan.features.map(f => (
                <li key={f} className="text-gray-700">{f}</li>
              ))}
            </ul>
            <button
              className="bg-primary text-white px-6 py-2 mt-auto rounded font-semibold w-full"
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
