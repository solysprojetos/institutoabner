// ============================================================
// Instituto ABNER — interações do site
// ============================================================

// Menu mobile
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Formulário — envio via FormSubmit.
// TROQUE o e-mail abaixo pelo e-mail real do projeto. Na primeira mensagem
// enviada, o FormSubmit manda um e-mail de confirmação para ativar o serviço.
const FORM_EMAIL = 'contato@abner.org.br';
const form = document.getElementById('contactForm');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.disabled = true;
  btn.textContent = 'Enviando…';
  try {
    const res = await fetch('https://formsubmit.co/ajax/' + FORM_EMAIL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    if (!res.ok) throw new Error('falha no envio');
    document.getElementById('formOk').style.display = 'block';
    form.reset();
  } catch {
    alert('Não foi possível enviar agora. Escreva para ' + FORM_EMAIL + ' ou tente novamente mais tarde.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar mensagem';
  }
});
