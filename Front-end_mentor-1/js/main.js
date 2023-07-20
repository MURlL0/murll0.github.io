const result = document.querySelector('#result');
const result2 = document.querySelector('#result2');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const borde = document.querySelector('#borde');
const borde2 = document.querySelector('#borde2');

function validar() {
    const inputForm = document.login.email.value;
    const sinal = inputForm.includes('@');
    const com = inputForm.includes('.com');

    if (sinal && com) {
        result.classList.remove('visible');
        borde.classList.remove('red');
        return false;
    } else {
        result.classList.add('visible');
        borde.classList.add('red');
        return false;
    }
}

btn.onclick = validar;

function validar2() {
    const inputForm = document.login2.email.value;
    const sinal = inputForm.includes('@');
    const com = inputForm.includes('.com');

    if (sinal && com) {
        result2.classList.remove('visible');
        borde2.classList.remove('red');
        return false;
    } else {
        result2.classList.add('visible');
        borde2.classList.add('red');
        return false;
    }
}

btn2.onclick = validar2;
