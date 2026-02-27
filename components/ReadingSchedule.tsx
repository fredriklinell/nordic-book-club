import type { ScheduleItem } from "@/types/database";
import { SectionHeader } from "@/components/SectionHeader";

export function ReadingSchedule({ schedule }: { schedule: ScheduleItem[] }) {
  return (
    <section className="section-container">
      <SectionHeader title="Reading Schedule" subtitle="A calm weekly pace to help everyone stay in step." />
      <div className="grid gap-4">
        {schedule.map((item) => (
          <article key={item.id} className="card fade-in hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-serif text-2xl">{item.week}</h3>
              <time className="text-sm text-nordic-charcoal/60">{item.date}</time>
            </div>
            <p className="mt-3 text-lg">{item.pages}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
