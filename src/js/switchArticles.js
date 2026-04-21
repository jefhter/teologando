const storage = localStorage;

function goNext(){
    
}

function goBack(){

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