const incompleto = () => {
    const numberIn = document.getElementById('In').value;
    const numberVenda2 = document.getElementById('venda2').value;

    const In = parseInt(numberIn);
    const venda2 = parseInt(numberVenda2);

    const resultIn = document.getElementById('resultIn');
    const resultadoIn = (In / venda2) * 100;
    const form2 = document.incompleto;

    if (form2.In.value == '') {
        document.getElementById('resultIn').innerHTML = `Digite o Incompleto`;
        resultIn.classList.remove('negative');
    } else if (isNaN(In)) {
        document.getElementById('resultIn').innerHTML = `Somente Número`;
    } else if (form2.venda2.value == '') {
        document.getElementById('resultIn').innerHTML = `Digite o valor venda`;
        resultIn.classList.remove('negative');
    } else if (isNaN(venda2)) {
        document.getElementById('resultIn').innerHTML = `Somente Número`;
    } else {
        document.getElementById(
            'resultIn'
        ).innerHTML = `Incompleto: ${resultadoIn.toFixed(2)}%`;
    }
    if (resultadoIn < 0) {
        resultIn.classList.add('negative');
    } else {
        resultIn.classList.remove('negative');
    }
};

document.getElementById('btnIn').addEventListener('click', incompleto);

document.getElementById('formIn').addEventListener('submit', function (event) {
    event.preventDefault();
    incompleto();
});

const btnEnterIn = (event) => {
    if (event.keyCode === 13) {
        incompleto();
    }
};
