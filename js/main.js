/* ============================================================
   INSTITUTO ABNER — interações e montagem do conteúdo

   O site mostra apenas conteúdo real. As seções de ações, projetos,
   indicadores, galeria, depoimentos e transparência são montadas a
   partir do js/conteudo.js: se a lista correspondente estiver vazia,
   a seção continua oculta e o link dela some do menu e do rodapé.
   ============================================================ */
(function () {
'use strict';

const dados = window.CONTEUDO || {};
const $  = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];

/* ---------- utilidades ---------- */

// Todo texto vindo do conteudo.js passa por aqui antes de virar HTML.
const txt = (valor) => String(valor ?? '').replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const MESES = ['janeiro','fevereiro','março','abril','maio','junho',
               'julho','agosto','setembro','outubro','novembro','dezembro'];

// '2026-03-14' → '14 de março de 2026'. Qualquer outro formato é devolvido
// como veio, para não inventar data.
const dataPorExtenso = (valor) => {
  if (!valor) return '';
  const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(valor).trim());
  if (!m) return String(valor);
  const [, ano, mes, dia] = m;
  const nomeMes = MESES[Number(mes) - 1] || '';
  return dia ? `${Number(dia)} de ${nomeMes} de ${ano}` : `${nomeMes} de ${ano}`;
};

const naoVazio = (lista) => Array.isArray(lista) && lista.length > 0;

// Revela a seção e devolve os links de navegação que apontam para ela.
const mostrarSecao = (id) => {
  const secao = document.getElementById(id);
  if (!secao) return null;
  secao.hidden = false;
  $$(`a[data-link-dinamico][href="#${id}"]`).forEach(a => { a.hidden = false; });
  return secao;
};

/* ---------- 1. ações realizadas ---------- */
const montarAcoes = () => {
  const acoes = (dados.acoesRealizadas || []).filter(a => a && a.titulo);
  if (!naoVazio(acoes)) return [];

  const alvo = $('#listaAcoes');
  alvo.innerHTML = acoes.map((acao) => {
    const meta = [dataPorExtenso(acao.data), acao.local]
      .filter(Boolean).map(v => `<span>${txt(v)}</span>`).join('');
    const fotos = (acao.fotos || []).slice(0, 4).map(f => `
      <figure class="galeria-item">
        <img src="${txt(f.src)}" alt="${txt(f.alt || '')}" loading="lazy" decoding="async">
      </figure>`).join('');

    return `
      <article class="acao surge">
        ${fotos ? `<div class="acao-fotos">${fotos}</div>` : ''}
        <div class="acao-info">
          <h3>${txt(acao.titulo)}</h3>
          ${meta ? `<p class="acao-meta">${meta}</p>` : ''}
          ${acao.descricao ? `<p>${txt(acao.descricao)}</p>` : ''}
          ${acao.resultado ? `<p class="acao-resultado">${txt(acao.resultado)}</p>` : ''}
        </div>
      </article>`;
  }).join('');

  mostrarSecao('acoes-realizadas');
  return acoes;
};

/* ---------- 2. galeria, agrupada por ação ---------- */
const montarGaleria = (acoes) => {
  const grupos = acoes
    .map(a => ({ titulo: a.titulo, data: a.data, local: a.local, fotos: a.fotos || [] }))
    .filter(g => g.fotos.length);
  if (!naoVazio(grupos)) return;

  $('#listaGaleria').innerHTML = grupos.map(g => {
    const legenda = [dataPorExtenso(g.data), g.local].filter(Boolean).join(' · ');
    const itens = g.fotos.map(f => `
      <figure class="galeria-item">
        <button type="button" class="galeria-abrir" aria-label="Ampliar foto: ${txt(f.alt || f.legenda || g.titulo)}">
          <img src="${txt(f.src)}" alt="${txt(f.alt || '')}" loading="lazy" decoding="async">
        </button>
        ${f.legenda ? `<figcaption>${txt(f.legenda)}</figcaption>` : ''}
      </figure>`).join('');

    return `
      <div class="galeria-grupo surge">
        <h3>${txt(g.titulo)}</h3>
        ${legenda ? `<p>${txt(legenda)}</p>` : ''}
        <div class="galeria">${itens}</div>
      </div>`;
  }).join('');

  mostrarSecao('galeria');
};

