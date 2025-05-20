
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const LOGO = (
  <span className="flex items-center gap-2 font-bold text-xl text-primary">
    <span className="inline-block w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center">PB</span>
    PanelBeaters.co.zw
  </span>
);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/city/harare", label: "Browse by City" },
  { to: "/services/panel-beating", label: "Browse by Service" },
  { to: "/add-listing", label: "Add Your Business" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keyboard accessibility: close menu on Escape key
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" aria-label="Home" className="flex items-center">{LOGO}</Link>
        {/* Main Nav */}
        <ul className="hidden md:flex gap-4 items-center">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  `font-semibold px-3 py-2 rounded ${isActive ? "text-primary underline underline-offset-4" : "text-gray-700 hover:bg-accent/20"}`
                }
                aria-label={link.label}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Auth buttons outside burger menu */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/auth" className="px-4 py-2 rounded font-bold text-primary border border-primary hover:bg-primary hover:text-white transition">Sign In</Link>
          <Link to="/register" className="px-4 py-2 rounded font-bold bg-primary text-white hover:bg-primary/90 transition">Register</Link>
        </div>
        {/* Burger trigger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-haspopup="true"
        >
          <Menu size={28} />
        </button>
      </nav>
      {/* Mobile burger menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <span>{LOGO}</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={28}/></button>
            </div>
            <ul className="flex flex-col gap-1 py-3 px-5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-3 font-semibold text-base ${
                        isActive
                          ? "text-primary underline underline-offset-4"
                          : "text-gray-700"
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* Auth buttons remain outside burger menu */}
            <div className="flex flex-col gap-2 px-5 mt-auto pb-6">
              <Link to="/auth" className="w-full text-center px-4 py-2 rounded font-bold text-primary border border-primary hover:bg-primary hover:text-white transition">Sign In</Link>
              <Link to="/register" className="w-full text-center px-4 py-2 rounded font-bold bg-primary text-white hover:bg-primary/90 transition">Register</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
