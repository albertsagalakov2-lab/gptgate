import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  return NextResponse.json(
    {
      received: true,
      message: "Stripe webhook is disabled for this project.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Stripe webhook is disabled for this project.",
    },
    { status: 200 }
  );
}
