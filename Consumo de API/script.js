// FETCH É UMA FUNÇÃO PARA CHAMAR UMA API
// .THEN É PARA TRATAR O SUCESSO DA RESPOSTA DO SERVIDOR 
// RES É UMA RESPOSTA
// POR PADRÃO VEM EM JSON TEREMOS QUE TRANSFORMAR EM OBJETO DE JS
// ID É UM INDETIFICADOR QUE COLOCAMOS NO HTML PARA USAR NO JS

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const website = document.getElementById("website")
const Company_name = document.getElementById("Company_name")

fetch("https://jsonplaceholder.typicode.com/users") 
    .then((res) => res.json()) 
    .then((data) => {
        console.log(data)
        nome.innerText = data[6].name
        email.innerText = data[6].email
        telefone.innerText = data[6].phone
        website.innerText = data[6].website
        Company_name.innerText = data[6].company.name
    })

