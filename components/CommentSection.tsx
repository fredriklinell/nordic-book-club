"use client";

import { useState } from "react";
import type { Comment } from "@/types/database";
import { SectionHeader } from "@/components/SectionHeader";

type CommentSectionProps = {
  initialComments: Comment[];
};

export function CommentSection({ initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setLoading(true);
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content })
    });

    if (response.ok) {
      const newComment = (await response.json()) as Comment;
      setComments((prev) => [...prev, newComment]);
      setContent("");
    }
    setLoading(false);
  }

  return (
    <section className="section-container">
      <SectionHeader title="Discussion" subtitle="Share reflections, questions, and favorite passages." />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="card space-y-4">
          {comments.map((comment) => (
            <article key={comment.id} className="rounded-2xl bg-nordic-offwhite p-4 fade-in">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium">{comment.name}</h3>
                <time className="text-xs text-nordic-charcoal/60">
                  {new Date(comment.created_at).toLocaleString()}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-nordic-charcoal/80">{comment.content}</p>
            </article>
          ))}
        </div>

        <form onSubmit={submitComment} className="card flex flex-col gap-4">
          <label className="text-sm font-medium">
            Name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-nordic-gray bg-white px-3 py-2 text-sm outline-none transition focus:border-nordic-beige"
              placeholder="Your name"
            />
          </label>

          <label className="text-sm font-medium">
            Comment
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="mt-1 h-36 w-full rounded-xl border border-nordic-gray bg-white px-3 py-2 text-sm outline-none transition focus:border-nordic-beige"
              placeholder="Share your thoughts"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex w-fit items-center rounded-xl bg-nordic-charcoal px-5 py-2 text-sm text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post comment"}
          </button>
        </form>
      </div>
    </section>
  );
}
