
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { category = "category" } = useParams();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-2 capitalize">Top {category.replace("-", " ")} Services in Zimbabwe</h1>
      <p className="mb-4 text-gray-600">Find the best {category.replace("-", " ")} providers. All shops are rated and reviewed by real customers!</p>
      <div className="mb-6">
        <input className="border p-2 rounded w-full" placeholder="Filter by city..." />
      </div>
      <div className="grid gap-4">
        {[1,2,3].map((idx) => (
          <div key={idx} className="border rounded p-4 bg-card shadow-sm">
            <strong>Demo Shop #{idx}</strong>
            <div>City: Harare</div>
            <div>Services: {category.replace("-", " ")}</div>
            <button className="mt-2 bg-primary text-white px-3 py-1 rounded">View Details</button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Category FAQs</h2>
        <ul>
          <li>How do I find a trusted shop?</li>
          <li>What’s the average price for {category.replace("-", " ")}?</li>
        </ul>
      </div>
    </div>
  );
}
