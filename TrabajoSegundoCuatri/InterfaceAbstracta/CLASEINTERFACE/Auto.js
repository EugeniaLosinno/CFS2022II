"use strict";
exports.__esModule = true;
var AutoCarrera = /** @class */ (function () {
    function AutoCarrera(velocidad, cantidadAsiento, cantidadPuerta, cantidadCambios, prendidoApagado) {
        this.velocidad = velocidad;
        this.cantidadAsiento = cantidadAsiento;
        this.cantidadPuerta = cantidadPuerta;
        this.cantidadCambios = cantidadCambios;
        this.prendidoApagado = prendidoApagado;
    }
    AutoCarrera.prototype.getVelocidad = function () {
        return (this.velocidad);
    };
    AutoCarrera.prototype.getCantidadAsiento = function () {
        return this.cantidadAsiento;
    };
    AutoCarrera.prototype.getCantidadPuerta = function () {
        return this.cantidadPuerta;
    };
    AutoCarrera.prototype.getCantidadCambios = function () {
        return this.cantidadCambios;
    };
    AutoCarrera.prototype.acelerar = function () {
        this.velocidad = this.velocidad + 30;
    };
    AutoCarrera.prototype.prenderApagar = function () {
        if (this.prendidoApagado) {
            return (false);
        }
        else {
            return (true);
        }
    };
    return AutoCarrera;
}());
exports["default"] = AutoCarrera;
