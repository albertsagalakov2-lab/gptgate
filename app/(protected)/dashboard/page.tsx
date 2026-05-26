import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard - GPTGate",
  description: "GPTGate dashboard",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight">
            GPTGate Dashboard
          </h1>

          <p className="mt-4 text-muted-foreground">
            Dashboard is temporarily disabled while the project is being configured.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="mt-2 font-semibold">Setup mode</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-muted-foreground">AI models</p>
              <p className="mt-2 font-semibold">Coming soon</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-muted-foreground">Payments</p>
              <p className="mt-2 font-semibold">Disabled</p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl border px-4 py-3 text-sm font-medium hover:bg-accent"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
