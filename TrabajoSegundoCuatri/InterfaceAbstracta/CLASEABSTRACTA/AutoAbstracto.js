"use strict";
exports.__esModule = true;
var AutoAbstracto = /** @class */ (function () {
    function AutoAbstracto() {
    }
    AutoAbstracto.prototype.imprimeCantidadAsiento = function () {
        console.log("La cantidad de asiento son ".concat(this.getCantidadAsiento()));
    };
    AutoAbstracto.prototype.imprimeCantidadPuerta = function () {
        console.log("La cantidad de puerta son ".concat(this.getCantidadPuerta()));
    };
    AutoAbstracto.prototype.imprimeVelocidad = function () {
        console.log("La velocidad es ".concat(this.getVelocidad()));
    };
    return AutoAbstracto;
}());
exports["default"] = AutoAbstracto;
