"use strict";
exports.__esModule = true;
var Inmueble1Abstracta_1 = require("./CLASEABSTRACTA/Inmueble1Abstracta");
var funciones_1 = require("./CLASES/funciones");
var IInmueble_1 = require("./CLASEINTERFACE/IInmueble");
//Clases - Objeto - Herencia - Composición (Carpeta CLASES)
console.log("Trabajo Clase, Objeto, Herencia y Composición");
var conjuntoInmuebles = [];
(0, funciones_1.darDeAltaInmueble)(conjuntoInmuebles);
console.log("Los inmuebles ingresados son: ");
console.log(conjuntoInmuebles);
var conjuntoCasas = [];
(0, funciones_1.darDeAltaCasa)(conjuntoCasas);
console.log("Las casas ingresadas son: ");
console.log(conjuntoCasas);
//Abstracción (carpeta CLASEABSTRACTA)
console.log("");
console.log("Trabajo Abstracción");
var inmuebleSanTelmo = new Inmueble1Abstracta_1["default"]();
inmuebleSanTelmo.imprimeCantidadHabitacion();
inmuebleSanTelmo.imprimeCantidadBanios();
//Interface (carpeta CLASEINTERFACE)
console.log("");
console.log("Trabajo Interface");
var inmueble1 = new IInmueble_1["default"](2, 3);
console.log("El inmueble ingresado es: ");
console.log(inmueble1);
