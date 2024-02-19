const openMenu = () => {
    menuAdd.classList.add('active');
    back.classList.add('escuro');
};

const closeMenu = () => {
    menuAdd.classList.remove('active');
    back.classList.remove('escuro');
};

const onLogout = () => {
    localStorage.clear();
    window.open('../../avançado/index.html', '_self');
};

const menuAdd = document.querySelector('#menuAdd');
const back = document.querySelector('#back');

const onloadRender = async () => {
    try {
        const dataFormat = document.getElementById('dataConfig').value;
        const email = localStorage.getItem('@WalletApp:userEmail');
        const date = dataFormat;
        const result = await fetch(
            `https://mp-wallet-app-api.herokuapp.com/finances?date=${date}`,
            {
                method: 'GET',
                headers: {
                    email: email,
                },
            }
        );

        const data = await result.json();
        financeList(data);
        financesRender(data);
        return data;
    } catch (error) {
        return {error};
    }
};

const financesRender = (data) => {
    const total = data.length;

    const receitas = data
        .filter((item) => Number(item.value) > 0)
        .reduce((acc, item) => acc + Number(item.value), 0);

    const despesas = data
        .filter((item) => Number(item.value) < 0)
        .reduce((acc, item) => acc + Math.abs(Number(item.value)), 0);

    const balance = receitas - despesas;

    const card1 = document.getElementById('card1');
    card1.innerHTML = '';

    const totalElementH3 = document.createElement('h3');
    const totalTextH3 = document.createTextNode('Total de Lançamentos');
    totalElementH3.appendChild(totalTextH3);
    card1.appendChild(totalElementH3);

    const totalElement = document.createElement('h1');
    const totalText = document.createTextNode(total);
    totalElement.appendChild(totalText);
    card1.appendChild(totalElement);

    const card2 = document.getElementById('card2');
    card2.innerHTML = '';

    const receitasElementH3 = document.createElement('h3');
    const receitasTextH3 = document.createTextNode('Receitas');
    receitasElementH3.appendChild(receitasTextH3);
    card2.appendChild(receitasElementH3);

    const receitasElement = document.createElement('h1');
    const receitasText = document.createTextNode(
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(receitas)
    );
    receitasElement.appendChild(receitasText);
    card2.appendChild(receitasElement);

    const card3 = document.getElementById('card3');
    card3.innerHTML = '';

    const despesasElementH3 = document.createElement('h3');
    const despesasTextH3 = document.createTextNode('Despesas');
    despesasElementH3.appendChild(despesasTextH3);
    card3.appendChild(despesasElementH3);

    const despesasElement = document.createElement('h1');
    const despesasText = document.createTextNode(
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(despesas)
    );
    despesasElement.appendChild(despesasText);
    card3.appendChild(despesasElement);

    const card4 = document.getElementById('card4');
    card4.innerHTML = '';

    const balanceElementH3 = document.createElement('h3');
    const balanceTextH3 = document.createTextNode('Balanço');
    balanceElementH3.appendChild(balanceTextH3);
    card4.appendChild(balanceElementH3);

    const balanceElement = document.createElement('h1');
    const balanceText = document.createTextNode(
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(balance)
    );
    balanceElement.appendChild(balanceText);
    card4.appendChild(balanceElement);
};

const onloadContainer = () => {
    const name = localStorage.getItem('@WalletApp:userName');
    const email = localStorage.getItem('@WalletApp:userEmail');

    const profile = document.getElementById('profile');

    const avatarElement = document.createElement('h3');
    const avatarText = document.createTextNode(name.slice(0, 2));
    avatarElement.appendChild(avatarText);
    profile.appendChild(avatarElement);

    const emailElement = document.createElement('a');
    emailElement.className = 'email';
    const emailText = document.createTextNode(email);
    emailElement.appendChild(emailText);
    profile.appendChild(emailElement);

    const exitElement = document.createElement('a');
    exitElement.style.cursor = 'pointer';
    exitElement.onclick = () => onLogout();
    const exitText = document.createTextNode('sair');
    exitElement.appendChild(exitText);
    profile.appendChild(exitElement);
};

