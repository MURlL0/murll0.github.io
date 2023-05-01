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
