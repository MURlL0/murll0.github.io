const calculo = () => {
    const numberReal = document.getElementById('real').value;
    const numberEstimado = document
        .getElementById('estimado')
        .value.toString('pt-BR');

    const real = parseInt(numberReal);
    const estimado = parseInt(numberEstimado);

    const result = document.getElementById('result');
    const calc = ((real - estimado) / estimado) * 100;
    const form = document.calculo;

    if (form.real.value == '') {
        document.getElementById('result').innerHTML = `Digite o valor Real`;
        result.classList.remove('negative');
        return false;
    } else if (isNaN(real)) {
        document.getElementById('result').innerHTML = `Somente Número`;
        return false;
    } else if (form.estimado.value == '') {
        document.getElementById('result').innerHTML = `Digite o valor Estimado`;
        result.classList.remove('negative');
        return false;
    } else if (isNaN(estimado)) {
        document.getElementById('result').innerHTML = `Somente Número`;
        return false;
    } else {
        document.getElementById('result').innerHTML = `${calc.toFixed(2)}%`;
    }
    if (calc < 0) {
        result.classList.add('negative');
        return false;
    } else {
        result.classList.remove('negative');
    }
};

const btn = document.getElementById('btn');

btn.onclick = calculo;

window.onload = () => {
    const form = document.getElementById('form');
    form.onsubmit = (event) => {
        event.preventDefault();
    };
    calculo;
};

const btnEnter = (event) => {
    if (event.keyCode === 13) {
        calculo();
    }
};
