const calculo = () => {
    const numberReal = document.getElementById('real').value;
    const numberEstimado = document.getElementById('estimado').value;

    const real = parseInt(numberReal);
    const estimado = parseInt(numberEstimado);

    const result = document.getElementById('result');
    const calc = ((real - estimado) / estimado) * 100;
    const form = document.calculo;

    if (form.real.value == '') {
        document.getElementById('result').innerHTML = `Digite o valor Real`;
        result.classList.remove('negative');
    } else if (form.estimado.value == '') {
        document.getElementById('result').innerHTML = `Digite o valor Estimado`;
        result.classList.remove('negative');
    } else {
        document.getElementById('result').innerHTML = `${calc.toFixed(2)}%`;
    }
    if (calc < 0) {
        result.classList.add('negative');
    } else {
        result.classList.remove('negative');
    }
};

const btnEnter = (event) => {
    if (event.keyCode === 13) {
        calculo();
    }
};

// document.getElementById('result').innerHTML = `${calc.toFixed(1)}%`;
