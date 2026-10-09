# Preset LP — Advocacia

Landing page estática, mobile-first e sem dependências de build. O preset inicial é para o escritório da Dra. Denise Vargas Freire.

## Abrir e testar

Abra `preset-advogado/index.html` no navegador. Para testar como um site local, execute a partir da pasta do preset:

```powershell
cd preset-advogado
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

No Windows, depois de editar e salvar a LP, dê dois cliques em `publicar-lp.cmd`. O script cria um commit com a mensagem genérica `Atualiza LP` e envia apenas a pasta do preset para `main`; o Cloudflare publica depois do push. Salvar no editor, sem executar esse envio, não publica a alteração.

## Estrutura

- `preset-advogado/index.html` — conteúdo, SEO e metadados
- `preset-advogado/css/style.css` — design responsivo, cores e animações
- `preset-advogado/js/main.js` — navegação mobile, reveal e FAQ
- `preset-advogado/assets/img/` — imagens otimizadas, originais e logo
- `preset-advogado/DIARIO.md` — histórico de decisões e alterações do preset

## Personalizar para outro escritório

Troque no HTML o nome/OAB, WhatsApp, e-mail, endereço, áreas, métricas e conteúdo de depoimentos. Use somente dados e depoimentos autorizados pelo cliente. As imagens da Denise podem ser substituídas mantendo os arquivos WebP `denise-desktop.webp` e `denise-mobile.webp` ou atualizando os caminhos no elemento `<picture>`.

As cores e a tipografia ficam no início de `css/style.css`, nas variáveis de `:root`.

## Publicar atualizações

O Worker `preset-adg` está configurado para usar este repositório. No Cloudflare Workers Builds, use a branch `main`, o diretório raiz `preset-advogado`, deixe o comando de build vazio e mantenha `npx wrangler deploy` como comando de implantação. Depois de salvar uma alteração e enviar um commit para `main`, o Cloudflare publica automaticamente a nova versão.
