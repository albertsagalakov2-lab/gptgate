import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100).optional(),
  inquiryType: z
    .enum(["general", "support", "sales", "partnership", "press", "other"])
    .optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

function generateTicketId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `GT-${timestamp}-${random}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const ticketId = generateTicketId();

    console.log("Contact form submission:", {
      ticketId,
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      inquiryType: validatedData.inquiryType,
      message: validatedData.message,
    });

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Contact form received. Email sending is disabled for now.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
