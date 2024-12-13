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
      '../assets/img/Veiculos/Nissan/1.Versa/Versa 2018 Prata.jpg',
      '../assets/img/Veiculos/Nissan/1.Versa/Nissan Versa SV 2018.jpg',
      '../assets/img/Veiculos/Nissan/1.Versa/Nissan Versa SV 2018 (1).jpg',
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
      '../assets/img/Veiculos/Volkswagen/2.Voyage/Volkswagen Voyage 2015.jpg',
      '../assets/img/Veiculos/Volkswagen/2.Voyage/Volkswagen Voyage 2015 (1).jpg',
      '../assets/img/Veiculos/Volkswagen/2.Voyage/Volkswagen Voyage 2015 (2).jpg',
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
  4: {
    nome: 'Fiat Mobi',
    preco: 'R$ 33.580,00',
    imagens: [
      '../assets/img/Veiculos/Fiat/4.Mobi/Fiat Mobi Drive 2018.jpg',
      '../assets/img/Veiculos/Fiat/4.Mobi/Fiat Mobi 2018.jpg',
      '../assets/img/Veiculos/Fiat/4.Mobi/Fiat Mobi 2018 (1).jpg',
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
      '../assets/img/Veiculos/Fiat/5.Palio/Fiat Palio 2015.jpg',
      '../assets/img/Veiculos/Fiat/5.Palio/Fiat Palio 2015 (1).jpg',
      '../assets/img/Veiculos/Fiat/5.Palio/Fiat Palio 1.0 2015.jpg',
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
      '../assets/img/Veiculos/Citroen/6.C3/Citroen C3 2016.jpg',
      '../assets/img/Veiculos/Citroen/6.C3/Citroen C3 2016 (1).jpg',
      '../assets/img/Veiculos/Citroen/6.C3/Citroen C3 2016 (2).jpg',
    ],
    descricao: 'Design sofisticado, conforto e economia em um único veículo.',
    marca: 'Citroën',
    modelo: 'C3',
    ano: '2016',
    cor: 'Preto',
    transmissao: 'Automático',
  },
  8: {
    nome: 'Arrizo 5',
    preco: 'R$ 66.000,00',
    imagens: [
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.40 (1).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.40.jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.40 (2).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.41 (2).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.41 (1).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.41.jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.42.jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.42 (1).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.42 (2).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.41 (2).jpeg',
      '../assets/img/Veiculos/Chery/Arrizo 5/WhatsApp Image 2024-11-20 at 15.37.39.jpeg',
    ],
    descricao: 'Design moderno e excelente custo-benefício.',
    marca: 'Chery',
    modelo: 'Arrizo 5',
    ano: '2019',
    cor: 'Branca',
    transmissao: 'Automático',
  },

  10: {
    nome: 'Chevrolet Cobalt',
    preco: 'R$ 37.553,00',
    imagens: [
      '../assets/img/Veiculos/Chevrolet/10.Cobalt/Chevrolet Cobalt LTZ 2014.jpg',
      '../assets/img/Veiculos/Chevrolet/10.Cobalt/Chevrolet Cobalt LTZ 2014 (1).jpg',
      '../assets/img/Veiculos/Chevrolet/10.Cobalt/Chevrolet Cobalt LTZ 2014 (2).jpg',
    ],
    descricao: 'Espaçoso, confortável e com excelente desempenho.',
    marca: 'Chevrolet',
    modelo: 'Cobalt',
    ano: '2014',
    cor: 'Preta',
    transmissao: 'Manual',
  },

  11: {
    nome: 'Peugeot 208',
    preco: 'R$ 37.031,00',
    imagens: [
      '../assets/img/Veiculos/Peugeot/11.208/999413100136142.jpg',
      '../assets/img/Veiculos/Peugeot/11.208/Peugeot 208 Allure 2014.jpg',
      '../assets/img/Veiculos/Peugeot/11.208/Peugeot 208 Allure 2014 (1).jpg',
    ],
    descricao: 'Compacto, ágil e com um design moderno, ideal para a cidade.',
    marca: 'Peugeot',
    modelo: '208',
    ano: '2014',
    cor: 'Vermelha',
    transmissao: 'Manual',
  },
  12: {
    nome: 'Renault Logan',
    preco: 'R$ 37.036,00',
    imagens: [
      '../assets/img/Veiculos/Renault/12.Logan/Renault Logan 2015.jpg',
      '../assets/img/Veiculos/Renault/12.Logan/Renault Logan 2015 (1).jpg',
      '../assets/img/Veiculos/Renault/12.Logan/Renault Logan 2015 (2).jpg',
    ],
    descricao: 'Espaçoso, confiável e com excelente economia de combustível.',
    marca: 'Renault',
    modelo: 'Logan',
    ano: '2015',
    cor: 'Cinza',
    transmissao: 'Manual',
  },
  13: {
    nome: 'Renault Logan',
    preco: 'R$ 37.357,00',
    imagens: [
      '../assets/img/Veiculos/Renault/13.Logan/Renault Logan 2016.jpg',
      '../assets/img/Veiculos/Renault/13.Logan/Renault Logan 2016 (1).jpg',
      '../assets/img/Veiculos/Renault/13.Logan/Renault Logan 2016 (2).jpg',
    ],
    descricao:
      'Design moderno, espaço interno generoso e excelente custo-benefício.',
    marca: 'Renault',
    modelo: 'Logan',
    ano: '2016',
    cor: 'Prata',
    transmissao: 'Manual',
  },
  14: {
    nome: 'Ford Ka Sedan',
    preco: 'R$ 48.558,00',
    imagens: [
      '../assets/img/Veiculos/Ford/14.Ka Sedan/Ford Ka 1.0 SE 2019.jpg',
      '../assets/img/Veiculos/Ford/14.Ka Sedan/Ford Ka 1.0 SE 2019 (1).jpg',
      '../assets/img/Veiculos/Ford/14.Ka Sedan/Ford Ka 1.0 SE 2019 (2).jpg',
    ],
    descricao: 'Compacto, espaçoso e eficiente para o dia a dia.',
    marca: 'Ford',
    modelo: 'Ka Sedan',
    ano: '2019',
    cor: 'Cinza',
    transmissao: 'Manual',
  },
  15: {
    nome: 'Ford Fusion Titanium',
    preco: 'R$ 86.062,00',
    imagens: [
      '../assets/img/Veiculos/Ford/15.Fusion/Ford Fusion Titanium 2016.jpg',
      '../assets/img/Veiculos/Ford/15.Fusion/Ford Fusion Titanium 2016 (1).jpg',
      '../assets/img/Veiculos/Ford/15.Fusion/Ford Fusion Titanium 2016 (2).jpg',
    ],
    descricao: 'Luxuoso, confortável e com alta performance.',
    marca: 'Ford',
    modelo: 'Fusion Titanium',
    ano: '2016',
    cor: 'Branca',
    transmissao: 'Automático',
  },
  16: {
    nome: 'Jeep Renegade',
    preco: 'R$ 82.000,00',
    imagens: [
      '../assets/img/Veiculos/Jeep/16.Renegade/WhatsApp Image 2024-11-28 at 17.16.13 2.jpeg',
      '../assets/img/Veiculos/Jeep/16.Renegade/WhatsApp Image 2024-11-28 at 17.16.12 (2).jpeg',
      '../assets/img/Veiculos/Jeep/16.Renegade/WhatsApp Image 2024-11-28 at 17.16.12.jpeg',
      '../assets/img/Veiculos/Jeep/16.Renegade/WhatsApp Image 2024-11-28 at 17.16.11.jpeg',
      '../assets/img/Veiculos/Jeep/16.Renegade/WhatsApp Image 2024-11-28 at 17.16.13 (1).jpeg',
      '../assets/img/Veiculos/Jeep/16.Renegade/WhatsApp Image 2024-11-28 at 17.16.12 (1).jpeg',
    ],
    descricao: 'Estilo robusto, alta performance e ideal para aventuras.',
    marca: 'Jeep',
    modelo: 'Renegade',
    ano: '2021',
    cor: 'Preta',
    transmissao: 'Automático',
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
  18: {
    nome: 'Nissan Versa',
    preco: 'R$ 48.000,00',
    imagens: [
      '../assets/img/Veiculos/Nissan/18.Versa/WhatsApp Image 2024-12-05 at 22.11.49.jpeg',
      '../assets/img/Veiculos/Nissan/18.Versa/WhatsApp Image 2024-12-05 at 22.11.48.jpeg',
      '../assets/img/Veiculos/Nissan/18.Versa/WhatsApp Image 2024-12-05 at 22.11.49 2.jpeg',
    ],
    descricao: 'Elegância com tecnologia moderna e conforto incomparável.',
    marca: 'Nissan',
    modelo: 'Versa',
    ano: '2016',
    cor: 'Preta',
    transmissao: 'Manual',
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
