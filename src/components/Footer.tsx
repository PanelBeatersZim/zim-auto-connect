
import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-background mt-16 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <div className="text-lg font-bold mb-2 text-primary">About PanelBeaters.co.zw</div>
          <p className="mb-2">Zimbabwe's most trusted directory for car body repair, paint, and accident services.</p>
          <Link to="/why-trust-us" className="underline hover:text-primary block mb-2">Why Trust Us</Link>
          <Link to="/contact" className="underline hover:text-primary block">Contact Support</Link>
        </div>
        {/* Column 2: Quick Links */}
        <div>
          <div className="text-lg font-bold mb-2 text-primary">Quick Links</div>
          <Link to="/add-listing" className="block hover:underline mb-1">Add Your Business</Link>
          <Link to="/claim/test-listing" className="block hover:underline mb-1">Claim Your Listing</Link>
          <Link to="/pricing" className="block hover:underline mb-1">Subscription Pricing</Link>
          <Link to="/terms" className="block hover:underline mb-1">Terms &amp; Conditions</Link>
          <Link to="/privacy" className="block hover:underline">Privacy Policy</Link>
        </div>
        {/* Column 3: Find Panel Beaters */}
        <div>
          <div className="text-lg font-bold mb-2 text-primary">Find Panel Beaters</div>
          <Link to="/city/harare" className="block hover:underline mb-1">Panel Beaters in Harare</Link>
          <Link to="/services/spray-painting" className="block hover:underline mb-1">Spray Painting in Bulawayo</Link>
          <Link to="/services/windscreen" className="block hover:underline mb-1">Windscreen Repair in Gweru</Link>
          <Link to="/services/dent" className="block hover:underline mb-1">Dent Removal in Mutare</Link>
          <Link to="/browse-all" className="block hover:underline">View All</Link>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="bg-white border-t py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {year} PanelBeaters.co.zw. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://wa.me/263771234567" target="_blank" rel="noopener" aria-label="WhatsApp"><MessageCircle size={20}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
