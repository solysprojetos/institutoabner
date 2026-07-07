# ABNER — Servir Transforma Vidas

Site institucional da **ABNER**, instituição sem fins lucrativos dedicada a acolher famílias, apoiar pessoas autistas e neurodivergentes e levar cuidado a quem mais precisa.

## Estrutura

```
index.html              → o site completo (HTML + CSS + JavaScript em um único arquivo)
assets/logo-abner.webp  → logo da instituição
```

O site é uma página única (one-page) com as seções: **Quem somos · Programas · Impacto · Como ajudar · Depoimentos · Contato**. Não precisa de servidor nem de build — basta abrir o `index.html` no navegador.

## Como publicar no GitHub Pages

1. No GitHub, abra **Settings → Pages** deste repositório.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch principal (`main`) e a pasta **/ (root)** e salve.
4. Em alguns minutos o site estará no ar em `https://<usuario>.github.io/institutoabner/`.

## ⚠️ Antes de colocar no ar: dados que precisam ser atualizados

O site foi criado com **dados de exemplo (placeholders)**. Procure e substitua no `index.html`:

| O quê | Onde está | Valor atual (exemplo) |
|---|---|---|
| Endereço | seção Contato | Rua da Solidariedade, 123 — Centro |
| WhatsApp | seção Contato | (00) 90000-0000 |
| E-mail | seção Contato **e** na constante `FORM_EMAIL` no `<script>` | contato@abner.org.br |
| Números de impacto | seção Impacto (`data-count`) | 1.200 famílias, 350 voluntários, 8.500 cestas, 10 anos |

## Formulário de contato

O formulário usa o serviço gratuito [FormSubmit](https://formsubmit.co) e envia as mensagens para o e-mail definido na constante `FORM_EMAIL` dentro do `index.html` (não requer cadastro).

**Importante:** na primeira mensagem enviada pelo site, o FormSubmit manda um e-mail de confirmação para esse endereço — é preciso clicar no link de ativação uma única vez para os envios passarem a funcionar.
