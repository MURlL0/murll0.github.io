const completo = () => {
    const numberComIn = document.getElementById('comIn').value;
    const numberVenda = document.getElementById('venda').value;

    const comIn = parseInt(numberComIn);
    const venda = parseInt(numberVenda);

    const result2 = document.getElementById('result2');
    const resultado = (comIn / venda) * 100;
    const form = document.completo;

    if (form.comIn.value == '') {
        document.getElementById('result2').innerHTML = `Digite o Completo`;
        result2.classList.remove('negative');
    } else if (isNaN(comIn)) {
        document.getElementById('result2').innerHTML = `Somente Número`;
    } else if (form.venda.value == '') {
        document.getElementById('result2').innerHTML = `Digite o valor venda`;
        result2.classList.remove('negative');
    } else if (isNaN(venda)) {
        document.getElementById('result2').innerHTML = `Somente Número`;
    } else {
        document.getElementById(
            'result2'
        ).innerHTML = `Completo: ${resultado.toFixed(2)}%`;
    }
    if (resultado < 0) {
        result2.classList.add('negative');
    } else {
        result2.classList.remove('negative');
    }
};

document.getElementById('btn').addEventListener('click', completo);

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    completo();
});

const btnEnter = (event) => {
    if (event.keyCode === 13) {
        completo();
    }
};
