-- Fala livre: o teto de 100 segundos por gravacao saiu, e o limite de
-- tamanho do arquivo sobe junto — uma leitura pausada de varias cenas
-- passa facil de um minuto, e cortar a pessoa no meio da propria voz
-- e o oposto do que a pratica pede.

update storage.buckets set file_size_limit = 26214400 where id = 'vozes';
