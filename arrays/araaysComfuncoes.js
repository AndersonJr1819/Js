// let idades = [25,22, 19, 20, 50, 55, 100]
// console.table(idades)
// console.log(idades[1])
// console.log(idades[3])
// console.log(idades[4])
// console.log(idades[0])

let frutas = ["Maça", "Pera"]

frutas.oneshift("Morango") // ["Morango", "Maça", "Pera"]
console.log(frutas)

frutas.push("Uvaia") // ["Morango", "Maça", "Pera", "Uvaia"]
frutas.splice(2,0) 
console.log(frutas)
