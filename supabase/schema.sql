-- =============================================================
-- DMHCA Admin Schema (Supabase / Postgres)
-- Run this once in the Supabase SQL editor.
-- =============================================================

-- Programs (courses) ------------------------------------------
create table if not exists public.programs (
  id           text primary key,
  slug         text unique not null,
  title        text not null,
  category     text not null check (category in ('Fellowship','PG Diploma','Certificate')),
  data         jsonb not null,                 -- full program object (overview, modules, faqs, …)
  published    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index if not exists programs_category_idx on public.programs(category);
create index if not exists programs_published_idx on public.programs(published);

-- Faculty ------------------------------------------------------
create table if not exists public.faculty (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  role         text,
  qualification text,
  bio          text,
  image_url    text,
  display_order int not null default 0,
  published    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Reviews ------------------------------------------------------
create table if not exists public.reviews (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  course       text,
  rating       int check (rating between 1 and 5),
  text         text not null,
  image_url    text,
  display_order int not null default 0,
  published    boolean not null default true,
  created_at   timestamptz not null default now()
);

-- Inquiries (contact-form leads) -------------------------------
create table if not exists public.inquiries (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text,
  phone        text,
  course       text,
  message      text,
  source_page  text,
  status       text not null default 'new' check (status in ('new','contacted','enrolled','closed')),
  created_at   timestamptz not null default now()
);
create index if not exists inquiries_status_idx on public.inquiries(status);
create index if not exists inquiries_created_at_idx on public.inquiries(created_at desc);

-- Static pages (about, privacy, terms, …) ----------------------
create table if not exists public.pages (
  id           text primary key,               -- e.g. 'about', 'privacy-policy'
  title        text not null,
  content      jsonb not null,                 -- structured blocks
  updated_at   timestamptz not null default now()
);

-- updated_at trigger -------------------------------------------
create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists touch_programs on public.programs;
create trigger touch_programs before update on public.programs
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_faculty on public.faculty;
create trigger touch_faculty before update on public.faculty
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_pages on public.pages;
create trigger touch_pages before update on public.pages
  for each row execute function public.touch_updated_at();

-- Row-Level Security ------------------------------------------
-- The admin panel uses the service-role key which bypasses RLS.
-- Public read for the website is granted via the anon role below.
alter table public.programs   enable row level security;
alter table public.faculty    enable row level security;
alter table public.reviews    enable row level security;
alter table public.inquiries  enable row level security;
alter table public.pages      enable row level security;

-- Public reads (anon) — published rows only
drop policy if exists programs_anon_read on public.programs;
create policy programs_anon_read on public.programs for select to anon using (published = true);

drop policy if exists faculty_anon_read on public.faculty;
create policy faculty_anon_read on public.faculty for select to anon using (published = true);

drop policy if exists reviews_anon_read on public.reviews;
create policy reviews_anon_read on public.reviews for select to anon using (published = true);

drop policy if exists pages_anon_read on public.pages;
create policy pages_anon_read on public.pages for select to anon using (true);

-- Anyone can submit an inquiry (insert only) — no read for anon
drop policy if exists inquiries_anon_insert on public.inquiries;
create policy inquiries_anon_insert on public.inquiries for insert to anon with check (true);

-- Media (images and videos) ------------------------------------
create table if not exists public.media (
  id           uuid primary key default gen_random_uuid(),
  filename     text not null,
  original_name text not null,
  file_type    text not null check (file_type in ('image','video','document')),
  mime_type    text not null,
  file_size    bigint not null,
  storage_path text not null,                  -- path in Supabase Storage
  public_url   text not null,
  alt_text     text,
  width        int,
  height       int,
  uploaded_by  text,
  created_at   timestamptz not null default now()
);
create index if not exists media_file_type_idx on public.media(file_type);
create index if not exists media_created_at_idx on public.media(created_at desc);

alter table public.media enable row level security;

-- Public read for all media (used on website)
drop policy if exists media_anon_read on public.media;
create policy media_anon_read on public.media for select to anon using (true);

-- Storage Buckets Configuration ------------------------------
-- Run these commands in the Supabase Storage settings or via SQL:
-- 
-- Create storage buckets (if not exists):
-- insert into storage.buckets (id, name, public) 
-- values ('media', 'media', true) 
-- on conflict (id) do nothing;
--
-- Storage policies (allow public read, admin write):
-- create policy "Public Access" on storage.objects for select using (bucket_id = 'media');
-- create policy "Admin Upload" on storage.objects for insert with check (bucket_id = 'media');
-- create policy "Admin Update" on storage.objects for update using (bucket_id = 'media');
-- create policy "Admin Delete" on storage.objects for delete using (bucket_id = 'media');
