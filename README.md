# Nordic Book Club (Next.js 14)

A minimalist Scandinavian-style website for a private book club, built with Next.js App Router, Tailwind CSS, and Supabase.

## Tech Stack

- Next.js 14 + React 18
- Tailwind CSS
- Supabase
- TypeScript

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` — App Router pages and API routes
- `components/` — Reusable UI components
- `lib/` — Supabase client and data access functions
- `types/` — Shared TypeScript types
- `supabase/schema.sql` — Database schema

## Features

- Hero with current book details and progress
- Reading schedule cards
- Upcoming meeting list
- Chronological comments with posting form
- Candidate voting with one vote per session (sessionStorage)
- Responsive minimalist Scandinavian UI
