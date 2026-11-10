// const title = document.getElementById("title")

// paragrafo.style.color = "blue"
// paragrafo.style.fontSize = "20px"

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")
// const img = document.getElementById("img")


// btn.addEventListener("click", function () {
//      paragrafo.innerText = "Texto alterado com sucesso!"
//      Image.src= ""
// })

// document.addEventListener("keydown", function(e){
//     if (e.key === "r") {
//         document.body.style.backgroundColor = "red"
//     } else if (e.key === "g") {
//         document.body.style.backgroundColor = "green"
//     } else if (e.key === "b") { 
//         document.body.style.backgroundColor = "blue"
//     } else {
//         document.body.style.backgroundColor = "white"
//     }
// })

const colors = {
    r: "red",
    g: "green",
    b: "blue"
};

document.addEventListener("keydown", (e) => {
    document.body.style.backgroundColor = colors[e.key] || "white";
});
