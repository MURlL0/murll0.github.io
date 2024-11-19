let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carrossel-item');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector(
    '.carrossel-container',
  ).style.transform = `translateX(${offset}%)`;
}

function slideNext() {
  showSlide(currentSlide + 1);
}

function slidePrev() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

// Dados de exemplo para os carros
const carros = {
  1: {
    nome: 'Nissan Versa',
    preco: 'R$ 44.816,00',
    imagens: [
      '../assets/img/Veiculos/Nissan/Versa/Versa 2018 Prata.jpg',
      '../assets/img/Veiculos/Nissan/Versa/Nissan Versa SV 2018.jpg',
      '../assets/img/Veiculos/Nissan/Versa/Nissan Versa SV 2018 (1).jpg',
    ],
    descricao: 'Elegância e eficiência, perfeito para quem busca conforto.',
    marca: 'Nissan',
    modelo: 'Versa',
    ano: '2019',
    cor: 'Prata',
    transmissao: 'Automático',
  },
  2: {
    nome: 'Volkswagen Voyage',
    preco: 'R$ 40.317,00',
    imagens: [
      '../assets/img/Veiculos/Volkswagen/Voyage/Volkswagen Voyage 2015.jpg',
      '../assets/img/Veiculos/Volkswagen/Voyage/Volkswagen Voyage 2015 (1).jpg',
      '../assets/img/Veiculos/Volkswagen/Voyage/Volkswagen Voyage 2015 (2).jpg',
    ],
    descricao: 'Um sedã clássico com ótimo custo-benefício e espaço interno.',
    marca: 'Volkswagen',
    modelo: 'Voyage',
    ano: '2015',
    cor: 'Prata',
    transmissao: 'Manual',
  },
  3: {
    nome: 'Ford Ka Sedan',
    preco: 'R$ 47.460,00',
    imagens: [
      '../assets/img/Veiculos/Ford/Ka Sedan/Ford Ka Sedan 2019.jpg',
      '../assets/img/Veiculos/Ford/Ka Sedan/Ford Ka 2019.jpg',
      '../assets/img/Veiculos/Ford/Ka Sedan/Ford Ka 2019 (1).jpg',
    ],
    descricao: 'Compacto, econômico e perfeito para o dia a dia.',
    marca: 'Ford',
    modelo: 'Ka Sedan',
    ano: '2019',
    cor: 'Cinza',
    transmissao: 'Manual',
  },
  4: {
    nome: 'Fiat Mobi',
    preco: 'R$ 33.580,00',
    imagens: [
      '../assets/img/Veiculos/Fiat/Mobi/Fiat Mobi Drive 2018.jpg',
      '../assets/img/Veiculos/Fiat/Mobi/Fiat Mobi 2018.jpg',
      '../assets/img/Veiculos/Fiat/Mobi/Fiat Mobi 2018 (1).jpg',
    ],
    descricao: 'Ideal para trajetos urbanos, com ótima economia.',
    marca: 'Fiat',
    modelo: 'Mobi',
    ano: '2018',
    cor: 'Branco',
    transmissao: 'Manual',
  },
  5: {
    nome: 'Fiat Palio',
    preco: 'R$ 28.149,00',
    imagens: [
      '../assets/img/Veiculos/Fiat/Palio/Fiat Palio 2015.jpg',
      '../assets/img/Veiculos/Fiat/Palio/Fiat Palio 2015 (1).jpg',
      '../assets/img/Veiculos/Fiat/Palio/Fiat Palio 1.0 2015.jpg',
    ],
    descricao: 'Compacto, econômico e confiável, ideal para o dia a dia.',
    marca: 'Fiat',
    modelo: 'Palio',
    ano: '2015',
    cor: 'Vermelho',
    transmissao: 'Manual',
  },
  6: {
    nome: 'Citroën C3',
    preco: 'R$ 49.859,00',
    imagens: [
      '../assets/img/Veiculos/Citroen/C3/Citroen C3 2016.jpg',
      '../assets/img/Veiculos/Citroen/C3/Citroen C3 2016 (1).jpg',
      '../assets/img/Veiculos/Citroen/C3/Citroen C3 2016 (2).jpg',
    ],
    descricao: 'Design sofisticado, conforto e economia em um único veículo.',
    marca: 'Citroën',
    modelo: 'C3',
    ano: '2016',
    cor: 'Preto',
    transmissao: 'Automático',
  },
  7: {
    nome: 'Fiat Siena',
    preco: 'R$ 29.019,00',
    imagens: [
      '../assets/img/Veiculos/Fiat/Siena/Fiat Grand Siena 2016.jpg',
      '../assets/img/Veiculos/Fiat/Siena/Fiat Grand Siena 2016 (1).jpg',
      '../assets/img/Veiculos/Fiat/Siena/Fiat Grand Siena 2016 (2).jpg',
    ],
    descricao: 'Confiável e com excelente custo-benefício para a família.',
    marca: 'Fiat',
    modelo: 'Siena',
    ano: '2014',
    cor: 'Vermelho',
    transmissao: 'Manual',
  },
};

// Função para extrair o ID do carro da URL
function getCarroIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Função para exibir os detalhes do carro
function mostrarDetalhesCarro() {
  const carroId = getCarroIdFromURL();
  const carro = carros[carroId];

  if (carro) {
    // Preenchendo as informações do carro
    document.querySelector('.informacoes-veiculo h1').textContent = carro.nome;
    document.querySelector('.informacoes-veiculo p').textContent =
      carro.descricao;
    document.querySelector('.informacoes-veiculo .preco').textContent =
      carro.preco;
    document.querySelector('.informacoes-veiculo .marca').textContent =
      carro.marca;
    document.querySelector('.informacoes-veiculo .modelo').textContent =
      carro.modelo;
    document.querySelector('.informacoes-veiculo .quilometragem').textContent =
      carro.quilometragem;
    document.querySelector('.informacoes-veiculo .cor').textContent = carro.cor;
    document.querySelector('.informacoes-veiculo .transmissao').textContent =
      carro.transmissao;

    // Preenchendo as imagens no carrossel
    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.innerHTML = ''; // Limpa imagens anteriores

    carro.imagens.forEach((imagem) => {
      const carrosselItem = document.createElement('div');
      carrosselItem.className = 'carrossel-item';
      carrosselItem.innerHTML = `<img src="${imagem}" alt="Imagem do carro">`;
      carrosselContainer.appendChild(carrosselItem);
    });
  } else {
    document.querySelector('.informacoes-veiculo').textContent =
      'Detalhes do carro não encontrados.';
  }
}

// Inicializa a página com os detalhes do carro correto
mostrarDetalhesCarro();
