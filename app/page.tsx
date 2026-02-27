import { BookHero } from "@/components/BookHero";
import { CommentSection } from "@/components/CommentSection";
import { MeetingList } from "@/components/MeetingList";
import { ReadingSchedule } from "@/components/ReadingSchedule";
import { VotingSection } from "@/components/VotingSection";
import { getComments, getCurrentBook, getMeetings, getReadingSchedule, getVotes } from "@/lib/api";

export default async function HomePage() {
  const [book, schedule, meetings, comments, votes] = await Promise.all([
    getCurrentBook(),
    getReadingSchedule(),
    getMeetings(),
    getComments(),
    getVotes()
  ]);

  return (
    <main>
      <header className="section-container pb-0 pt-8 md:pt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-nordic-charcoal/60">Private Circle</p>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl">Nordic Book Club</h1>
      </header>
      <BookHero book={book} />
      <ReadingSchedule schedule={schedule} />
      <MeetingList meetings={meetings} />
      <CommentSection initialComments={comments} />
      <VotingSection initialVotes={votes} />
    </main>
  );
}
