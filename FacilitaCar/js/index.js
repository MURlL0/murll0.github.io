const buscaVeiculoInput = document.getElementById('busca-veiculo');

// Restringe a entrada a letras e espaços, e filtra os veículos
buscaVeiculoInput.addEventListener('input', function () {
  // Remove números e símbolos, permitindo apenas letras e espaços
  this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');

  const termoBusca = this.value.toLowerCase();
  const veiculos = document.querySelectorAll('.veiculo-card');

  veiculos.forEach((veiculo) => {
    const nomeVeiculo = veiculo.querySelector('h3').textContent.toLowerCase();

    // Verifica se o termo de busca está no nome do veículo
    if (nomeVeiculo.includes(termoBusca)) {
      veiculo.style.display = ''; // Mostra o cartão se houver correspondência
    } else {
      veiculo.style.display = 'none'; // Esconde o cartão se não houver
    }
  });
});

function showSlide(carrossel, index) {
  const slides = carrossel.querySelectorAll('.carrossel-item');
  const totalSlides = slides.length;
  const currentSlide = index % totalSlides;

  // Atualiza a posição do carrossel específico
  const offset = -currentSlide * 100;
  carrossel.querySelector(
    '.carrossel-container',
  ).style.transform = `translateX(${offset}%)`;
}

function slideNext(button) {
  const carrossel = button.parentElement;
  const currentSlide = carrossel.dataset.currentSlide
    ? parseInt(carrossel.dataset.currentSlide)
    : 0;
  carrossel.dataset.currentSlide = currentSlide + 1;
  showSlide(carrossel, currentSlide + 1);
}

function slidePrev(button) {
  const carrossel = button.parentElement;
  const currentSlide = carrossel.dataset.currentSlide
    ? parseInt(carrossel.dataset.currentSlide)
    : 0;
  carrossel.dataset.currentSlide = currentSlide - 1;
  showSlide(carrossel, currentSlide - 1);
}
