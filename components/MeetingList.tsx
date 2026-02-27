import { SectionHeader } from "@/components/SectionHeader";
import type { Meeting } from "@/types/database";

export function MeetingList({ meetings }: { meetings: Meeting[] }) {
  return (
    <section className="section-container">
      <SectionHeader title="Upcoming Meetings" subtitle="Simple plans for thoughtful conversations." />
      <div className="grid gap-4 md:grid-cols-2">
        {meetings.map((meeting) => (
          <article key={meeting.id} className="card fade-in hover:-translate-y-0.5 hover:shadow-md">
            <p className="font-serif text-2xl">{meeting.date}</p>
            <p className="mt-1 text-sm text-nordic-charcoal/65">{meeting.time}</p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-nordic-charcoal/60">Location</p>
            <p className="mt-1 text-base break-words">{meeting.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-nordic-charcoal/80">{meeting.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
