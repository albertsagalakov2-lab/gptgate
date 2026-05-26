import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  return NextResponse.json(
    {
      error: "Stripe checkout is disabled for this project.",
    },
    { status: 503 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      error: "Stripe checkout is disabled for this project.",
    },
    { status: 503 }
  );
}
