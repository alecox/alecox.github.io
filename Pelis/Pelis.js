let library = document.getElementById("library");

function crear_tarjeta(json) {
    
    library.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        var tarjeta = document.createElement("div");
        var ancla = document.createElement("div");
        var imagen = document.createElement("img");
        var titulo = document.createElement("h2");
        var year = document.createElement("p");

        tarjeta.classList.add("film-card");

        if (json.results[i].poster_path != "N/A")
            imagen.src = "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
        else
            imagen.src = "image_not_found.png";
        titulo.textContent = json.results[i].title;
        year.textContent = "Year: " + json.results[i].release_date;

        tarjeta.appendChild(ancla);
        ancla.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(year);
        library.appendChild(tarjeta);   
    }} 


fetch("https://api.themoviedb.org/3/discover/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        crear_tarjeta(json);
    });
   

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value;

    fetch("https://api.themoviedb.org/3/search/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&query=" + input + "&page=1&")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            crear_tarjeta(json);
        })
        .catch((error) => {
            console.log(error);
        });
})