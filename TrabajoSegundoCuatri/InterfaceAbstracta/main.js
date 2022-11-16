"use strict";
exports.__esModule = true;
var Auto_1 = require("./CLASEINTERFACE/Auto");
var Camioneta_1 = require("./CLASEABSTRACTA/Camioneta");
var AutoDeportivo_1 = require("./CLASEABSTRACTA/AutoDeportivo");
var AutoCiudad_1 = require("./CLASEABSTRACTA/AutoCiudad");
//Clase con interface
var autoCarrera = new Auto_1["default"](120, 2, 2, 6, true);
console.log(autoCarrera);
autoCarrera.acelerar();
console.log(autoCarrera);
//Clase Abstrata
var camioneta1 = new Camioneta_1["default"]();
var autoDeportivo1 = new AutoDeportivo_1["default"]();
var autoCiudad1 = new AutoCiudad_1["default"]();
console.log("Camioneta:");
camioneta1.imprimeVelocidad();
camioneta1.imprimeCantidadPuerta();
camioneta1.imprimeCantidadPuerta();
console.log();
console.log("Auto de la Ciudad:");
autoCiudad1.imprimeVelocidad();
autoCiudad1.imprimeCantidadPuerta();
autoCiudad1.imprimeCantidadPuerta();
console.log();
console.log("Auto Deportiva:");
autoDeportivo1.imprimeVelocidad();
autoDeportivo1.imprimeCantidadPuerta();
autoDeportivo1.imprimeCantidadPuerta();
