# Preset Advocacia

Landing page estática com HTML semântico, CSS mobile-first e JavaScript vanilla.

## Arquivos

- `index.html` — conteúdo e links de conversão
- `css/style.css` — layout, cores, breakpoints e interações
- `js/main.js` — menu mobile, animações de entrada, FAQ e tracking opcional
- `wrangler.jsonc` — publicação das páginas e imagens estáticas no Worker `preset-adg`
- `assets/img/` — banner desktop/mobile, logo e imagens das especialidades
- `areas-editorial-backup.html` — markup de backup da antiga lista de especialidades

## Personalização

1. Atualize nome, OAB, cidade, contatos e links `wa.me` em `index.html`.
2. Substitua as métricas e textos de exemplo por informações verificadas do escritório.
3. Use depoimentos reais com autorização do cliente.
4. Atualize as cores no bloco `:root` de `css/style.css`.
5. Se substituir as imagens do hero, mantenha uma arte horizontal desktop e outra vertical mobile e atualize o `<picture>`.

Para preview local: `python -m http.server 8000` nesta pasta e abra `http://localhost:8000`.

No Cloudflare Workers Builds, selecione a branch `main`, defina `preset-advogado` como diretório raiz, deixe o comando de build vazio e use `npx wrangler deploy` para implantação.

No Windows, salve suas alterações e execute `publicar-lp.cmd`, na raiz do repositório, para enviar a atualização sem digitar os comandos do Git.
