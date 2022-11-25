"use strict";
exports.__esModule = true;
var Inmuebles = /** @class */ (function () {
    function Inmuebles(techo, cantidadBanio, cantidadHabitacion) {
        this.techo = techo;
        this.cantidadBanio = cantidadBanio;
        this.cantidadHabitacion = cantidadHabitacion;
    }
    Inmuebles.prototype.getCantidadHabitacion = function () {
        return (this.cantidadHabitacion);
    };
    Inmuebles.prototype.getCantidadBanio = function () {
        return this.cantidadBanio;
    };
    Inmuebles.prototype.setHabitacion = function (newHabitacion) {
        this.cantidadHabitacion = newHabitacion;
    };
    Inmuebles.prototype.setBanio = function (newBanio) {
        if (newBanio > 0) {
            this.cantidadBanio = newBanio;
        }
        else {
            console.log("El inmueble no puede tener ningún baño");
        }
    };
    Inmuebles.prototype.inmuebleFamiliar = function () {
        if (this.cantidadHabitacion > 3) {
            return (true);
        }
        else {
            return (false);
        }
    };
    Inmuebles.prototype.inmuebleBaniarLavarManos = function () {
        if (this.cantidadBanio > 1) {
            return (true);
        }
        else {
            return (false);
        }
    };
    return Inmuebles;
}());
exports["default"] = Inmuebles;
