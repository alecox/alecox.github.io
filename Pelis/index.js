let library = document.getElementById("library");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value;

    fetch("http://www.omdbapi.com/?s=" + input + "&apikey=82b2d7f7")
        .then(response => response.json())
        .then(json => {

            for (let i = 0; i < 10; i++) {
                var tarjeta = document.createElement("div");
                var ancla = document.createElement("div");
                var imagen = document.createElement("img");
                var titulo = document.createElement("h2");
                var year = document.createElement("p");

                tarjeta.classList.add("film-card");

                if (json.Search[i].Poster != "N/A")
                    imagen.src = json.Search[i].Poster;
                else
                    imagen.src = "image_not_found.png";                                    
                titulo.textContent = json.Search[i].Title;
                year.textContent = "Year: " + json.Search[i].Year;

                tarjeta.appendChild(ancla);
                ancla.appendChild(imagen);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(year);
                library.appendChild(tarjeta);
            }                 
        })
        .catch((error) => {
            console.log(error);
        });
})