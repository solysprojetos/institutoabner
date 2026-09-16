# Instituto Abner — Servir transforma vidas

Site institucional do **Instituto Abner**, que acolhe, inclui e apoia pessoas e famílias em
situação de vulnerabilidade.

A identidade visual vem do **manual da marca oficial** (`BRAND_COR.pdf`) e a logo vem do
arquivo vetorial `FRENTE.pdf`.

## Princípio do site: só conteúdo real

O site **não publica "em breve", "espaço reservado", "a cadastrar" nem número inventado**.
Cada seção que depende de conteúdo do Instituto é montada a partir do arquivo
`js/conteudo.js`. Enquanto a informação não existir:

* a seção **não aparece** na página;
* o **link dela some** do menu e do rodapé.

Quando o conteúdo for preenchido, a seção e os links voltam sozinhos. É o único arquivo que
precisa ser editado para publicar conteúdo novo.

## Identidade aplicada no site

| Elemento | Valor |
|---|---|
| Creme (primeira tela) | `#F7F3E5` |
| Creme claro (fundos suaves) | `#FBF9F3` |
| Cinza (faixa "Nossa história") | `#B5BAB9` |
| Azul institucional | `#14387E` |
| Azul escuro (rodapé) | `#0D2450` |
| Títulos | **Bebas Neue** (a fonte usada no manual) |
| Texto | **Poppins** — substituta livre da *Garet*, que não tem versão web gratuita |
| Assinatura decorativa | **Pinyon Script** |
| Grafismo | peças de quebra-cabeça em contorno, desenhadas em SVG |

> **Composição:** cada seção tem um arranjo próprio — duas colunas com foto, lista numerada,
> bloco principal com dois secundários — em vez de fileiras de cartões iguais. As sombras são
> discretas e o contorno de 1px faz o trabalho de separar os blocos. As fotos entram em
> molduras retas, sem quadro deslocado atrás.

> **Movimento:** a entrada suave de cada bloco, uma vez, e o carrossel lento da faixa de
> valores — que pára ao passar o mouse. Quem usa "reduzir movimento" no sistema não vê
> animação nenhuma: a faixa fica parada, com os seis valores legíveis.

> **Acessibilidade:** todos os textos do site foram medidos e passam em WCAG AA, inclusive
> sobre o azul e sobre a faixa cinza (onde o texto é azul, e não branco como no manual,
> porque branco sobre `#B5BAB9` não atinge o contraste mínimo). A galeria abre por teclado,
> fecha com `Esc` e devolve o foco para onde estava.

> **Tipografia:** a Bebas Neue e a Pinyon Script têm um único peso (400). Todo texto nessas
> duas fontes é fixado em 400 no CSS — pedir 300 ou 700 faz o navegador falsificar o desenho.

## Estrutura

```
index.html              → o site (página única)
privacidade.html        → política de privacidade
manutencao.html         → página de manutenção, pronta para uso quando precisar
inicio.html             → redireciona para a home (endereço antigo do site)
css/styles.css          → todo o estilo do site
js/conteudo.js          → ⭐ o conteúdo real do Instituto (o único arquivo a editar)
js/main.js              → menu, montagem das seções, galeria, PIX e animações
assets/marca/           → logo vetorial, versão clara e ícone do celular
assets/fotos/           → fotos
assets/parceiros/       → logos dos parceiros
```

Seções sempre visíveis, na ordem: **Início · Por que Abner? · Nossa história · Áreas de
atuação · Como ajudar · Parceiros · Contato**.

Seções que aparecem quando houver conteúdo: **Ações realizadas · Projetos · Nosso impacto ·
Galeria · Depoimentos · Transparência**.

Não precisa de servidor nem de build: basta abrir o `index.html` no navegador.
Para conferir localmente com um servidor: `npx http-server -p 8080`.

## ⚠️ O que o Instituto precisa enviar

Tudo abaixo está **construído e testado**. Falta apenas o conteúdo real. Basta preencher a
lista correspondente em `js/conteudo.js` — o próprio arquivo traz o exemplo de cada campo.

| Seção | O que enviar | Onde preencher |
|---|---|---|
| Ações realizadas | Para cada ação: título, data, local, descrição, fotos reais (e resultado, só se confirmado) | `acoesRealizadas` |
| Galeria | Nada além das fotos das ações: a galeria se monta sozinha, agrupada por ação, com legenda e ampliação | `acoesRealizadas[].fotos` |
| Projetos | Título, público atendido, período, situação e descrição de cada projeto | `projetos` |
| Nosso impacto | Números conferidos **e o período** a que se referem | `indicadores` |
| Depoimentos | Texto, nome e **autorização** de quem escreveu | `depoimentos` |
| Transparência | Relatórios e prestações de contas em arquivo (PDF), por período | `documentos` |
| PIX | Chave, tipo e **nome do beneficiário** (obrigatório) | `pix` |
| Contato | WhatsApp, e-mail e endereço | `contato` |

### Regras que o site aplica sozinho

* **Indicadores:** um número só aparece com o período preenchido, e cada indicador conta uma
  coisa diferente — família atendida três vezes continua sendo uma família. O site escreve
  isso ao lado dos números.
* **Depoimento sem nome não é publicado.**
* **PIX sem nome do beneficiário não é publicado**, porque quem doa precisa conferir para
  quem está pagando. Com os dados preenchidos, aparece a chave, o botão de copiar e o aviso
  para conferir o beneficiário no aplicativo do banco.
* **Fotos das ações** ganham legenda e ampliação automaticamente.

Enquanto o Instagram for o único canal confirmado,
[@institutoabner.r](https://instagram.com/institutoabner.r) é o destino de todos os botões de
participação, com o rótulo dizendo exatamente o que acontece ao clicar.

### Sobre as fotos

O site usa apenas as fotos reais da fundadora com o filho Abner. As demais imagens da pasta
`assets/fotos/` são material de estúdio e simulações do manual da marca (uma delas com marca
d'água de banco de imagens) — não são registros de ações do Instituto e por isso **não são
publicadas**. As fotos das ações devem ser enviadas pelo Instituto e ficam em
`assets/fotos/acoes/`.

## Publicação

O site é publicado pelo GitHub Pages no domínio **institutoabner.com.br**. Cada push na
branch `main` dispara o workflow `.github/workflows/pages.yml`, que copia a `main` para a
branch `gh-pages`.

> Ao trocar o CSS ou o JS, suba o número da versão no endereço (`styles.css?v=16`,
> `main.js?v=16`) para o navegador de quem já visitou buscar o arquivo novo.

### Voltar para o modo manutenção

Troque o conteúdo do `index.html` pelo do `manutencao.html`:

```bash
cp index.html site.html && cp manutencao.html index.html
git commit -am "Coloca o site em modo manutenção" && git push
```
