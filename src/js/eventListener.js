const form = document.querySelector('form');

form.addEventListener('submit', () => {    
    const content = new URLSearchParams(new FormData(form)).get("content");
    localStorage.setItem('dados', content);
    console.log("Capturado via POST:", content);
});