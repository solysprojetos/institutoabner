# Instituto Abner — Servir transforma vidas

Site institucional do **Instituto Abner**, que serve, acolhe e transforma vidas por meio de
ações sociais para crianças, famílias, idosos e animais em situação de vulnerabilidade.

O site foi construído a partir do **manual da marca oficial** (`BRAND_COR.pdf`): paleta,
tipografia, grafismo e fotografias saem de lá.

## Identidade aplicada no site

| Elemento | Valor |
|---|---|
| Creme (fundo principal) | `#F7F3E5` |
| Cinza (faixa "Nossa história") | `#B5BAB9` |
| Azul institucional | `#14387E` |
| Azul escuro (rodapé) | `#0D2450` |
| Títulos | **Bebas Neue** (a fonte usada no manual) |
| Texto | **Poppins** — substituta livre da *Garet*, que não tem versão web gratuita |
| Assinatura decorativa | **Pinyon Script** (o mesmo estilo do "Brand"/"Feed" do manual) |
| Grafismo | peças de quebra-cabeça em contorno, desenhadas em SVG (`#peca` no HTML) |

As cores das peças do símbolo (vermelho, laranja, amarelo, verde, azul, rosa) aparecem
apenas em detalhes — o traço colorido do título e o topo dos cartões.

> **Nota de acessibilidade:** no manual, a faixa cinza usa texto branco. No site o texto
> dessa faixa é azul institucional, porque branco sobre `#B5BAB9` não atinge o contraste
> mínimo de leitura (WCAG AA). O restante segue o manual sem alterações.

## Estrutura

```
index.html              → o site (página única)
manutencao.html         → página de manutenção, pronta para uso quando precisar
inicio.html             → redireciona para a home (era o endereço antigo do site)
css/styles.css          → todo o estilo do site
js/main.js              → menu mobile, animações de entrada e link ativo do menu
assets/marca/logo-abner.svg        → logo oficial, vetorial (arquivo FRENTE.pdf)
assets/marca/logo-abner-claro.svg  → mesma logo com o azul em creme, para fundo escuro
assets/marca/icone.png             → ícone para a tela inicial do celular
assets/icones/          → ícones brancos das seções
assets/fotos/           → fotos do instituto e do manual da marca
```

Seções da home: **Hero · Nossa história · Nossa missão · Pilares (Servir, Empatia, Inclusão) ·
Quem ajudamos · O que fazemos · Como funciona · Momentos · Como ajudar · Junte-se a nós**.

Não precisa de servidor nem de build: basta abrir o `index.html` no navegador.
Para conferir localmente com um servidor: `npx http-server -p 8080`.

## Publicação

O site é publicado pelo GitHub Pages no domínio **institutoabner.com.br**. Cada push na
branch `main` dispara o workflow `.github/workflows/pages.yml`, que copia a `main` para a
branch `gh-pages`.

### Voltar para o modo manutenção

Troque o conteúdo do `index.html` pelo do `manutencao.html` (o arquivo de manutenção
continua no repositório justamente para isso):

```bash
cp index.html site.html && cp manutencao.html index.html
git commit -am "Coloca o site em modo manutenção" && git push
```

## Contato

Hoje o único canal divulgado no site é o **Instagram [@institutoabner.r](https://instagram.com/institutoabner.r)**.
Quando o instituto tiver os dados abaixo, é só pedir que eles entram no site:

- **WhatsApp** — vira botão flutuante e link direto na seção "Junte-se a nós";
- **E-mail** — reativa um formulário de contato na página;
- **Chave PIX** — vira um bloco de doação com botão de copiar.
