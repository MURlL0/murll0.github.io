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
    nome: 'Corola',
    preco: 'R$ 150.000',
    imagens: [
      '../assets/img/Corola Pesquisa (1).jpeg',
      '../assets/img/Corola Pesquisa.jpeg',
      '../assets/img/Corola Pesquisa (1).jpeg',
      '../assets/img/Corolla Prata Interior.jpeg',
    ],
    descricao: 'Ótimo desempenho, baixa quilometragem e em perfeito estado.',
    marca: 'Toyota',
    modelo: '2024',
    quilometragem: '30.000 km',
    cor: 'Prata',
    transmissao: 'Automática',
  },
  2: {
    nome: 'Fox',
    preco: 'R$ 45.000',
    imagens: [
      '../assets/img/Fox Vermelho (1).jpeg',
      '../assets/img/Fox Vermelho.jpeg',
      '../assets/img/Fox Vermelho Interior.jpeg',
      '../assets/img/Fox Vermelho Interior (1).jpeg',
    ],
    descricao: 'Carro econômico, com garantia e revisado.',
    marca: 'Volkswagem',
    modelo: '2013',
    quilometragem: '150.000 km',
    cor: 'Vermelho',
    transmissao: 'Manual',
  },
  // Adicione mais carros conforme necessário
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
