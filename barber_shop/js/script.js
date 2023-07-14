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
let toggle = document.querySelector('.toggle');
let toggleClose = document.querySelector('.toggleClose');

let open = false;

function openMenu() {
    if (open === true) {
        open = false;
        dropdown.classList.remove('open');
        toggle.classList.remove('open');
        toggleClose.classList.remove('open');
    } else if (open === false) {
        open = true;
        dropdown.classList.add('open');
        toggle.classList.add('open');
        toggleClose.classList.add('open');
    }
}

toggle.onclick= openMenu
toggleClose.onclick= openMenu

function closeMenu() {
    dropdown.classList.remove('open');
    toggle.classList.remove('open');
    toggleClose.classList.remove('open');
}

dropdown.addEventListener('click', function (elemento) {
    if (elemento.target.tagName === 'A') closeMenu();
});
