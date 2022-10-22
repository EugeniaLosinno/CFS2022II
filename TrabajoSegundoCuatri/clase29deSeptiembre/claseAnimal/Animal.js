"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(especie, nombre, comoNacen, queComen, cobertura, vidaSocial, cantidadPatas) {
        this.especie = especie;
        this.nombre = nombre;
        this.comoNacen = comoNacen;
        this.queComen = queComen;
        this.cobertura = cobertura;
        this.vidaSocial = vidaSocial;
        this.cantidadPatas = cantidadPatas;
    }
    Animal.prototype.comer = function () {
        console.log("El ".concat(this.nombre, " se animenta a ").concat(this.queComen));
    };
    Animal.prototype.nacer = function () {
        console.log("El ".concat(this.nombre, " nace por a ").concat(this.comoNacen));
    };
    Animal.prototype.recubrir = function () {
        console.log("El ".concat(this.nombre, " nace por a ").concat(this.cobertura));
    };
    return Animal;
}());
exports["default"] = Animal;
