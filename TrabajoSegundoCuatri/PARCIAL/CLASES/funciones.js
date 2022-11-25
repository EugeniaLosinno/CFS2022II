"use strict";
exports.__esModule = true;
exports.darDeAltaCasa = exports.darDeAltaInmueble = void 0;
var Inmuebles_1 = require("./Inmuebles");
var Techo_1 = require("./Techo");
var Casa_1 = require("./Casa");
//import * as ReadlineSync from `readline-sync`;
//funcion para dar de alta un objeto inmueble al arreglo de Inmuebles
function darDeAltaInmueble(arregloInmueble) {
    //let perfilParaAlta: string = readlineSync.question("Ingrese el tipo de perfiles del techo: ");
    //let cubiertaParaAlta: string = readlineSync.question("Ingrese de que tipo es el techo: ");
    var perfilParaAlta = "Madera";
    var cubiertaParaAlta = " Chapa";
    var techoAlta = new Techo_1["default"](perfilParaAlta, cubiertaParaAlta);
    //let banioInmuebleParaAlta: number = readlineSync.question("Ingrese la cantidad de baño/s para dar de alta: ");
    //let habitacionInmuebleParaAlta: number = readlineSync.question("Ingrese la cantidad de habitaciones para dar de alta: ");
    var banioInmuebleParaAlta = 1;
    var habitacionInmuebleParaAlta = 2;
    var inmuebleParaAltaObjeto = new Inmuebles_1["default"](techoAlta, banioInmuebleParaAlta, habitacionInmuebleParaAlta);
    arregloInmueble.push(inmuebleParaAltaObjeto);
}
exports.darDeAltaInmueble = darDeAltaInmueble;
//funcion para dar de alta un objeto casa al arreglo de Casas
function darDeAltaCasa(arregloCasa) {
    //let perfilParaAlta: string = readlineSync.question("Ingrese el tipo de perfiles del techo: ");
    //let cubiertaParaAlta: string = readlineSync.question("Ingrese de que tipo es el techo: ");
    var perfilParaAlta = "Madera";
    var cubiertaParaAlta = " Chapa";
    var techoAlta = new Techo_1["default"](perfilParaAlta, cubiertaParaAlta);
    //let banioCasaParaAlta: number = readlineSync.question("Ingrese la cantidad de baño/s para dar de alta: ");
    //let habitacionCasaParaAlta: number = readlineSync.question("Ingrese la cantidad de habitaciones para dar de alta: ");
    var banioCasaParaAlta = 1;
    var habitacionCasaParaAlta = 2;
    //let metrosJardinCasaParaAlta: number = readlineSync.question("Ingrese la cantidad de metros cuadradpos del jardín para dar de alta: ");
    var metroJardinParaAlta = 20;
    var casaParaAltaObjeto = new Casa_1["default"](techoAlta, banioCasaParaAlta, habitacionCasaParaAlta, metroJardinParaAlta);
    arregloCasa.push(casaParaAltaObjeto);
}
exports.darDeAltaCasa = darDeAltaCasa;