const financeList = async (data) => {
    const ulList = document.createElement('ul');
    const ulList2 = document.createElement('ul');
    const ulList3 = document.createElement('ul');
    const ulList4 = document.createElement('ul');
    const ulList5 = document.createElement('ul');

    data.map((item) => {
        const title = document.getElementById('onTitle');
        const category = document.getElementById('onCategory');
        const data = document.getElementById('onData');
        const value = document.getElementById('onValue');
        const onDelete = document.getElementById('onDelete');

        title.innerHTML = '';
        category.innerHTML = '';
        data.innerHTML = '';
        value.innerHTML = '';
        onDelete.innerHTML = '';

        //title

        const titleElementH4 = document.createElement('h4');
        const titleTextH4 = document.createTextNode('Titulo');
        titleElementH4.appendChild(titleTextH4);
        title.appendChild(titleElementH4);

        const titleElement = document.createElement('li');
        const titleText = document.createTextNode(item.title);
        titleElement.appendChild(titleText);
        titleElement.style.textAlign = 'left';
        ulList.appendChild(titleElement);
        title.appendChild(ulList);

        //category
        const categoryElementH4 = document.createElement('h4');
        const categoryTextH4 = document.createTextNode('Categoria');
        categoryElementH4.appendChild(categoryTextH4);
        category.appendChild(categoryElementH4);

        const categoryElement = document.createElement('li');
        const categoryText = document.createTextNode(item.name);
        categoryElement.appendChild(categoryText);
        ulList2.appendChild(categoryElement);
        category.appendChild(ulList2);

        //date
        const dataElementH4 = document.createElement('h4');
        const dataTextH4 = document.createTextNode('Data');
        dataElementH4.appendChild(dataTextH4);
        data.appendChild(dataElementH4);

        const dataElement = document.createElement('li');
        const dataText = document.createTextNode(
            new Date(item.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
        );
        dataElement.appendChild(dataText);
        ulList3.appendChild(dataElement);
        data.appendChild(ulList3);

        //value
        const valueElementH4 = document.createElement('h4');
        const valueTextH4 = document.createTextNode('Valor');
        valueElementH4.appendChild(valueTextH4);
        value.appendChild(valueElementH4);

        const valueElement = document.createElement('li');
        const valueText = document.createTextNode(
            new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
            }).format(item.value)
        );
        valueElement.appendChild(valueText);
        ulList4.appendChild(valueElement);
        if (item.value < 0) {
            valueElement.style.color = 'red';
        } else {
            valueElement.style.color = 'green';
        }
        value.appendChild(ulList4);

        //onDelete
        const deleteElementH4 = document.createElement('h4');
        const deleteTextH4 = document.createTextNode('Excluir');
        deleteElementH4.appendChild(deleteTextH4);
        onDelete.appendChild(deleteElementH4);

        const deleteElement = document.createElement('li');
        deleteElement.onclick = () => onDeleteItem(item.id);
        const deleteText = document.createTextNode('Deletar');
        deleteElement.appendChild(deleteText);
        deleteElement.style.cursor = 'pointer';
        ulList5.appendChild(deleteElement);
        onDelete.appendChild(ulList5);
    });
};

const onloadCategory = async () => {
    try {
        const categorySelect = document.getElementById('category');
        const response = await fetch(
            'https://mp-wallet-app-api.herokuapp.com/categories'
        );
        const resultado = await response.json();
        console.log(resultado);

        resultado.map((category) => {
            const optionElement = document.createElement('option');
            const optionText = document.createTextNode(category.name);
            optionElement.id = `option_${category.id}`;
            optionElement.value = category.id;
            optionElement.appendChild(optionText);
            categorySelect.appendChild(optionElement);
        });
    } catch (error) {
        alert(error.message);
    }
};

const onAddFinances = async (data) => {
    try {
        const email = localStorage.getItem('@WalletApp:userEmail');

        const response = await fetch(
            `https://mp-wallet-app-api.herokuapp.com/finances`,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    email: email,
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

const onDeleteItem = async (id) => {
    try {
        const email = localStorage.getItem('@WalletApp:userEmail');
        await fetch(`https://mp-wallet-app-api.herokuapp.com/finances/${id}`, {
            method: 'DELETE',
            headers: {
                email: email,
            },
        });

        onloadRender();
    } catch (error) {
        alert(error.message);
    }
};

const onFormRegister = async (target) => {
    try {
        const title = target[0].value;
        const value = Number(target[1].value);
        const date = target[2].value;
        const category = Number(target[3].value);
        const result = await onAddFinances({
            title,
            value,
            date,
            category_id: category,
        });

        if (result.error) {
            alert(error.message);
            return;
        }
        closeMenu();
        const data = await onloadRender();
        financeList(data);
        financesRender(data);
    } catch (error) {
        alert(error.message);
    }
};

const setInitialDate = () => {
    const dataConfig = document.getElementById('dataConfig');
    const onDate = new Date().toISOString().split('T')[0];
    dataConfig.value = onDate;
    dataConfig.addEventListener('change', () => {
        onloadRender();
    });
};

window.onload = async () => {
    setInitialDate();
    onloadContainer();
    const data = await onloadRender();
    financeList(data);
    financesRender(data);
    onloadCategory();

    const form = document.getElementById('form-register-finance');
    form.onsubmit = (event) => {
        event.preventDefault();
        onFormRegister(event.target);
    };
};
