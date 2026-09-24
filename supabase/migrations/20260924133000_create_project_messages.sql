create table if not exists public.project_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 320),
  project_type text not null check (char_length(project_type) between 2 and 120),
  details text not null check (char_length(details) between 10 and 10000),
  created_at timestamptz not null default now()
);

alter table public.project_messages enable row level security;

revoke all on table public.project_messages from anon, authenticated;

create index if not exists project_messages_created_at_idx
  on public.project_messages (created_at desc);
