let option;

const department = [
    'Marketing',
    'Sales',
    'Finance',
    'Human Resources',
    'Information Technology',
    'Research and Development',
    'Customer Service',
    'Operations',
    'Legal',
    'Administration',
];

for (let departments of department) {
    option += `<option>${departments}</option>`;
}

document.querySelector('#departement').innerHTML = option;

let option_time;

let time = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
];

for (let times of time) {
    option_time += `<option>${times}</option>`;
}

document.querySelector('#time').innerHTML = option_time;

function validar() {
    if (document.login.user.value == '') {
        document.querySelector('#result').innerHTML =
            'Digite seu nome completo';
        return false;
    }
    if (document.login.user.value.length < 6) {
        document.querySelector('#result').innerHTML = 'Mínimo 6 caracteres';
        return false;
    }
    if (document.login.email.value == '') {
        document.querySelector('#result').innerHTML = 'Digite seu email';
        return false;
    }
}

const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');

let active = false;

function openClose() {
    if (active === false) {
        active = true;
        menu.classList.add('active');
        hamburger.classList.add('active');
        icon.classList.add('active');
    } else if (active === true) {
        active = false;
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        icon.classList.remove('active');
    }
}

hamburger.onclick = openClose;
icon.onclick = openClose;

function closeMenu() {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    icon.classList.remove('active');
}

menu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        closeMenu();
    }
});
