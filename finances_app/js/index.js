const validateUser = async (email) => {
    try {
        const data = await fetch(
            `https://mp-wallet-app-api.herokuapp.com/users?email=${email}`
        ).then((res) => res.json());

        naTela(data, email);
    } catch (error) {
        console.log(error.message);
    }
};

const btEnter = (event) => {
    if (event.keyCode === 13) {
        validarLogin();
    }
};

const validarLogin = () => {
    const email = document.getElementById('email').value;

    validateUser(email);
};

const naTela = async (data, email) => {
    console.log(data);

    if (data.error === 'E-mail is invalid.') {
        document.getElementById('result').innerHTML = 'E-mail Invalido';
        return;
    }
    if (data.error === 'User does not exits.') {
        document.getElementById('result').innerHTML = 'E-mail não cadastrado';
        return;
    }
    if (!email.includes('@')) {
        document.getElementById('result').innerHTML = `Falto o @`;
        return;
    }

    if (!email.includes('.com')) {
        document.getElementById('result').innerHTML = `Falto o '.com'`;
        return;
    }
    document.getElementById('result').innerHTML = '';

    localStorage.setItem('@WalletApp:userEmail', data.email);
    localStorage.setItem('@WalletApp:userName', data.name);
    localStorage.setItem('@WalletApp:userId', data.id);
    window.open('../finances_app/pages/home.html', '_self');
};
