import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "For individuals or small teams getting started.",
    features: ["1 project", "Basic support", "Email access"],
  },
  {
    name: "Growth",
    price: "$149",
    description: "For teams that need more structure and support.",
    features: ["Up to 5 projects", "Priority support", "Team access"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For approved users and larger deployments.",
    features: ["Unlimited projects", "Dedicated support", "Private dashboard access"],
  },
];

export default function PricingPage() {
  return (
    <main className="page-wrap">
      <section className="premium-card premium-card--single">
        <div className="section-top">
          <span className="eyebrow">Pricing</span>
          <h1 className="page-title">
            Simple <span className="grad">plans</span>
          </h1>
          <p className="page-subtitle">
            Choose a plan that fits your needs today. Private dashboard access
            can be enabled only for approved paid users later.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className="pricing-card">
              <div className="pricing-head">
                <h2>{plan.name}</h2>
                <p className="pricing-price">{plan.price}</p>
              </div>

              <p className="pricing-desc">{plan.description}</p>

              <ul className="pricing-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link href="/signup" className="hero-primary auth-btn pricing-btn">
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </div>

        <div className="page-actions">
          <Link href="/contact" className="secondary-link">
            Contact us
          </Link>
          <Link href="/" className="secondary-link">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}