// Atualiza o peso total em tempo real para cada item
function updateWeight(inputElement) {
  const row = inputElement.closest("tr"); // Alterado para 'tr' em vez de 'li'
  const totalWeightSpan = row.querySelector(".totalWeight");
  const unitSpan = row.querySelector(".unit");

  const unitWeight = parseFloat(inputElement.dataset.size); // Pegando o peso da batata (em gramas)
  const quantity = parseInt(inputElement.value);  // Pegando a quantidade inserida

  if (!isNaN(quantity) && quantity > 0) {
      // Calculando o peso total em gramas
      const totalWeightForItem = unitWeight * quantity;

      // Se o peso total for menor que 1000g, mostrar em gramas, senão, em kg
      if (totalWeightForItem < 1000) {
          totalWeightSpan.textContent = totalWeightForItem.toFixed(2);
          unitSpan.textContent = 'g';
      } else {
          const totalWeightInKg = totalWeightForItem / 1000;
          totalWeightSpan.textContent = totalWeightInKg.toFixed(2);
          unitSpan.textContent = 'kg';
      }
  } else {
      totalWeightSpan.textContent = '0.00';
      unitSpan.textContent = 'g';
  }
}

// Atualiza o peso em tempo real conforme o usuário digita
document.querySelectorAll(".quantity").forEach(input => {
  input.addEventListener("input", (event) => {
      updateWeight(event.target);
  });
});

// Calcula o peso total ao clicar no botão
function calculateTotal() {
  const rows = document.querySelectorAll("#productTable tbody tr"); // Alterado para 'tr' em vez de 'li'
  let totalWeightGrams = 0;

  rows.forEach(row => {
      const quantityInput = row.querySelector(".quantity");
      const unitWeight = parseFloat(quantityInput.dataset.size); // Pegando o peso da batata (em gramas)
      const quantity = parseInt(quantityInput.value);  // Pegando a quantidade inserida

      if (!isNaN(quantity) && quantity > 0) {
          // Calculando o peso total em gramas
          const totalWeightForItem = unitWeight * quantity;
          totalWeightGrams += totalWeightForItem;
      }
  });

  // Exibindo o resultado final
  if (totalWeightGrams < 1000) {
      document.getElementById("finalResult").textContent = totalWeightGrams.toFixed(2);
      document.getElementById("finalUnit").textContent = 'g';
  } else {
      const finalWeightKg = totalWeightGrams / 1000;
      document.getElementById("finalResult").textContent = finalWeightKg.toFixed(3);
      document.getElementById("finalUnit").textContent = 'kg';
  }
}
