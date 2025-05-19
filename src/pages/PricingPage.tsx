
export default function PricingPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Pricing & Plans</h1>
      <table className="w-full mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2">Plan</th>
            <th className="py-2">Features</th>
            <th className="py-2">Monthly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">Free</td>
            <td>1 Listing, Basic Info, Appear in Search</td>
            <td>$0</td>
          </tr>
          <tr>
            <td className="font-semibold">Standard</td>
            <td>All Free + Verified Badge, Call/WhatsApp Buttons</td>
            <td>$10</td>
          </tr>
          <tr>
            <td className="font-semibold">Premium</td>
            <td>All Standard + Featured Placement, Image Gallery</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-primary text-white px-6 py-2 rounded font-semibold">Subscribe Now</button>
    </div>
  );
}
