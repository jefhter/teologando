const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dados = new FormData(form);
    
    console.log("DADOS...", Object.fromEntries(dados));
});