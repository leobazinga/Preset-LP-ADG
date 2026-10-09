# Preset LP — Advocacia

Landing page estática, mobile-first e sem dependências de build. O preset inicial é para o escritório da Dra. Denise Vargas Freire.

## Abrir e testar

Abra `preset-advogado/index.html` no navegador. Para testar como um site local, execute a partir da pasta do preset:

```powershell
cd preset-advogado
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

- `preset-advogado/index.html` — conteúdo, SEO e metadados
- `preset-advogado/css/style.css` — design responsivo, cores e animações
- `preset-advogado/js/main.js` — navegação mobile, reveal e FAQ
- `preset-advogado/assets/img/` — imagens otimizadas, originais e logo
- `preset-advogado/areas-editorial-backup.html` — versão anterior da seção de áreas, mantida para restauração

## Personalizar para outro escritório

Troque no HTML o nome/OAB, WhatsApp, e-mail, endereço, áreas, métricas e conteúdo de depoimentos. Use somente dados e depoimentos autorizados pelo cliente. As imagens da Denise podem ser substituídas mantendo os arquivos WebP `denise-desktop.webp` e `denise-mobile.webp` ou atualizando os caminhos no elemento `<picture>`.

As cores e a tipografia ficam no início de `css/style.css`, nas variáveis de `:root`.
