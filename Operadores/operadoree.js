// Operadores Aritmeticos são usados para poder fazer operçãoes matematicas

let a = 2
let b = 9
console.log("OPERADORES ARITIMETICOS")

console.log(a + b) // soma +
console.log(a - b) // subtração -
console.log(a * b) // multiplicação *
console.log(a / b) // divisão / 
console.log(a % b) // modulo é o resto da divisão %
console.log(a ** b) // potência **

//----------------------------------------------------------------------------------//

// Operadores de comparação 
console.log("OPERADORES DE COMPARAÇÃO")

let c = 7
let d = 8

console.log(c == b) // igual com (==) é para comparar o valor.
console.log(c === d) // igual com (===) é para comparar o tipo e o valor.
console.log(c != d) // (!=) vai verificar se é diferente.
console.log(c !== d) // (!==) vai verificar se é diferente e comparar o tipo.
console.log(c > d) // (>) para verificar se é maior 
console.log(c >= d) // (>=) para verificar se é igual ou maior
console.log(c < d) // (<) para verficar se é menor
console.log(c <= d) // (<=) para verificar se é igual ou menor 

//------------------------------------------------------------------------------------------//

// Operadores lógicos
console.log("OPERADORES LÓGICOS")
let chocolate = true
let pipoca = false
console.log(chocolate == true && pipoca == true) // (&&) = E no javascript e precisa que ambo sejam verdadeiros 


let elseve = true
let siage = false
console.log(elseve == true || siage == true) // (||) = É our no javascript e basta que apenas um seja verdadeiro

let logado = true 
console.log(!logado) // NOT é do contra 

//-----------------------------------------------------------------------------------------------------------------------//

// Operadores de operação 
console.log("OPERADORES DE ATRIBUIÇÃO")

let pontos = 10

// pontos = pontos + 5

pontos += 5 

console.log(pontos) 