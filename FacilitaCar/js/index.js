// Configuração de busca dinâmica de veículos
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

// Funções do carrossel
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

// Função para adicionar carros dinamicamente
function adicionarCarroDinamicamente({
  id,
  marca,
  modelo,
  cor,
  preco,
  ano,
  imagens,
}) {
  const listaVeiculos = document.querySelector('.veiculos-lista');

  const precoNumerico = parseFloat(
    preco.replace(/[^\d,]/g, '').replace(',', '.'),
  );
  const entrada40 = precoNumerico * 0.4; // 40% do preço total
  const saldoDevedor = precoNumerico * 0.6; // 60% do preço total
  const taxaJuros = 0.02; // 2% ao mês
  const numParcelas = 24;

  // Fórmula para calcular a prestação fixa
  const parcelaComJuros =
    (saldoDevedor * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -numParcelas));

  const cardHTML = `
    <div class="veiculo-card" data-id="${id}" data-marca="${marca}" data-modelo="${modelo}" 
      data-ano="${ano}" data-cor="${cor}" data-preco="${preco}">
      <div class="carrossel">
        <div class="carrossel-container">
          ${imagens
            .map(
              (img) =>
                `<div class="carrossel-item"><img src="${img}" alt="${modelo}"></div>`,
            )
            .join('')}
        </div>
        <button class="carrossel-btn prev" onclick="slidePrev(this)">&#10094;</button>
        <button class="carrossel-btn next" onclick="slideNext(this)">&#10095;</button>
      </div>
      <h3>${modelo} <span class="ano">(${ano})</span></h3>
      <h4>${preco}</h4>
      <div class="50Porcento">
        <p>50% de entrada: ${(precoNumerico / 2).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })} 
          24x sem juros: ${(precoNumerico / 24).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
      </div>
      <div class="40Porcento">
        <p>40% de entrada: ${entrada40.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })} 
          24x (2% juros): ${parcelaComJuros.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
      </div>
      <button class="btnVerMais" onclick="location.href='page/ver-mais.html?id=${id}'">Ver mais</button>
    </div>
  `;

  listaVeiculos.innerHTML += cardHTML;
}

// Array com os dados dos carros existentes
const carrosExistentes = [
  // Ford Ka Sedan
  {
    id: 3,
    marca: 'Ford',
    modelo: 'Ka Sedan',
    cor: 'Cinza',
    preco: 'R$ 47.460,00',
    ano: 2019,
    imagens: [
      'assets/img/Veiculos/Ford/3.Ka Sedan/Ford Ka Sedan 2019.jpg',
      'assets/img/Veiculos/Ford/3.Ka Sedan/Ford Ka 2019.jpg',
      'assets/img/Veiculos/Ford/3.Ka Sedan/Ford Ka 2019 (1).jpg',
    ],
  },
  // Chery Arrizo 5
  {
    id: 8,
    marca: 'Chery',
    modelo: 'Arrizo 5',
    cor: 'Branca',
    preco: 'R$ 66.000,00',
    ano: 2019,
    imagens: [
      'assets/img/Veiculos/Chery/8.Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.40 (1).jpeg',
      'assets/img/Veiculos/Chery/8.Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.40.jpeg',
      'assets/img/Veiculos/Chery/8.Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.41 (2).jpeg',
    ],
  },
  // Volkswagen Polo
  {
    id: 17,
    marca: 'Volkswagen',
    modelo: 'Polo',
    cor: 'Cinza',
    preco: 'R$ 84.000,00',
    ano: 2024,
    imagens: [
      'assets/img/Veiculos/Volkswagen/17.Polo/1WhatsApp Image 2024-11-28 at 11.07.28 (2).jpeg',
      'assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.31 (1).jpeg',
      'assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.27.jpeg',
    ],
  },
  // Fiat Uno
  {
    id: 19,
    marca: 'Fiat',
    modelo: 'Uno',
    cor: 'Prata',
    preco: 'R$ 48.000,00',
    ano: 2021,
    imagens: [
      'assets/img/Veiculos/Fiat/19.Uno/WhatsApp Image 2024-12-12 at 15.30.14 2.jpeg',
      'assets/img/Veiculos/Fiat/19.Uno/WhatsApp Image 2024-12-12 at 15.30.14 (1) 2.jpeg',
      'assets/img/Veiculos/Fiat/19.Uno/WhatsApp Image 2024-12-12 at 15.30.13.jpeg',
    ],
  },
];

// Adiciona os carros ao DOM
carrosExistentes.forEach((carro) => adicionarCarroDinamicamente(carro));
