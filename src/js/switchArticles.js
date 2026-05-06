function goNext(){   
    var params = new URLSearchParams(window.location.search);
    var atual = params.get("content");
    var key = localStorage.key(atual);
    var content = localStorage.getItem(Number(key)-1);
    var novaUrl;
    params.set('content', content);
    console.log(content)
    novaUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState({}, '', novaUrl);
    window.location.reload();
}

function goBack(){
    var params = new URLSearchParams(window.location.search);
    var atual = params.get("content");
    var key = localStorage.key(atual);
    var content = localStorage.getItem(Number(key)+1);
    var novaUrl;
    params.set('content', content);
    console.log(content)
    novaUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState({}, '', novaUrl);
    window.location.reload();
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