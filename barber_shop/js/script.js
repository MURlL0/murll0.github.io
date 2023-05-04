let servicos = [
    'corte de cabelo',
    'chapinha',
    'luzes',
    'progressiva',
    'maquina zero',
    'alongamento',
];
let options = '';

for (let servico of servicos) {
    options += `<option>${servico}</option>`;
}

document.querySelector('#servicos').innerHTML = options;

document.querySelector('#servicos').innerHTML = options;

let dropdown = document.querySelector('.dropdown');

let open = false;

function openMenu() {
    if (open === true) {
        open = false;
        dropdown.classList.remove('open');
    } else if (open === false) {
        open = true;
        dropdown.classList.add('open');
    }
}