/* ---------- 3. projetos ---------- */
const montarProjetos = () => {
  const projetos = (dados.projetos || []).filter(p => p && p.titulo);
  if (!naoVazio(projetos)) return;

  $('#listaProjetos').innerHTML = projetos.map(p => {
    const meta = [p.publico, p.periodo, p.situacao].filter(Boolean).join(' · ');
    return `
      <article class="cartao surge">
        <h3>${txt(p.titulo)}</h3>
        ${p.descricao ? `<p>${txt(p.descricao)}</p>` : ''}
        ${meta ? `<p class="cartao-meta">${txt(meta)}</p>` : ''}
      </article>`;
  }).join('');

  mostrarSecao('projetos');
};

/* ---------- 4. depoimentos ---------- */
const montarDepoimentos = () => {
  // Sem nome não se publica: o depoimento precisa de autoria e autorização.
  const lista = (dados.depoimentos || []).filter(d => d && d.texto && d.nome);
  if (!naoVazio(lista)) return;

  $('#listaDepoimentos').innerHTML = lista.map(d => `
    <figure class="depoimento surge">
      <blockquote>${txt(d.texto)}</blockquote>
      <figcaption>
        <b>${txt(d.nome)}</b>
        ${d.papel ? txt(d.papel) : ''}
      </figcaption>
    </figure>`).join('');

  mostrarSecao('depoimentos');
};

/* ---------- 5. indicadores ---------- */
const montarIndicadores = () => {
  const ind = dados.indicadores || {};
  const campos = [
    ['familias',    'Famílias atendidas'],
    ['criancas',    'Crianças beneficiadas'],
    ['acoes',       'Ações realizadas'],
    ['voluntarios', 'Voluntários']
  ].filter(([chave]) => Number.isFinite(ind[chave]));

  // Um número sem período não diz nada: exige os dois.
  if (!campos.length || !ind.periodo) return;

  $('#listaNumeros').innerHTML = campos.map(([chave, rotulo]) => `
    <div class="numero">
      <b>${ind[chave].toLocaleString('pt-BR')}</b>
      <span>${rotulo}</span>
    </div>`).join('');

  $('#impactoPeriodo').textContent =
    `Dados apurados no período: ${ind.periodo}. Cada indicador conta pessoas ` +
    `diferentes, e quem é atendido mais de uma vez é contado uma só vez.`;

  const obs = $('#impactoObs');
  if (ind.observacao) obs.textContent = ind.observacao; else obs.hidden = true;

  mostrarSecao('impacto');
};

/* ---------- 6. transparência ---------- */
const montarDocumentos = () => {
  const docs = (dados.documentos || []).filter(d => d && d.titulo && d.arquivo);
  if (!naoVazio(docs)) return;

  // mais recentes primeiro, quando houver período comparável
  const ordenados = [...docs].sort((a, b) =>
    String(b.periodo || '').localeCompare(String(a.periodo || ''), 'pt-BR'));

  $('#listaDocumentos').innerHTML = ordenados.map(d => `
    <li>
      <a href="${txt(d.arquivo)}" download>
        <span>
          <b>${txt(d.titulo)}</b>
          ${d.periodo ? `<span>${txt(d.periodo)}</span>` : ''}
        </span>
        <em>${txt(d.tipo || 'Baixar')}</em>
      </a>
    </li>`).join('');

  mostrarSecao('transparencia');
};

/* ---------- 7. PIX ---------- */
const montarPix = () => {
  const pix = dados.pix;
  // Sem chave ou sem beneficiário o bloco não aparece: quem doa precisa
  // conferir para quem está pagando.
  if (!pix || !pix.chave || !pix.beneficiario) return;

  $('#pixChave').textContent = pix.chave;
  $('#pixTipo').textContent = pix.tipo ? `(${pix.tipo})` : '';
  $('#pixBeneficiario').textContent = pix.beneficiario;
  $('#pixInstituicao').textContent = pix.instituicao ? `, ${pix.instituicao}` : '';
  $('#blocoPix').hidden = false;

  const botao = $('#pixCopiar');
  const rotuloOriginal = botao.textContent;
  botao.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pix.chave);
      botao.textContent = 'Chave copiada';
    } catch {
      // Sem permissão para a área de transferência: seleciona a chave para
      // que a pessoa copie à mão, em vez de avisar que copiou sem ter copiado.
      const faixa = document.createRange();
      faixa.selectNodeContents($('#pixChave'));
      const selecao = getSelection();
      selecao.removeAllRanges();
      selecao.addRange(faixa);
      botao.textContent = 'Copie a chave selecionada';
    }
    setTimeout(() => { botao.textContent = rotuloOriginal; }, 3000);
  });
};

