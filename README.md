# ABNER Projeto Social — Servir Transforma Vidas

Site institucional do **ABNER Projeto Social**, que leva alimentação, acolhimento e cuidado a crianças, idosos, famílias e animais. O conteúdo, as cores e os ícones do site seguem a apresentação oficial do projeto.

## Estrutura

```
index.html                  → o site completo (HTML + CSS + JavaScript em um único arquivo)
assets/logo-abner.webp      → logo (versão flat, usada na navegação)
assets/logo-abner-3d.webp   → logo da apresentação (versão 3D, usada no topo do site)
assets/marca-abner.webp     → símbolo sem o texto (seção Nossa história)
assets/icones/              → ícones brancos das seções (da apresentação)
assets/pecas/               → peças de quebra-cabeça coloridas (decoração)
```

O site é uma página única (one-page) com as seções da apresentação: **Nossa história · Por que "Abner"? · Quem ajudamos · O que fazemos · Como funciona · Nossos valores · Como ajudar · Junte-se a nós**. Não precisa de servidor nem de build — basta abrir o `index.html` no navegador.

## Como publicar no GitHub Pages

1. No GitHub, abra **Settings → Pages** deste repositório.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch principal (`main`) e a pasta **/ (root)** e salve.
4. Em alguns minutos o site estará no ar em `https://<usuario>.github.io/institutoabner/`.

## ⚠️ Antes de colocar no ar: dados que precisam ser atualizados

Alguns dados vieram como **placeholder** da apresentação. Procure e substitua no `index.html`:

| O quê | Onde está | Valor atual (exemplo) |
|---|---|---|
| Telefone/WhatsApp | seção Junte-se a nós | (xx) xxxxx-xxxx |
| E-mail do formulário | constante `FORM_EMAIL` no `<script>` | contato@abner.org.br |
| Instagram | links `@abnerprojetosocial` | confirme se o perfil está correto |

## Formulário de contato

O formulário usa o serviço gratuito [FormSubmit](https://formsubmit.co) e envia as mensagens para o e-mail definido na constante `FORM_EMAIL` dentro do `index.html` (não requer cadastro).

**Importante:** na primeira mensagem enviada pelo site, o FormSubmit manda um e-mail de confirmação para esse endereço — é preciso clicar no link de ativação uma única vez para os envios passarem a funcionar.
