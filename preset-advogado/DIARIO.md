# Diário do preset — Advocacia

Este arquivo registra as decisões e mudanças do preset, sem guardar cópias antigas dos arquivos do site.

## 2026-10-09 — Criação e publicação

- Criada LP estática em HTML, CSS e JavaScript, sem framework nem etapa de build.
- Definido design claro/editorial, mobile-first, com tipografia Plus Jakarta Sans e Playfair Display, tons brancos e detalhes dourados.
- Integradas as artes próprias de Denise Vargas Freire: banner desktop 2560 × 1440 e arte mobile 1440 × 1980, servidas em WebP.
- Criadas áreas de atuação em painéis fotográficos responsivos, pilares, depoimentos de exemplo, FAQ e chamadas para WhatsApp.
- Criados menu mobile, reveal no scroll, FAQ acessível e microinterações leves.
- Organizadas imagens utilizadas; removidos rascunhos e recursos de versões visuais anteriores.
- Configurado o Worker `preset-adg` em `wrangler.jsonc` com arquivos estáticos servidos a partir desta pasta.
- Conectado Workers Builds ao repositório `leobazinga/Preset-LP-ADG`, branch `main`, raiz `preset-advogado`. O build de produção foi validado com sucesso.
- Criado `publicar-lp.cmd`: prepara as alterações em `preset-advogado`, cria um commit com mensagem genérica e envia para `main`. Cada push inicia o deploy no Cloudflare.

## Fluxo de atualização

1. Edite e salve os arquivos dentro de `preset-advogado`.
2. Dê dois cliques em `publicar-lp.cmd`, na raiz do repositório.
3. Aguarde a mensagem de envio concluído e confira o build em **Cloudflare → Workers & Pages → preset-adg → Implantações**.

Salvar no editor altera apenas os arquivos locais; executar o publicador envia a versão para produção. Ele ignora o ZIP local e publica apenas a pasta do preset.

## Pendências antes de entregar uma LP a um cliente

- Confirmar e substituir os contatos, OAB, endereço e áreas de atuação.
- Trocar métricas de demonstração por dados reais e verificáveis.
- Substituir os depoimentos de exemplo por depoimentos reais autorizados.
- Conferir com a cliente os textos jurídicos, imagens e links de conversão.