/* ---------- 8. canais de contato ---------- */
const montarContato = () => {
  const c = dados.contato || {};
  const canais = $('#contatoCanais');
  const rodape = $('#rodapeContato');
  if (!canais) return;

  const linha = (rotulo, conteudo) => {
    const li = document.createElement('li');
    li.className = 'canal';
    li.innerHTML = `<b>${txt(rotulo)}</b>${conteudo}`;
    canais.append(li);
  };

  if (c.whatsapp) {
    const numeros = String(c.whatsapp).replace(/\D/g, '');
    const visivel = String(c.whatsapp);
    linha('WhatsApp',
      `<a href="https://wa.me/${txt(numeros)}" target="_blank" rel="noopener">${txt(visivel)}</a>`);
    rodape?.insertAdjacentHTML('beforeend',
      `<a href="https://wa.me/${txt(numeros)}" target="_blank" rel="noopener">WhatsApp</a>`);
  }
  if (c.email) {
    linha('E-mail', `<a href="mailto:${txt(c.email)}">${txt(c.email)}</a>`);
    rodape?.insertAdjacentHTML('beforeend', `<a href="mailto:${txt(c.email)}">${txt(c.email)}</a>`);
  }
  if (c.endereco) {
    linha('Endereço', `<span>${txt(c.endereco)}</span>`);
  }
};

/* ---------- menu ---------- */
const botaoMenu = $('#abrirMenu');
const menu = $('#menu');

if (botaoMenu && menu) {
  const fecharMenu = () => {
    menu.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
  };

  botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  menu.addEventListener('click', (e) => { if (e.target.closest('a')) fecharMenu(); });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('aberto')) {
      fecharMenu();
      botaoMenu.focus();
    }
  });
}

/* ---------- sombra do cabeçalho ao rolar ---------- */
const cabecalho = $('#cabecalho');
if (cabecalho) {
  const aoRolar = () => cabecalho.classList.toggle('rolou', scrollY > 8);
  aoRolar();
  addEventListener('scroll', aoRolar, { passive: true });
}

/* ---------- ampliação das fotos ---------- */
const lightbox = $('#lightbox');
if (lightbox) {
  const lightboxImg = $('#lightboxImg');
  const lightboxLegenda = $('#lightboxLegenda');
  const lightboxFechar = $('#lightboxFechar');
  let focoAnterior = null;

  const fecharFoto = () => {
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (focoAnterior) focoAnterior.focus();
  };

  // A galeria é montada depois, então o clique é ouvido no documento.
  document.addEventListener('click', (e) => {
    const botao = e.target.closest('.galeria-abrir');
    if (!botao) return;
    const img = botao.querySelector('img');
    const legenda = botao.closest('figure')?.querySelector('figcaption')?.textContent.trim() || '';
    focoAnterior = document.activeElement;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightboxLegenda.textContent = legenda;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxFechar.focus();
  });

  lightboxFechar.addEventListener('click', fecharFoto);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) fecharFoto(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) fecharFoto(); });
  // Mantém o foco dentro da janela da foto enquanto ela estiver aberta.
  lightbox.addEventListener('keydown', (e) => { if (e.key === 'Tab') e.preventDefault(); });
}

/* ---------- monta o conteúdo real ---------- */
const acoes = montarAcoes();
montarGaleria(acoes);
montarProjetos();
montarIndicadores();
montarDepoimentos();
montarDocumentos();
montarPix();
montarContato();

/* ---------- animação de entrada (uma vez por bloco) ---------- */
const menosMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!menosMovimento && 'IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('dentro');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px' });
  $$('.surge').forEach(el => observador.observe(el));
} else {
  $$('.surge').forEach(el => el.classList.add('dentro'));
}

/* ---------- link ativo conforme a seção visível ---------- */
if (menu) {
  const links = new Map(
    $$('a[href^="#"]', menu)
      .filter(a => !a.classList.contains('cabecalho-cta'))
      .map(a => [a.getAttribute('href').slice(1), a])
  );

  if ('IntersectionObserver' in window) {
    const espiao = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        const link = links.get(entrada.target.id);
        if (link && entrada.isIntersecting) {
          links.forEach(l => l.classList.remove('ativo'));
          link.classList.add('ativo');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    $$('main section[id]').forEach((secao) => {
      if (links.has(secao.id)) espiao.observe(secao);
    });
  }
}

/* ---------- ano do rodapé ---------- */
const ano = $('#ano');
if (ano) ano.textContent = new Date().getFullYear();

})();
