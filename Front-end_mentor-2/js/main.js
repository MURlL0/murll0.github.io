const erro1 = document.querySelector('#erro1');
const erro2 = document.querySelector('#erro2');
const erro3 = document.querySelector('#erro3');
const erro4 = document.querySelector('#erro4');
const first = document.querySelector('#first');
const last = document.querySelector('#last');
const notEmail = document.querySelector('#notEmail');
const password = document.querySelector('#password');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const btn = document.querySelector('#btn');

function validar() {
    erro1.classList.remove('active');
    erro2.classList.remove('active');
    erro4.classList.remove('active');
    first.classList.remove('active');
    last.classList.remove('active');
    input1.classList.remove('active');
    input2.classList.remove('active');
    erro3.classList.remove('active');
    notEmail.classList.remove('active');
    input3.classList.remove('active');
    input4.classList.remove('active');

    password.classList.remove('active');

    const name = document.login.name.value == '';
    const lastName = document.login.lastName.value == '';
    const email = document.login.email.value == '';
    const pass = document.login.pass.value == '';

    if (name && lastName && email && pass) {
        erro1.classList.add('active');
        first.classList.add('active');
        input1.classList.add('active');
        input2.classList.add('active');
        input3.classList.add('active');
        input4.classList.add('active');
        erro2.classList.add('active');
        last.classList.add('active');
        erro3.classList.add('active');
        notEmail.classList.add('active');
        document.login.email.placeholder = 'email@example/com';
        erro4.classList.add('active');
        password.classList.add('active');
        return false;
    }

    if (name) {
        erro1.classList.add('active');
        first.classList.add('active');
        input1.classList.add('active');
        return false;
    }
    if (lastName) {
        erro2.classList.add('active');
        last.classList.add('active');
        input2.classList.add('active');
        return false;
    }

    if (email) {
        erro3.classList.add('active');
        notEmail.classList.add('active');
        input3.classList.add('active');
        return false;
    }

    if (pass) {
        erro4.classList.add('active');
        password.classList.add('active');
        input4.classList.add('active');
        return false;
    }
   
}

btn.onclick = validar;
