const key = '937c849a9478d1557c65e71ff0502e3a';

async function dadosBuscar(cidade) {
    try {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`
        ).then((res) => res.json());

        naTela(data);
    } catch (error) {
        document.querySelector('#cidade').innerHTML = `Cidade desconhecida`;
    }
}

function naTela(data) {
    console.log(data);
    document.querySelector('#cidade').innerHTML = `Cidade: ${data.name}`;
    document.querySelector('#temp').innerHTML = `${data.main.temp.toFixed(0)}°`;
    document.querySelector(
        '#temp_max'
    ).innerHTML = `Máx,:${data.main.temp_max.toFixed(0)}°`;
    document.querySelector(
        '#temp_min'
    ).innerHTML = `Mín.:${data.main.temp_min.toFixed(0)}°`;
    document.querySelector(
        '#clima'
    ).innerHTML = `${data.weather[0].description}`;
    document.querySelector(
        '#umidade'
    ).innerHTML = `Umidade: ${data.main.humidity}%`;
    document.querySelector(
        '#icon'
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

function buscarBtn() {
    const cidade = document.querySelector('#buscar').value;
    icon.classList.add('open');

    dadosBuscar(cidade);
}

function btnEnter(event) {
    if (event.keyCode === 13) {
        buscarBtn();
    }
}

const icon = document.querySelector('#icon');

window.onload = icon.classList.remove('open');
