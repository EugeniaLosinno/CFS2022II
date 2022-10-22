"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, velocidadActual, motor, cantidadCambios, cambioActual, tipoCombustible, estaPrendido) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = velocidadActual;
        this.motor = motor;
        this.cantidadCambios = cantidadCambios;
        this.cambioActual = cambioActual;
        this.tipoCombustible = tipoCombustible;
        this.estaPrendido = estaPrendido;
    }
    Auto.prototype.acelerar = function () {
        if (this.estaPrendido) {
            if (this.velocidadActual < 240) {
                this.velocidadActual += 10;
            }
            else {
                console.log("Está al limite, no se puede acelerar más");
            }
        }
        else {
            console.log("El auto esta apagado");
        }
    };
    Auto.prototype.desacelerar = function () {
        if (this.estaPrendido) {
            if (this.velocidadActual = 10) {
                this.velocidadActual = 0;
                console.log("El auto se frena");
            }
            else {
                if (this.velocidadActual < 10) {
                    console.log("Está al limite, no se puede desacelerar más");
                }
                else {
                    this.velocidadActual -= 10;
                }
            }
        }
        else {
            console.log("El auto esta apagado");
        }
    };
    Auto.prototype.frenar = function () {
        if (this.estaPrendido) {
            this.velocidadActual = 0;
        }
        else {
            console.log("El auto esta apagado");
        }
    };
    Auto.prototype.arrancarApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.pasarCambiosParaArriba = function () {
        if (this.cantidadCambios == this.cambioActual) {
            console.log("No se puede subir otro cambio");
        }
        else {
            this.cambioActual += 1;
        }
    };
    Auto.prototype.pasarCambiosParaAbajo = function () {
        if (this.cambioActual == 1) {
            console.log("No se puede bajar otro cambio");
        }
        else {
            this.cambioActual -= 1;
        }
    };
    return Auto;
}());
exports["default"] = Auto;
