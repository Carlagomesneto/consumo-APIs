
const reqGet =  new Request('http://localhost:3000/produtos',{
    "method": "GET",
    "headers": {
        "Content-type": "application/json"
    }
});

fetch(reqGet)
    .then(resposta => resposta.json())
    .then(resposta => {

    const ul = document.createElement('ul');


    resposta.forEach(produto => {
        
        const liDescrição = document.createElement('li');
        liDescrição.innerHTML = produto.id;

        const liId = document.createElement('li');
        liId.innerHTML = produto.descrição;

        const liPreco = document.createElement('li');
        liPreco.innerHTML = produto.preco.toFixed(2);

        ul.append(liId,liDescrição,liPreco);
    });

    document.body.appendChild(ul);

});


