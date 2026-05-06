function goNext(){   
    const array = JSON.parse(localStorage.getItem('titulos'));
    const params = new URLSearchParams(window.location.search);
    const atual = params.get("content");
    var index = array.indexOf(atual);
    if(index<array.length-1){
        var content = array[index+1];
        var novaUrl;
        params.set('content', content);
        console.log(content)
        novaUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', novaUrl);
        window.location.reload();
    }else{
        console.log('Você está no ultimo Artigo.');
    }

}

function goBack(){   
    const array = JSON.parse(localStorage.getItem('titulos'));
    const params = new URLSearchParams(window.location.search);
    const atual = params.get("content");
    var index = array.indexOf(atual);
    if(index>0){
        var content = array[index-1];
        var novaUrl;
        params.set('content', content);
        console.log(content)
        novaUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', novaUrl);
        window.location.reload();
    }else{
        console.log('Você está no primeiro Artigo.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const next = document.getElementById('next');
    const back = document.getElementById('back');

    if (next) {
        next.addEventListener('click', goNext);
    }
    if (back) {
        back.addEventListener('click', goBack);
    }
});