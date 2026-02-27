import type { Book, Comment, Meeting, ScheduleItem, VoteSummary } from "@/types/database";

export const fallbackBook: Book = {
  id: 1,
  title: "The Summer Book",
  author: "Tove Jansson",
  description:
    "A delicate portrait of a grandmother and granddaughter spending summer on a remote Finnish island.",
  cover_image:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  start_date: "2026-03-01",
  finish_date: "2026-03-30"
};

export const fallbackSchedule: ScheduleItem[] = [
  { id: 1, week: "Week 1", pages: "Pages 1–50", date: "2026-03-07" },
  { id: 2, week: "Week 2", pages: "Pages 51–120", date: "2026-03-14" },
  { id: 3, week: "Week 3", pages: "Pages 121–180", date: "2026-03-21" },
  { id: 4, week: "Week 4", pages: "Pages 181–240", date: "2026-03-28" }
];

export const fallbackMeetings: Meeting[] = [
  {
    id: 1,
    date: "2026-03-10",
    time: "19:00",
    location: "Nordic Café, Main Street",
    notes: "Opening discussion and first impressions."
  },
  {
    id: 2,
    date: "2026-03-24",
    time: "19:00",
    location: "https://meet.example.com/bookclub",
    notes: "Final chapter discussion and next vote kickoff."
  }
];

export const fallbackComments: Comment[] = [
  {
    id: 1,
    name: "Anna",
    content: "The island setting feels so peaceful and cinematic.",
    created_at: new Date().toISOString()
  }
];

export const fallbackVotes: VoteSummary[] = [
  {
    id: 2,
    title: "Independent People",
    author: "Halldór Laxness",
    cover_image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    vote_count: 3
  },
  {
    id: 3,
    title: "Out Stealing Horses",
    author: "Per Petterson",
    cover_image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    vote_count: 5
  },
  {
    id: 4,
    title: "Kristin Lavransdatter",
    author: "Sigrid Undset",
    cover_image:
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=700&q=80",
    vote_count: 2
  }
];
