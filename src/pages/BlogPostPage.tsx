
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const articles = [
  {
    slug: "choose-panel-beater-after-accident",
    title: "How to Choose a Panel Beater After an Accident",
    description: "How to wisely choose a reliable, verifiable panel beater you can trust after an accident in Zimbabwe.",
    meta: {
      title: "Choose a Panel Beater After an Accident | PanelBeaters.co.zw",
      description: "Find top tips on choosing a skilled panel beater after an accident. Build trust, get quality repair, and avoid scams in Zimbabwe."
    },
    author: "Jane Author",
    date: "2025-01-12",
    category: "Car Repair Tips",
    content: (
      <>
        <h2 className="font-semibold text-lg mb-2">Why Choose Carefully?</h2>
        <p>
          After an accident, your car deserves the best repair. Choosing a panel beater isn't just about getting dents out—you want a shop you can trust, with transparent pricing and genuine parts.
        </p>
        <h2 className="font-semibold text-lg mt-4 mb-2">Checklist for Choosing</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Check reviews on <Link className="text-primary underline" to="/city/harare">Harare panel beaters</Link></li>
          <li>Ask about badges and verified status (see our <Link to="/why-trust-us" className="text-primary underline">trust policy</Link>)</li>
          <li>Visit a <Link className="text-primary underline" to="/services/panel-beating">reputable shop</Link> before deciding</li>
        </ul>
        <h2 className="font-semibold text-lg mt-4 mb-2">Next Steps</h2>
        <p>
          Always get a written estimate. For more tips, return to our <Link to="/" className="text-primary underline">homepage</Link>.
        </p>
        <div className="mt-4 gap-2 flex flex-wrap">
          <span className="bg-primary text-white px-2 py-1 rounded text-xs">Car Repair Tips</span>
        </div>
      </>
    ),
  },
  // ... 11 more articles (follow this format, unique slug, title, meta, content, etc.)
];

// For demonstration, render the first article if no match.
export default function BlogPostPage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug) || articles[0];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Helmet>
        <title>{article.meta.title}</title>
        <meta name="description" content={article.meta.description} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <div className="mb-2 text-xs text-gray-400">
        By <b>{article.author}</b> | {article.date}
      </div>
      <div className="mb-6">{article.content}</div>
      <div className="mt-6 text-sm text-gray-600">Back to <Link to="/blog" className="text-primary underline">Blog</Link></div>
    </div>
  );
}
