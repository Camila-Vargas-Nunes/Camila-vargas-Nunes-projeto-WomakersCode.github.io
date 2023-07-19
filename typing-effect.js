const nameTitle = 'Camila Achutti';

function typeText(elemento) {
    const arrText = nameTitle.split('');
    elemento.innerHTML = '';

    arrText.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 250 * i);
    });
}

const title = document.querySelector('.person-name');
typeText(title);
