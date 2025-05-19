
import { useParams } from "react-router-dom";

export default function CityPage() {
  const { cityname = "city" } = useParams();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-2 capitalize">Panel Beaters in {cityname.replace("-", " ")}</h1>
      <p className="mb-4 text-gray-600">Find trusted panel beaters in {cityname.replace("-", " ")}. Filter by services or scroll for our recommendations!</p>
      <div className="mb-6">
        <select className="rounded border p-2">
          <option>All Services</option>
          <option>Panel Beating</option>
          <option>Spray Painting</option>
          <option>Windscreen Repair</option>
        </select>
      </div>
      <div className="grid gap-4">
        {[1,2].map((idx) => (
          <div key={idx} className="border rounded p-4 bg-card shadow-sm">
            <strong>Demo Shop in {cityname.replace("-", " ")}</strong>
            <div>Services: Panel Beating, Spray Painting</div>
            <button className="mt-2 bg-primary text-white px-3 py-1 rounded">View Details</button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Blog Corner</h2>
        <div className="bg-gray-100 p-3 rounded">
          <strong>Car Repair Tips in {cityname.replace("-", " ")}</strong>
          <p>Did you know... (dummy blog content)</p>
        </div>
      </div>
    </div>
  );
}
