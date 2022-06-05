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
        imagen.classList.add("imagenxl");
        titulo.classList.add("idem");
        desc.classList.add("idem");
        idx.classList.add("idem");

        if (json.results[i].poster_path != null) {
            imagen.src = "https://image.tmdb.org/t/p/w500" + json.results[i].poster_path;
        } else {
            imagen.src = "image_not_found.png";
        }

        titulo.textContent = json.results[i].title;
        desc.textContent = "Descripcion: " + json.results[i].overview;
        idx.textContent = "idx: " + json.results[i].id;
        
        tarjeta.appendChild(ancla);
        ancla.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(desc);
        tarjeta.appendChild(idx);
        library.appendChild(tarjeta);

        var idpel = json.results[i].id
        var imgPeli = document.getElementsByClassName("imagenxl")[i];

        /*library.addEventListener("click", (e) => {          
                if (e.target.classList.contains("idem")) {
                    for (let x = 0; x < 20; x++) {  
                        if (e.target.classList.contains(`i${x}`)) {                            
                            x = 20;*/
            imgPeli.addEventListener("click", (e) => {           

                            descfilm.innerHTML = "";
                            fetch("https://api.themoviedb.org/3/movie/" + idpel + "?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US")
                                .then(response => response.json())
                                .then(json2 => {
                                    console.log("milaesa");

                                    /* var tarjeta2 = document.createElement("div");
                                     var ancla2 = document.createElement("div");
                                     var imagen2 = document.createElement("img");
                                     var titulo2 = document.createElement("h2");
                                     var desc2 = document.createElement("p");
                                     var year2 = document.createElement("p");
                                     var puntos2 = document.createElement("p");
                                     var popularidad2 = document.createElement("p");
 
                                     tarjeta2.classList.add("desc-card");
 
                                     if (json2.results.poster_path != null){
                                     imagen2.src = "https://image.tmdb.org/t/p/w500" + json2.results[i].poster_path;
                                     }else{
                                     imagen2.src = "image_not_found.png";
                                     }
                                         titulo2.textContent = json2.results.title;
                                         desc2.textContent = "Descripcion: " + json2.results.overview;
                                         year2.textContent = "Lanzamiento: " + json2.results.release_date;
                                         puntos2.textContent = "Puntuacion: " + json2.results.vote_average;
                                         popularidad2.textContent = "Popularidad: " + json2.results.popularity;
 
                                         tarjeta2.appendChild(ancla2);
                                         ancla2.appendChild(imagen2);
                                         tarjeta2.appendChild(titulo2);
                                         tarjeta2.appendChild(year2);
                                         tarjeta2.appendChild(puntos2);
                                         tarjeta2.appendChild(popularidad2);
 
                                         descfilm.appendChild(tarjeta2);
                                    */
                                })
                       /* } else {
                            console.log("papas");
                        }*/

            })
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
        console.log(e);
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate")
             .then(response => response.json())
             .then(json => {
                 console.log(json);
                 descfilm.innerHTML = "";                 
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
             })*/
  