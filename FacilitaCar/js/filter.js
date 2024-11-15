// // Função para gerar anos de 2000 até o ano atual e adicionar ao filtro de ano
// function gerarAnos() {
//   const filtroAno = document.getElementById('filtro-ano');
//   const anoAtual = new Date().getFullYear();
//   for (let ano = 2000; ano <= anoAtual; ano++) {
//       const option = document.createElement('option');
//       option.value = ano;
//       option.textContent = ano;
//       filtroAno.appendChild(option);
//   }
// }

// // Chama a função para preencher os anos no filtro ao carregar a página
// gerarAnos();

// // Função para aplicar o filtro
// function aplicarFiltro() {
//   const marca = document.getElementById('filtro-marca').value;
//   const ano = document.getElementById('filtro-ano').value;
//   const preco = document.getElementById('filtro-preco').value;
//   const veiculos = document.querySelectorAll('.veiculo-card');

//   veiculos.forEach(veiculo => {
//       const veiculoMarca = veiculo.getAttribute('data-marca');
//       const veiculoAno = veiculo.getAttribute('data-ano');
//       const veiculoPreco = veiculo.getAttribute('data-preco');

//       // Verifica se o veículo corresponde aos critérios de filtro
//       const correspondeMarca = marca === "" || veiculoMarca === marca;
//       const correspondeAno = ano === "" || veiculoAno === ano;
//       const correspondePreco = preco === "" || veiculoPreco === preco;

//       // Mostra ou esconde o veículo com base nos critérios
//       if (correspondeMarca && correspondeAno && correspondePreco) {
//           veiculo.style.display = "block";
//       } else {
//           veiculo.style.display = "none";
//       }
//   });
// }

// // Adiciona eventos aos filtros para atualizar a lista de veículos
// document.getElementById('filtro-marca').addEventListener('change', aplicarFiltro);
// document.getElementById('filtro-ano').addEventListener('change', aplicarFiltro);
// document.getElementById('filtro-preco').addEventListener('change', aplicarFiltro);

