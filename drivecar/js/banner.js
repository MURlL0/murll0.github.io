let currentBannerIndex = 0;

function showBannerSlide(banner, index) {
  const slides = banner.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const currentSlide = index % totalSlides;

  // Atualiza os slides e os dots do banner
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });

  const dots = banner.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });

  banner.dataset.currentSlide = currentSlide;
}

function nextBannerSlide(banner) {
  const currentSlide = banner.dataset.currentSlide
    ? parseInt(banner.dataset.currentSlide)
    : 0;
  showBannerSlide(banner, currentSlide + 1);
}

function initBannerAutoSlide() {
  const banner = document.querySelector('.banner-rotativo');
  if (!banner) return;

  // Troca de slides automaticamente a cada 5 segundos
  setInterval(() => {
    nextBannerSlide(banner);
  }, 5000);

  // Inicia o banner no primeiro slide
  showBannerSlide(banner, 0);
}

// Inicializa o banner assim que a página carrega
document.addEventListener('DOMContentLoaded', initBannerAutoSlide);
