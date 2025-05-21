
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    // Redirect to panel-beaters for now
    navigate(`/services/panel-beaters${search ? `?q=${encodeURIComponent(search)}` : ""}`);
  }

  return (
    <section
      className="relative w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=60')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 text-center text-white py-6 px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 font-work">
          Zimbabwe&apos;s Most Trusted <span className="text-primary">Panel Beaters</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 font-noto">
          Compare and connect with reliable car repair businesses. Search by location, service, or business name!
        </p>
        <form
          onSubmit={handleSearch}
          className="mx-auto flex max-w-lg"
          aria-label="Service search"
        >
          <input
            className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 outline-none placeholder:text-gray-400 text-gray-900"
            type="text"
            placeholder="Search panel beaters…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search panel beaters"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-primary text-white rounded-r-lg font-semibold hover:bg-primary/90 transition"
            aria-label="Search"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
