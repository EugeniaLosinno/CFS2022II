"use strict";
exports.__esModule = true;
var InmueblesAbstracto = /** @class */ (function () {
    function InmueblesAbstracto() {
    }
    InmueblesAbstracto.prototype.imprimeCantidadHabitacion = function () {
        console.log("La cantidad de habitabiones son ".concat(this.getCantidadHabitacion()));
    };
    InmueblesAbstracto.prototype.imprimeCantidadBanios = function () {
        console.log("La cantidad de ba\u00F1os son ".concat(this.getCantidadBanio()));
    };
    return InmueblesAbstracto;
}());
exports["default"] = InmueblesAbstracto;
