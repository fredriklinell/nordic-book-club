import Image from "next/image";
import type { Book } from "@/types/database";

function getProgress(startDate: string, finishDate: string) {
  const start = new Date(startDate).getTime();
  const finish = new Date(finishDate).getTime();
  const now = Date.now();
  if (now <= start) return 0;
  if (now >= finish) return 100;
  return Math.round(((now - start) / (finish - start)) * 100);
}

export function BookHero({ book }: { book: Book }) {
  const progress = getProgress(book.start_date, book.finish_date);

  return (
    <section className="section-container pt-16 md:pt-24">
      <div className="grid gap-8 rounded-3xl border border-nordic-gray bg-white p-6 shadow-soft md:grid-cols-[320px_1fr] md:p-10 fade-in">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-nordic-gray">
          <Image src={book.cover_image} alt={book.title} fill className="object-cover" priority />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-nordic-charcoal/60">Current Book</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{book.title}</h1>
          <p className="mt-2 text-lg text-nordic-charcoal/75">{book.author}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-nordic-charcoal/80">{book.description}</p>

          <div className="mt-8 space-y-2 text-sm text-nordic-charcoal/70">
            <p>
              Start: <span className="font-medium">{book.start_date}</span>
            </p>
            <p>
              Finish: <span className="font-medium">{book.finish_date}</span>
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Reading Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-nordic-gray">
              <div
                className="h-2 rounded-full bg-nordic-beige transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
