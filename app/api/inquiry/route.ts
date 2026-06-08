import { NextResponse } from "next/server";
import { inquiryGoals } from "@/data/site";

type InquiryPayload = {
  name?: unknown;
  phone?: unknown;
  goal?: unknown;
  message?: unknown;
  website?: unknown;
};

const maxLengths = {
  name: 120,
  phone: 20,
  message: 1200,
};

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = normalize(payload.name, maxLengths.name);
  const phone = normalize(payload.phone, maxLengths.phone);
  const goal = normalize(payload.goal, 80);
  const message = normalize(payload.message, maxLengths.message);

  if (!name || !isPhone(phone) || !inquiryGoals.includes(goal as (typeof inquiryGoals)[number])) {
    return NextResponse.json({ error: "Please provide a valid name, phone number, and goal." }, { status: 422 });
  }

  const inquiry = {
    id: crypto.randomUUID(),
    name,
    phone,
    goal,
    message,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Inquiry service is temporarily unavailable." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, id: inquiry.id }, { status: 202 });
}

function normalize(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isPhone(value: string) {
  return /^[0-9+\-\s()]{7,20}$/.test(value);
}
