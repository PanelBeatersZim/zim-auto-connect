
import { Phone, Whatsapp, Mail, Copy } from "lucide-react";

type Listing = {
  businessName: string;
  city: string;
  services: string[];
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  years: number;
  vehicles: string[];
  badges?: ("Verified" | "Recommended" | "Top Rated")[];
  starRating: number; // 1-5
};

type Props = {
  listing: Listing;
};

const badgeStyle = {
  Verified: "bg-badgeVerified text-white",
  Recommended: "bg-badgeRecommended text-white",
  "Top Rated": "bg-badgeTopRated text-white",
};

export function ListingCard({ listing }: Props) {
  return (
    <div className="bg-card rounded-lg shadow-md p-4 mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-heading">{listing.businessName}</h3>
        <div className="flex space-x-1">
          {listing.badges?.map((badge) => (
            <span
              key={badge}
              className={`px-2 py-0.5 text-xs rounded font-semibold ${badgeStyle[badge] || "bg-gray-200 text-gray-600"}`}
              title={badge}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <span>{listing.city}</span>
        <span className="mx-2">•</span>
        <span className="flex items-center">
          <StarIcons rating={listing.starRating} />
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {listing.services.map((svc) => (
          <span key={svc} className="bg-grayish text-sm px-2 py-0.5 rounded">{svc}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-center mb-2">
        <ContactButton
          icon={<Phone size={18} />}
          label="Call"
          link={`tel:${listing.phone}`}
        />
        <ContactButton
          icon={<Whatsapp size={18} />}
          label="WhatsApp"
          link={`https://wa.me/${listing.whatsapp.replace(/\D/g, "")}`}
        />
        <ContactButton
          icon={<Mail size={18} />}
          label="Email"
          link={`mailto:${listing.email}`}
        />
        <CopyPhoneButton phone={listing.phone} />
      </div>
      <div className="text-xs text-gray-500">Years in business: {listing.years}</div>
      <div className="text-xs text-gray-500">Address: {listing.address}</div>
    </div>
  );
}

function ContactButton({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-primary/90 transition shadow"
      target={label === "Email" ? "_self" : "_blank"}
      rel="noopener"
      style={{ minWidth: "78px", justifyContent: "center" }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

import { useState } from "react";
function CopyPhoneButton({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="flex items-center space-x-1 bg-accent text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-accent/90 transition shadow"
      onClick={() => {
        navigator.clipboard.writeText(phone);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      title="Copy phone number"
      style={{ minWidth: "78px", justifyContent: "center" }}
    >
      <Copy size={18} />
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}

function StarIcons({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
          width={16}
          height={16}
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1}
          viewBox="0 0 20 20"
        >
          <polygon points="10,2 12.3,7.6 18,8 13.5,12 15,17.5 10,14.5 5,17.5 6.5,12 2,8 7.7,7.6" />
        </svg>
      ))}
    </span>
  );
}

export default ListingCard;
