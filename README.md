# ABNER Projeto Social — Servir transforma vidas

Site institucional de página única do **ABNER Projeto Social**, projeto social brasileiro que leva cestas básicas, cuidado e acolhimento a famílias, igrejas, casas de apoio e animais.

O nome homenageia Abner, filho autista da fundadora. O símbolo é a letra "A" acolhida por uma mão formada de peças de quebra-cabeça coloridas — cada peça representa uma pessoa.

## Estrutura

```
index.html              → o site completo (HTML + CSS + JavaScript em um único arquivo)
assets/logo-abner.webp  → logo do projeto
.github/workflows/      → publicação automática no GitHub Pages a cada push na main
```

Não precisa de servidor nem de build — basta abrir o `index.html` no navegador.

## Publicação

O site é publicado automaticamente no GitHub Pages a cada push na branch `main`, em:
`https://solysprojetos.github.io/institutoabner/`

**Atenção:** em contas gratuitas do GitHub, o Pages só funciona com o repositório **público** (Settings → Danger Zone → Change visibility → Make public).

## ⚠️ Antes de divulgar: dados que precisam ser atualizados

| O quê | Onde está no `index.html` | Valor atual (exemplo) |
|---|---|---|
| WhatsApp (botão) | link `wa.me` no rodapé | 5500000000000 |
| Telefone/WhatsApp (texto) | seção Contato do rodapé | (xx) xxxxx-xxxx |
| Fotos reais | blocos "espaço para foto real" | reservados para fotos das entregas, cestas e voluntários |

O Instagram já aponta para **@abnerprojetosocial**.
