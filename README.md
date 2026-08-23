# Instituto Abner — Servir transforma vidas

Site institucional do **Instituto Abner**, que serve pessoas, acolhe famílias e transforma
realidades por meio da solidariedade.

A identidade visual vem do **manual da marca oficial** (`BRAND_COR.pdf`) e a logo vem do
arquivo vetorial `FRENTE.pdf`.

## Identidade aplicada no site

| Elemento | Valor |
|---|---|
| Creme (fundo principal) | `#F7F3E5` |
| Cinza (faixa "Nossa história") | `#B5BAB9` |
| Azul institucional | `#14387E` |
| Azul escuro (rodapé) | `#0D2450` |
| Títulos | **Bebas Neue** (a fonte usada no manual) |
| Texto | **Poppins** — substituta livre da *Garet*, que não tem versão web gratuita |
| Assinatura decorativa | **Pinyon Script** |
| Grafismo | peças de quebra-cabeça em contorno, desenhadas em SVG |

> **Nota de acessibilidade:** no manual, a faixa cinza usa texto branco. No site o texto
> dessa faixa é azul institucional, porque branco sobre `#B5BAB9` não atinge o contraste
> mínimo de leitura (WCAG AA). Todos os textos do site foram medidos e passam em AA.

> **Nota do grafismo:** as peças de quebra-cabeça usam o cinza da marca (`--peca-cor`,
> `#B5BAB9`) **sem transparência**, para aparecerem nos fundos claros. Nos dois lugares em
> que o cinza não teria como aparecer — a faixa cinza de "Nossa história" e os blocos azuis
> — as peças são brancas, que é o que o manual faz nessas páginas. As peças ficam nos cantos
> das seções: se cruzarem uma coluna de texto, atrapalham a leitura.

> **Nota de tipografia:** a Bebas Neue e a Pinyon Script têm um único peso (400). Todo texto
> nessas duas fontes é fixado em 400 no CSS — pedir 300 ou 700 faz o navegador falsificar o
> desenho.

## Estrutura

```
index.html              → o site (página única)
privacidade.html        → política de privacidade
manutencao.html         → página de manutenção, pronta para uso quando precisar
inicio.html             → redireciona para a home (endereço antigo do site)
css/styles.css          → todo o estilo do site
js/main.js              → menu, animações, link ativo e ampliação das fotos
assets/marca/logo-abner.svg        → logo oficial, vetorial
assets/marca/logo-abner-claro.svg  → mesma logo com o azul em creme, para fundo escuro
assets/marca/icone.png             → ícone para a tela inicial do celular
assets/fotos/           → fotos do instituto e do manual da marca
assets/icones/          → ícones antigos, hoje sem uso no site
```

Seções da home, na ordem: **Início · Por que Abner? · Nossa história · Nossas ações ·
Projetos · Nosso impacto · Galeria · Depoimentos · Voluntariado · Doações · Transparência ·
Parceiros · Contato**.

Não precisa de servidor nem de build: basta abrir o `index.html` no navegador.
Para conferir localmente com um servidor: `npx http-server -p 8080`.

## ⚠️ Conteúdo que ainda falta

Estas áreas estão construídas e prontas, mas **exibem um aviso de "em breve"** porque ainda
não há informação real para publicar. Nada foi inventado. Procure o texto indicado para
preencher:

| Seção | O que falta | Onde está |
|---|---|---|
| Nosso impacto | Números reais (famílias, crianças, ações, voluntários) | `data-numero` no `index.html` |
| Galeria | Todas as fotos das ações | seção `#galeria` |
| Depoimentos | Depoimentos com nome e autorização de quem escreveu | seção `#depoimentos` |
| Projetos | Descrição de cada projeto | seção `#projetos` |
| Transparência | Relatórios e prestação de contas para download | seção `#transparencia` |
| Parceiros | Logos dos parceiros | seção `#parceiros` |
| Doações | Chave PIX, QR Code e dados bancários | `.doacoes-formas` |
| Contato / rodapé | WhatsApp, e-mail e endereço | `.contato-canais` e rodapé |

Enquanto isso, **o único canal de contato divulgado é o Instagram
[@institutoabner.r](https://instagram.com/institutoabner.r)**, e todos os botões de ação
levam para lá.

## Publicação

O site é publicado pelo GitHub Pages no domínio **institutoabner.com.br**. Cada push na
branch `main` dispara o workflow `.github/workflows/pages.yml`, que copia a `main` para a
branch `gh-pages`.

### Voltar para o modo manutenção

Troque o conteúdo do `index.html` pelo do `manutencao.html`:

```bash
cp index.html site.html && cp manutencao.html index.html
git commit -am "Coloca o site em modo manutenção" && git push
```
