"use strict";
exports.__esModule = true;
var Techo = /** @class */ (function () {
    function Techo(perfil, cubierta) {
        this.perfil = perfil;
        this.cubierta = cubierta;
    }
    Techo.prototype.getCubierta = function () {
        return (this.cubierta);
    };
    Techo.prototype.getPerfiles = function () {
        return (this.perfil);
    };
    Techo.prototype.gsetCubierta = function (newCubierta) {
        this.cubierta = newCubierta;
    };
    Techo.prototype.setPerfil = function (newPerfil) {
        this.perfil = newPerfil;
    };
    return Techo;
}());
exports["default"] = Techo;
