const library = document.getElementById("library");
const descfilm = document.getElementById("descfilm");
let arrayid = [];

function crear_tarjeta(json) {
    descfilm.innerHTML = "";
    library.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        var tarjeta = document.createElement("div");
        var ancla = document.createElement("div");
        var imagen = document.createElement("img");
        var titulo = document.createElement("h2");        
        var idx = document.createElement("p");

        tarjeta.classList.add("film-card");
        tarjeta.classList.add("idem");
        tarjeta.classList.add("i" + i);
        ancla.classList.add("idem");
        ancla.classList.add("i" + i);
        imagen.classList.add("idem"); 
        imagen.classList.add("i" + i);
        titulo.classList.add("idem");  
        titulo.classList.add("i" + i);
        idx.classList.add("idem");

        if (json.results[i].poster_path != null) {
            imagen.src = "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
        } else {
            imagen.src = "image_not_found.png";
        }

        titulo.textContent = json.results[i].title;        
        idx.textContent = "idx: " + json.results[i].id;
        
        tarjeta.appendChild(ancla);
        ancla.appendChild(imagen);
        tarjeta.appendChild(titulo);        
        tarjeta.appendChild(idx);

        library.appendChild(tarjeta);

        var idpel = json.results[i].id        
        arrayid.push(idpel);
    }
        library.addEventListener("click", (e) => {          
                if (e.target.classList.contains("idem")) {
                    for (let x = 0; x < 20; x++) {  
                        if (e.target.classList.contains(`i${x}`)) { 
                            arrayactual = arrayid[x]
                            x = 20;                                                          
                            fetch("https://api.themoviedb.org/3/movie/" + arrayactual + "?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US")
                            .then(response => response.json())
                            .then(json2 => {
                                    console.log(json2);
                                descfilm.innerHTML = "";
                                var tarjeta2 = document.createElement("div");
                                var ancla2 = document.createElement("div");
                                var ancla3 = document.createElement("div");
                                var imagen2 = document.createElement("img");
                                var titulo2 = document.createElement("h2");
                                var desc2 = document.createElement("p");
                                var year2 = document.createElement("p");
                                var puntos2 = document.createElement("p");
                                var popularidad2 = document.createElement("p");
 
                                tarjeta2.classList.add("desc-card");
                                ancla2.classList.add("desc-card-img");
                                ancla3.classList.add("desc-card-info");
 
                                if (json2.poster_path != null){
                                imagen2.src = "https://image.tmdb.org/t/p/w500" + json2.poster_path;
                                }else{
                                imagen2.src = "image_not_found.png";
                                }
                                titulo2.textContent = json2.title;
                                desc2.textContent = "Descripcion: " + json2.overview;
                                year2.textContent = "Lanzamiento: " + json2.release_date;
                                puntos2.textContent = "Puntuacion: " + json2.vote_average;
                                popularidad2.textContent = "Popularidad: " + json2.popularity;
 
                                tarjeta2.appendChild(ancla2);
                                tarjeta2.appendChild(ancla3);
                                ancla2.appendChild(imagen2);
                                ancla3.appendChild(titulo2);
                                ancla3.appendChild(year2);
                                ancla3.appendChild(puntos2);
                                ancla3.appendChild(popularidad2);
                                ancla3.appendChild(desc2);
 
                                descfilm.appendChild(tarjeta2);
                                   
                            })
                        } else {
                            console.log("papas");
                        }
                    }
                }
        })  
        
}


    fetch("https://api.themoviedb.org/3/discover/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        arrayid = [];
        descfilm.innerHTML = "";
        crear_tarjeta(json);
    });

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value;

    fetch("https://api.themoviedb.org/3/search/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&query=" + input + "&page=1&")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            arrayid = [];
            descfilm.innerHTML = "";
            crear_tarjeta(json);
        })
        .catch((error) => {
            console.log(error);
        });
    })  