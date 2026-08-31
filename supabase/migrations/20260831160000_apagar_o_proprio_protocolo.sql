-- Direito de eliminacao (LGPD art. 18, VI).
--
-- A pessoa apaga a propria linha direto do navegador, com a autoridade dela.
-- O cadastro em auth.users continua sendo removido no servidor, pela rota
-- /api/protocolo/apagar-conta, porque isso exige a chave de servico.

drop policy if exists "apagar o proprio protocolo" on public.protocols;
create policy "apagar o proprio protocolo"
  on public.protocols for delete
  using (auth.uid() = user_id);
