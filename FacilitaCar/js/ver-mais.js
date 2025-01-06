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
  3: {
    nome: 'Ford Ka Sedan',
    preco: 'R$ 47.460,00',
    imagens: [
      '../assets/img/Veiculos/Ford/3.Ka Sedan/Ford Ka Sedan 2019.jpg',
      '../assets/img/Veiculos/Ford/3.Ka Sedan/Ford Ka 2019.jpg',
      '../assets/img/Veiculos/Ford/3.Ka Sedan/Ford Ka 2019 (1).jpg',
    ],
    descricao: 'Compacto, econômico e perfeito para o dia a dia.',
    marca: 'Ford',
    modelo: 'Ka Sedan',
    ano: '2019',
    cor: 'Cinza',
    transmissao: 'Manual',
  },

  17: {
    nome: 'Volkswagen Polo',
    preco: 'R$ 84.000,00',
    imagens: [
      '../assets/img/Veiculos/Volkswagen/17.Polo/1WhatsApp Image 2024-11-28 at 11.07.28 (2).jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.31 (1).jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.27.jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.27 (1).jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.30.jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.30 (1).jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.28.jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.28 (1).jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.28 (3).jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.31.jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.25.jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.20.jpeg',
      '../assets/img/Veiculos/Volkswagen/17.Polo/WhatsApp Image 2024-11-28 at 11.07.06.jpeg',
    ],
    descricao: 'Compacto, esportivo e tecnológico, perfeito para a cidade.',
    marca: 'Volkswagen',
    modelo: 'Polo',
    ano: '2024',
    cor: 'Cinza',
    transmissao: 'Automático',
  },

  19: {
    nome: 'Fiat Uno',
    preco: 'R$ 48.000,00',
    imagens: [
      '../assets/img/Veiculos/Fiat/19.Uno/WhatsApp Image 2024-12-12 at 15.30.14 2.jpeg',
      '../assets/img/Veiculos/Fiat/19.Uno/WhatsApp Image 2024-12-12 at 15.30.14 (1) 2.jpeg',
      '../assets/img/Veiculos/Fiat/19.Uno/WhatsApp Image 2024-12-12 at 15.30.13.jpeg',
    ],
    descricao: 'Econômico, compacto e perfeito para o dia a dia.',
    marca: 'Fiat',
    modelo: 'Uno',
    ano: '2021',
    cor: 'Prata',
    transmissao: 'Manual', 
  },

  20: {
    nome: 'Renault Clio',
    preco: 'R$ 16.000,00',
    imagens: [
      '../assets/img/Veiculos/Renault/20.Clio/Renault_Clio_2008_1.jpg',
      '../assets/img/Veiculos/Renault/20.Clio/Renault_Clio_2008_2.jpg',
      '../assets/img/Veiculos/Renault/20.Clio/Renault_Clio_2008_3.jpg',
    ],
    descricao: 'Compacto, econômico e confiável, ideal para o dia a dia.',
    marca: 'Renault',
    modelo: 'Clio',
    ano: '2008',
    cor: 'Prata',
    transmissao: 'Manual',
  },
  21: {
    nome: 'Ford Fiesta Sedan',
    preco: 'R$ 32.000,00',
    imagens: [
      '../assets/img/Veiculos/Ford/21.Fiesta Sedan/Ford_Fiesta_Sedan_2012_1.jpg',
      '../assets/img/Veiculos/Ford/21.Fiesta Sedan/Ford_Fiesta_Sedan_2012_2.jpg',
      '../assets/img/Veiculos/Ford/21.Fiesta Sedan/Ford_Fiesta_Sedan_2012_3.jpg',
    ],
    descricao: 'Elegante, espaçoso e confortável, perfeito para viagens.',
    marca: 'Ford',
    modelo: 'Fiesta Sedan',
    ano: '2012',
    cor: 'Prata',
    transmissao: 'Manual',
  },
  22: {
    nome: 'Peugeot 308',
    preco: 'R$ 84.000,00',
    imagens: [
      '../assets/img/Veiculos/Peugeot/22.308/Peugeot_308_2022_1.jpg',
      '../assets/img/Veiculos/Peugeot/22.308/Peugeot_308_2022_2.jpg',
      '../assets/img/Veiculos/Peugeot/22.308/Peugeot_308_2022_3.jpg',
    ],
    descricao: 'Modernidade, desempenho e estilo em um único veículo.',
    marca: 'Peugeot',
    modelo: '308',
    ano: '2022',
    cor: 'Cinza',
    transmissao: 'Automático',
  },
  23: {
    nome: 'Space Fox',
    preco: 'R$ 42.000,00',
    imagens: [
      '../assets/img/Veiculos/Volkswagen/23.Space Fox/Space_Fox_2014_1.jpg',
      '../assets/img/Veiculos/Volkswagen/23.Space Fox/Space_Fox_2014_2.jpg',
      '../assets/img/Veiculos/Volkswagen/23.Space Fox/Space_Fox_2014_3.jpg',
    ],
    descricao: 'Espaçoso, confiável e perfeito para a família.',
    marca: 'Volkswagen',
    modelo: 'Space Fox',
    ano: '2014',
    cor: 'Branco',
    transmissao: 'Manual',
  },
  24: {
    nome: 'Start 160',
    preco: 'R$ 16.000,00',
    imagens: [
      '../assets/img/Veiculos/Honda/24.Start 160/Start_160_2023_1.jpg',
      '../assets/img/Veiculos/Honda/24.Start 160/Start_160_2023_2.jpg',
      '../assets/img/Veiculos/Honda/24.Start 160/Start_160_2023_3.jpg',
    ],
    descricao: 'Econômica, robusta e ideal para o dia a dia.',
    marca: 'Honda',
    modelo: 'Start 160',
    ano: '2023',
    cor: 'Branco',
    transmissao: 'Manual',
  },
  25: {
    nome: 'Ford Ka',
    preco: 'R$ 36.000,00',
    imagens: [
      '../assets/img/Veiculos/Ford/25.Ka/Ford_Ka_2014_1.jpg',
      '../assets/img/Veiculos/Ford/25.Ka/Ford_Ka_2014_2.jpg',
      '../assets/img/Veiculos/Ford/25.Ka/Ford_Ka_2014_3.jpg',
    ],
    descricao: 'Compacto, econômico e confiável para todas as ocasiões.',
    marca: 'Ford',
    modelo: 'Ka',
    ano: '2014',
    cor: 'Branco',
    transmissao: 'Manual',
  },
  26: {
    nome: 'Shineray SHI 175',
    preco: 'R$ 16.000,00',
    imagens: [
      '../assets/img/Veiculos/Shineray/26.SHI 175/Shineray_SHI_175_2024_1.jpg',
      '../assets/img/Veiculos/Shineray/26.SHI 175/Shineray_SHI_175_2024_2.jpg',
      '../assets/img/Veiculos/Shineray/26.SHI 175/Shineray_SHI_175_2024_3.jpg',
    ],
    descricao:
      'Ágil, moderna e com excelente custo-benefício para o dia a dia.',
    marca: 'Shineray',
    modelo: 'SHI 175',
    ano: '2024',
    cor: 'Vermelha',
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
