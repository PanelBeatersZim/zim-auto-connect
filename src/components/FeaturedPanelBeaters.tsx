import { Link } from "react-router-dom";

// Dummy data: add "category" to each item for accurate routing.
const dummy = [
  {
    name: "Auto Body Experts",
    location: "Harare",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=60",
    slug: "auto-body-experts",
    category: "panel-beating"
  },
  {
    name: "ProFix Panelbeaters",
    location: "Bulawayo",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=60",
    slug: "profix-panelbeaters",
    category: "panel-beating"
  },
  {
    name: "Kwese Body Shop",
    location: "Mutare",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=60",
    slug: "kwese-body-shop",
    category: "panel-beating"
  },
];

export default function FeaturedPanelBeaters() {
  return (
    <section aria-label="Featured panel beaters" className="bg-white py-6 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Featured Panel Beaters</h2>
        <div className="overflow-x-auto pb-2">
          <ul className="flex gap-5 min-w-[360px]">
            {dummy.map((item) => (
              <li
                key={item.slug}
                className="flex-shrink-0 w-64 bg-background rounded-lg shadow p-4 flex flex-col text-left items-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg w-full mb-3 h-32 object-cover"
                  loading="lazy"
                />
                <div className="text-lg font-semibold mb-1">{item.name}</div>
                <div className="text-xs text-gray-500 mb-1">{item.location}</div>
                <div className="font-medium text-yellow-400">
                  {'★'.repeat(Math.round(item.rating))}
                  <span className="text-gray-300">{'★'.repeat(5 - Math.round(item.rating))}</span>
                  <span className="ml-2 text-sm text-gray-700">{item.rating}</span>
                </div>
                <Link
                  to={`/services/${item.category}/${item.slug}`}
                  className="mt-2 text-xs px-2 py-1 bg-primary text-white rounded hover:bg-primary/90"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
