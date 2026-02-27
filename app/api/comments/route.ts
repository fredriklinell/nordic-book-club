import { createComment } from "@/lib/api";
import type { Comment } from "@/types/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; content?: string };

  if (!body.name || !body.content) {
    return NextResponse.json({ error: "Name and comment are required." }, { status: 400 });
  }

  await createComment(body.name, body.content);

  const newComment: Comment = {
    id: Date.now(),
    name: body.name,
    content: body.content,
    created_at: new Date().toISOString()
  };

  return NextResponse.json(newComment);
}
