const ul = document.querySelector('.lista__container')
const formulario = document.querySelector('.Container__criar')


formulario.addEventListener('submit', event => {
    event.preventDefault()
    const inputTexto = event.target.add.value.trim();
    const validacaoInput = inputTexto.length;

    if(validacaoInput) {
        ul.innerHTML += `  <li class="lista">${inputTexto}<span class="material-symbols-outlined">
        delete
        </span></li>`;
    event.target.reset();
    }
})