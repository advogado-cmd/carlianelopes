-- Gravacoes de voz do Protocolo dos 5 Minutos.
--
-- Cada pessoa grava a propria voz lendo os roteiros que ela mesma escreveu,
-- e o modo guiado toca essas gravacoes minuto a minuto. Os arquivos ficam
-- num bucket privado, em uma pasta por usuario: <user_id>/minuto-N.webm
--
-- O isolamento e o mesmo da tabela protocols: a primeira pasta do caminho
-- precisa ser o id de quem esta pedindo, entao ninguem alcanca o audio de
-- outra pessoa nem sabendo o caminho.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'vozes', 'vozes', false, 10485760,
  array['audio/webm','audio/ogg','audio/mp4','audio/aac','audio/mpeg']
)
on conflict (id) do update
  set file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "ouvir a propria voz" on storage.objects;
create policy "ouvir a propria voz"
  on storage.objects for select
  using (bucket_id = 'vozes' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "gravar a propria voz" on storage.objects;
create policy "gravar a propria voz"
  on storage.objects for insert
  with check (bucket_id = 'vozes' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "regravar a propria voz" on storage.objects;
create policy "regravar a propria voz"
  on storage.objects for update
  using (bucket_id = 'vozes' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "apagar a propria voz" on storage.objects;
create policy "apagar a propria voz"
  on storage.objects for delete
  using (bucket_id = 'vozes' and auth.uid()::text = (storage.foldername(name))[1]);
