"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import type { VoteSummary } from "@/types/database";

type VotingSectionProps = {
  initialVotes: VoteSummary[];
};

const STORAGE_KEY = "nordic-vote-cast";

export function VotingSection({ initialVotes }: VotingSectionProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setHasVoted(window.sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  async function vote(bookId: number) {
    if (hasVoted || isVoting) return;

    setIsVoting(true);
    const response = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId })
    });

    if (response.ok) {
      setVotes((prev) => prev.map((book) => (book.id === bookId ? { ...book, vote_count: book.vote_count + 1 } : book)));
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setHasVoted(true);
    }
    setIsVoting(false);
  }

  return (
    <section className="section-container pb-16 md:pb-24">
      <SectionHeader title="Vote for the Next Book" subtitle="Each member gets one vote per session." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {votes.map((book) => (
          <article key={book.id} className="card fade-in">
            <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-nordic-gray">
              <Image src={book.cover_image} alt={book.title} fill className="object-cover" />
            </div>
            <h3 className="font-serif text-2xl leading-tight">{book.title}</h3>
            <p className="mt-1 text-sm text-nordic-charcoal/70">{book.author}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm">{book.vote_count} votes</span>
              <button
                onClick={() => vote(book.id)}
                disabled={hasVoted || isVoting}
                className="rounded-xl border border-nordic-charcoal px-4 py-2 text-sm transition hover:bg-nordic-charcoal hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {hasVoted ? "Voted" : "Vote"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
