import { createVote } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { bookId?: number };

  if (!body.bookId) {
    return NextResponse.json({ error: "Book ID is required." }, { status: 400 });
  }

  await createVote(body.bookId);

  return NextResponse.json({ success: true });
}
