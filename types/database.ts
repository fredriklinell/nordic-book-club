export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover_image: string;
  start_date: string;
  finish_date: string;
};

export type ScheduleItem = {
  id: number;
  week: string;
  pages: string;
  date: string;
};

export type Meeting = {
  id: number;
  date: string;
  time: string;
  location: string;
  notes: string;
};

export type Comment = {
  id: number;
  name: string;
  content: string;
  created_at: string;
};

export type VoteBook = {
  id: number;
  title: string;
  author: string;
  cover_image: string;
};

export type VoteSummary = VoteBook & {
  vote_count: number;
};
