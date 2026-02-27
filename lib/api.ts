import { fallbackBook, fallbackComments, fallbackMeetings, fallbackSchedule, fallbackVotes } from "@/lib/data";
import { supabase } from "@/lib/supabase";
import type { Book, Comment, Meeting, ScheduleItem, VoteSummary } from "@/types/database";

export async function getCurrentBook(): Promise<Book> {
  if (!supabase) return fallbackBook;

  const { data } = await supabase.from("books").select("*").order("start_date", { ascending: false }).limit(1);
  return data?.[0] ?? fallbackBook;
}

export async function getReadingSchedule(): Promise<ScheduleItem[]> {
  if (!supabase) return fallbackSchedule;

  const { data } = await supabase.from("schedule").select("*").order("date", { ascending: true });
  return data ?? fallbackSchedule;
}

export async function getMeetings(): Promise<Meeting[]> {
  if (!supabase) return fallbackMeetings;

  const { data } = await supabase.from("meetings").select("*").order("date", { ascending: true });
  return data ?? fallbackMeetings;
}

export async function getComments(): Promise<Comment[]> {
  if (!supabase) return fallbackComments;

  const { data } = await supabase.from("comments").select("*").order("created_at", { ascending: true });
  return data ?? fallbackComments;
}

export async function createComment(name: string, content: string): Promise<void> {
  if (!supabase) return;
  await supabase.from("comments").insert({ name, content });
}

export async function getVotes(): Promise<VoteSummary[]> {
  if (!supabase) return fallbackVotes;

  const { data: books } = await supabase.from("books").select("id,title,author,cover_image").order("id");
  const { data: votes } = await supabase.from("votes").select("book_id");

  if (!books) return fallbackVotes;

  const countByBook = (votes ?? []).reduce<Record<number, number>>((acc, vote) => {
    acc[vote.book_id] = (acc[vote.book_id] ?? 0) + 1;
    return acc;
  }, {});

  return books.map((book) => ({ ...book, vote_count: countByBook[book.id] ?? 0 }));
}

export async function createVote(bookId: number): Promise<void> {
  if (!supabase) return;
  await supabase.from("votes").insert({ book_id: bookId });
}
