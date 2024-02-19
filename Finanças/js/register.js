const onRegister = async (name, email) => {
    try {
        const data = {
            name,
            email,
        };

        const response = await fetch(
            `https://mp-wallet-app-api.herokuapp.com/users`,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data),
            }
        );
        const user = await response.json();
        return user;
    } catch (error) {
        console.log(error);
    }
};

const validarRegister = async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const result = await onRegister(name, email);
    console.log(result);

    if (name === '') {
        document.getElementById('result').innerHTML = `Digite seu Nome`;
        return;
    }

    if (name.length < 3) {
        document.getElementById(
            'result'
        ).innerHTML = `${name}: mínimo de 3 caracteres`;
        return;
    }

    if (email === '') {
        document.getElementById('result').innerHTML = `Digite seu e-mail`;
        return;
    }
    if (email.length < 6) {
        document.getElementById('result').innerHTML = `${email} esta incorreto`;
        return;
    }
    if (!email.includes('@')) {
        document.getElementById('result').innerHTML = `${email} falta o '@'`;
        return;
    }
    if (!email.includes('.com')) {
        document.getElementById('result').innerHTML = `${email} falta o '.com`;
        return;
    }

    if (result.error === 'User already exits') {
        document.getElementById('result').innerHTML = 'E-mail ja cadastrado';
        return;
    }

    document.getElementById('result').innerHTML = '';

    localStorage.setItem('@WalletApp:userEmail', result.email);
    localStorage.setItem('@WalletApp:userName', result.name);
    localStorage.setItem('@WalletApp:userId', result.id);
    window.open('../../avançado/index.html', '_self');
};

window.onload = () => {
    const form = document.getElementById('form');
    form.onsubmit = (event) => {
        event.preventDefault();
    };
    validarRegister;
};
