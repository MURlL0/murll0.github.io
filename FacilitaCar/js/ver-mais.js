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
      'assets/img/versa1.jpeg',
      'assets/img/versa2.jpeg',
      'assets/img/versa3.jpeg',
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
      'assets/img/voyage1.jpeg',
      'assets/img/voyage2.jpeg',
      'assets/img/voyage3.jpeg',
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
      'assets/img/ka1.jpeg',
      'assets/img/ka2.jpeg',
      'assets/img/ka3.jpeg',
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
      'assets/img/mobi1.jpeg',
      'assets/img/mobi2.jpeg',
      'assets/img/mobi3.jpeg',
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
      'assets/img/palio1.jpeg',
      'assets/img/palio2.jpeg',
      'assets/img/palio3.jpeg',
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
      'assets/img/c3_1.jpeg',
      'assets/img/c3_2.jpeg',
      'assets/img/c3_3.jpeg',
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
      'assets/img/siena1.jpeg',
      'assets/img/siena2.jpeg',
      'assets/img/siena3.jpeg',
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
