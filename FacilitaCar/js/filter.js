function gerarAnos() {
  const filtros = [
    document.getElementById('filtro-ano-header'),
    document.getElementById('filtro-ano-banner'),
  ];
  const anoAtual = new Date().getFullYear();

  filtros.forEach((filtroAno) => {
    if (!filtroAno) return; // Evita erros se o elemento não existir
    for (let ano = 2000; ano <= anoAtual; ano++) {
      const option = document.createElement('option');
      option.value = ano;
      option.textContent = ano;
      filtroAno.appendChild(option);
    }
  });
}
gerarAnos();

function aplicarFiltro(filtroPrefix) {
  const marca = document.getElementById(`filtro-marca-${filtroPrefix}`).value;
  const ano = document.getElementById(`filtro-ano-${filtroPrefix}`).value;
  const preco = document.getElementById(`filtro-preco-${filtroPrefix}`).value;
  const veiculos = document.querySelectorAll('.veiculo-card');

  veiculos.forEach((veiculo) => {
    const veiculoMarca = veiculo.getAttribute('data-marca');
    const veiculoAno = veiculo.getAttribute('data-ano');
    const veiculoPreco = veiculo.getAttribute('data-preco');

    const correspondeMarca = marca === '' || veiculoMarca === marca;
    const correspondeAno = ano === '' || veiculoAno === ano;
    const correspondePreco = preco === '' || veiculoPreco === preco;

    if (correspondeMarca && correspondeAno && correspondePreco) {
      veiculo.style.display = 'block';
    } else {
      veiculo.style.display = 'none';
    }
  });
}

// Adiciona eventos para ambos os conjuntos de filtros
['header', 'banner'].forEach((prefix) => {
  document
    .getElementById(`filtro-marca-${prefix}`)
    .addEventListener('change', () => aplicarFiltro(prefix));
  document
    .getElementById(`filtro-ano-${prefix}`)
    .addEventListener('change', () => aplicarFiltro(prefix));
  document
    .getElementById(`filtro-preco-${prefix}`)
    .addEventListener('change', () => aplicarFiltro(prefix));
});
