const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');

if (header && menuButton) {
  const closeMenu = () => {
    header.dataset.menuOpen = 'false';
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    header.dataset.menuOpen = String(open);
    menuButton.setAttribute('aria-expanded', String(open));
  });

  header.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const productCards = [...document.querySelectorAll('[data-category]')];
const filterCount = document.getElementById('filter-count');

if (filterButtons.length && productCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;
      productCards.forEach((card) => {
        const show = filter === 'todos' || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      if (filterCount) filterCount.textContent = `${visible} ${visible === 1 ? 'modelo' : 'modelos'}`;
    });
  });
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');

  document.querySelectorAll('[data-gallery-image]').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      if (!image) return;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = button.dataset.galleryImage || image.alt;
      lightbox.showModal();
    });
  });

  lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    lightboxImage.removeAttribute('src');
  });
}

const modelSelect = document.getElementById('modelo');
if (modelSelect) {
  const requestedModel = new URLSearchParams(window.location.search).get('modelo');
  if (requestedModel && [...modelSelect.options].some((option) => option.value === requestedModel)) {
    modelSelect.value = requestedModel;
  }
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const model = modelSelect?.selectedOptions[0]?.textContent || 'Sin modelo específico';
    const body = [
      `Nombre: ${data.get('nombre')}`,
      `Correo: ${data.get('correo')}`,
      `Teléfono: ${data.get('telefono') || 'No indicado'}`,
      `Modelo de interés: ${model}`,
      '',
      String(data.get('mensaje') || ''),
    ].join('\n');
    const subject = `Consulta Essenz — ${model}`;
    const email = contactForm.dataset.email;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Se abrirá tu aplicación de correo con la consulta preparada.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
