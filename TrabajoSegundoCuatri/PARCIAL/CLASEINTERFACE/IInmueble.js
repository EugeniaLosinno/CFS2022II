"use strict";
exports.__esModule = true;
var Inmueble = /** @class */ (function () {
    function Inmueble(cantidadBanio, cantidadHabitacion) {
        this.cantidadBanio = cantidadBanio;
        this.cantidadHabitacion = cantidadHabitacion;
    }
    Inmueble.prototype.getCantidadHabitacion = function () {
        return (this.cantidadHabitacion);
    };
    Inmueble.prototype.getCantidadBanio = function () {
        return this.cantidadBanio;
    };
    Inmueble.prototype.setHabitacion = function (newHabitacion) {
        this.cantidadHabitacion = newHabitacion;
    };
    Inmueble.prototype.setBanio = function (newBanio) {
        if (newBanio > 0) {
            this.cantidadBanio = newBanio;
        }
        else {
            console.log("El inmueble no puede tener ningún baño");
        }
    };
    Inmueble.prototype.inmuebleFamiliar = function () {
        if (this.cantidadHabitacion > 3) {
            return (true);
        }
        else {
            return (false);
        }
    };
    Inmueble.prototype.inmuebleBaniarLavarManos = function () {
        if (this.cantidadBanio > 1) {
            return (true);
        }
        else {
            return (false);
        }
    };
    return Inmueble;
}());
exports["default"] = Inmueble;
