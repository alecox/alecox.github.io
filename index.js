var nombre = document.getElementById("boton-portada__1");
var apellido = document.getElementById("boton-portada__2");
var extra1 = document.getElementById("boton-portada__3");

/*Efecto hover pero con JS para el nombre "Pablo"*/
nombre.addEventListener("mouseover", function () {
	nombre.innerHTML = "Home";
});
nombre.addEventListener("mouseout", function () {
	nombre.innerHTML = "Pablo";
});

/*Efecto hover pero con JS para el apellido "Reinchisi"*/
apellido.addEventListener("mouseover", function () {
	apellido.innerHTML = "Sobre nosotros";
});
apellido.addEventListener("mouseout", function () {
	apellido.innerHTML = "Reinchisi";
});

/*Efecto hover pero con JS para el extra1 "Arquitectura"*/
extra1.addEventListener("mouseover", function () {
	extra1.innerHTML = "Contactanos";
});
extra1.addEventListener("mouseout", function () {
	extra1.innerHTML = "Arquitectura";
});