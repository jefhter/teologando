const keysStorage = Object.keys(localStorage);;

document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('tabela-artigos');

    if (Array.isArray(keysStorage)) {
        keysStorage.forEach(titulo => {
            const tr = document.createElement('tr');
            const form = document.createElement('form');
            const input = document.createElement('input');
            const button = document.createElement('button');
            const tdForm = document.createElement('td');

            form.id = 'formArticles';
            form.action = "https://jefhter.github.io/teologando/src/pages/view.html";
            form.method = 'get';

            input.type = "hidden";
            input.name="content"; 
            input.value= `${titulo}`;

            button.type="submit"; 
            button.className="link-artigo";
            button.textContent= `${titulo}`;

            form.appendChild(input);
            form.appendChild(button);
            tdForm.appendChild(form);
            
            tr.appendChild(tdForm);

            tabela.appendChild(tr);
        });
    }
});


