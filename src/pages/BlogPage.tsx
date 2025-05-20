
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "choose-panel-beater-after-accident",
    title: "How to Choose a Panel Beater After an Accident",
    category: "Car Repair Tips",
    date: "2025-01-12",
    author: "Jane Author",
    description: "Learn how to wisely select a panel beater after a car accident to ensure quality and trust for your vehicle’s repair.",
  },
  {
    slug: "spray-vs-panel-beating",
    title: "Spray Painting vs Panel Beating – What’s the Difference?",
    category: "Spray Painting",
    date: "2025-01-15",
    author: "Jane Author",
    description: "We break down the main differences between panel beating and spray painting—when do you need each, and how do you choose?",
  },
  {
    slug: "insurance-panel-beaters-harare",
    title: "Insurance-Approved Panel Beaters in Harare",
    category: "Insurance",
    date: "2025-01-18",
    author: "Jane Author",
    description: "Dream big: Here’s how to check if a panel beater is insurance-approved in Harare and why it matters for your peace of mind.",
  },
  {
    slug: "common-car-body-repairs-costs",
    title: "Common Car Body Repairs and What They Cost",
    category: "Car Care",
    date: "2025-01-22",
    author: "Jane Author",
    description: "Get a rundown of the most common car body repairs and what you can expect to pay, keeping you in charge at the panel shop.",
  },
  {
    slug: "trustworthy-panel-beater-signs",
    title: "How to Tell If a Panel Beater is Trustworthy",
    category: "Trust & Safety",
    date: "2025-01-25",
    author: "Jane Author",
    description: "We uncover red flags and green lights to help you find a reliable panel beater you can trust with your ride.",
  },
  {
    slug: "top-panel-beaters-bulawayo-2025",
    title: "Top Panel Beaters in Bulawayo for 2025",
    category: "Service",
    date: "2025-01-28",
    author: "Jane Author",
    description: "Discover the leading car body shops in Bulawayo, handpicked for quality, service, and reputation for 2025.",
  },
  {
    slug: "verified-panel-beaters-get-more-customers",
    title: "Why Verified Panel Beaters Get More Customers",
    category: "Trust & Marketing",
    date: "2025-02-01",
    author: "Jane Author",
    description: "Verification badges boost trust—here’s why customers gravitate to verified panel beaters and what that means for your business.",
  },
  {
    slug: "benefits-using-local-panel-beaters",
    title: "Benefits of Using Local Panel Beaters",
    category: "Community",
    date: "2025-02-04",
    author: "Jane Author",
    description: "See the advantages of using a local panel beater—supporting community and getting faster, friendlier service.",
  },
  {
    slug: "questions-before-hiring-car-body-shop",
    title: "5 Questions to Ask Before Hiring a Car Body Shop",
    category: "Car Repair Tips",
    date: "2025-02-08",
    author: "Jane Author",
    description: "Don’t get caught off-guard! Ask these five crucial questions before trusting a car body shop with your vehicle.",
  },
  {
    slug: "car-dent-removal-methods",
    title: "Car Dent Removal Methods Explained",
    category: "Car Care",
    date: "2025-02-11",
    author: "Jane Author",
    description: "Dents don’t stand a chance—discover the different professional methods of dent removal (and their pros and cons).",
  },
  {
    slug: "fender-bender-what-to-do",
    title: "What To Do Immediately After a Fender Bender",
    category: "Insurance",
    date: "2025-02-15",
    author: "Jane Author",
    description: "A quick guide on steps to take after a fender bender, protecting you, your passengers, and your car’s value.",
  },
  {
    slug: "how-long-should-body-repairs-take",
    title: "How Long Should Body Repairs Take?",
    category: "Service",
    date: "2025-02-20",
    author: "Jane Author",
    description: "We explain what factors influence the time required for car body repairs—know what to expect from your panel beater.",
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Car Repair Blog</h1>
      <div className="grid gap-4">
        {blogPosts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block p-4 border rounded bg-card shadow hover:bg-gray-50 transition">
            <h2 className="font-semibold text-xl mb-1">{post.title}</h2>
            <p className="text-xs mb-1 text-gray-500">{post.category}</p>
            <p className="text-sm text-gray-700">{post.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {[...new Set(blogPosts.map(b => b.category))].map(cat => (
          <span key={cat} className="bg-primary text-white rounded px-2 py-1 text-xs">{cat}</span>
        ))}
      </div>
    </div>
  );
}
