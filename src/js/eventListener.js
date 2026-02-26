// document.addEventListener('submit', () => {
//     const valor = document.getElementsByName('content').value;
//     localStorage.setItem('dadosPost', valor);
// });

const form = document.querySelector('form');

form.addEventListener('submit', () => {    
    const content = new FormData(form).get("content");
    localStorage.setItem('dadosPost', content);
    console.log("Capturado via POST:", content);
});