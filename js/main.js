/* ============================================================
   Instituto Abner — interações do site
   ============================================================ */

// --- menu mobile ---------------------------------------------------------
const botaoMenu = document.getElementById('abrirMenu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu');
}));

// --- sombra do cabeçalho ao rolar ---------------------------------------
const cabecalho = document.getElementById('cabecalho');
const aoRolar = () => cabecalho.classList.toggle('rolou', window.scrollY > 8);
aoRolar();
addEventListener('scroll', aoRolar, { passive: true });

// --- animação de entrada -------------------------------------------------
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('dentro');
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.surge').forEach(el => observador.observe(el));

// --- link ativo no menu conforme a seção visível -------------------------
const secoes = [...document.querySelectorAll('main section[id]')];
const links = new Map(
  [...menu.querySelectorAll('a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a])
);

const espiao = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    const link = links.get(entrada.target.id);
    if (link && entrada.isIntersecting) {
      links.forEach(l => l.classList.remove('ativo'));
      link.classList.add('ativo');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

secoes.forEach(secao => { if (links.has(secao.id)) espiao.observe(secao); });

// --- ano do rodapé -------------------------------------------------------
document.getElementById('ano').textContent = new Date().getFullYear();
