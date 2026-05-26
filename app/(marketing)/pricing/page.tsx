import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - GPTGate",
  description: "Simple access to AI models in one place.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For testing the platform.",
    features: ["Basic AI chat", "Limited usage", "Community support"],
  },
  {
    name: "Pro",
    price: "Coming soon",
    description: "For active users.",
    features: ["More AI models", "Higher limits", "Chat history"],
  },
  {
    name: "Business",
    price: "Coming soon",
    description: "For teams and projects.",
    features: ["Team access", "Advanced limits", "Priority support"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple AI access
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            GPTGate gives you access to different AI models from one interface.
            Payments are disabled for now while the project is in development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-3 text-3xl font-bold">{plan.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                href="/dashboard"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium hover:bg-accent"
              >
                Open dashboard
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
