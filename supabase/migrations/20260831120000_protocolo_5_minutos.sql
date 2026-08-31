-- Protocolo dos 5 Minutos — armazenamento por usuário.
--
-- Uma linha por pessoa. `data` guarda o protocolo personalizado
-- (perfil + respostas do questionário) e o diário dos 30 dias.
-- O acesso é fechado por RLS: cada pessoa só enxerga a própria linha,
-- o que torna seguro expor a chave anon no navegador.

create table if not exists public.protocols (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.protocols enable row level security;

drop policy if exists "ler o proprio protocolo" on public.protocols;
create policy "ler o proprio protocolo"
  on public.protocols for select
  using (auth.uid() = user_id);

drop policy if exists "criar o proprio protocolo" on public.protocols;
create policy "criar o proprio protocolo"
  on public.protocols for insert
  with check (auth.uid() = user_id);

drop policy if exists "atualizar o proprio protocolo" on public.protocols;
create policy "atualizar o proprio protocolo"
  on public.protocols for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
