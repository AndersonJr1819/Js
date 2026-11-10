

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        console.log(data.results[0].name)
        console.log(data.results[0].species)
    })