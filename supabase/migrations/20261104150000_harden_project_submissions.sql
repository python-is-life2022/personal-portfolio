create schema if not exists private;
revoke all on schema private from public, anon, authenticated, service_role;

create table if not exists private.project_submission_rate_limits (
  client_hash text primary key check (client_hash ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0)
);

alter table private.project_submission_rate_limits enable row level security;
revoke all on table private.project_submission_rate_limits from public, anon, authenticated, service_role;
create index if not exists project_submission_rate_limits_window_idx
  on private.project_submission_rate_limits (window_started_at);

create or replace function public.consume_project_submission_rate_limit(
  p_ip_hash text,
  p_email_hash text
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_now timestamptz := pg_catalog.now();
  ip_count integer;
  email_count integer;
begin
  if p_ip_hash is null or p_email_hash is null
    or p_ip_hash !~ '^[0-9a-f]{64}$'
    or p_email_hash !~ '^[0-9a-f]{64}$'
    or p_ip_hash = p_email_hash then
    return false;
  end if;

  delete from private.project_submission_rate_limits
  where window_started_at < v_now - interval '24 hours';

  insert into private.project_submission_rate_limits as limits (
    client_hash,
    window_started_at,
    request_count
  )
  values (p_ip_hash, v_now, 1)
  on conflict (client_hash) do update
  set
    window_started_at = case
      when limits.window_started_at <= v_now - interval '15 minutes' then v_now
      else limits.window_started_at
    end,
    request_count = case
      when limits.window_started_at <= v_now - interval '15 minutes' then 1
      else limits.request_count + 1
    end
  returning limits.request_count into ip_count;

  insert into private.project_submission_rate_limits as limits (
    client_hash,
    window_started_at,
    request_count
  )
  values (p_email_hash, v_now, 1)
  on conflict (client_hash) do update
  set
    window_started_at = case
      when limits.window_started_at <= v_now - interval '24 hours' then v_now
      else limits.window_started_at
    end,
    request_count = case
      when limits.window_started_at <= v_now - interval '24 hours' then 1
      else limits.request_count + 1
    end
  returning limits.request_count into email_count;

  return ip_count <= 5 and email_count <= 3;
end;
$$;

revoke all on function public.consume_project_submission_rate_limit(text, text)
  from public, anon, authenticated;
grant execute on function public.consume_project_submission_rate_limit(text, text)
  to service_role;
