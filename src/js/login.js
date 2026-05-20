const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dadosInformados = Object.fromEntries(new FormData(form));
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    
    console.log("Informado: ", dadosInformados);
    console.log("Regstrados...", usuarios);

    if(dadosInformados['usuario']==usuarios[0]['user'] && dadosInformados['senha']==usuarios[0]['pass']){
        console.log('acesso liberado');
        window.location.href = "https://jefhter.github.io/teologando/src/pages/home.html";
    }
});