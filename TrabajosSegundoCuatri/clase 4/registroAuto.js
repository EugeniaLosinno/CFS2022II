"use strict";
exports.__esModule = true;
//import { SpawnSyncOptionsWithBufferEncoding } from "child_process";
var fs = require("fs");
//class Motor {
//   private tipo : string;
//   public constructor (tipo : string) {
//     this.tipo = tipo;
//   }
//}
var Auto = /** @class */ (function () {
    function Auto(titular, patente, marca, modelo, motor, cantRuedas, cantPuertas, estaPrendido, velocidad, anio) {
        this.titular = titular;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.cantRuedas = cantRuedas;
        this.cantPuertas = cantPuertas;
        this.estaPrendido = estaPrendido;
        this.velocidad = velocidad;
        if (anio == undefined) {
            this.anio = -1;
        }
        else {
            this.anio = anio;
        }
    }
    Auto.prototype.getTitular = function () {
        return (this.titular);
    };
    ;
    Auto.prototype.getPatente = function () {
        return (this.patente);
    };
    ;
    Auto.prototype.getModelo = function () {
        return (this.modelo);
    };
    ;
    Auto.prototype.getMarca = function () {
        return (this.marca);
    };
    ;
    Auto.prototype.getanio = function () {
        return (this.anio);
    };
    ;
    Auto.prototype.prenderAuto = function () {
        this.estaPrendido = true;
    };
    Auto.prototype.apagarAuto = function () {
        this.estaPrendido = false;
    };
    Auto.prototype.acelerarAuto = function () {
        if (this.estaPrendido) {
            if (this.velocidad < 200) {
                this.velocidad = this.velocidad + 50;
            }
            else {
                console.log("No se puede acelerar lleva una velocidad superior a 200 km por hs");
            }
        }
        else {
            console.log("El auto esta apagado no se puede acelerar");
        }
    };
    Auto.prototype.desacelerarAuto = function () {
        if (this.estaPrendido) {
            if (this.velocidad > 50) {
                this.velocidad = this.velocidad - 50;
            }
            else {
                console.log("No se puede desacelerar lleva una velocidad menor a 50 km por hs");
            }
        }
        else {
            console.log("El auto esta apagado no se puede desacelerar");
        }
    };
    Auto.prototype.frenarAuto = function () {
        this.velocidad = 0;
        console.log("El auto se freno");
    };
    Auto.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.imprimirTituloAuto = function () {
        console.log(this);
    };
    return Auto;
}());
// creamos un gestor que nos permite leer un archivo de texto
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    GestorDeArchivos.prototype.mostrarAutos = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloAutos = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
//funcion para crear un objeto auto 
function crearAuto(registroAuto, arregloAuto) {
    //transformo el elemento de tipo string en un objeto de tipo Auto
    var vehiculo = registroAuto.split(',');
    var titular = vehiculo[0];
    var patente = vehiculo[1];
    var marca = vehiculo[2];
    var modelo = vehiculo[3];
    var motor = vehiculo[4];
    var cantRuedas = Number(vehiculo[5]);
    var cantPuertas = Number(vehiculo[6]);
    var estadoAuto = vehiculo[7];
    var estaPrendido;
    if (estadoAuto === "true") {
        estaPrendido = true;
    }
    else {
        estaPrendido = false;
    }
    var velocidad = Number(vehiculo[8]);
    var anio = Number(vehiculo[9]);
    var nuevoAuto = new Auto(titular, patente, marca, modelo, motor, cantRuedas, cantPuertas, estaPrendido, velocidad, anio);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arregloAuto.push(nuevoAuto);
}
function borrarrAuto(arregloAuto, posicion) {
    //let patente: string = readlineSync.question("Ingrese la patente que desea borrar: ");
    //let posicion : number = -1;
    //patente = patente.toLowerCase()
    //for (let i : number = 0; i < arregloAuto.length; i++) {
    //    if (arregloAuto[i].setPatente == patente) {
    //        posicion = i;
    //    }
    //}
    if ((posicion - 1) < 0 && (posicion - 1) > arregloAuto.length) {
        console.log("La patente ingresada para borra se encuentra fuera de rango");
    }
    else {
        delete arregloAuto[(posicion - 1)];
    }
}
function agregarAuto(arregloAuto, auto) {
    arregloAuto.push(auto);
}
//Inicio programa
//let motor : Motor = new Motor (`Nafta`);
//let primerAuto : Auto = new Auto (`Losinno Maria Eugenia`, `AB123KL`, `Ford`,`Mondeo`, motor, 4, 5, false, 0);
var baseAutos = new GestorDeArchivos('archivo.txt');
var arregloAuto = [];
//creo arreglo de los objetos que estan en el txt
for (var i = 0; i < baseAutos.getArregloAutos().length; i++) {
    crearAuto(baseAutos.getArregloAutos()[i], arregloAuto);
}
console.log(arregloAuto);
var primerAuto = new Auto("Cabreton Maria Eugenia", "AA123KL", "Audi", "F6", "Gas- oil", 4, 2, false, 0, 2022);
agregarAuto(arregloAuto, primerAuto);
console.log(arregloAuto);
borrarrAuto(arregloAuto, 2);
console.log(arregloAuto);
