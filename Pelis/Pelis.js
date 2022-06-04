const library = document.getElementById("library");
const descfilm = document.getElementById("descfilm");


function crear_tarjeta(json) {
    descfilm.innerHTML = "";
    library.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        var tarjeta = document.createElement("div");
        var ancla = document.createElement("div");
        var imagen = document.createElement("img");
        var titulo = document.createElement("h2");
        var desc = document.createElement("p");
        var idx = document.createElement("p");

        tarjeta.classList.add("film-card");
        tarjeta.classList.add("idem");
        tarjeta.classList.add("i" + i);
        ancla.classList.add("idem");
        imagen.classList.add("idem");
        titulo.classList.add("idem");
        desc.classList.add("idem");
        idx.classList.add("idem");

        if (json.results[i].poster_path != null)
            imagen.src = "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
        else
            imagen.src = "image_not_found.png";
        titulo.textContent = json.results[i].title;
        desc.textContent = "Descripcion: " + json.results[i].overview;
        idx.textContent = "idx: " + json.results[i].id;

        tarjeta.appendChild(ancla);
        ancla.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(desc);
        tarjeta.appendChild(idx);
        library.appendChild(tarjeta);
    }
}


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
    


/*library.addEventListener("click", (e) => {     
    if (e.target.classList.contains("idem")) {  
           
    fetch("https://api.themoviedb.org/3/search/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&query=" + input + "&page=1&")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            descfilm.innerHTML = "";
            library.innerHTML = "";
            for (let i = 0; i < 20; i++) {
                var tarjeta = document.createElement("div");
                var ancla = document.createElement("div");
                var imagen = document.createElement("img");
                var titulo = document.createElement("h2");
                var desc = document.createElement("p");
                var year = document.createElement("p");
                var puntos = document.createElement("p");
                var popularidad = document.createElement("p");
                
                tarjeta.classList.add("desc-card");

                if (json.results[i].poster_path != null)
                    imagen.src = "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
                else
                    imagen.src = "image_not_found.png";
                titulo.textContent = json.results[i].title;
                desc.textContent = "Descripcion: " + json.results[i].overview;
                year.textContent = "Lanzamiento: " + json.results[i].release_date;
                puntos.textContent = "Puntuacion: " + json.results[i].vote_average;
                popularidad.textContent = "Popularidad: " + json.results[i].popularity;

                tarjeta.appendChild(ancla);
                ancla.appendChild(imagen);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(year);
                tarjeta.appendChild(puntos);
                tarjeta.appendChild(popularidad);
               
                library.appendChild(tarjeta);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
})*/