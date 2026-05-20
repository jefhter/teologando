const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dadosInformados = Object.fromEntries(new FormData(form));
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    
    console.log("iNFORMADOS...", dadosInformados);

    if(dadosInformados['usuario']==usuarios[0]['user']){
        console.log('Usuário duplicado.');
        return 0;
    }else{
        window.location.href = "https://jefhter.github.io/teologando/";
    }
});