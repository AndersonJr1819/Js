// FETCH É UMA FUNÇÃO PARA CHAMAR UMA API
// .THEN É PARA TRATAR O SUCESSO DA RESPOSTA DO SERVIDOR 
// RES É UMA RESPOSTA
// POR PADRÃO VEM EM JSON TEREMOS QUE TRANSFORMAR EM OBJETO DE JS
// ID É UM INDETIFICADOR QUE COLOCAMOS NO HTML PARA USAR NO JS

// const nome = document.getElementById("nome")
// const email = document.getElementById("email")
// const telefone = document.getElementById("telefone")
// const website = document.getElementById("website")
// const Company_name = document.getElementById("Company_name")
// forEach é usado para "criar" a div para mostrar os dados da api na tela e mostrar pro usario

// const container = document.getElementById("container")

// fetch("https://jsonplaceholder.typicode.com/users") 
//     .then((res) => res.json()) 
//     .then((data) => {
//         console.log(data)
//         data.forEach(user => {
//             const card = document.createElement("div")
//                 card.className = "box"
//                 card.innerHTML = `
//                     <p>Nome: ${user.name}</p>
//                     <p>E-mail: ${user.email}</p>
//                     <p>Telefone: ${user.phone}</p>
//                     <p>Website: ${user.websiste}</p>
//                     <p>Company: ${user.company.name}</p>
//                 `
//                 container.appendChild(card)

//         })
        // nome.innerText = data[6].name
        // email.innerText = data[6].email
        // telefone.innerText = data[6].phone
        // website.innerText = data[6].website
        // Company_name.innerText = data[6].company.name

    // })

