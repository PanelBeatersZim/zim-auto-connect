
import { useParams } from "react-router-dom";

export default function BlogPostPage() {
  const { slug } = useParams();

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Blog: {slug?.replace("-", " ")}</h1>
      <p className="mb-2 text-xs text-gray-400">By <b>Jane Author</b> | Jan 10, 2025</p>
      <img src="https://placehold.co/600x200" alt="Blog Post" className="rounded mb-3" />
      <div className="mb-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut magna vel sapien fermentum dictum. (Dummy blog post...)</p>
      </div>
      <div className="mt-6 text-sm text-gray-600">Tagged: Car Repair Tips</div>
    </div>
  );
}
